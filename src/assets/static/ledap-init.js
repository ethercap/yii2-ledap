var request = function(httpOptions, suc, fail = function(data){Vue.alert(data.message);}){
    httpOptions = Object.assign({
        headers: {'X-Requested-With': 'XMLHttpRequest'},
    }, httpOptions);
    ledap.App.axios.request(httpOptions).then(function(response){
        var result = response.data; 
        if(result.code === 0) {
            suc(result);
        }else {
            fail(result);
        }
    }).catch(function(error){
        fail({
            code:1,
            message: error.message,
            data:error,
        }); 
    });
}

ledap.App.config({
    themeConfig : themeConfig,
    request : request,
    webDpConfig : {
        primaryKey: "",
        httpRequest : function(httpOptions, suc, fail) {
            ledap.App.request(httpOptions, (res) => {
                suc(res.data);
            }, (data) => {
                Vue.alert(data.message);
                fail(data);
            })
        }
    },
});

ledap.App.getTheme().addComponent({
    name : 'modal',
    props: {
        show:{
            default: false,
        },
        size:{
            type: String,
            default : ""
        }
    },
    methods:{
        close: function(){
            this.$emit("update:show",!this.show);
        },
        clickBg: function(event){
            if(event.target.getAttribute("role") === "modal") {
                this.close();
            }
        }
    },
    computed: {
        modalSize: function(){
            return this.size === "" ? "" : "modal-"+this.size;
        }
    },
    template: `<div>
        <div class="fade modal" @click="clickBg" :class="{in:show}" role="modal" tabindex="-1" :style="{display:show? 'block' : 'none'}">
            <div class="modal-dialog" :class="[modalSize]">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" @click="close">×</button>
                        <slot name="header"></slot>
                    </div>
                    <div class="modal-body">
                        <slot></slot>
                    </div>
                    <slot name="footer">
                        <div class="modal-footer">
                        </div>
                    </slot>
                </div>
            </div>
        </div>
        <div class="modal-backdrop fade in" v-if="show" @click="close"></div>
    </div>`,
});

Vue.use(Toasted, {
    duration: 5000,
    keepOnHover: true,
    iconPack : 'fontawesome',
    position: 'top-center',
});


ledap.App.getTheme().register(["modal"], Vue);
var Notify  = Vue.extend({
    template: `
<modal :show="show" :size="options.size" @update:show="val => show = val" >
    <template v-slot:header>
        <h4>{{options.title}}</h4>
    </template>
    <template v-slot:default>
        <div v-html="options.message"></div>
    </template>
    <template v-slot:footer>
        <div class="modal-footer">
            <a class="btn btn-default pull-left" v-if="options.type !== 'alert'" @click="cancelClicked">{{options.cancelBtnText}}</a>
            <span v-html="options.footer"></span>
            <a class="btn btn-primary pull-right"  @click="okClicked">{{options.okBtnText}}</a>
        </div>
    </template>
</modal>`,
    data : function(){
        return {
            show : false,
            options : {
                type : "modal",
                title : "温馨提示",
                size : 'sm',
                message : "",
                okBtnText : "确定",
                cancelBtnText : "取消",
                footer : "",
            },
        };
    },
    methods : {
        okClicked: function(event){
            this.$emit("okBtnClicked", {event: event});
            this.show = false;
        },
        cancelClicked: function(event){
            this.$emit("cancelBtnClicked", {event: event});
            this.show = false;
        },
    
    },
});

//添加全局的$alert和$confirm 
const NotifyPlugin = {
    install(Vue, options) {
        if (!options) {
            options = {};
        }
        let notifyComp = new Notify().$mount();
        document.getElementsByTagName("body")[0].appendChild(notifyComp.$el)

        var func = function(opts) {
            if(typeof opts === "string") {
                opts = {message : opts};
            }
            notifyComp.show = true;
            notifyComp.options = Object.assign(notifyComp.options, opts);
        }
    
        Vue.modal = Vue.prototype.$modal = func;

        Vue.alert = Vue.prototype.$alert = function(opts = {}, suc=function(){}){
            notifyComp.$once("okBtnClicked", suc);
            func(opts);
            notifyComp.options.type = 'alert';
        };
        Vue.confirm = Vue.prototype.$confirm = function(opts = {}, suc=function(){}, fail=function(){}){
            notifyComp.$on("okBtnClicked", function(){
                suc();
                notifyComp.$off("okBtnClicked");
                notifyComp.$off("cancelBtnClicked");
            });
            notifyComp.$on("cancelBtnClicked", function(){
                fail();
                notifyComp.$off("okBtnClicked");
                notifyComp.$off("cancelBtnClicked");
            });
            func(opts);
            notifyComp.options.type = 'confirm';
        };
    }
};
Vue.use(NotifyPlugin);


//一些全局有用的函数
window.GetParams = function() {
    const url = location.search; //获取url中"?"符后的字串
    let params = new Object();
    if (url.indexOf("?") != -1) {
        let str = url.substr(1);
        strs = str.split("&");
        for(let i = 0; i < strs.length; i ++) {
            params[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    return params;
}

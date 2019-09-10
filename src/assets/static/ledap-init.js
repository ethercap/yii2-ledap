var request = function(httpOptions, suc, fail = function(data){alert(data.message);}){
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
                alert(data.message);
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

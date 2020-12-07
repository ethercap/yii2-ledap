var request = function(httpOptions, suc, fail){
    if(!fail) {
        fail = function(data){app.$alert(data.message);}
    }
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
            ledap.App.request(httpOptions, function(res)  {
                suc(res.data);
            }, function(data) {
                app.$alert(data.message);
                fail(data);
            })
        }
    },
});

ledap.App.getTheme().addComponent({
    name : 'editable',
    props: {
        isedit : {
            type: Boolean,
            default :false,
        }
    },
    data:function(){
        return {
            edit: this.isedit,
        };
    },
    methods: {
        toggle: function(type=false){
            this.edit = type;
            this.$emit("update:isedit",this.edit);
            this.$emit('toggle', this.edit);
            if(this.edit) {
                this.$nextTick().then(function() {
                    let editslot = this.$refs.editslot;
                    let tagArr = ["input", "select", "textarea"];
                    for(let i=0; i<tagArr.length; i++) {
                        let tmp = editslot.getElementsByTagName(tagArr[i]);
                        if(tmp.length > 0) {
                            tmp[0].focus();
                            break;
                        }
                    }
                }.bind(this));
            }
        }
    },
    watch:{
        isedit:function(val){
            this.edit = val;
        },
    },
    template: '<div >' + 
        '<div v-if="edit" ref="editslot">' + 
            '<slot name="editing" :toggle="toggle" :edit="edit"></slot>' + 
        '</div>' +
        '<span v-else @click="toggle(true)">' +
            '<slot :toggle="toggle" :edit="edit"></slot>' +
        '</span>' + 
    '</div>',
});    


//添加全局的$alert和$confirm 
const MyMixin = {
    methods: {
        '$alert' : function(msg, opts){
            let options = Object.assign({
                title: '温馨提示',
                okVariant: 'success',
                okTitle : '确定',
                centered: true
            }, opts);
            if(typeof msg === 'string') {
                let _this = this;
                msg = this.$createElement({
                    data : function() {
                        return {
                            vm : _this,
                        };
                    },
                    template: '<span>'+msg+'</span>',
                });
            }
            return this.$bvModal.msgBoxOk(msg, options);
        },
        '$confirm' : function(msg, opts) {
            let options = Object.assign({
                title: '温馨提示',
                okVariant: 'success',
                okTitle : '确定',
                cancelTitle : '取消',
                centered: true
            }, opts);
            if(typeof msg === 'string') {
                let _this = this;
                msg = this.$createElement({
                    data : function() {
                        return {
                            vm : _this,
                        };
                    },
                    template: '<span>'+msg+'</span>',
                });
            }
            return this.$bvModal.msgBoxConfirm(msg, options);
        },
        '$toast' : function(msg, opts) {
            let options = Object.assign({
                title: '温馨提示',
                variant : 'success',
                solid: true
            }, opts);
            if(typeof msg === 'string') {
                let _this = this;
                msg = this.$createElement({
                    data : function() {
                        return {
                            vm : _this,
                        };
                    },
                    template: '<span>'+msg+'</span>',
                });
            }
            return this.$bvToast.toast(msg, options);
        }
    },
};
Vue.mixin(MyMixin);

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

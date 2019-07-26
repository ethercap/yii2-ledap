// 本示例采用了bootstrap, 为了适应界面展示，对默认模板进行变更。如果要求不高，可以直接使用系统默认模板
// 主题代表一个工程一整个标准的组件的主题设置，一般由UI与前端进行沟通并固化。通过主题，我们能很好地实现某个工程的组件标准化.
window.Theme = window['ledap'].Theme.getInstance({
    "baseinput" : {
         inheritAttrs: false,
        template : `<component :is="tag" :class="{'has-error':showError}">
            <label v-bind="labelOptions" class="col-sm-2 control-label">{{showLabel}}{{model.isRequired(attr) ? '*' : ''}}</label>
            <div class="col-sm-10">
                <input v-bind="inputOptions" class="form-control" :name="attr" :value="showValue" :placeholder="showHint" v-on="inputListeners"/>
                <span v-show="showError"  class="help-block">{{showError}}</span>
            </div>
        </component>`,
    },
    "dropdown" : {
        template : `<component :is="tag" :class="{'has-error':showError}">
            <label v-bind="labelOptions" class="col-sm-2 control-label">{{showLabel}}</label>
            <div class="col-sm-10">
                <select v-bind="inputOptions" v-on="inputListeners" class="form-control">
                    <option v-for="(val,key) in model.getValidatorData(attr, 'dict', 'list', {})" :value="key" :selected="key === model[attr]">{{val}}</option>
                </select>
                <span v-show="showError"  class="help-block">{{showError}}</span>
            </div>
        </component>`
    },
    "radiogroup" : {
        template : `<component :is="tag" :class="{'has-error':showError}">
    <label v-bind="labelOptions" class="col-sm-2 control-label">{{showLabel}}</label>
    <group v-bind="inputOptions" class="checkbox col-sm-10"  :max="dictOption.max" :excludes="dictOption.excludes" :init-value="model[attr]" :multiple="dictOption.multiple" @change="groupChange">
        <radio  v-for="(val,key) in dictOption.list" :disabled="dictOption.excludes.indexOf(key) > -1 ? true : false" :data-key="key" :key="key"> {{val}}</radio>
    </group>
    <span v-show="showError" class="help-block">{{showError}}</span>
</component>`,
    }
});


// 我们也可以添加自己的组件，如下我们添加了一个叫buttongroup的组件，继承自checkboxgroup
window.Theme.addComponent({
    name : "buttongroup",
    template : `<component :is="tag" :class="{'has-error':showError}">
        <label v-bind="labelOptions" class="col-sm-2 control-label">{{showLabel}}</label>
        <div class="col-sm-10">
            <group v-bind="inputOptions" class="btn-group"  :max="dictOption.max" :excludes="dictOption.excludes" :init-value="model[attr]" :multiple="dictOption.multiple" @change="groupChange">
                <tab class="btn btn-default" :canClose="true"  v-for="(val,key) in dictOption.list" :disabled="dictOption.excludes.indexOf(key) > -1 ? true : false" :data-key="key" :key="key"> {{val}}</tab>
            </group>
            <span v-show="showError" class="help-block">{{showError}}</span>
        </div>
    </component>`,
    "depends" : ['tab', 'group'],
}, 'checkboxgroup');

window.ledap.getWebDp = function(config){
    config = Object.assign({
        httpRequest : function(httpOptions, suc, fail) {
            ledap.request(httpOptions, suc, (data) => {
                alert(data.message);
                fail(data);
            })
        },
    },config);
    return new window.ledap.WebDataProvider(config);
}

window.ledap.request = function(httpOptions, suc, fail = function(data){alert(data.message);}){
    httpOptions = Object.assign({
        headers: {'X-Requested-With': 'XMLHttpRequest'},
    }, httpOptions);
    axios.request(httpOptions).then(function(response){
        var result = response.data; 
        if(result.code === 0) {
            suc(result.data);
        }else {
            fail(result.data);
        }
    }).catch(function(error){
        fail({
            code:1,
            message: error.message,
            data:error,
        }); 
    });
}

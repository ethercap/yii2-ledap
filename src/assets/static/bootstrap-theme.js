// 本示例采用了bootstrap, 为了适应界面展示，对默认模板进行变更。如果要求不高，可以直接使用系统默认模板
// 主题代表一个工程一整个标准的组件的主题设置，一般由UI与前端进行沟通并固化。通过主题，我们能很好地实现某个工程的组件标准化.
var themeConfig = {
    "form-item" : {
        template:`<component :is="tag" :class="{'has-error':showError}">
            <slot name="label" :model="model" :attr="attr">
                <label class="col-sm-2 control-label"> {{model.getAttributeLabel(attr)}}{{model.isRequired(attr) ? '*' : ''}}</label>
            </slot>
            <div class="col-sm-10">
                <slot :model="model" :attr="attr" :validate="validate" :inputListeners="inputListeners">
                    <input class="form-control" :name="attr" :value="model[attr]" :placeholder="model.getAttributeHint(attr)" v-on="inputListeners" />
                </slot>
                <slot name="error" :model="model" :attr="attr" :showError="showError">
                    <p v-show="showError" class="help-block">{{showError}}</p>
                </slot>
            </div>
        </component>`,
    },
    "baseinput" : {
        template : `<input class="form-control" :name="attr" :value="model[attr]" :placeholder="model.getAttributeHint(attr)" v-on="inputListeners" />`,
    },
    "dropdown" : {
        template: `<select class="form-control" v-on="inputListeners">
            <option v-for="(val,key) in model.getValidatorData(attr, 'dict', 'list', {})" :value="key" :selected="key === model[attr]">{{val}}</option>
        </select>`,
    },
    "groupinput" : {
        template: `<group class="btn-group" :max="dictOption.max" :excludes="dictOption.excludes" :init-value="model[attr]" :multiple="dictOption.multiple" @change="groupChange">
            <slot name="default" v-for="(val,key) in dictOption.list" :data-key="key" :value="val" :disabled="dictOption.excludes.indexOf(key) > -1 ? true : false">
                <tab class="btn btn-default" :disabled="dictOption.excludes.indexOf(key) > -1 ? true : false" :data-key="key" :key="key"> {{val}}</tab>
            </slot>
        </group>`,
    },
    searchinput: {
        template:
    `<div style="position: relative;">
        <input class="form-control" :name="attr" :value="value" :placeholder="model.getAttributeHint(attr)" v-on="listeners" autocomplete="off">
        <ul v-show="showList" class="list-unstyled" style="position: absolute; width: 100%; border:1px solid rgb(221, 221, 221); background-color:rgb(245, 245, 245); z-index: 10;" :style="{opacity: isHide ? 0 : 1}">
            <li v-for="(model, index) in models" @mousedown="choose(model, index, $event)" style="padding: 6px 12px; cusor: default;">
                <slot :model="model" :index="index">{{model[itemName]}}</slot>
            </li>
        </ul>
    </div>`,
    },
    select2: {
        template:
`<div style="position: relative;">
    <div class="form-control" style="height:auto">
        <span v-if="multiple" v-for="model,key in selected" :key="key">
            <a class="btn btn-xs btn-default" @click="choose(model, key, $event)">{{model[itemName]}}{{'  x'}}</a>&nbsp;
        </span>
        <input :name="attr" ref="input" :value="value" :placeholder="model.getAttributeHint(attr)" v-on="listeners" autocomplete="off" style="border-width: 0px;outline-color:white">
    </div>
    <ul v-show="showList" class="list-unstyled" style="position: absolute; width: 100%; border:1px solid rgb(221, 221, 221); background-color:rgb(245, 245, 245); z-index: 10;" :style="{opacity: isHide ? 0 : 1}">
        <li v-for="(model, index) in models" @mousedown="choose(model, index, $event)" style="padding: 6px 12px; cusor: default;" :class='{"bg-success": selected.hasOwnProperty(model[keyName])}'>
            <slot name="tab" :model="model" :index="index" :isActive="selected.hasOwnProperty(model[keyName])">{{model[itemName]}}</slot>
        </li>
    </ul>
</div>`,
    },
};


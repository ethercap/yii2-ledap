// 本示例采用了bootstrap, 为了适应界面展示，对默认模板进行变更。如果要求不高，可以直接使用系统默认模板
// 主题代表一个工程一整个标准的组件的主题设置，一般由UI与前端进行沟通并固化。通过主题，我们能很好地实现某个工程的组件标准化.
var themeConfig = {
    "form-item" : {
        template:`<component :is="tag" class="form-group row">
            <slot name="label" :model="model" :attr="attr">
                <label class="col-sm-3 col-form-label text-right"> {{model.getAttributeLabel(attr)}}{{model.isRequired(attr) ? '*' : ''}}</label>
            </slot>
            <div class="col-sm-9">
                <slot :model="model" :attr="attr" :validate="validate" :inputListeners="inputListeners">
                    <input class="form-control" :name="attr" :value="model[attr]" :placeholder="model.getAttributeHint(attr)" v-on="inputListeners" />
                </slot>
                <slot name="error" :model="model" :attr="attr" :showError="showError">
                    <b-form-invalid-feedback :state="!Boolean(showError)">
                    {{showError}}
                    </b-form-invalid-feedback>
                </slot>
            </div>
        </component>`,
    },
    "baseinput" : {
        template : `<component :is="tag" class="form-control" :name="attr" :value="model[attr]" :placeholder="model.getAttributeHint(attr)" v-on="inputListeners"></component>`,
    },
    "dropdown" : {
        template: `<select class="form-control" v-on="inputListeners">
            <option v-for="key in dictOption.order" :value="key" :selected="key === model[attr]">{{dictOption.list[key]}}</option>
        </select>`,
    },
    "groupinput" : {
        template: `<group class="btn-group" :max="dictOption.max" :excludes="dictOption.excludes" :init-value="model[attr]" :multiple="dictOption.multiple" @change="groupChange">
            <slot name="default" v-for="key in dictOption.order" :data-key="key" :value="val" :disabled="dictOption.excludes.indexOf(key) > -1 ? true : false">
                <tab class="btn btn-outline-primary" :disabled="dictOption.excludes.indexOf(key) > -1 ? true : false" :data-key="key" :key="key"> {{dictOption.list[key]}}</tab>
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
       template: `<div style="position: relative;">
    <div class="form-control" style="display: flex;height:auto">
        <span v-if="multiple" v-for="model,key in selected" :key="key">
            <button class="btn btn-sm btn-light" @click="choose(model, key, $event)">{{model[itemName]}}{{'  x'}}</button>&nbsp;
        </span>
        <input :name="attr" ref="input" :value="value" :placeholder="model.getAttributeHint(attr)" v-on="listeners" autocomplete="off" style="border-width: 0px;outline-color:white;flex:1;max-width：100%;min-width:0;">
        <span v-if="!multiple && value" @click="clear" style="cursor: pointer;padding-top:3px;" class="glyphicon glyphicon-remove"></span>
    </div>
    <ul v-show="showList" class="list-unstyled" style="position: absolute; width: 100%; border:1px solid rgb(221, 221, 221); background-color:rgb(245, 245, 245); z-index: 10;" :style="{opacity: isHide ? 0 : 1}">
        <div v-if="dataProvider.isLoading" style="text-align: center; padding: 6px 0">加载中</div>
        <template v-else>
            <template v-if="models.length">
                <li v-for="(model, index) in models" @mousedown="choose(model, index, $event)" style="padding: 6px 12px; cursor: pointer;" :class='{"bg-success": selected.hasOwnProperty(model[keyName])}'>
                    <slot name="tab" :model="model" :index="index" :isActive="selected.hasOwnProperty(model[keyName])">{{model[itemName]}}</slot>
                </li>
            </template>
            <div v-else style="text-align: center; padding: 6px 0">无数据</div>
        </template>
    </ul>
</div>`,
    },
    pager:{
        template: `<div class="d-flex align-items-center">
        <slot name="total">
            <span>共<span class="text-danger">{{ dataProvider.pager.totalCount }}</span>条记录</span>
            <span style="flex:1"></span>
        </slot>
        <slot :changePage="changePage">
            <a v-show="dataProvider.pager.hasPrev()" @click="toPrev()" class="text-primary">上一页</a>
            <a v-show="dataProvider.pager.hasNext()" @click="toNext()" class="ml-10 text-primary">下一页</a>
            <span style="margin: 0 15px">第 {{ dataProvider.pager.currentPage}}/{{ dataProvider.pager.pageCount }} 页</span>
        </slot>
        <slot name="form" :changePage="changePage">
            <form @submit.prevent.stop="changePage(jumpPage)" style="display:flex;align-items:center">
                <span>跳至&nbsp;</span>
                <input type="text" v-model="jumpPage" style="width:45px;outline:0">
                <span>&nbsp;页&nbsp;</span>
                <button type="submit" class="btn btn-success" style="padding:2px 8px;border-radius: 0">跳转</button>
            </form>
        </slot>
    </div>`,
    },
};


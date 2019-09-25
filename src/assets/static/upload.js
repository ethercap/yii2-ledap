Vue.component('fileupload', VueUploadComponent);
ledap.App.getTheme().addComponent({
    name : 'upload',
    props : {
    
    },
    data : function(){
        return {};
    },
    methods : {
    
    },
    template : `<div>
    <ul>
        <li v-for="file in files">{{file.name}} - Error: {{file.error}}, Success: {{file.success}}</li>
    </ul>
    <file-upload ref="upload"
        v-model="files"
        post-action="/post.method"
        @input-file="inputFile"
        @input-filter="inputFilter"
    >
        上传文件
    </file-upload>
    <button v-show="!$refs.upload || !$refs.upload.active" @click.prevent="$refs.upload.active = true" type="button">Start upload</button>
    <button v-show="$refs.upload && $refs.upload.active" @click.prevent="$refs.upload.active = false" type="button">Stop upload</button>
</div>    
`,
}, {});

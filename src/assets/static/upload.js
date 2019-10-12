ledap.App.getTheme().addComponent({
    name: 'uploader',
    components: {
        'file-upload': VueUploadComponent,
    },
    props: {
        postAction: {
            type: String,
            required: true
        },
        value: Array,
        // 下面为可选属性
        multiple: {
            type: Boolean,
            default: true
        },
        headers: Object,
        data: Object,
        accept: {
            type: String,
            default: 'image/*,application/pdf'
        },
        size: {
            type: Number,
            default: 1024 * 1024 * 10
        },
        minSize: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            files: [],
            name: 'upload',
            timeout: 1000 * 15,
            maximum: 10,
            thread: 3,
            drop: '.upload',
            dropDirectory: true,
            uploadAuto: true,
            directory: false,
            addIndex: false,
            initialValue: this.value || [],
            initialFlag: this.value ? true : false
        }
    },
    watch: {
        value: function(newValue) {
            if (this.initialFlag) return;
            this.initialValue = newValue;
            this.initialFlag = true;
        }
    },
    methods: {
        formatSize(size) {
            let sizeArr = ["", "K", "M", "G", "T", "P"];
            let fsize = size;
            let i = 0;
            for (i = 0; i < sizeArr.length - 1; i++) {
                if (fsize > 1024) {
                    fsize = Math.round(fsize * 100 / 1024) / 100;
                } else {
                    break;
                }
            }
            return fsize + sizeArr[i];
        },
        inputFilter(newFile, oldFile, prevent) {
            if (newFile && !oldFile) {
                // 等待初始化
                if (!this.initialFlag) {
                    alert('initial failed');
                    return prevent();
                }
                // 过滤系统文件 和隐藏文件
                if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
                    alert('Unsupported file type');
                    return prevent();
                }
                // 过滤 php html js 文件
                if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
                    alert('Unsupported file type');
                    return prevent();
                }
                // 去重
                this.files.forEach(file => {
                    if (file.name === newFile.name && this.multiple) {
                        alert('Duplicate file');
                        return prevent();
                    }
                });
            }
            if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
                // 创建 blob 字段
                newFile.blob = ''
                let URL = window.URL || window.webkitURL
                if (URL && URL.createObjectURL) {
                    newFile.blob = URL.createObjectURL(newFile.file)
                }
                // 缩略图
                newFile.thumb = ''
                if (newFile.blob && newFile.type.substr(0, 6) === 'image/') {
                    newFile.thumb = newFile.blob
                }
            }
        },
        // add, update, remove File Event
        inputFile(newFile, oldFile) {
            // update
            if (newFile && oldFile) {
                if (newFile.active && !oldFile.active) {
                    // beforeSend
                    // min size
                    if (newFile.size >= 0 && this.minSize > 0 && newFile.size < this.minSize) {
                        this.$refs.upload.update(newFile, { error: 'size' });
                    }
                }
                // success
                if (newFile.success !== oldFile.success) {
                    this.updateValue();
                }
            }
            // remove file
            if (!newFile && oldFile) {
                this.updateValue();
            }
            // Automatically activate upload
            if (Boolean(newFile) !== Boolean(oldFile) || oldFile.error !== newFile.error) {
                if (this.uploadAuto && !this.$refs.upload.active) {
                    this.$refs.upload.active = true;
                }
            }
        },
        updateValue() {
            var files = this.files.map(function(item, index) {
                var data = item.response.data;
                return {
                    name: data.name,
                    url: data.url
                };
            });
            if (this.multiple) {
                files = [].concat(this.initialValue, files);
            } else {
                this.initialValue = [];
            }
            this.$emit('input', files);
        },
        deleteInitialValue(index) {
            this.initialValue.splice(index, 1);
            this.updateValue();
        }
    },

    template: `
<div class="example-full">
    <div class="upload">
        <div class="panel" :class="[($refs.upload && $refs.upload.dropActive) ? 'panel-primary' : 'panel-default']">
            <div class="panel-body">
                <div class="text-center p-5">
                    <div class="row">
                        <div class="col-sm-4 col-md-4" v-for="item, index in initialValue" :key="index">
                            <div class="thumbnail" style="height:200px;overflow-y:auto">
                                <div style="height: 50px;display:flex;align-items: center;justify-content: center;">
                                    <img v-if="item.thumb" :src="item.thumb" :alt="item.name" style="height: 100%">
                                    <span v-else >No Image</span>
                                </div>
                                <div style="overflow-x: auto;height: 88px;margin-top:52px;white-space:nowrap">
                                    <p>{{item.name}}</p>
                                    <div class="actions">
                                        <span class="glyphicon glyphicon-trash" @click="deleteInitialValue(index)"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 col-md-4" v-for="file, index in files" :key="file.id">
                            <div class="thumbnail" style="height:200px;overflow-y:auto">
                                <div style="height: 50px;display:flex;align-items: center;justify-content: center;">
                                    <img v-if="file.thumb" :src="file.thumb" :alt="file.name" style="height: 100%;">
                                    <span v-else>No Image</span>
                                </div>
                                <div class="caption">
                                    <div class="progress" style="margin-bottom:5px;">
                                        <div class="progress-bar progress-bar-success" :class="{'progress-bar-animated': file.active}" role="progressbar" :style="{width: file.progress + '%'}" style="min-width:1.5em">{{parseInt(file.progress)}}%</div>
                                    </div>
                                    <div style="overflow-x: auto;height: 95px;white-space:nowrap">
                                        <div style="margin-top:3px">{{file.name}}</div>
                                        <div style="margin-top:3px">{{formatSize(file.progress*file.size/100)}}
                                        b/{{formatSize(file.size)}}b</div>
                                        <div class="actions" style="margin-top: 3px">
                                            <span class="glyphicon glyphicon-off" v-if="file.active" @click.prevent="$refs.upload.update(file, {active: false, error:'cancel'})"></span>
                                            <span class="glyphicon glyphicon-refresh" v-if="file.error && file.error !== 'compressing' && $refs.upload.features.html5" @click.prevent="$refs.upload.update(file, {active: true, error: '', progress: '0.00'})"></span>
                                            <span class="glyphicon glyphicon-trash"  @click.prevent="$refs.upload.remove(file)"></span>
                                        </div>
                                        <div v-if="file.error" class="text-danger" style="margin-top:3px">Error: {{file.error}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4>拖动文件到此处上传</h4>
                </div>
            </div>
        </div>
    </div>
    <div class="example-foorer">
        <file-upload
          class="btn btn-primary dropdown-toggle"
          v-model="files"
          :post-action="postAction"
          :multiple="multiple"
          :headers="headers"
          :data="data"
          :accept="accept"
          :directory="directory"
          :size="size"
          :thread="thread"
          :drop="drop"
          :drop-directory="dropDirectory"
          :add-index="addIndex"
          @input-filter="inputFilter"
          @input-file="inputFile"
          ref="upload">
          <i class="fa fa-plus"></i>
          选择文件
        </file-upload>
    </div>
</div>
`,
});
ledap.App.register("uploader", Vue);
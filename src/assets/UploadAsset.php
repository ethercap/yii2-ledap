<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

class UploadAsset extends AssetBundle
{
    public $sourcePath = __DIR__.'/static';
    public $js = [
        '//unpkg.com/vue-upload-component@2.8.20/dist/vue-upload-component.js',
        'upload.js',
    ];
    public $depends = [
        '\ethercap\ledap\assets\AppAsset',
    ];
}

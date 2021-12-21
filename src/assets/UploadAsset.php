<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

class UploadAsset extends AssetBundle
{
    public $sourcePath = __DIR__.'/static';
    public $js = [
        'npm/vue-upload-component@2.8.20/vue-upload-component.js',
        'upload.js',
    ];
    public $depends = [
        '\ethercap\ledap\assets\LedapAsset',
    ];
}

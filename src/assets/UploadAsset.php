<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

class UploadAsset extends AssetBundle
{
    public $sourcePath = __DIR__.'/static';
    public $js = [
        '//cdn.jsdelivr.net/npm/vue-upload-component@2.8.20/dist/vue-upload-component.'. (YII_DEBUG ? '' : 'min') .'js',
        'upload.js',
    ];
    public $depends = [
        '\ethercap\ledap\assets\LedapAsset',
    ];
}

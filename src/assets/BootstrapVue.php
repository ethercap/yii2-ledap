<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

class BootstrapVue extends AssetBundle
{
    public $sourcePath = __DIR__.'/static/lib/bootstrapvue/';
    public $js = [
        'bootstrap-vue.min.js',
    ];
    public $css = [
        'bootstrap.min.css',
        'bootstrap-vue.min.css',
    ];
    public $depends = [
        'ethercap\ledap\assets\VueAsset',
    ];
}

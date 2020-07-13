<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

class BootstrapVue extends AssetBundle
{
    public $sourcePath = '@npm/bootstrap-vue/dist';

    public $js = [
        YII_DEBUG ? 'bootstrap-vue.js' : 'bootstrap-vue.min.js',
    ];
    public $css = [
        YII_DEBUG ? 'bootstrap-vue.css' : 'bootstrap-vue.min.css',
    ];
    public $depends = [
        '\ethercap\ledap\assets\VueAsset',
        '\ethercap\ledap\assets\PolyfillAsset',
        '\ethercap\ledap\assets\BootstrapAsset',
    ];
}

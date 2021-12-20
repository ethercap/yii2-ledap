<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

class BootstrapVue extends AssetBundle
{
    public $sourcePath = __DIR__ . '/static/npm/bootstrap-vue@2.11.0';

    public $js = [
        'bootstrap-vue.min.js',
    ];
    public $css = [
        'bootstrap-vue.min.css',
    ];
    public $depends = [
        '\ethercap\ledap\assets\VueAsset',
        '\ethercap\ledap\assets\PolyfillAsset',
        '\ethercap\ledap\assets\BootstrapAsset',
    ];
}

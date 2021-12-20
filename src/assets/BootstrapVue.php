<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

class BootstrapVue extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $sourcePath = __DIR__ . '/static/npm/ledap-vue-bootstrap@0.0.4';

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

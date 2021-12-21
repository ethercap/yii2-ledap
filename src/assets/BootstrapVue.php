<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

class BootstrapVue extends AssetBundle
{
    public $sourcePath = __DIR__ . '/static/npm/bootstrap-vue@2.11.0';

    public $js = [
        'bootstrap-vue' . (YII_DEBUG ? '' : '.min') . '.js',
    ];
    public $css = [
        'bootstrap-vue' . (YII_DEBUG ? '' : '.min') . '.css',
    ];
    public $depends = [
        '\ethercap\ledap\assets\VueAsset',
        '\ethercap\ledap\assets\PolyfillAsset',
        '\ethercap\ledap\assets\BootstrapAsset',
    ];
}

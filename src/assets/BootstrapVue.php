<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

class BootstrapVue extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';

    public $js = [
        '//cdn.jsdelivr.net/npm/bootstrap-vue@2.11.0/dist/bootstrap-vue' . (YII_DEBUG ? '' : '.min') . '.js',
    ];
    public $css = [
        '//cdn.jsdelivr.net/npm/bootstrap-vue@2.11.0/dist/bootstrap-vue' . (YII_DEBUG ? '' : '.min') . '.css',
    ];
    public $depends = [
        '\ethercap\ledap\assets\VueAsset',
        '\ethercap\ledap\assets\PolyfillAsset',
        '\ethercap\ledap\assets\BootstrapAsset',
    ];
}

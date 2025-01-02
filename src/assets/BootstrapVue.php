<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

class BootstrapVue extends AssetBundle
{
    public $js = [
        '//cdn.jsdelivr.net/npm/bootstrap-vue@2.23.1/dist/bootstrap-vue.min.js',
    ];
    public $css = [
        '//cdn.jsdelivr.net/npm/bootstrap-vue@2.23.1/dist/bootstrap-vue.min.css',
    ];
    public $depends = [
        '\ethercap\ledap\assets\VueAsset',
        '\ethercap\ledap\assets\BootstrapAsset',
    ];
}

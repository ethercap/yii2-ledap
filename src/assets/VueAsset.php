<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

class VueAsset extends AssetBundle
{
    public $sourcePath = __DIR__ . '/static/npm/vue@2.6.14';
    public $css = [
    ];

    public $js = [
        YII_DEBUG ? 'vue.js' : 'vue.min.js',
    ];
    public $depends = [
    ];
}

<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

class VueAsset extends AssetBundle
{
    public $css = [
    ];

    public $js = [
        YII_DEBUG ? '//cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js' : '//cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js',
    ];
    public $depends = [
    ];
}

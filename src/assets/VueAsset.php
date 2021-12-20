<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

class VueAsset extends AssetBundle
{
    public $sourcePath = __DIR__ . '/static';
    public $css = [
    ];

    public $js = [
        'npm/vue@2.6.14/' . (YII_DEBUG ? 'vue.js' : 'vue.min.js'),
    ];
    public $depends = [
    ];
}

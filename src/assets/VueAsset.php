<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

class VueAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';

    public $css = [
    ];

    public $js = [
        YII_DEBUG ? '//cdn.jsdelivr.net/npm/vue@2/dist/vue.js' : '//cdn.jsdelivr.net/npm/vue@2',
    ];
    public $depends = [
    ];
}

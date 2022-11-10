<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

/*
 * 颜色选择控件
 * 详情参照 https://github.com/xiaokaike/vue-color
 **/
class ColorPickerAsset extends AssetBundle
{
    public $sourcePath = __DIR__.'/static';
    public $js = [
        YII_DEBUG ? 'https://cdn.jsdelivr.net/npm/vue-color@2.8.1/dist/vue-color.min.js' : 'https://cdn.jsdelivr.net/npm/vue-color@2.8.1/dist/vue-color.js',
    ];
    public $depends = [
        '\ethercap\ledap\assets\LedapAsset',
    ];
}

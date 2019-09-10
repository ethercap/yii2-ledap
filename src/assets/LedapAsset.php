<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

class LedapAsset extends AssetBundle
{
    public $sourcePath = __DIR__;
    public $js = [
        YII_DEBUG ? './static/lib/ledap.js' : './static/lib/ledap.min.js',
        'https://unpkg.com/vue-toasted',
    ];
    public $depends = [
        '\ethercap\ledap\assets\VueAsset',
    ];
}

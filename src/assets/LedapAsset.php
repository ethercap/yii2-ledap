<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

class LedapAsset extends AssetBundle
{
    public $sourcePath = __DIR__.'/static';
    public $js = [
        YII_DEBUG ? 'lib/ledap.js' : 'lib/ledap.min.js',
        'lib/vue-toasted.js',
    ];
    public $depends = [
        '\ethercap\ledap\assets\VueAsset',
    ];
}

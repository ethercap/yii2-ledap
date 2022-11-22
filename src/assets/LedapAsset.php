<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

class LedapAsset extends AssetBundle
{
    public $js = [
        '//cdn.jsdelivr.net/npm/ledap@0.1.10/dist/ledap'. (YII_DEBUG ? '' : '.min') .'.js',
    ];
    public $depends = [
        '\ethercap\ledap\assets\VueAsset',
    ];
}

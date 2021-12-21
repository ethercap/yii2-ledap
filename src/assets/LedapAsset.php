<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

class LedapAsset extends AssetBundle
{
    public $sourcePath = __DIR__ . '/static/npm/ledap@0.1.10';

    public $js = [
        YII_DEBUG ? 'ledap.js' : 'ledap.min.js',
    ];
    public $depends = [
        '\ethercap\ledap\assets\VueAsset',
    ];
}

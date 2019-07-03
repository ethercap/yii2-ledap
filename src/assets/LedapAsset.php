<?php

namespace ethercap\ledap;

use yii\web\AssetBundle;

class LedapAsset extends AssetBundle
{
    public $sourcePath = '@npm/ledap/dist';
    public $css = [
        'index.js',
    ];
    public $depends = [
        'ethercap\ledap\VueAsset',
    ];
}

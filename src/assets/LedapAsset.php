<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

class LedapAsset extends AssetBundle
{
    public $sourcePath = '@npm/ledap/dist';
    public $js = [
        'index.js',
    ];
    public $depends = [
        '\ethercap\ledap\assets\VueAsset',
    ];
}

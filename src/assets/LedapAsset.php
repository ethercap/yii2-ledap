<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

class LedapAsset extends AssetBundle
{
    public $sourcePath = __DIR__ . '/static';

    public $js = [
        'npm/ledap@0.1.10/ledap.min.js',
    ];
    public $depends = [
        '\ethercap\ledap\assets\VueAsset',
    ];
}

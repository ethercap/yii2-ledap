<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

class LedapAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $sourcePath = __DIR__ . '/static/npm/ledap@0.1.10';

    public $js = [
        'ledap.min.js',
    ];
    public $depends = [
        '\ethercap\ledap\assets\VueAsset',
    ];
}

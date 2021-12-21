<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

class FontAwesomeAsset extends AssetBundle
{
    public $sourcePath = __DIR__ . '/static/npm';

    public $css = [
        'fontawesome-free@5.15.4/css/all.min.css',
        'font-awesome@4.7.0/css/font-awesome.min.css',
    ];
    public $js = [
    ];
    public $depends = [
    ];
}

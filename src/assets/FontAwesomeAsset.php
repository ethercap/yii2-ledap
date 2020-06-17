<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

class FontAwesomeAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';

    public $css = [
        '//cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.13.0/css/all.min.css',
        '//cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css',
    ];
    public $js = [
    ];
    public $depends = [
    ];
}

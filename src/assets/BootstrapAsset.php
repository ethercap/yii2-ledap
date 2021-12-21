<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

class BootstrapAsset extends AssetBundle
{

    public $sourcePath = __DIR__ . '/static/npm/bootstrap@4.4.1';

    public $js = [
    ];
    public $css = [
        'css/bootstrap.min.css',
    ];
    public $depends = [
    ];
}

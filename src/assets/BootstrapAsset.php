<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

class BootstrapAsset extends AssetBundle
{

    public $sourcePath = __DIR__ . '/static';

    public $js = [
    ];
    public $css = [
        'npm/bootstrap@4.4.1/css/bootstrap.min.css',
    ];
    public $depends = [
    ];
}

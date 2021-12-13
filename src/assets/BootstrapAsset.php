<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

class BootstrapAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';

    public $js = [
    ];
    public $css = [
        '//cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap' . (YII_DEBUG ? '' : '.min') . '.css',
    ];
    public $depends = [
    ];
}

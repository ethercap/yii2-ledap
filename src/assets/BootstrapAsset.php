<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

class BootstrapAsset extends AssetBundle
{
    public $sourcePath = "@npm/bootstrap/dist";//__DIR__.'/static/lib/bootstrapvue/';
    public $js = [
    ];
    public $css = [
        YII_DEBUG ? 'css/bootstrap.css' : 'css/bootstrap.min.css',
    ];
    public $depends = [
    ];
}

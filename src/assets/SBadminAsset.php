<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

/**
 * Main frontend application asset bundle.
 **/
class SBadminAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';

    public $css = [
        '//cdn.jsdelivr.net/npm/startbootstrap-sb-admin-2@4.0.7/css/sb-admin-2.min.css',
    ];
    public $js = [
    ];
    public $depends = [
        '\ethercap\ledap\assets\FontAwesomeAsset',
    ];
}

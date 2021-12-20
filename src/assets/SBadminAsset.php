<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

/**
 * Main frontend application asset bundle.
 **/
class SBadminAsset extends AssetBundle
{
    public $sourcePath = __DIR__ . '/static/npm/startbootstrap-sb-admin-2@4.0.7';

    public $css = [
        'css/sb-admin-2.min.css',
    ];
    public $js = [
    ];
    public $depends = [
        '\ethercap\ledap\assets\FontAwesomeAsset',
    ];
}

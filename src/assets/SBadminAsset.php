<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

/**
 * Main frontend application asset bundle.
 * sb-admin bootstrap模板
 * */
class SBadminAsset extends AssetBundle
{
    public $css = [
        '//cdn.jsdelivr.net/npm/startbootstrap-sb-admin-2@4.1.4/css/sb-admin-2.css',
    ];
    public $js = [
    ];
    public $depends = [
        '\ethercap\ledap\assets\FontAwesomeAsset',
    ];
}

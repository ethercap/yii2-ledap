<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

/**
 * @author Lishipeng <lspbupt@sina.com>
 * @since 1.0
 */
class AppAsset extends AssetBundle
{
    public $sourcePath = __DIR__;
    public $css = [];
    public $js = [
        './static/ledap-init.js',
    ];
    public $depends = [
        '\ethercap\ledap\assets\BootstrapTheme',
    ];
}

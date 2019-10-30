<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

/**
 * @author Lishipeng <lspbupt@sina.com>
 * @since 1.0
 */
class AppAsset extends AssetBundle
{
    public $sourcePath = __DIR__.'/static';
    public $css = [];
    public $js = [
        'ledap-init.js',
    ];
    public $depends = [
        '\ethercap\ledap\assets\BootstrapTheme',
        'rmrevin\yii\fontawesome\AssetBundle',
    ];
}

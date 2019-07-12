<?php

namespace ethercap\ledap;

use yii\web\AssetBundle;

/**
 * @author Lishipeng <lspbupt@sina.com>
 * @since 1.0
 */
class BootstrapTheme extends AssetBundle
{
    public $sourcePath = __DIR__;
    public $js = [
        './static/bootstrap-theme.js',
    ];
    public $depends = [
        '\ethercap\ledap\LedapAsset',
    ];
}

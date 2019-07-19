<?php

namespace ethercap\ledap\assets;

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
        'https://unpkg.com/axios/dist/axios.min.js',
    ];
    public $depends = [
        '\ethercap\ledap\assets\LedapAsset',
        '\yii\bootstrap\BootstrapAsset',
    ];
}

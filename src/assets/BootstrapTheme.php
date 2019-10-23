<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

/**
 * @author Lishipeng <lspbupt@sina.com>
 * @since 1.0
 */
class BootstrapTheme extends AssetBundle
{
    public $sourcePath = __DIR__.'/static';
    public $css = [
        'bootstrap-theme.css',
    ];
    public $js = [
        'bootstrap-theme.js',
    ];
    public $depends = [
        '\ethercap\ledap\assets\LedapAsset',
        '\ethercap\ledap\assets\BootstrapVue',
    ];
}

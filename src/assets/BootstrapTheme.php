<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

/**
 * @author Lishipeng <lspbupt@sina.com>
 * @since 1.0
 */
class BootstrapTheme extends AssetBundle
{
    public $sourcePath = "@npm/ledap-vue-bootstrap/lib";
    public $css = [
        'ledap-vue-bootstrap.css',
    ];
    public $js = [
        'ledap-vue-bootstrap.umd.min.js',
    ];
    public $depends = [
        '\ethercap\ledap\assets\LedapAsset',
        '\ethercap\ledap\assets\BootstrapVue',
    ];
}

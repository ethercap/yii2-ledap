<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

/**
 * @author Lishipeng <lspbupt@sina.com>
 * @since 1.0
 */
class BootstrapTheme extends AssetBundle
{
    public $sourcePath = __DIR__ . '/static';

    public $css = [
        'npm/ledap-vue-bootstrap@0.0.4/ledap-vue-bootstrap.css',
    ];
    public $js = [
        'npm/ledap-vue-bootstrap@0.0.4/ledap-vue-bootstrap.umd.min.js',
    ];
    public $depends = [
        '\ethercap\ledap\assets\LedapAsset',
        '\ethercap\ledap\assets\BootstrapVue',
    ];
}

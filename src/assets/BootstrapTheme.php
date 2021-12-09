<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

/**
 * @author Lishipeng <lspbupt@sina.com>
 * @since 1.0
 */
class BootstrapTheme extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        '//cdn.jsdelivr.net/npm/ledap-vue-bootstrap@0.0.4/lib/ledap-vue-bootstrap.css',
    ];
    public $js = [
        '//cdn.jsdelivr.net/npm/ledap-vue-bootstrap@0.0.4/lib/ledap-vue-bootstrap.umd' . (YII_DEBUG ? '' : '.min') . '.js',
    ];
    public $depends = [
        '\ethercap\ledap\assets\LedapAsset',
        '\ethercap\ledap\assets\BootstrapVue',
    ];
}

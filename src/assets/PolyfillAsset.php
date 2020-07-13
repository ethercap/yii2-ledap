<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

class PolyfillAsset extends AssetBundle
{
    public $sourcePath = '@npm/bootstrap-vue/dist';

    public $js = [
        '//polyfill.io/v3/polyfill.js?features=es5,es6,es7&flags=gated',
    ];
    public $css = [
    ];
    public $depends = [
    ];
}

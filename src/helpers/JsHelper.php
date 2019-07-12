<?php

namespace ethercap\ledap\helpers;

use Yii;

class JsHelper
{
    public static function register($view, $option = [], $key = null)
    {
        $url = $option['url'] ?? Yii::$app->request->getUrl();
        $base = $option['base'] ?? '/js';
        $path = $base.$url.'.js';
        unset($option['url']);
        unset($option['base']);
        empty($option['depends']) && $option['depends'] = [\ethercap\ledap\LedapAsset::className()];
        $view->registerJsFile($path, $option, $key);
    }
}

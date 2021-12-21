<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

class DatePickerAsset extends AssetBundle
{
    public $sourcePath = __DIR__.'/static/npm/vue2-datepicker@2.12.0';
    public $js = [
        'vue2-datepicker.js',
    ];
    public $depends = [
        '\ethercap\ledap\assets\VueAsset',
    ];
}

<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

class DatePickerAsset extends AssetBundle
{
    public $js = [
        '//cdn.jsdelivr.net/npm/vue2-datepicker@3.11.0/index.min.js',
    ];
    public $depends = [
        '\ethercap\ledap\assets\VueAsset',
    ];
}

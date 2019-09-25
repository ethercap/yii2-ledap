<?php

namespace ethercap\ledap\assets;

use yii\web\AssetBundle;

class DatePickerAsset extends AssetBundle
{
    public $sourcePath = __DIR__.'/static';
    public $js = [
        'https://unpkg.com/vue2-datepicker@2.12.0/lib/index.js',
    ];
    public $depends = [
        '\ethercap\ledap\assets\VueAsset',
    ];
}

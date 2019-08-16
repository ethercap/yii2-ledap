<?php

namespace ethercap\ledap;

use Yii;
use yii\base\Application;
use yii\base\BootstrapInterface;
use ethercap\ledap\gii\Generator;

/**
 * @author lishipeng <buptlsp@sina.com>
 */
class Bootstrap implements BootstrapInterface
{
    /**
     * Bootstrap method to be called during application bootstrap stage.
     *
     * @param Application $app the application currently running
     */
    public function bootstrap($app)
    {
        if ($app->hasModule('gii')) {
            $config = [
                'ledapCrud' => [
                    'class' => Generator::class,
                    'templates' => [
                        'default' => '@ethercap/ledap/gii/default',
                    ],
                ],
            ];
            $app->getModule('gii')->generators = array_merge($app->getModule('gii')->generators, $config);
        }
    }
}

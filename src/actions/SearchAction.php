<?php

namespace ethercap\ledap\actions;

use Yii;
use yii\base\Action;
use yii\base\InvalidConfigException;
use yii\caching\Cache;
use ethercap\common\helpers\StringHelper;
use ethercap\ledap\models\SearchModel;

class SearchAction extends Action
{
    //可为空
    public $searchModel = [
        'class' => 'ethercap\ledap\models\SearchModel',
    ];
    // 必须配置processQuery
    public $processQuery;
    // dataConfig
    public $dataConfig = [
        'id',
        'text',
    ];

    public $cache = 'cache';
    // 默认不开启cache
    public $enableCache = false;

    // 默认缓存时间 5min足矣, 因为只是search
    public $cacheTime = 300;
    public $cachePrefix;

    public function init()
    {
        parent::init();
        //判断是否配置
        if (empty($this->processQuery)) {
            throw new InvalidConfigException('请配置processQuery');
        }
    }

    /**
     * Runs the action.
     */
    public function run()
    {
        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        $params = Yii::$app->request->queryParams;
        $searchModel = $this->getSearchModel();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams, $this->processQuery);

        $key = $this->getKey($params);
        $this->setCachePrefix();
        $this->enableCache && $data = $this->cache->get($key);
        if (empty($data)) {
            $data = $this->controller->renderApi('@ethercap/ledap/views/search.api', [
                'searchModel' => $searchModel,
                'dataProvider' => $dataProvider,
                'dataConfig' => $this->dataConfig,
            ]);
        }
        $this->enableCache && $this->cache->set($key, $data, $this->cacheTime);
        return $data;
    }

    public function getSearchModel()
    {
        $this->searchModel = Yii::createObject($this->searchModel);
        return $this->searchModel;
    }

    public function getKey($params)
    {
        $origin = md5(json_encode($params));
        return $this->cachePrefix . $origin;
    }

    public function setCachePrefix()
    {
        empty($this->cachePrefix) && $this->cachePrefix = StringHelper::getUniqueActionId();
    }
}

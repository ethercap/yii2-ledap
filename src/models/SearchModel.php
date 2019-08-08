<?php

namespace ethercap\ledap\models;

use yii\helpers\ArrayHelper;
use yii\base\Model;
use yii\data\ActiveDataProvider;

class SearchModel extends Model
{
    public $id;
    public $keyword;

    public $idName = 'id';
    public $keyName = 'keyword';

    public function rules()
    {
        return [
            ['id', 'safe'],
            ['keyword', 'string'],
        ];
    }

    public function search($params, $callback)
    {
        $arr = [
            'id' => ArrayHelper::getValue($params, $this->idName, []),
            'keyword' => ArrayHelper::getValue($params, $this->keyName, ''),
        ];
        $this->load($arr, '');
        $query = $callback($this);
        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);
        return $dataProvider;
    }
}

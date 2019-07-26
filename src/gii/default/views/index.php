<?php

use yii\helpers\Inflector;
use yii\helpers\StringHelper;

/* @var $this yii\web\View */
/* @var $generator yii\gii\generators\crud\Generator */

$urlParams = $generator->generateUrlParams();
$nameAttribute = $generator->getNameAttribute();

echo "<?php\n";
?>

use yii\helpers\Html;
use <?= $generator->indexWidgetType === 'grid' ? 'yii\\grid\\GridView' : 'yii\\widgets\\ListView' ?>;

/* @var $this yii\web\View */
<?= !empty($generator->searchModelClass) ? '/* @var $searchModel ' . ltrim($generator->searchModelClass, '\\') . " */\n" : '' ?>
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = <?= $generator->generateString(Inflector::pluralize(Inflector::camel2words(StringHelper::basename($generator->modelClass)))) ?>;
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="<?= Inflector::camel2id(StringHelper::basename($generator->modelClass)) ?>-index" id="app">
<?php if (!empty($generator->searchModelClass)): ?>
    <div class="panel panel-default staff-list">
        <div class="panel-body">
            <form>
<?php
$count = 0;
foreach ($generator->getColumnNames() as $name) {
    if (++$count < 6) {
        echo "                <div class=\"col-sm-4\">\n";
        echo "                    <baseinput class=\"form-group\" :model=\"dp.searchModel\" :attr=\"'" . $name . "'\"></baseinput>\n";
        echo "                </div>\n";
    }
}
?>
                <div class="form-group col-sm-4">
                    <a class="btn btn-primary" @click="refresh()">查询</a>
                </div>
            </form>
        </div>
    </div>

<?php endif; ?>

    <p class="text-right">
<?php $urlPrefix = $generator->getControllerID(); ?>
        <a class="btn btn-success" href="/<?=$urlPrefix?>/view?type=create">创建</a>
    </p>

<?php if ($generator->indexWidgetType === 'grid'): ?>
    <grid class="table table-bordered table-striped table-hover" :data-provider="dp" :columns="columns">
    </grid>
<?php else: ?>
    <list :data-provider="dp" :columns="columns">
    </list>
<?php endif; ?>
    <pager class="pull-right" :data-provider="dp"></pager>
</div>

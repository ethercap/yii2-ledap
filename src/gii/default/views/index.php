<?php

use yii\helpers\Inflector;
use yii\helpers\StringHelper;

/* @var $this yii\web\View */
/* @var $generator yii\gii\generators\crud\Generator */

$urlParams = $generator->generateUrlParams();
$nameAttribute = $generator->getNameAttribute();

echo "<?php\n";
?>
$this->title = <?= $generator->generateString(Inflector::pluralize(Inflector::camel2words(StringHelper::basename($generator->modelClass)))) ?>;
?>
<div class="<?= Inflector::camel2id(StringHelper::basename($generator->modelClass)) ?>-index">
    <b-breadcrumb :items="[
        {text:'<?php echo '<?=$this->title?>'; ?>', active:true}
    ]"></b-breadcrumb>
<?php if (!empty($generator->searchModelClass)): ?>
    <div class="card mb-5">
        <form class="card-body form-horizontal" @submit.stop.prevent>
<?php
$count = 0;
foreach ($generator->getColumnNames() as $name) {
    if (++$count < 6) {
        if (($count - 1) % 3 == 0) {
            if ($count > 1) {
                echo "            </div>\n";
            }
            echo "            <div class=\"row\">\n";
        }
        echo "                <div class=\"col-sm-4\">\n";
        echo '                    <form-item :model="dp.searchModel" attr="' . $name . "\"></form-item>\n";
        echo "                </div>\n";
    }
}
?>
                <div class="form-group col-sm-4">
                    <button class="btn btn-primary" @click="refresh()">查询</button>
                </div>
            </div>
        </form>
    </div>

<?php endif; ?>
    <div class="card mb-5">
        <div class="card-body">
            <p class="text-right">
<?php $urlPrefix = $generator->getControllerID(); ?>
                <a class="btn btn-success" href="/<?=$urlPrefix?>/view?type=create">创建</a>
            </p>
<?php if ($generator->indexWidgetType === 'grid'): ?>
            <div class="table-responsive">
                <grid class="table table-bordered table-striped table-hover" :data-provider="dp" :columns="columns">
                </grid>
            </div>
<?php else: ?>
            <list :data-provider="dp" :columns="columns">
            </list>
<?php endif; ?>
            <pager :data-provider="dp"></pager>
        </div>
    </div>
    <div class="page-loading-container" v-if="dp.isLoading">
        <div class="page-loading">加载中…</div>
    </div>
</div>

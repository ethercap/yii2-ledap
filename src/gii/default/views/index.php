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
    <b-card class="mb-5">
        <form class="form-horizontal" @submit.stop.prevent>
<?php
$count = 0;
foreach ($generator->getColumnNames() as $name) {
    if (++$count < 6) {
        if (($count - 1) % 3 == 0) {
            if ($count > 1) {
                echo "            </b-row>\n";
            }
            echo "            <b-row>\n";
        }
        echo "                <b-col sm=\"4\">\n";
        echo '                    <form-item :model="dp.searchModel" attr="' . $name . "\"></form-item>\n";
        echo "                </b-col>\n";
    }
}
?>
                <b-col cols="4" class="form-group">
                    <button class="btn btn-primary" @click="refresh()">查询</button>
                </b-col>
            </b-row>
        </form>
    </b-card>

<?php endif; ?>
    <b-card class="mb-5">
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
    </b-card>
    <div class="page-loading-container" v-if="dp.isLoading">
        <div class="page-loading">加载中…</div>
    </div>
</div>

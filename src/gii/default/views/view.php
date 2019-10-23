<?php

use yii\helpers\Inflector;
use yii\helpers\StringHelper;

/* @var $this yii\web\View */
/* @var $generator yii\gii\generators\crud\Generator */

$urlParams = $generator->generateUrlParams();

echo "<?php\n";
?>
if($type == "create") {
    $this->title = "创建";
} else{
    $this->title = "编辑".$model['<?= $generator->getNameAttribute() ?>']['value'];
}
$this->registerJsVar("data", [
    'model' => $model,
    'type' => $type,
]);
<?php echo "?>\n"; ?>
<b-breadcrumb :items="[
    {text:<?= $generator->generateString(Inflector::pluralize(Inflector::camel2words(StringHelper::basename($generator->modelClass))))?>, href:'<?=$generator->getUrl('index')?>'},
    {text:'<?php echo '<?=$this->title?>'; ?>', active:true}
]"></b-breadcrumb>
<div class="<?= Inflector::camel2id(StringHelper::basename($generator->modelClass)) ?>-view">
    <div class="card mb-5">
        <div class="card-body">
            <button class="btn btn-outline-primary mb-3" @click="changeType()" v-if="type !== 'create'">{{type==="update" ? "查看" : "编辑"}}</button>
            <div v-if="type==='view'">
                <detail class="table table-bordered table-striped table-hover" :model="model" :columns="columns">
                </detail>
            </div>
            <div v-else>
                <?='<?='?> $this->render('_form'); <?="?>\n"; ?>
            </div>
        </div>
    </div>
    <div class="page-loading-container" v-if="isLoading">
        <div class="page-loading">加载中…</div>
    </div>
</div>

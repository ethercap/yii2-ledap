<?php


/* @var $this yii\web\View */
/* @var $generator yii\gii\generators\crud\Generator */

/* @var $model \yii\db\ActiveRecord */
$model = new $generator->modelClass();
$safeAttributes = $model->safeAttributes();
if (empty($safeAttributes)) {
    $safeAttributes = $model->attributes();
}
?>
<form class="form-horizontal col-sm-6 col-sm-offset-3">
<?php
if (($tableSchema = $generator->getTableSchema()) === false) {
    foreach ($generator->getColumnNames() as $name) {
        echo "    <baseInput class=\"form-group\" :model=\"model\" :attr=\"'" . $name . "'\"></baseInput>\n";
    }
} else {
    foreach ($generator->getTableSchema()->columns as $column) {
        $format = $generator->generateColumnFormat($column);
        if ($format === 'boolean') {
            echo "    <radiogroup class=\"form-group\" :model=\"model\" :attr=\"'".$column->name ."'\'></radiogroup>\n";
        } else {
            echo "    <baseInput class=\"form-group\" :model=\"model\" :attr=\"'" . $column->name . "'\"></baseInput>\n";
        }
    }
}
?>
    <div class="form-group col-sm-6 col-sm-offset-3">
        <button class="btn btn-default" @click="submit">提交</button>
    </div>
</form>

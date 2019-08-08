<?php
use yii\helpers\Html;
use yii\widgets\Breadcrumbs;

\ethercap\ledap\assets\AppAsset::register($this);
\ethercap\ledap\helpers\JsHelper::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
  <head>
    <meta charset="<?= Yii::$app->charset ?>"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
  </head>
  <body>
    <?php $this->beginBody() ?>
    <div class="content-wrapper">
        <section class="content-header">
            <?php if (isset($this->blocks['content-header'])) {
    ?>
                <h1><?= $this->blocks['content-header'] ?></h1>
            <?php
} else {
        ?>
                <h1>
                    <?php
                    if ($this->title !== null) {
                        echo \yii\helpers\Html::encode($this->title);
                    } else {
                        echo \yii\helpers\Inflector::camel2words(
                            \yii\helpers\Inflector::id2camel($this->context->module->id)
                        );
                        echo ($this->context->module->id !== \Yii::$app->id) ? '<small>Module</small>' : '';
                    } ?>
                </h1>
            <?php
    } ?>

            <?=Breadcrumbs::widget(
                [
                    'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
                ]
            ) ?>
        </section>


        <section class="content">
            <?= $content ?>
        </section>
    </div>
    <?php $this->endBody() ?>
  </body>
</html>
<?php $this->endPage() ?>


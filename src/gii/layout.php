<?php
use yii\helpers\Html;

\ethercap\ledap\assets\AppAsset::register($this);
\ethercap\ledap\helpers\JsHelper::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
  <head>
    <meta charset="<?= Yii::$app->charset ?>"/>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
  </head>
  <body class="bg-light">
    <?php $this->beginBody() ?>
    <div id="app">
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom shadow-sm text-white">
            <h5 class="my-0 mr-md-auto font-weight-normal">Company name</h5>
                <nav class="my-2 my-md-0 mr-md-3">
                    <a class="p-2" href="#">Home</a>
                </nav>
            <a class="btn btn-outline-primary" href="#">Login</a>
        </div>
        <div class="container">
            <?= $content ?>
        </div>
    </div>
    <footer class="footer bg-dark text-white p-3">
        <div class="container d-none d-xl-block">
            <div class="d-flex">
                <span class="mr-auto">Copyright © 2009-2019 by <a href="http://www.yiichina.com">Yii China</a>. <span class="d-none d-sm-inline">All Rights Reserved.</span></span>
                <span class="d-none d-lg-inline">
                    <a href="#" target="_blank">ICP备xxx号</a>
                </span>
            </div>
        </div>
    </footer> 
    <?php $this->endBody() ?>
  </body>
</html>
<?php $this->endPage() ?>


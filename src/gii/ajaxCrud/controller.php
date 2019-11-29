<?php
/**
 * This is the template for generating a CRUD controller class file.
 */
use yii\db\ActiveRecordInterface;
use yii\helpers\StringHelper;

/* @var $this yii\web\View */
/* @var $generator yii\gii\generators\crud\Generator */

$controllerClass = StringHelper::basename($generator->controllerClass);
$modelClass = StringHelper::basename($generator->modelClass);
$searchModelClass = StringHelper::basename($generator->searchModelClass);
if ($modelClass === $searchModelClass) {
    $searchModelAlias = $searchModelClass . 'Search';
}

/* @var $class ActiveRecordInterface */
$class = $generator->modelClass;
$pks = $class::primaryKey();
$urlParams = $generator->generateUrlParams();
$actionParams = $generator->generateActionParams();
$actionParamComments = $generator->generateActionParamComments();

echo "<?php\n";
?>

namespace <?= StringHelper::dirname(ltrim($generator->controllerClass, '\\')) ?>;

use Yii;
use <?= ltrim($generator->modelClass, '\\') ?>;
<?php if (!empty($generator->searchModelClass)): ?>
use <?= ltrim($generator->searchModelClass, '\\') . (isset($searchModelAlias) ? " as $searchModelAlias" : '') ?>;
<?php else: ?>
use yii\data\ActiveDataProvider;
<?php endif; ?>
use <?= ltrim($generator->baseControllerClass, '\\') ?>;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use ethercap\common\helpers\SysMsg;
/**
 * <?= $controllerClass ?> implements the CRUD actions for <?= $modelClass ?> model.
 */
class <?= $controllerClass ?> extends <?= StringHelper::basename($generator->baseControllerClass) . "\n" ?>
{
    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['POST'],
                ],
            ],
        ];
    }

    /**
     * Lists all <?= $modelClass ?> models.
     * @return mixed
     */
    public function actionIndex()
    {
        if(!Yii::$app->request->isAjax) {
            $model = new <?= $modelClass ?>();
            $_GET['withConfig'] = true;
            $data = $this->renderApi("model.api", ['model' => $model]);
            return $this->render('index', [
                'model' => $data['data'],
            ]); 
        }
        Yii::$app->response->format = \yii\web\Response::FORMAT_JSON; 
<?php if (!empty($generator->searchModelClass)): ?>
        $searchModel = new <?= isset($searchModelAlias) ? $searchModelAlias : $searchModelClass ?>();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->renderApi('list.api', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
<?php else: ?>
        $dataProvider = new ActiveDataProvider([
            'query' => <?= $modelClass ?>::find(),
        ]);

        return $this->renderApi('list.api', [
            'dataProvider' => $dataProvider,
        ]);
<?php endif; ?>
    }

    /**
     * Displays a single <?= $modelClass ?> model.
     * <?= implode("\n     * ", $actionParamComments) . "\n" ?>
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView()
    {
        Yii::$app->response->format = \yii\web\Response::FORMAT_JSON; 
        <?=$actionParams?> = Yii::$app->request->get("id", 0); 
        $model = $this->findModel(<?=$actionParams?>);
        return $this->renderApi("model.api", ['model' => $model]);
    }

    /**
     * Creates a new <?= $modelClass ?> model.
     * @return mixed
     */
    public function actionCreate()
    {
        Yii::$app->response->format = \yii\web\Response::FORMAT_JSON; 
        $model = new <?= $modelClass ?>();

        if ($model->load(Yii::$app->request->post(), "") && $model->save()) {
            return SysMsg::getOkData("操作成功");
        }
        return $this->renderApi('model.api', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing <?= $modelClass ?> model.
     * <?= implode("\n     * ", $actionParamComments) . "\n" ?>
     * @return mixed
     */
    public function actionUpdate(<?= $actionParams ?>)
    {
        Yii::$app->response->format = \yii\web\Response::FORMAT_JSON; 
        $model = $this->findModel(<?= $actionParams ?>);
        if($model->isNewRecord) {
            return SysMsg::getErrData('数据错误');
        }

        if ($model->load(Yii::$app->request->post(), "") && $model->save()) {
            return SysMsg::getOkData("操作成功");
        }

        return $this->renderApi('model.api', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing <?= $modelClass ?> model.
     * <?= implode("\n     * ", $actionParamComments) . "\n" ?>
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete(<?= $actionParams ?>)
    {
        Yii::$app->response->format = \yii\web\Response::FORMAT_JSON; 
        $model = $this->findModel(<?= $actionParams ?>);
        if(!$model->isNewRecord) {
            $model->delete();
        }
        return SysMsg::getOkData('操作成功');
    }

    /**
     * Finds the <?= $modelClass ?> model based on its primary key value.
     * If the model is not found, return a new Model()
     * <?= implode("\n     * ", $actionParamComments) . "\n" ?>
     * @return <?=                   $modelClass ?> the loaded model
     */
    protected function findModel(<?= $actionParams ?>)
    {
<?php
if (count($pks) === 1) {
    $condition = '$id';
} else {
    $condition = [];
    foreach ($pks as $pk) {
        $condition[] = "'$pk' => \$$pk";
    }
    $condition = '[' . implode(', ', $condition) . ']';
}
?>
        if (($model = <?= $modelClass ?>::findOne(<?= $condition ?>)) !== null) {
            return $model;
        }
        return new <?=$modelClass?>();
    }
}

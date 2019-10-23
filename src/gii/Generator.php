<?php

namespace ethercap\ledap\gii;

use yii\gii\CodeFile;
use Yii;

class Generator extends \yii\gii\generators\crud\Generator
{
    public $modelClass;
    public $controllerClass;
    public $viewPath;
    public $jsPath;
    public $baseControllerClass = '\ethercap\apiBase\Controller';
    public $searchModelClass = '';
    public $moduleId;

    public function getName()
    {
        return 'Ledap Crud Generator';
    }

    public function rules()
    {
        return array_merge(parent::rules(), [
            ['viewPath', 'safe'],
            ['moduleId', 'safe'],
        ]);
    }

    public function attributeLabels()
    {
        return array_merge(parent::attributeLabels(), [
            'jsPath' => 'Javascript Path',
        ]);
    }

    public function hints()
    {
        return array_merge(parent::hints(), [
            'jsPath' => 'Specify the directory for storing the  javascripts for the view. You may use path alias here, e.g., <code>/var/www/basic/controllers/views/post</code>, <code>@app/views/post</code>. If not set, it will default to <code>/web/js/ControllerID</code>',
            'moduleId' => 'Specify the module ID',
        ]);
    }

    public function getJsPath()
    {
        if (empty($this->jsPath)) {
            $alias = $this->getBaseAlias();
            return Yii::getAlias($alias.'/web/js/'. $this->getControllerID());
        }

        return Yii::getAlias(str_replace('\\', '/', $this->jsPath));
    }

    public function generate()
    {
        $files = parent::generate();
        $viewPath = $this->getViewPath();
        $templatePath = $this->getTemplatePath() . '/views';
        foreach (scandir($templatePath) as $file) {
            if (is_file($templatePath . '/' . $file) && pathinfo($file, PATHINFO_EXTENSION) === 'api') {
                $files[] = new CodeFile("$viewPath/$file", $this->render("views/$file"));
            }
        }

        $jsPath = $this->getJsPath();
        $templatePath = $this->getTemplatePath() . '/js';
        foreach (scandir($templatePath) as $file) {
            if (is_file($templatePath . '/' . $file) && pathinfo($file, PATHINFO_EXTENSION) === 'js') {
                $files[] = new CodeFile("$jsPath/$file", $this->render("js/$file"));
            }
        }
        return $files;
    }

    public function getViewPath()
    {
        if (empty($this->viewPath)) {
            $alias = $this->getBaseAlias();
            return Yii::getAlias($alias.'/views/'. $this->getControllerID());
        }
        return parent::getViewPath();
    }

    //便利方法
    private function getBaseAlias()
    {
        $arr = explode('\\', $this->controllerClass);
        foreach ($arr as $val) {
            if (!empty($val)) {
                return '@'.$val;
            }
        }
        return '@app';
    }

    public function getUrl($index)
    {
        $moduleId = $this->moduleId ? '/'.$this->moduleId : '';
        return $moduleId.'/'.$this->getControllerID().'/'.$index;
    }
}

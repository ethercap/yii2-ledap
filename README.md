# yii2-ledap
========================

本包完美地将yii2与vue,bootstrap结合在一起，提供一致性的开发体验。

yii2的DataProvider, Model, validator,rules,等均能在vue中体现并使用，而且提供了yii2 gridview, detailview等组件的vue版本，极为简单和易用。

为了实现上述目的，我们先开发了[ledap](https://github.com/ethercap/ledap)框架。如果希望yii2前后端完全分离，可以让前端直接尝试使用ledap框架。
本包是在前后端不分离模式下的，提供了代码自动生成等一系列工具，基于vue和bootstrap,我们可以便捷地实现各种后台需求。



安装
------------

推荐的方式是通过composer 进行下载安装[composer](http://getcomposer.org/download/)。

在命令行执行
```
php composer.phar require "ethercap/yii2-ledap" "@dev"
```

或加入

```
"lspbupt/yii2-ledap": "@dev"
```

到你的`composer.json`文件中的require段。

使用
-----

[中文文档](https://ethercap.gitbook.io/ledap/zh-cn/yii2-ledap)

[English Document](https://ethercap.gitbook.io/ledap/yii2-ledap)


Theme.register(["baseinput", "buttongroup", 'grid', 'pager'], Vue);
const Model = window.ledap.Model;
const WebDataProvider = window.ledap.WebDataProvider;
<?php $urlPrefix = $generator->getControllerID(); ?>
const app = new Vue({
  el: "#app",
  data : {
    dp : ledap.getWebDp({
        httpOptions:{
            url: "/<?=$urlPrefix?>/index",
            params: {},
        }
    }),
    columns : [
<?php
$count = 0;
if (($tableSchema = $generator->getTableSchema()) === false) {
    foreach ($generator->getColumnNames() as $name) {
        if (++$count < 6) {
            echo "        '" . $name . "',\n";
        } else {
            echo "        //'" . $name . "',\n";
        }
    }
} else {
    foreach ($tableSchema->columns as $column) {
        $format = $generator->generateColumnFormat($column);
        if (++$count < 6) {
            echo "        '" . $column->name . "',\n";
        } else {
            echo "        //'" . $column->name . "',\n";
        }
    }
}
?>
        {
            'label' : '操作',
            'value' : function(model) {
                return `<div class="btn-group">
                    <a class="btn btn-primary" href="/<?=$urlPrefix?>/view?id=`+ model.id +`">查看</a>
                    <a class="btn btn-warning" href="/<?=$urlPrefix?>/view?id=`+ model.id +`&type=update">编辑</a>
                    <a class="btn btn-danger" @click="vm.remove(model)">删除</a></div>`; 
            },
            'format' : 'html',
        }
    ],
  },
  created: function(){
    this.dp.refresh("");
  },
  methods : {
    refresh(){
        this.dp.refresh("");
    },
    remove(model){
        ledap.request({
            url: "/<?=$urlPrefix?>/delete?id=" + model.id,
            method: 'POST',
        }, () =>{
            this.dp.remove(model);
        })
    }
  },
});


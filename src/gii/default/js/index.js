ledap.App.register(["form-item", "group", "tab", 'grid', 'pager'], Vue);
<?php 
$modelClass = $generator->modelClass;
$pk = $modelClass::primaryKey()[0];
?>
const app = new Vue({
  el: "#app",
  data : {
    dp : ledap.App.getWebDp({
        httpOptions:{
            url: "<?=$generator->getUrl('index')?>",
            params: GetParams(),
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
                    <a class="btn btn-primary text-white" href="<?=$generator->getUrl('view')?>?id=`+ model.<?=$pk?> +`">查看</a>
                    <a class="btn btn-warning text-white" href="<?=$generator->getUrl('view')?>?id=`+ model.<?=$pk?> +`&type=update">编辑</a>
                    <a class="btn btn-danger text-white" @click="vm.remove(model)">删除</a></div>`; 
            },
            'format' : 'html',
        }
    ],
  },
  created: function(){
    this.dp.isLoading = true;
    this.dp.refresh("");
  },
  methods : {
    refresh: function(){
        this.dp.refresh("");
    },
    remove: function(model){
        if(confirm("你确定要删除该数据")) {
            ledap.App.request({
                url: "<?=$generator->getUrl('delete')?>?id=" + model.<?=$pk?>,
                method: 'POST',
            }, function() {
                this.dp.remove(model);
            })
        }
    }
  }
});


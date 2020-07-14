ledap.App.register(['detail', 'form-item'], Vue);
const app = new Vue({
  el: "#app",
  data : {
    model: ledap.App.getModel(data.model),
    type : data.type,
    isLoading : false,
    columns : [
<?php
if (($tableSchema = $generator->getTableSchema()) === false) {
    foreach ($generator->getColumnNames() as $name) {
        echo "        '" . $name . "',\n";
    }
} else {
    foreach ($generator->getTableSchema()->columns as $column) {
        $format = $generator->generateColumnFormat($column);
        echo "        '" . $column->name . "',\n";
    }
}
?>
    ],
  },
  methods : {
    submit : function(){
        event.preventDefault();
        if(!this.model.validate()) {
            this.$toast(this.model.getFirstError(), {variant:'warning'});
            return false;
        }
<?php
$modelClass = $generator->modelClass;
$pk = $modelClass::primaryKey()[0];

?>
        let url = this.type === "create" ? '<?=$generator->getUrl("create")?>' : '<?=$generator->getUrl("update")?>?id='+this.model.id;
        this.isLoading = true;
        ledap.App.request({
            url: url,
            method: 'POST',
            data: this.model
        }, function(res){
            this.model.load(res.data);
            this.isLoading  = false;
            if(!this.model.hasErrors()) {
                this.$toast("操作成功");
            }else {
                this.$toast(this.model.getFirstError(), {variant:'warning'});
            }
        }.bind(this), function(res){
            this.isLoading = false;
            this.$toast(res.message, {variant:'danger'});
        }.bind(this));
    },
    changeType: function() {
        if(this.type === 'create') {
            return;
        }
        if(this.type === 'update') {
            this.type = 'view';
            return;
        }
        this.type = 'update';
    }
  },
});


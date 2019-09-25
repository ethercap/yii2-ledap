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
            errors = this.model.getErrors();
            let error = "";
            Object.keys(errors).forEach(key => {
                if(errors[key].length > 0) {
                    error = errors[key][0];
                }
            });
            this.$toasted.error(error);
            return false;
        }
<?php $urlPrefix = $generator->getControllerID(); ?>
        let url = this.type === "create" ? '/<?=$urlPrefix?>/create' : '/<?=$urlPrefix?>/update?id='+this.model.id;
        this.isLoading = true;
        ledap.App.request({
            url: url,
            method: 'POST',
            data: this.model
        }, (data) =>{
            this.model.load(data.data);
            this.isLoading  = false;
            if(!this.model.hasErrors()) {
                this.$toasted.show("操作成功");
            }
        }, (data)=>{
            this.isLoading = false;
            this.$toasted.error(data.message);
        });
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


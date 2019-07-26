Theme.register(['detail-view', 'baseinput', 'buttongroup'], Vue);
const Model = window.ledap.Model;
const app = new Vue({
  el: "#app",
  data : {
    model: new Model().load(data.model),
    type : data.type,
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
            alert(this.model.getFirstError());
            return false;
        }
<?php $urlPrefix = $generator->getControllerID(); ?>
        let url = this.type === "create" ? '/<?=$urlPrefix?>/create' : '/<?=$urlPrefix?>/update?id='+this.model.id;
        ledap.request({
            url: url,
            method: 'POST',
            data: this.model
        }, (data) =>{
            alert(data.message); 
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


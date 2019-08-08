var request = function(httpOptions, suc, fail = function(data){alert(data.message);}){
    httpOptions = Object.assign({
        headers: {'X-Requested-With': 'XMLHttpRequest'},
    }, httpOptions);
    ledap.App.axios.request(httpOptions).then(function(response){
        var result = response.data; 
        if(result.code === 0) {
            suc(result);
        }else {
            fail(result);
        }
    }).catch(function(error){
        fail({
            code:1,
            message: error.message,
            data:error,
        }); 
    });
}

ledap.App.config({
    themeConfig : themeConfig,
    request : request,
    webDpConfig : {
        primaryKey: "",
        httpRequest : function(httpOptions, suc, fail) {
            ledap.App.request(httpOptions, (res) => {
                suc(res.data);
            }, (data) => {
                alert(data.message);
                fail(data);
            })
        }
    },
});


async function postCadastrar(path, body){
    return new Promise((resolve, reject) => {
        $.ajax({
            type: 'POST',
            url: path,
            data: body,
            success: function (result) {
                alert(result);
                resolve();
            },
            error: function (err) {
                alert(`Ops! Ocorreu um erro: ${err.responseText}`);
                reject();
            }
        });
    });
}
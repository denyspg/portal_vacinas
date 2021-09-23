async function postUsuario(path, usuario){
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "POST",
            url: path,   
            data: JSON.stringify(usuario),
            headers: {
                'Content-type': 'application/json'
            },
            success: function (response){
                resolve(response);
                alert(response.responseText);
            },
            error: function (err){
                reject(err);
                alert(err.responseText);
            }
        });
    });
}
async function postLogar(path, usuario){
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "POST",
            url: path,
            data: usuario,
            success: function (response) {
                localStorage.setItem("token", response.data.token);
                resolve();
            },
            error: function (err) {
                console.log(reject(err));
                alert('Erro!: ' + err.responseText);
                reject();
            },
        });
    });
}
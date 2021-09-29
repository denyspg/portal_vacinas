async function getVacinas(path, token){
    return new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url: path,   
            headers: {
                'auth-token': token
            },
            success: function (response){
                resolve(response)
            },
            error: function (error){
                console.log(error);
                alert(error.responseText);
            },
        });
    });
}
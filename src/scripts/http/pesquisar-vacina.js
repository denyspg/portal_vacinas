async function getVacinas(path){
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: path,   
            success: (response) => resolve(response),
            error: (error) => reject(error),
        });
    });
}
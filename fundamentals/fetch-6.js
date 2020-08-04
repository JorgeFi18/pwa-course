fetch('not-found.html')
    .then( res => res.text())
    .then( html => {
        let body = document.querySelector('body');
        body.innerHTML = html;
    })
    .catch( error => {
        console.log('ERROR - ' + error);
    })

    //https://swapi.dev/api

fetch('https://reqres.in/api/users/1')
    .then( resp => {

        resp.clone().json()
            .then(user => {
                console.log(user);
            })

        resp.json()
            .then(user => {
                console.log(user);
            })
    })

fetch('https://reqres.in/api/users/1000')
    .then( resp => {
        if (resp.ok) {
            return resp.json();
        } else {
            throw new Error('User not found');
        }
    })
    .then(console.log)
    .catch( err => {
        console.log('Error - ' +err)
    })
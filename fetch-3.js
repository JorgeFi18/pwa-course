
let user = {
    name: 'Jorge',
    age: 22
}

fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(
    resp => resp.json()
)
.then(
    console.log
)
.catch(
    err => console.log('Error '+ err)
)


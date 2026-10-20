fetch("http://localhost:3000/user", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body:JSON.stringify({name:"Fola", email:"Fola@gmail.com"})
})
.then(res => res.text())
.then(data => console.log(data))

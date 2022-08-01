function validation() {
    let name = document.getElementById("name").value
    console.log(name)
    let num = document.getElementById("gmail").value
    let password = document.getElementById("password").value
    let confirm = document.getElementById("confirm-password").value
    let error = []

    if (name === "") {
        error.push("please fill the name");
    }
    if (num === "") {
        error.push("please fill the gmail");
    }
    if (password === "") {
        error.push("please fill the password");
    }
    if (confirm === "") {
        error.push("please fill the confirm password");
    }
    if (!password === confirm) {
        error.push("please check passwordx")
    }
    let errorui = ""
    error.map((item) => {
        errorui = errorui + `<p>${item}</p>`
    })
    console.log(errorui)
    if (error.length === 0) {
        document.getElementById("errormessage").innerHTML = `<div class ="form">< h1 > your form is submited < /h1></div>`

    } else {
        document.getElementById("errormessage").innerHTML = errorui
    }
}
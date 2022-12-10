let button = document.getElementById("Button_submit");
console.log(button)

let label = document.createElement('label');
label.className = 'message';
label.innerHTML = "Неверный логин или пароль";

let passwrd = document.getElementsByName('password')[0];

button.addEventListener("click", function () {
    let client = {
        login: document.getElementsByName('login')[0].value,
        password: document.getElementsByName('password')[0].value
    };

    fetch('https://localhost:7291/auth', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(client)
    })
        .then((response) => response.json())
        .catch(() => passwrd.insertAdjacentElement("afterend", label)
        .then((data) => console.log(data)),

        setTimeout(() => {
            let removedElement = document.getElementsByClassName("message");
            removedElement.parentNode.removeChild(removedElement);
        }, 2))

},
    false);
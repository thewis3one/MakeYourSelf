let button = document.getElementById("Button_submit");
console.log(button)

button.addEventListener("click", function () {
    let client = {
        fio: document.getElementsByName('fio')[0].value,
        dateOfBirth: document.getElementsByName('dateOfBirth')[0].value,
        weight: document.getElementsByName('weight')[0].value,
        height: document.getElementsByName('height')[0].value,
        login: document.getElementsByName('login')[0].value,
        password: document.getElementsByName('password')[0].value,
        buildTypeId: document.getElementsByName('buildTypeId')[0].value
    };

    fetch('https://localhost:7291/register', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(client)
    })
        .then((response) => response.json())
        .then((data) => console.log(data));

}, false);
function loadDataUser(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayData(data))
}

function displayData(data){
    const ul = document.getElementById('user-list');
    for(const user of data){
        const userName = user.name;
        const li = document.createElement('li');
        li.innerText = userName;
        ul.appendChild(li);
    }
}

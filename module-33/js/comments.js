const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('error happend',error));
    
}

// using try and catch
const loadComments2 = async() => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        console.log(data);
    }
    catch{
        console.error("data load error");
    }
}

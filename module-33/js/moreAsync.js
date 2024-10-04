//normal fetch function
function loadUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

//using async function and await
async function loadUserAsync() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
}

//using arrow function
const loadUserArrow = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
};

//using arrow function and try,catch
const loadUserTryCatch = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("ERROR :" + error);
  }
};

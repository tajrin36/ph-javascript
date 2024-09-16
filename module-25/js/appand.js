// //where to add
// const placesList = document.getElementById('places-list');

// //what to be added
// const li = document.createElement('li');
// li.innerText = 'pahartoli bon';

// //add the child
// placesList.appendChild(li);

//create a section manually
const mainContainer = document.getElementById("main-container");
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "My Food List";
section.appendChild(h1);
mainContainer.appendChild(section);
const ul = document.createElement("ul");
const li = document.createElement("li");
li.innerText = "Biriyani";
ul.appendChild(li);
const li1 = document.createElement("li");
li1.innerText = "Borhani";
ul.appendChild(li1);
const li2 = document.createElement("li");
li2.innerText = "salad";
ul.appendChild(li2);
section.appendChild(ul);
mainContainer.appendChild(section);

//create a section using innerHTML directly
const sectionDress = document.createElement("section");
sectionDress.innerHTML = `

<h1>My Dress Section</h1>
<ul>
    <li>Saree</li>
    <li>kamiz</li>
    <li>tshirt</li>
    <li>tops</li>
</ul>
`;
mainContainer.appendChild(sectionDress);

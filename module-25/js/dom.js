const sections = document.querySelectorAll('section');
for(const section of sections){
    // console.log(section);'
    section.style.border = '1px solid red';
    section.style.marginBottom = '10px';
    section.style.borderRadius = '10px';
    section.style.paddingLeft = '10px';
    section.style.backgroundColor = 'pink'
}

const placesContainer = document.getElementById('places-container');
placesContainer.style.backgroundColor = 'lightGray';

//Remove duplicate items from an array
const name = ['tajrin', 'saad', 'farha', 'mahia', 'tasmim', 'mahia', 'saad', 'tajrin'];
function noDuplicate(array){
    const unique = [];
    for ( item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}
const uniqueArray = noDuplicate(name);
console.log(uniqueArray); 

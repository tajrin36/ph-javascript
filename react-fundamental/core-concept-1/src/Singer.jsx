/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function Singer ({singers}){
    console.log(singers);
    return(
        <div className="singer">
            <h2>Singer: {singers.name}</h2>
            <p>Age: {singers.age}</p>
        </div>
    )
}
// export default function Todo ({task,isDone}){
//     return (
//         <li>
//             Task: {task}
//         </li>
//     )
// }

//!conditional rendering way-1
// eslint-disable-next-line react/prop-types
export default function Todo({ task, isDone }) {
    if (isDone === true) {
        return <li> Finished : {task}</li>
    }
    else {
        return <li>work on: {task}</li>
    }
}
// export default function Todo({ task, isDone }) {
//     if (isDone === true) {
//         return <li> Finished : {task}</li>
//     }
//     else {
//         return <li>work on: {task}</li>
//     }
// }

//!conditional rendering way-2
// export default function Todo({ task, isDone }) {
//     if(isDone){
//         return <li>Finished: {task}</li>
//     }
//     return <li>Work on: {task}</li>
// }

//!conditional rendering way-3(ternary-operator)
// export default function Todo ({task,isDone}){
//     return (
//         <li>{isDone ? 'Finished' : 'Work on'} : {task}</li>
//     )
// }

//!conditional rendering way-4(&&)
//!isDone true hoile execute hbe
// export default function Todo ({task,isDone}){
//     return (
//         <li>{task}{isDone && ': is done!'}</li>
//     )
// }

//!conditional rendering way-5(||)
//!isDone false hoile execute hbe
// export default function Todo ({task,isDone}){
//     return (
//         <li>{task}{isDone || ': Do it!'}</li>
//     )
// }

//!conditional rendering way-6(variable set kore)
// export default function Todo({ task, isDone }) {
//     let listItem;
//     if (isDone === true) {
//         listItem = <li> Finished : {task}</li>
//     }
//     else {
//         listItem = <li>work on: {task}</li>
//     }
//     return listItem;
// }


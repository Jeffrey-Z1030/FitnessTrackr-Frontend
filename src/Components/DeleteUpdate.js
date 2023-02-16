import { useState } from "react";
import { BASEURL } from "../Constants/constants";


// export async function deletePost(routineId) {
//     // const routineId = props.routineId;
//     console.log(routineId)
//     const user = localStorage.getItem('replyToken')
//     try {
//         const response = fetch(`${BASEURL}/routines/${routineId}`, {
//             method: "DELETE",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${user}`
//               }
//         }).then(response=>response.json()).then(result => {
//             console.log(result);
            
//         })

//     }catch(error){
//         throw Error(error)
//     }
// }
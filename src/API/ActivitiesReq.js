
import { BASEURL, STORAGE_KEY } from "../Constants/constants";

export async function newActivity(name, description) {
    const userToken = localStorage.getItem(`${STORAGE_KEY}`);

    try {
        console.log(`userToken is ${userToken}`);
        // console.log(`body is ${body}`);

        const response = await fetch(`${BASEURL}/activities`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            },

            body: JSON.stringify({
                name: name,
                description: description,
            })

        }).then(response => response.json())
            .then(result => {
                console.log(result)
                console.log(userToken)
            })
    } catch (error) {
        throw Error(error)
    }
}

// async function PostCall(props) {
//     const user = localStorage.getItem('replyToken')

//     try {

//         const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${user}`
//             },
//             body: JSON.stringify({
//                 name,
//                 description
//             })
//         }).then(response => response.json()).then(result => {
//             console.log(result)
//             console.log(user)
//         })
//     } catch (error) {
//         throw Error(error)
//     }
// }

export async function getPubRoutinesByActivityId(activityId) {
    try {

        const response = await fetch(`${BASEURL}/activities/${activityId}/routines`, {
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => response.json()).then(result => {
            console.log(result)

        })

    } catch (error) {
        throw Error(error)
    }
}

export async function patchActivityByID(props) {
    try {
        const activitieId = props.id

        const response = await fetch(`${BASEURL}/activities/${activitieId}`, {
            method: "PATCH",
            body: JSON.stringify({
                name: props.name,
                description: props.description
            })
        }).then(response => response.json()).then(result => {
            console.log(result)
        })

    } catch (error) {
        throw Error(error)
    }
}

export async function getAllActivities(props) {
    try {

        const TOKEN_STRING = localStorage.getItem('replyToken')

        const response = await fetch(`${BASEURL}/activities`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const json = await response.json()
        console.log(json);
        // console.log()

        return json;

    } catch (error) {
        throw Error;
    }
}



// async function GetAllActivities(props) {
//     try {


//         const TOKEN_STRING = localStorage.getItem('replyToken')

//         const response = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/activities`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         })
//         const json = await response.json()
//         console.log(json);
//         console.log()

//         return json;

//         // }).then(response => response.json()).then(result => {
//         //     console.log(result)

//         //     setActivities(result)
//         //     // for(let i = 0; i < result.length;i++){
//         //     //   //  console.log(result[i])
//         //     //     setActivities(result[i])
//         //     //     console.log(activities)


//         //     // }
//     } catch (error) {
//         throw Error;
//     }
// }
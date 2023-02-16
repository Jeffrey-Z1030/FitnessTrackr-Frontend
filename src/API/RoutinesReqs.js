import UserMe from "../Components/UserMe";
import { BASEURL, USER_ID, STORAGE_KEY } from "../Constants/constants";

export async function getAllRoutines() {
    try {
        const response = await fetch(`${BASEURL}/routines`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const json = await response.json()
        console.log(json);
        // console.log()

        return json;

    } catch (error) {
        throw Error(error)
    }
}

export async function deleteRoutine(routineId) {
    // const routineId = props.routineId;
    console.log(routineId)
    const user = localStorage.getItem('replyToken')
    try {
        const response = fetch(`${BASEURL}/routines/${routineId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user}`
            }
        }).then(response => response.json()).then(result => {
            console.log(result);

        })

    } catch (error) {
        throw Error(error)
    }
}
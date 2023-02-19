export async function patchRoutineByID(name, goal, isPublic, routineId) {
    try {

        const userToken = localStorage.getItem(`replyToken`)
        console.log('routineid is:', routineId)

        const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            },
            body: JSON.stringify({
                name: name,
                goal: goal,
                isPublic: isPublic,
            })
        }).then(response => response.json()).then(result => {
            console.log(result)
        })
    } catch (error) {
        throw Error(error)
    }
}
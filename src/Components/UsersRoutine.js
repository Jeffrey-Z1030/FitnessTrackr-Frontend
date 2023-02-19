// import { UserNameRoutines } from "../API/AccountReq";
import { useEffect, useState } from "react";


function GetUsersRoutines() {

    const [userRoutines, setUserRoutines] = useState([])

    async function routinesByUser() {
        try {
            const username = localStorage.getItem('SignedInUser')
            const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/${username}/routines`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const json = await response.json();
            console.log(json)
            return json

        } catch (error) {
            throw Error("Failed to get user's Routines", error)
        }
    }

    useEffect(() => {
        const getUserRoutines = async () => {
            const routines = await routinesByUser();
            console.log('response routines are', routines)
            setUserRoutines(routines)
            // console.log('useState userRoutines are:', userRoutines)
        }
        getUserRoutines();
    }, []);

    return (
        <div>

            {
                userRoutines.map(userRout => {
                    return (
                        <div key={userRout.id}>
                            <h3>{userRout.creatorName}'s Routines</h3>
                            <p>Name: {userRout.name}</p>
                            <p>Goal: {userRout.goal}</p>

                        </div>
                    )
                })
            }



        </div>

    )
}

export default GetUsersRoutines;
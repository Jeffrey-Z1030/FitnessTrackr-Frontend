import { getRoutines, USER_ID } from "../API/AccountReq";
import { useEffect, useState } from "react";
import { deletePost } from "./DeleteUpdate";
import RoutineEditForm from "./RoutineEditForm";
import styles from "./getAllRoutines.module.css"




function GetRoutines() {
    const user_id = localStorage.getItem(`${USER_ID}`)
    const [editState, setEditState] = useState(false)
    const [routines, SetRoutines] = useState([])
    const [routineId, setRoutineId] = useState('');
    const [activityChange, setActivityChange] = useState(false)

    async function getRoutines() {
        try {
            const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            const json = await response.json()
            console.log(json);
            return json;
        } catch (error) {
            throw Error(error)
        }
    }

    useEffect(() => {
        const getRoutinesAsync = async () => {
            const routines = await getRoutines();
            SetRoutines(routines)
        }
        getRoutinesAsync();
        setActivityChange(false)
    }, [activityChange])


    return (
        <div className={styles.container}>
            {
                routines.map((routine) => {



                    return (

                        <div className={styles.card} key={routine.id}>
                            <h3>Routine</h3>
                            <ul className="container">
                                <li>CreatorId: {routine.creatorId}</li>
                                <li>Data Type: {typeof (routine.creatorId)}</li>
                                <li>Name: {routine.creatorName}</li>
                                <li>Description: {routine.name}</li>
                                <li>Goal: {routine.goal}</li>
                                <br></br>
                                <li>StoredAuthorId{user_id}</li>
                                <li>Data Type: {typeof (user_id)}</li>

                                {(routine.creatorId == user_id) ?
                                    <button onClick={
                                        (event) => {
                                            setRoutineId(routine.id);
                                            console.log(routineId)
                                            deletePost(routineId);
                                        }
                                    }>Delete</button> : null}

                                {(routine.creatorId == user_id) ?
                                    <button onClick={
                                        (event) => {
                                            setRoutineId(routine.id);
                                            setEditState(true)
                                            console.log('routine id is:', routineId)

                                        }
                                    }>Edit</button> : null}
                            </ul>

                            {
                                editState ?

                                    <RoutineEditForm
                                        routineId={routineId}
                                        name={routine.name}
                                        goal={routine.goal}
                                        isPublic={routine.isPublic}
                                    />

                                    :

                                    null

                            }
                        </div>
                    )
                })
            }

        </div>
    )
}
export default GetRoutines;
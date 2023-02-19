import { getRoutines, USER_ID } from "../API/AccountReq";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deletePost } from "./DeleteUpdate";
import RoutineEditForm from "./RoutineEditForm";
import styles from "./getAllRoutines.module.css"




function GetRoutines() {
    const user_id = localStorage.getItem(`${USER_ID}`)
    const [editState, setEditState] = useState(false)
    const [routines, SetRoutines] = useState([])
    const [routineName, setRoutinenName] = useState('');
    const [routineGoal, setRoutineGoal] = useState('');
    const [isPublic, setIsPublic] = useState(null);

    const [routineId, setRoutineId] = useState('');
    const [activityChange, setActivityChange] = useState(false)

    const navigate = useNavigate();
    const toActPage = () => {
        navigate('/addActPage', {
            state: {
                Id: { routineId }
            }
        })
    }

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
                editState

                    ?

                    <RoutineEditForm
                        routineId={routineId}
                        name={routineName}
                        goal={routineGoal}
                        isPublic={isPublic}
                        setEditState={setEditState}
                        setActivityChange={setActivityChange}
                    />

                    :

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

                                    <button onClick={(e) => {
                                        setRoutineId(routine.id)
                                        console.log(routineId)
                                        if (routineId !== '') toActPage()
                                    }}
                                    >Add Activity to Routine</button>

                                    {(routine.creatorId == user_id) ?
                                        <button
                                            className={styles.button}
                                            onClick={
                                                (event) => {
                                                    setRoutineId(routine.id);
                                                    console.log(routineId)
                                                    deletePost(routineId);
                                                    setActivityChange(true);
                                                }
                                            }>Delete</button> : null}

                                    {(routine.creatorId == user_id) ?
                                        <button
                                            className={styles.button}
                                            onClick={
                                                (event) => {
                                                    setRoutineId(routine.id);
                                                    setEditState(true)
                                                    console.log('routine id is:', routineId)

                                                }
                                            }>Edit</button> : null}
                                </ul>
                            </div>
                        )
                    })
            }

        </div>
    )
}
export default GetRoutines;
import { getAllRoutines } from "../API/RoutinesReqs";
import { USER_ID } from "../Constants/constants";
import { useState, useEffect } from "react";
import { deleteRoutine } from "../API/RoutinesReqs";
import { getPubRoutinesByActivityId } from "../API/ActivitiesReq";
import EditForm from "./EditForm";



function GetRoutines() {
    const user_id = localStorage.getItem(`${USER_ID}`)
    const [routines, setRoutines] = useState([]);
    const [routineId, setRoutineId] = useState('');
    const [editState, setEditState] = useState(false);
    const [activityChange, setActivityChange] = useState(false)

    useEffect(() => {
        const getAllRoutinesAsync = async () => {
            const routines = await getAllRoutines();
            setRoutines(routines)
        }
        getAllRoutinesAsync();
        setActivityChange(false)
    }, [activityChange]);



    return (

        <div>

            {
                routines.map((routine) => {
                    return (


                        <div className="card" key={routine.id}>
                            <h3>Routines</h3>
                            <ul className="container">
                                <li>Name: {routine.name}</li>
                                <li>Goal: {routine.goal}</li>
                            </ul>
                            <button onClick={
                                (event) => {
                                    setRoutineId(routine.id);
                                    console.log('state routId Is:', routineId)
                                    console.log(getPubRoutinesByActivityId(routineId));
                                }}>Test </button>
                            <button
                                onClick={(e) => {
                                    setEditState(true);
                                    // patchActivitieByID()
                                }
                                }>Edit</button>

                            {
                                editState ?

                                    <EditForm
                                        activitieId={routineId}
                                        name={routine.name}
                                        description={routine.goal}
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

    // return (
    //     <div>
    //         <form onSubmit={async (event) => {
    //             event.preventDefault();
    //         }}>
    //             <button onClick={getRoutines}>Get Routines</button>
    //             {
    //                 routines.map((routine) => {
    //                     return (

    //                         <div className="card" key={routine.id}>
    //                             <h3>Routine</h3>
    //                             <ul className="container">
    //                                 <li>{routine.creatorId}</li>
    //                                 <li>Name: {routine.creatorName}</li>
    //                                 <li>Description: {routine.name}</li>
    //                                 <li>Goal: {routine.goal}</li>
    //                                 <li>StoreAuthorId{user_id}</li>
    //                                 {(routine.creatorId !== user_id) ?
    //                                     <button onClick={
    //                                         (event) => {
    //                                             setRoutineId(routine.id);
    //                                             console.log(routineId)
    //                                             deleteRoutine(routineId);
    //                                         }
    //                                     }>Delete</button> : null}
    //                             </ul>
    //                         </div>
    //                     )
    //                 })
    //             }
    //         </form>
    //     </div>
    // )
}
export default GetRoutines;
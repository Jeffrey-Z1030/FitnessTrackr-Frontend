import { setTargetValue } from "../Constants/constants";
import { useState, useEffect } from "react";
import { patchRoutineByID } from "../API/RoutinesReqs";

function RoutineEditForm({ routineId, routineName, routineGoal, setEditState, setActivityChange }) {
    // const activitieId = props.activitieId
    // const name = props.name
    // const description = props.description

    const [editedName, setEditedName] = useState('');
    const [editedGoal, setEditedGoal] = useState('');
    const [editedPublic, setEditedPublic] = useState(null)
    const [stateId, setStateId] = useState('')

    useEffect(() => {
        setStateId(routineId)
        console.log('stateId is:', stateId)
    }, []);


    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                setEditState(false)
                setActivityChange(true)
            }}>

                <label>Edit Name:
                </label>
                <input
                    placeholder={routineName}
                    value={editedName}
                    onChange={setTargetValue(setEditedName)}
                />
                <label>Edit Goal:
                </label>
                <input
                    placeholder={routineGoal}
                    value={editedGoal}
                    onChange={setTargetValue(setEditedGoal)}
                />
                <button
                    onClick={(e) => {
                        patchRoutineByID(editedName, editedGoal, editedPublic, stateId)
                    }}>Send</button>

                <button
                    onClick={(e) => {
                        setEditState(false)
                    }}>Go Back</button>
            </form>
        </div>
    )
}

export default RoutineEditForm
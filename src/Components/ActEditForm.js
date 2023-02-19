import { setTargetValue } from "../Constants/constants";
import { useEffect, useState } from "react";
import { patchActivitieByID } from "../API/AccountReq";

function ActEditForm({ activitieId, name, description, setEditState, setActivityChange }) {
    // const activitieId = props.activitieId
    // const name = props.name
    // const description = props.description

    const [editedName, setEditedName] = useState('');
    const [editedDescription, setEditedDescription] = useState('');
    const [stateId, setStateId] = useState('')

    useEffect(() => {
        setStateId(activitieId)
        console.log('stateId is:', stateId)
    }, []);

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
            }}>

                <label>Edit Name:
                </label>
                <input
                    placeholder={name}
                    value={editedName}
                    onChange={setTargetValue(setEditedName)}
                />
                <label>Edit Description:
                </label>
                <input
                    placeholder={description}
                    value={editedDescription}
                    onChange={setTargetValue(setEditedDescription)}
                />
                <button
                    onClick={(e) => {
                        patchActivitieByID(editedName, editedDescription, activitieId)
                        setEditState(false)
                        setActivityChange(true)
                    }}>Send</button>
            </form>

            <button
                onClick={(e) => {

                    setEditState(false)

                }}>Close</button>
        </div>
    )
}

export default ActEditForm
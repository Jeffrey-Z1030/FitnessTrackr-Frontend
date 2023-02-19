import { setTargetValue } from "../Constants/constants";
import { useState } from "react";
import { patchActivitieByID } from "../API/AccountReq";

function ActEditForm({ activitieId, name, description }) {
    // const activitieId = props.activitieId
    // const name = props.name
    // const description = props.description

    const [editedName, setEditedName] = useState('');
    const [editedDescription, setEditedDescription] = useState('');

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
                    onClick={(e) => { patchActivitieByID(editedName, editedDescription, activitieId) }}>Send</button>
            </form>
        </div>
    )
}

export default ActEditForm
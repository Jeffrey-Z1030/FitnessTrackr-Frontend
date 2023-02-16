import { useState } from "react";
import { setTargetValue } from "../Constants/constants";
import { newActivity } from "../API/ActivitiesReq";

function PostActivities() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleDescription = (event) => {
        setDescription(event.target.value)
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

    return (
        <div>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    setName('')
                    setDescription('')
                    alert('Activity created')

                }}
            >
                <h3>Create new Activity</h3>
                <label>Name :
                    <input placeholder="Activity Name"
                        onChange={handleName}
                        value={name}
                    />
                </label>
                <label>Description :
                    <input placeholder="Description"
                        onChange={handleDescription}
                        value={description}
                    />
                </label>
                <button onClick={console.log('click!')} />
                {/* <button onClick={newActivity(name, description)}>Send!</button> */}
            </form>
        </div>

    )


}


export default PostActivities
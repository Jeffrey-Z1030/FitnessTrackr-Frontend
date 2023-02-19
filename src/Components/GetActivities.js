// import { getActivityIdR, getAll } from "../API/UReq";
import { getPubRoutinesByActivityId, getAllActivities } from "../API/ActivitiesReq"
import { useState, useEffect } from "react";
// import { ActIdRoutine } from "./activityIdByRoutine";
import { patchActivitieByID } from "../API/UsersReq";
import EditForm from "./EditForm";


function GetActivities() {

    const [activities, setActivities] = useState([]);
    const [activityId, setActivityId] = useState('')
    const [editState, setEditState] = useState(false)
    const [activityChange, setActivityChange] = useState(false)

    useEffect(() => {
        const getActivitiesAsync = async () => {
            const activities = await getAllActivities();
            setActivities(activities)
        }
        getActivitiesAsync();
        setActivityChange(false)
    }, [activityChange]);


    return (

        <div>

            {
                activities.map((activity) => {
                    return (


                        <div className="card" key={activity.id}>
                            <h3>Activities</h3>
                            <ul className="container">
                                <li>Name: {activity.name}</li>
                                <li>Description: {activity.description}</li>
                            </ul>
                            <button onClick={
                                (event) => {
                                    setActivityId(activity.id);
                                    console.log('state actId Is:', activityId)
                                    console.log(getPubRoutinesByActivityId(activityId));
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
                                        activitieId={activityId}
                                        name={activity.name}
                                        description={activity.description}
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

export default GetActivities
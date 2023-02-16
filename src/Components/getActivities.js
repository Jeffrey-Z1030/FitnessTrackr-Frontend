import { getActivityIdR, GetAllActivities } from "../API/AccountReq";
import { useState, useEffect } from "react";
// import ActIdRoutine from "./activityIdByRoutine";
import { patchActivitieByID } from "../API/AccountReq";
import EditForm from "./EditForm";
import { Link,Route,Router } from "react-router-dom";


function GetActivities() {
    const [activities, setActivities] = useState([]);
    const [activityId, setActivityId] = useState('')
    const [edit, SetEdit] = useState(false)
    const [activityChange, setActivityChange] = useState(false)
    const [routines,SetRoutines] = useState([])


    useEffect(() => {
        const getActivitiesAsync = async () => {
            const activities = await GetAllActivities();
            setActivities(activities)
        }
        getActivitiesAsync();
        setActivityChange(false)
    }, [activityChange]);

    async function getRoutinesByActId(activitieId){
        try{
            const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities/${activitieId}/routines`,{
                headers:{
                    'Content-Type': 'application/json',
                }
            }).then(response => response.json()).then(result =>{
                console.log(result)
                SetRoutines(result)
                
            })
    
        }catch(error){
            throw Error(error)
        }
    }


    async function GetAllActivities(props) {
        try {
            const TOKEN_STRING = localStorage.getItem('replyToken')
            const response = await fetch('https://fitnesstrac-kr.herokuapp.com/api/activities', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const json = await response.json()
            console.log(json);
            console.log()
            return json;
        } catch (error) {
            throw Error;
        }
    }
    return (
        <div>
            {
                activities.map((activitie) => {
                    return (
                        <div className="card" key={activitie.id}>
                            <h3>Activities</h3>
                            <ul className="container">
                                <li>Name: {activitie.name}</li>
                                <li>Description: {activitie.description}</li>
                            </ul>

                            <button
                                onClick={(event)=>{
                                    setActivityId(activitie.id)
                                    console.log(activitie.id)
                                    getRoutinesByActId(activitie.id);
                                }}
                                >Get Routines By Id</button>

                               

                            <button
                                onClick={(e) => {
                                    SetEdit(true);
                                    // patchActivitieByID()
                                }
                                }>Edit</button>
                            {
                                edit ?
                                    <EditForm
                                        activitieId={activityId}
                                        name={activitie.name}
                                        description={activitie.description}
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
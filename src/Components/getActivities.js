import { getActivityIdR, GetAllActivities } from "../API/AccountReq";
import { useState, useEffect } from "react";
// import ActIdRoutine from "./activityIdByRoutine";
import { patchActivitieByID } from "../API/AccountReq";
import ActEditForm from "./ActEditForm";
import { Link, Route, Router, useNavigate } from "react-router-dom";
import { test } from "../Constants/frankenstein";
import styles from "./getActivities.module.css"



function GetActivities() {
    const [activities, setActivities] = useState([]);
    const [acitvityName, setActivityName] = useState('')
    const [acitvityDescription, setActivityDescription] = useState('')
    const [activityId, setActivityId] = useState('')
    const [editState, setEditState] = useState(false)
    const [activityChange, setActivityChange] = useState(false)
    const [routines, SetRoutines] = useState([]);
    const [stateRoutines, setStateRoutines] = useState([]);


    const navigate = useNavigate();
    const pubRoutinesArr = []

    const toRoutinePage = () => {
        navigate('/routinepagebyactid',
            {
                state: {
                    actIdbyRoutines: { stateRoutines }
                }
            })
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

            return json;
        } catch (error) {
            throw Error;
        }
    }

    async function getRoutinesByActId(activitieId) {
        try {


            const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities/${activitieId}/routines`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            const json = await response.json()
            // console.log(json)
            SetRoutines(json)

            // console.log('set routines are', routines)
            // console.log('first set of activities for routineState is:', routines[0].activities[0]);



        } catch (error) {
            throw Error(error)
        }
    }

    useEffect(() => {
        const getActivitiesAsync = async () => {
            const activities = await GetAllActivities();
            setActivities(activities)
            console.log('this is getActivities.js')

        }
        getActivitiesAsync();
        setActivityChange(false)
    }, [activityChange]);


    return (
        <div className={styles.container}>
            {
                editState

                    ?

                    <ActEditForm
                        activitieId={activityId}
                        name={acitvityName}
                        description={acitvityDescription}
                        setEditState={setEditState}
                        setActivityChange={setActivityChange}
                    />

                    :

                    activities.map((activitie) => {
                        return (
                            <div className={styles.card} key={activitie.id}>
                                <h3>Activities</h3>
                                <ul className="container">
                                    <li id={activitie.id}>Activity Id:{activitie.id}</li>
                                    <li>Name: {activitie.name}</li>
                                    <li>Description: {activitie.description}</li>
                                </ul>

                                {/* <Link to={{
                                    pathname:'/routinepagebyactid',
                                    state:{
                                        routines:'routines'
                                    }
                                }} */}
                                <button
                                    className={styles.button}
                                    onClick={(event) => {
                                        // const testlol = document.getElementById(`${activitie.id}`)
                                        // const testGet = testlol.getAttribute('id')
                                        // setActivityId(testGet)
                                        // setActivityId(activitie.id)


                                        getRoutinesByActId(activitie.id)
                                        console.log('fetched routines are', routines)
                                        for (let i = 0; i < routines.length; ++i) {
                                            let singleRoutines = routines[i];
                                            // console.log('looped routines activities are', singleRoutines.activities);
                                            for (let j = 0; j < singleRoutines.activities.length; ++j) {
                                                let singleActivity = singleRoutines.activities[j];
                                                // console.log('single acitvity is:', singleActivity)
                                                pubRoutinesArr.push(singleActivity);
                                            }
                                        }

                                        // console.log('complete pubRoutinesArr is:', pubRoutinesArr);
                                        setStateRoutines(pubRoutinesArr)

                                        console.log("array that we'll be moving is:", stateRoutines);

                                        if (stateRoutines.length !== 0) {
                                            toRoutinePage();
                                        }



                                        //  toRoutinePage();
                                    }}
                                >Get Routines By Id</button>
                                {/* </Link> */}

                                <button
                                    className={styles.button}
                                    onClick={event => {

                                        const testlol = document.getElementById(`${activitie.id}`)
                                        const testGet = testlol.getAttribute('id')
                                        console.log(testGet)
                                        setActivityId(testGet)

                                        async function apiCall() {
                                            try {
                                                const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities/${activitie.id}/routines`, {
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    }
                                                }).then(response => response.json()).then(result => {
                                                    console.log(result)
                                                    SetRoutines(result)
                                                })

                                            } catch (error) {
                                                throw Error(error)
                                            }
                                        }

                                        apiCall()
                                        console.log(routines)

                                        // console.log(routines[0].activities[0].id)
                                        if (routines.length !== 0) {
                                            toRoutinePage();
                                        }

                                    }}>Test</button>

                                <button
                                    className={styles.button}
                                    onClick={(e) => {
                                        setActivityId(activitie.id)
                                        setEditState(true);
                                        setActivityName(activitie.name)
                                        setActivityDescription(activitie.description)
                                    }
                                    }>Edit</button>




                            </div>
                        )
                    })

            }






        </div>
    )
}
export default GetActivities
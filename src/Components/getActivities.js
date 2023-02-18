import { getActivityIdR, GetAllActivities } from "../API/AccountReq";
import { useState, useEffect } from "react";
// import ActIdRoutine from "./activityIdByRoutine";
import { patchActivitieByID } from "../API/AccountReq";
import EditForm from "./EditForm";
import { Link,Route,Router,useNavigate } from "react-router-dom";
import { test } from "../Constants/frankenstein";


function GetActivities() {
    const [activities, setActivities] = useState([]);
    const [activityId, setActivityId] = useState('')
    const [edit, SetEdit] = useState(false)
    const [activityChange, setActivityChange] = useState(false)
    const [routines,SetRoutines] = useState([]);

    const navigate = useNavigate();

    const toRoutinePage = () =>{
        navigate('/routinepagebyactid',
        {state:{
            actIdbyRoutines:{routines}
        }})
    }


    useEffect(() => {
        const getActivitiesAsync = async () => {
            const activities = await GetAllActivities();
            setActivities(activities)
            
        }
        getActivitiesAsync();
        setActivityChange(false)
    }, [activityChange]);

    // async function getRoutinesByActId(activitieId){
    //     try{
    //         const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities/${activitieId}/routines`,{
    //             headers:{
    //                 'Content-Type': 'application/json',
    //             }
    //         }).then(response => response.json()).then(result =>{
    //             console.log(result)
    //             SetRoutines(result) //not Setting routines correctly Idk why
                
                
    //         })
    
    //     }catch(error){
    //         throw Error(error)
    //     }
    // }


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

    async function getRoutinesByActId(activitieId){
        try{
   
            
            const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities/${activitieId}/routines`,{
                headers:{
                    'Content-Type': 'application/json',
                }
            })

            const json = await response.json()
            console.log(json)
            SetRoutines([json])
            console.log(routines)
               
                
                
            
    
        }catch(error){
            throw Error(error)
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
                                <li id={activitie.id}>ActId:{activitie.id}</li>
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
                                onClick={(event)=>{
                                    // const testlol = document.getElementById(`${activitie.id}`)
                                    // const testGet = testlol.getAttribute('id')
                                    // setActivityId(testGet)
                                    // setActivityId(activitie.id)
                                    
                                    
                                    getRoutinesByActId(activitie.id)
                                    
                                    
  
                                  //  toRoutinePage();
                                }}
                                >Get Routines By Id</button>
                                {/* </Link> */}

                                <button 

                                    onClick={event=>{
                                    
                                    const testlol = document.getElementById(`${activitie.id}`)
                                    const testGet = testlol.getAttribute('id')
                                    console.log(testGet)
                                    setActivityId(testGet)



                                    
                                    
                                    

                                    async function apiCall(){
                                        try{
                                            const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities/${activitie.id}/routines`,{
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

                                    apiCall()
                                    console.log(routines)

                                    // console.log(routines[0].activities[0].id)
                                    if(routines.length !== 0 ) {
                                        toRoutinePage();
                                    }
                                    
                                }}>Test</button>

                               

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
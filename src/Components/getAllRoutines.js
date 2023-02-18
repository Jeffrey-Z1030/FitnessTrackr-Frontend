import { getRoutines, USER_ID } from "../API/AccountReq";
import { useState } from "react";
import { deletePost } from "./DeleteUpdate";
import { useNavigate } from "react-router-dom";



function GetRoutines(){
    const user_id = localStorage.getItem(`${USER_ID}`)
    const [routines,SetRoutines] = useState([])
    const [routineId, setRoutineId] =  useState('');


    const navigate = useNavigate();

    const toActPage = () => {
        navigate('/addActPage',
        {
        state:{Id:{routineId}}
        })
    }




async function getRoutines(){
    try{
        const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines`,{
            headers:{
                'Content-Type':'application/json',
                    },
        }).then(response => response.json()).then(result => {
            console.log(result)
            SetRoutines(result)

        })
    }catch(error){
        throw Error(error)
    }
}
    return(
        <div>
            <form onSubmit={async(event)=>{
                event.preventDefault();
                
            }}>
                <button onClick={getRoutines}>Get Routines</button>
                {
                    routines.map((routine)=>{
                        return(
                            
                            <div className="card" key={routine.id}>
                                <h3>Routine</h3>
                                <ul className="container">
                                    <li>{routine.creatorId}</li>
                                    <li>Name: {routine.creatorName}</li>
                                    <li>Description: {routine.name}</li>
                                    <li>Goal: {routine.goal}</li>
                                    <li>StoreAuthorId{user_id}</li>

                                    <button
                                    onClick={(e)=>{
                                        // console.log(routine)
                                        console.log(routine.id)
                                        setRoutineId(routine.id)
                                        console.log(routineId)
                                        
                                        if(routineId !== ''){
                                            toActPage()
                                        }
                                    }}
                                    >Add Activities to this Routine!</button>


                                   {(routine.creatorId !== user_id) ?
                                   <button onClick={
                                    (event) => {
                                        setRoutineId(routine.id);
                                        console.log(routineId)
                                        deletePost(routineId);
                                    }
                                    }>Delete</button>:null}
                                </ul>
                            </div>
                        )
                    })
                }
            </form>
        </div>
    )
}
export default GetRoutines;
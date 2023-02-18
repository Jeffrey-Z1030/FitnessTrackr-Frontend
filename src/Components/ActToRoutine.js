import { useState } from "react"
import { useLocation } from "react-router-dom"

function AddActivityToRoutine(){


    const [count,setCount] = useState('')
    const [duration,SetDuration] = useState('')
    const [activityId,setActId] = useState('')

    const location = useLocation();

    const handleCount = (event) =>{
        setCount(event.target.value)
    }

    const handleDuration = (event) =>{
        SetDuration(event.target.value)
    }

    const handleId = (event) =>{
        setActId(event.target.value)
    }

    const routineId = location.state.Id.routineId



    async function PostCall(){
        try{
            const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}/activities`,{
                Method:"POST",
                Body: JSON.stringify({
                    activityId,
                    count,
                    duration,
                })
            }).then(response => response.json()).then(result => {
                console.log(result)
            })
        }catch(error){
            throw Error(error)
        }
    }




    return(
        <form>
            <button onClick={(e)=>{
                console.log(location.state.Id.routineId)
                console.log(routineId)
            }}>Location</button>
            <h3>Hello</h3>

            <input 
            placeholder="Count"
            onChange={handleCount}
            value={count}>
            </input>
            <input 
            placeholder="Duration"
            onChange={handleDuration}
            value={duration}>
            </input>
            <button onClick={PostCall}>Submit</button>
        </form>
    )
}

export default AddActivityToRoutine
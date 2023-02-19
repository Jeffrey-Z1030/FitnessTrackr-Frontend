import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

function AddActivityToRoutine(){

    window.onload = (event) => {
        console.log("page is fully loaded")
        console.log(routineId)
        GetAllActivities();
        ;
      };


    const [count,setCount] = useState('')
    const [duration,SetDuration] = useState('')
    const [activityId,setActId] = useState('')
    const [activities,setActivities] = useState([])

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

    const giveaNumber = parseInt(count)
    const giveanotherNumber = parseInt(duration)


    function DropDown(){

        const [isActive,setIsActive]=useState(false);
        const showDropDown=()=>{
            setIsActive(true);
        }
    
        const hideDropDown=()=>{
            setIsActive(false);
        }
    
        return (
            <>
            <div className="dropdown">
                <div className="dropdown-menu" onClick={showDropDown} onMouseLeave={hideDropDown}>
                    DropDown
                    {isActive ?(<ul onMouseEnter={showDropDown}>
                        <div> 
                        {activities.map((activity)=>{
                            return(
                                
                                    <li key={activity.id} onClick={(e)=>{
                                        console.log(activity.id)
                                        setActId(activity.id)
                                    }}>{activity.name}</li>
                                
                            )
                        })}
                        </div>
                        {/* <li>{activities.name}</li>
                        <li>2</li>
                        <li>3</li> */}
                    </ul>) :null}
    
                </div>
            </div>
            </>
        )
    }



    async function GetAllActivities(props) {


        try {
            const response = await fetch('https://fitnesstrac-kr.herokuapp.com/api/activities', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const json = await response.json()
            console.log(json)
            setActivities(json)
            
            
            ;

            // return json;
        } catch (error) {
            throw Error;
        }
    }


    async function PostCall(){
            
        try{
            const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}/activities`,{
                method:"POST",
                body: JSON.stringify({
                    activityId:activityId,
                    count:giveaNumber,
                    duration:giveanotherNumber
                })
            }).then(response => response.json()).then(result => {
                console.log(result)
            })
        }catch(error){
            throw Error(error)
        }
    }




    return(
        
        <form onSubmit={(e)=>{
            e.preventDefault();
        }}>

            <DropDown/>
   
            <button onClick={(e)=>{
                // console.log(location.state.Id.routineId)
                // console.log(routineId)
                // console.log(activities)
                // console.log(activityId)
            }}>Location</button>
            <h3>Hello</h3>


            <input 
            type='number'
            placeholder="Count"
            onChange={handleCount}
            value={count}>
            </input>
            <input 
            type='number'
            placeholder="Duration"
            onChange={handleDuration}
            value={duration}>
            </input>
            <button onClick={(e)=>{
                console.log(giveaNumber)
                console.log(typeof(giveaNumber))
                PostCall()

                console.log(activityId)
            }}>Submit</button>
        </form>
    )
}

export default AddActivityToRoutine
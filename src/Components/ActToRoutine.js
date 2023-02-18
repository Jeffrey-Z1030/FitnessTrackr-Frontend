import { useState } from "react"
import { useLocation } from "react-router-dom"

function AddActivityToRoutine(){


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
                                
                                    <li onClick={(e)=>{
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
        
        <form onSubmit={(e)=>{
            e.preventDefault();
        }}>

            <DropDown/>
            <button onClick={GetAllActivities}>Test</button>
            <button onClick={(e)=>{
                console.log(location.state.Id.routineId)
                console.log(routineId)
                console.log(activities)
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
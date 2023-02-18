import { useLocation } from "react-router-dom"
import { useState } from "react"

function RoutinePageById(){
    const location = useLocation()

    const [activities,setActivities] = useState([])

   



    // const routines = stateData['routines']
    

    return (
        <div>
            
            <button onClick={(e)=>{
                console.log(location.state)
                
            }}>Test</button>
            {
                location.state.actIdbyRoutines.routines.map((routine)=>{
                    return(
                        <div>
                        <h3>Routines by {routine.creatorName}</h3>
                        <p>TEST:{routine.activities[0].name}</p>
                        <p>TEST:{routine.activities[0].description}</p>
                        <p>{routine.name}</p>
                        <p>{routine.goal}</p>
                        </div>
                        
                    )
                })
            }
            </div>

        
    )
    
}

export default RoutinePageById
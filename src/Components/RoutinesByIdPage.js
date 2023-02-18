import { useLocation } from "react-router-dom"
import { useState } from "react"

function RoutinePageById() {
    const location = useLocation()

    const [activities, setActivities] = useState([])





    // const routines = stateData['routines']


    return (
        <div>

            <button onClick={(e) => {
                console.log(location.state)

            }}>Test</button>
            {
                location.state.actIdbyRoutines.stateRoutines.map((routine) => {
                    return (
                        <div key={routine.id}>
                            <h3>Activity ID? {routine.id}</h3>
                            <p>Count is:{routine.count}</p>
                            <p>Duration:{routine.duration}</p>
                            <p>Description:{routine.description}</p>
                            <p>{routine.name}</p>
                        </div>

                    )
                })
            }
        </div>


    )

}

export default RoutinePageById
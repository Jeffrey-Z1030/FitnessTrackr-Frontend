<button
onClick={(event)=>{
    setActivityId(activitie.id)
    console.log(activitie.id)
    getRoutinesByActId(activitie.id);
}}
>Get Routines By Id</button>

{
    routines.map((routine)=>{
        return()
    })
}


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
// import { UserNameRoutines } from "../API/AccountReq";
import { useState } from "react";


function GetUsersRoutines(){

    const [userRouts,SetUserRouts] = useState([])

    async function UserNameRoutines(){
        try{
            const username = localStorage.getItem('SignedInUser')
            const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/${username}/routines`,{
                headers:{
                    'Content-Type' : 'application/json',
                }
            })
            const json = await response.json();
            console.log(json)
            SetUserRouts(json)

        }catch(error){
            throw Error("Failed to get user's Routines", error)
        }
    }
    


    
    return(
        <form onSubmit={async(event)=>{
            event.preventDefault();

            try{
                const response = await UserNameRoutines()
                console.log(userRouts)
                

            }catch(error){
                throw Error(error)
            }
        }}>
            <button>Get My Routines</button>
            {
                userRouts.map(userRout =>{
                    return(
                        <div key={userRout.id}>
                        <h3>{userRout.creatorName}'s Routines</h3>
                        <p>Name: {userRout.name}</p>
                        <p>Goal: {userRout.goal}</p>
 
                        </div>
                    )
                })
            }       
        </form>
    )
}

export default GetUsersRoutines;
import { useState } from "react";

function PostRoutines(){
    const [name,setName]=useState('')
    const [goal,setGoal]=useState('')

    const handleName = (event) =>{
        setName(event.target.value)
    }

    const handleGoal = (event) =>{
        setGoal(event.target.value)
    }

    async function postApi(props){
        try{
            const replyToken = localStorage.getItem('replyToken')
            const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines',{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${replyToken}`
                },
                body:JSON.stringify({
                    name,
                    goal,
                    isPublic:true
                })
            }).then(response => response.json()).then(result=>{
                console.log(result)
            })

        }catch(error){
            throw Error(error)
        }
    }



    return(
        <div>
            <form
            onSubmit={(event)=>{
                event.preventDefault();
                setName('')
                setGoal('')
            }}
            >
                <h3>Create new Routine</h3>
                <label>Name:
                    <input
                    onChange={handleName}
                    value={name}
                    placeholder="Enter Name of Routine"
                    />
                </label>
                <label>Goal:
                    <input
                    onChange={handleGoal}
                    value={goal}
                    placeholder="Enter description"
                    />
                </label>
                <button onClick={postApi}>Send!</button>
            </form>
        </div>
    )
}

export default PostRoutines;
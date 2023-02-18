function UserMe(){
    const user = localStorage.getItem('replyToken')

    async function getAct(){
        try{
            const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities`,{
                headers:{
                    'Content-Type' : 'application/json',
                }
            }).then(response => response.json()).then(result=>{
                console.log(result)
                console.log(result.includes('id'))
                for(let i = 0; i < result.length;i++){
                    console.log(result[i].id)
                }
            })
            
        }catch(error){
            throw Error(error)
        }
    }


    return(
        <form onSubmit={async(event)=>{
            event.preventDefault();

            try{
                const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/me',{
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${user}`
                    }
                }).then(response => response.json()).then(result=>{
                    console.log(result)
                    console.log(result.username)
                    localStorage.setItem('signedInUser',result.username)

                })

            }catch(error){
                throw Error(error)
            }

        }}>
            <button>TEST GETME</button>
            <button onClick={getAct}>New Test</button>
        </form>
  
    )
}

export default UserMe;
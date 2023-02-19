import { useEffect, useState } from "react"
import { LoggedUser, STORAGE_KEY } from "../API/AccountReq"

function UserMe() {
    const user = localStorage.getItem(`${STORAGE_KEY}`)
    const [userProfile, setUserProfile] = useState({})

    async function getActivities() {
        try {
            const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(response => response.json()).then(result => {
                console.log(result)
                console.log(result.includes('id'))
                for (let i = 0; i < result.length; i++) {
                    console.log(result[i].id)
                }
            })

        } catch (error) {
            throw Error(error)
        }
    }


    async function getMe() {
        try {
            const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/me', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user}`
                }
            })

            const json = response.json();

            // console.log(await json)
            // console.log(await json.username)
            return json

        } catch (error) {
            throw Error(error)
        }
    }

    //     try {
    //         const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/me', {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${user}`
    //             }
    //         }).then(response => response.json()).then(result => {
    //             localStorage.setItem('signedInUser', result.username)
    //             console.log(result)
    //             console.log(result.username)
    //             return result
    //         })

    //     } catch (error) {
    //         throw Error(error)
    //     }
    // }

    useEffect(() => {
        const getUserProfile = async () => {
            const profile = await getMe();
            setUserProfile(profile);
            console.log(localStorage.getItem(`${LoggedUser}`))
            console.log('response profile is:', profile)
            // console.log('username is:', profile.username)
        }
        getUserProfile();
    }, []);

    return (
        <div>
            <h3>Hi {userProfile.username}!</h3>

            <button onClick={getActivities}>New Test</button>
        </div>

    )
}

export default UserMe;

// import { useEffect, useState } from "react"

// function UserMe() {
//     const user = localStorage.getItem('replyToken')
//     const [userProfile, setUserProfile] = useState({})

//     async function getAct() {
//         try {
//             const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities`, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 }
//             }).then(response => response.json()).then(result => {
//                 console.log(result)
//                 console.log(result.includes('id'))
//                 for (let i = 0; i < result.length; i++) {
//                     console.log(result[i].id)
//                 }
//             })

//         } catch (error) {
//             throw Error(error)
//         }
//     }

//     useEffect(() => {
//         const getUserProfile = async () => {
//             const profile = await getAct();
//             setUserProfile(profile);
//             console.log(userProfile)
//         }
//         getUserProfile();
//     }, []);

//     return (
//         <form onSubmit={async (event) => {
//             event.preventDefault();

//             try {
//                 const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/me', {
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': `Bearer ${user}`
//                     }
//                 }).then(response => response.json()).then(result => {
//                     console.log(result)
//                     console.log(result.username)
//                     localStorage.setItem('signedInUser', result.username)

//                 })

//             } catch (error) {
//                 throw Error(error)
//             }

//         }}>
//             <button>TEST GETME</button>
//             <button onClick={getAct}>New Test</button>
//         </form>

//     )
// }

// export default UserMe;

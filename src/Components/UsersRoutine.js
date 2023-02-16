import { getRoutinesByUsername } from "../API/UsersReq";


function GetUsersRoutines() {
    return (
        <form onSubmit={async (event) => {
            event.preventDefault();

            try {
                const response = await getRoutinesByUsername()

            } catch (error) {
                throw Error(error)
            }
        }}>
            <button>TEST GETTING USER ROUTINES</button>
        </form>
    )
}

export default GetUsersRoutines;
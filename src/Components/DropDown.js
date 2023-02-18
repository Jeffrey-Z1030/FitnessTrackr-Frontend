import { useState } from "react"

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
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>) :null}

            </div>
        </div>
        </>
    )
}

export default DropDown
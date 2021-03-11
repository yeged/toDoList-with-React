import React, { useState, useCallback } from "react"
import CreateComponent from "./CreateComponent/CreateComponent"
import CardComponent from "./CardComponent/CardComponent"
import Information from "./InformationComponent/InformationComponent"

const Main = () => {

    const [check, setCheck] = useState(true)


    //Confirm Names
    const namesHandler = () => {
        setCheck(false)
    }


    return (
        <div>

            {check ? <Information onClick={namesHandler} /> :
                <div>
                    <CreateComponent />
                </div>}


        </div>

    )
}

export default Main;
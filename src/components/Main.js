import React, { useState, useCallback } from "react"
import CreateComponent from "./CreateComponent/CreateComponent"
import CardComponent from "./CardComponent/CardComponent"
import Information from "./InformationComponent/InformationComponent"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core"

library.add(faUser)

const Main = () => {

    const [check, setCheck] = useState(true)

    const fname = JSON.parse(localStorage.getItem('names')).fname
    const lname = JSON.parse(localStorage.getItem('names')).lname


    //Confirm Names
    const namesHandler = () => {
        setCheck(false)
    }


    return (
        <div>
            {check ? <Information onClick={namesHandler} /> : <div className="container">
                <div className="row">
                    <div className="col col-md-3">
                        <div className="row-content">
                            <div className="row">
                                <div className="col col-md col-lg-8" style={{ border: "1px solid black", height: "150px", borderRadius: "60%", backgroundColor: "lightgrey", overflow: "hidden" }}>
                                    <FontAwesomeIcon style={{ margin: "20px 0px" }} icon="user" size="8x" />
                                </div>
                                <div className="col col-md col-lg-4">
                                    <h4>{fname + " " + lname}</h4>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col col-md-9">
                        <div className="row">
 
                            <div className="col col-md-4">
                                <CreateComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Main;
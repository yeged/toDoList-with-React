import React, { useState, useCallback } from "react"
import CreateComponent from "./CreateComponent/CreateComponent"
import CardComponent from "./CardComponent/CardComponent"
import Information from "./InformationComponent/InformationComponent"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core"
import { useSelector, useDispatch } from "react-redux"
import * as listActions from "../store/actions/list"


library.add(faUser)

const Main = () => {

    const [check, setCheck] = useState(true)
    const [content, setContent] = useState("")


    const lists = useSelector(state => state.list.list)

    const fname = JSON.parse(localStorage.getItem('names')).fname
    const lname = JSON.parse(localStorage.getItem('names')).lname

    const dispatch = useDispatch()

    // Delete Card
    const deleteHandler = useCallback((id) => {
        dispatch(listActions.deleteList(id))
    }, [dispatch])


    // Add Title
    const onTitleChange = useCallback((e, id) => {
        dispatch(listActions.addTitle(id, e.target.value))
    }, [dispatch])


    //Add Item
    const onItemChange = useCallback((e, id) => {
        dispatch(listActions.addItem(id, e.target.value))
        setContent(e.target.value)
    })

    const addItem = useCallback((id) => {
        dispatch(listActions.applyItem(id, content, Math.random()))
        setContent("")
    })

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
                                <div className="col col-md col-lg-8" style={{border: "1px solid black", height: "150px", borderRadius: "60%", backgroundColor: "lightgrey", overflow: "hidden"}}>
                                    <FontAwesomeIcon style={{margin: "20px 0px"}} icon="user" size="8x" />
                                </div>
                                <div className="col col-md col-lg-4">
                                    <h4>{fname + " " + lname}</h4>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col col-md-9">
                        <div className="row">
                            {lists.map((value) => {
                                return (
                                    <div className="col col-md-4">
                                        <CardComponent
                                            key={value.id}
                                            id={value.id}
                                            title={value.title}
                                            content={value.content}
                                            onDelete={deleteHandler}
                                            titleValue={value.title}
                                            onTitleChange={onTitleChange}
                                            contentValue={value.content}
                                            onItemChange={onItemChange}
                                            addItem={addItem}
                                        />
                                    </div>
                                )
                            })}
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
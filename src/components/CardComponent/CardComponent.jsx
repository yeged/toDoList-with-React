import React, { useCallback } from "react"
import {
    Card, CardBody, Button, Form, FormGroup, Input
} from 'reactstrap';
import { useDispatch, useSelector } from "react-redux"
import * as listActions from "../../store/actions/list"



const CardComponent = (props) => {

    const dispatch = useDispatch()

    //Delete Card
    function handleClick(e) {
        props.onDelete(props.id);
        e.preventDefault()
    }


    return (
        <div >
            <Card>
                <Form>
                    <CardBody>
                        <div className="deleteContainer">
                            <Button color="danger" onClick={handleClick}>X</Button>
                        </div>
                        <FormGroup>
                            <div>
                                <input
                                    className="titleInput"
                                    name="title"
                                    value={props.titleValue}
                                    placeholder="Title"
                                    maxLength="15"
                                />
                            </div>
                        </FormGroup>
                    </CardBody>
                    <div className="row">
                        <div className="col col-md">
                            <FormGroup>
                                <input
                                    className="contentInput"
                                    name="content"
                                    value={props.contentValue}
                                    placeholder="New Item"
                                    maxLength="50"
                                />
                            </FormGroup>
                            <Button color="info" >Ekle</Button>
                        </div>
                    </div>
                </Form>
            </Card>
        </div>
    )
}

export default CardComponent
import React, {useCallback} from "react"
import {
    Card, CardBody, Button, Form, FormGroup, Input
} from 'reactstrap';
import { useDispatch, useSelector } from "react-redux"
import * as listActions from "../../store/actions/list"


const Element = (props) => {
    return (
        <div className="row" style={{ padding: "12px 0" }}>
            <div className="col col-md-1">
                <FormGroup check>
                    <Input type="checkbox" />
                </FormGroup>
            </div>
            <div className="col col-md-8">
                <p class="text-left" style={{ color: "#428BCA", fontWeight: "600" }}>{props.content} </p>
            </div>
            <div className="col col-md-2">
                <Button color="info" onClick={(e) => { props.deleteItem(e, props.contentId) }}>-</Button>
            </div>
        </div>

    )
}

const CardComponent = (props) => {

    const dispatch = useDispatch()

    let items = useSelector(state => state.list.items)

    //Delete Card
    function handleClick(e) {
        props.onDelete(props.id);
        e.preventDefault()
    }

    //Add Title
    const onTitleChange = (e) => {
        props.onTitleChange(e, props.id)
        e.preventDefault()
    }

    //Add Item
    const onItemChange = (e) => {
        props.onItemChange(e, props.id)
    }

    const addItem = (e) => {
        props.addItem(props.id)
        e.preventDefault()
    }

    const submitItem = (e) => {
        if (e.key === 'Enter') {
            props.addItem(props.id)
            e.preventDefault()
        }
    }

    //Delete Item
    const deleteItem = useCallback((e, contentId) => {
        dispatch(listActions.deleteItem(contentId))
        e.preventDefault()
    }, [dispatch])

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
                                    onChange={onTitleChange}
                                    placeholder="Title"
                                    maxLength="9"
                                />
                            </div>
                        </FormGroup>

                        {items.filter(value => value.id === props.id).map(value => {
                            return (
                                <Element contentId={value.contentId} content={value.content} deleteItem={deleteItem} />
                            )
                        })}
                    </CardBody>
                    <div className="row">
                        <div className="col col-md">
                            <FormGroup>
                                <input
                                    className="contentInput"
                                    name="content"
                                    value={props.contentValue}
                                    onChange={onItemChange}
                                    placeholder="New Item"
                                    maxLength="50"
                                    onKeyDown={submitItem}
                                />
                            </FormGroup>
                            <Button onClick={addItem} color="info" >Ekle</Button>
                        </div>
                    </div>


                </Form>

            </Card>
        </div>
    )
}

export default CardComponent
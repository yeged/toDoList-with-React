import React, {useCallback} from "react"
import {
    Card,  CardBody,
    CardTitle, Button
} from 'reactstrap';
import { useDispatch } from "react-redux"
import * as listActions from "../../store/actions/list"


const CreateComponent = (props) => {

    const dispatch = useDispatch()


    const submitHandler = useCallback(() => {
        dispatch(listActions.createList(Math.random()))
    }, [dispatch])

    return (
        <Card>
            <CardBody>
                <CardTitle tag="h1">New Project</CardTitle>
                <Button className="create-button" color="danger" onClick={submitHandler}> Create </Button>
            </CardBody>
        </Card>
    )
}

export default CreateComponent
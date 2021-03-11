import React, {useCallback} from "react"
import {
    Card,  CardBody,
    CardTitle, Button
} from 'reactstrap';


const CreateComponent = (props) => {

    return (
        <Card>
            <CardBody>
                <CardTitle tag="h1">New Project</CardTitle>
                <Button className="create-button" color="danger"> Create </Button>
            </CardBody>
        </Card>
    )
}

export default CreateComponent
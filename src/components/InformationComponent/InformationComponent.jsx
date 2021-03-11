import React, {useEffect, useState} from "react"
import {
    Button, Input, Label
} from 'reactstrap';

const Information = (props) => {

    const [names, setNames] = useState({
        fname:"",
        lname:""
    })

    function handleChange(event) {
        const { name, value } = event.target;
    
        setNames(prevNote => {
          return {
              ...prevNote,
            [name]: value
          };
        });
      }
      
      //persistance
      useEffect(() => {
        const localData = localStorage.getItem('names');
        setNames(JSON.parse(localData))
      }, [])

      useEffect(() => {
          localStorage.setItem('names', JSON.stringify(names))
      }, [names])

    return (
        <div className="container">
            <div className="row" style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: "350px" }}>
                    <Label>First Name : </Label>
                <div className="col col-md-3">
                    <Input name="fname" value={names.fname} onChange={handleChange} placeholder="First Name" />
                </div>
                    <Label>Last Name : </Label>
                <div className="col col-md-3">
                    <Input name="lname" value={names.lname} onChange={handleChange} placeholder="Last Name" />
                </div>
                <div className="col col-md-1">
                    <Button color="danger" onClick={props.onClick}>Confirm</Button>
                </div>
            </div>
        </div>
    )
}

export default Information
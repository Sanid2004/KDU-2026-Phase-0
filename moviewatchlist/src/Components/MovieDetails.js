import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form,FormGroup,Label,Input,Button,FormText } from "reactstrap";

const Moviedetails = ({addMovie})=>{

    const[MovieName,setMovieName] = useState("")
    const[Ratings,setRatings] = useState("⭐⭐⭐⭐⭐ (5 stars)")
    const navigate = useNavigate()

    const HandleSubmit = (e)=>{
        e.preventDefault()

        if(!MovieName.trim()){
            alert("Movie name cannot be empty")
            return
        }

        addMovie({
            name:MovieName,
            ratings:Ratings
        });
    }

    const HandleReset = ()=>{
        setMovieName("")
        setRatings("⭐⭐⭐⭐⭐ (5 stars)")
    }

    return (
        <div>
            <Form className="formclass color">
                <FormGroup>
                    <Label for="Movie Name"  className="myLabel">
                        Movie Name
                    </Label>
                        <Input
                            className="MovieName"
                            name="Name"
                            placeholder="Enter Movie Name"
                            type="text"
                            value={MovieName}
                            onChange={(e) => setMovieName(e.target.value)}
                        />
                </FormGroup>

                <FormGroup>
                    <Label for="Ratings"  className="myLabel">
                        Ratings
                    </Label>
                        <Input
                            className="MovieName"
                            name="select"
                            type="select"
                            value={Ratings}
                            onChange={(e) => setRatings(e.target.value)}
                        >
                        <option>
                            ⭐⭐⭐⭐⭐ (5 stars)
                        </option>
                        <option>
                            ⭐⭐⭐⭐ (4 stars)
                        </option>
                        <option>
                            ⭐⭐⭐ (3 stars)
                        </option>
                        <option>
                           ⭐⭐ (2 stars)
                        </option>
                        <option>
                            ⭐ (1 star)
                        </option>
                        </Input>
                </FormGroup>
                <div className="TextCenter2">
                <Button className="AddtoWatchList" onClick={HandleSubmit}>
                   + Add to WatchList
                </Button>
                <Button className="btn" onClick={HandleReset}>
                    Reset
                </Button>
                </div>
            </Form>
        </div>
    )
}

export default Moviedetails
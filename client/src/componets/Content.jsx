import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Content = (props) => {
    const {person, setPerson} = props;
    const {id} = useParams();
    // console.log(id);
    // console.log(person);
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/person/` + id) 
            .then((response) => {
                console.log("response", response);
                
                setPerson(response.data.general);

      
            })
            .catch((err) => console.log(err));
    }, [id]);

    return (
        <div>
           <h1> First Name: {person.first_name}</h1>
        </div>
    );
};

export default Content;
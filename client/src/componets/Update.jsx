import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Update = (props) => {
    const { id } = useParams();
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    console.log(id);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/person/${id}`) 
            .then((res) => {
                console.log(res.data);
                setFirstName(res.data.first_name);
                setLastName(res.data.last_name);
                setEmail(res.data.email);
      
            })
            .catch((err) => console.log(err));
    }, [id]);

    const submitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/person/${id}` , { first_name, last_name, email })
            .then((res) => {
                console.log("Update Data:", res)
                console.log("Data" , res.data)
                
                navigate("/"); 
                console.log("yay")
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return (
        <div>
            <h1>Change the Data and add a personal description.</h1>

            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input
                        type="text"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={first_name}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        type="text"
                        onChange={(e) => setLastName(e.target.value)}
                        value={last_name}/>
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}/>
                </div>
                <input type="submit"/>
            </form>
        </div>
    );
};

export default Update;
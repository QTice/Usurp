import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Create = (props) => {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
        e.preventDefault();
    

    
    axios.post("http://localhost:8000/api/person", { first_name, last_name, email})
        .then((res) => {
        setFirstName("");
        setLastName("");
        setEmail("");
        navigate("/")
    })

        .catch((err) => console.log("Somthing went wrong, with your Creation Quintilius 'console.log'"));

}
    return (
        <div className='form'>
        <form onSubmit={onSubmitHandler}>
            <h1 className='h'>Employ example</h1>
            <div className='form2'>
            <label>First Name:</label>
            <input
                 type='text'
                
                onChange={(e) => setFirstName(e.target.value)}
                value={first_name}
            />
            </div>
            <div className='form2'>
            <label>Last Name:</label>
            <input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                value={last_name}
            />
            </div>
            <div className='form2'>
            <label>Email:</label>
            <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            </div>
            <button type='submit'>Submit</button>
        </form>
        </div>
    );
}

export default Create;
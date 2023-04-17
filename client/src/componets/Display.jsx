import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Display =  (props) => {
  const [genList, setGenList] = useState([]);
  const navigate = useNavigate();
  const {person, setPerson} = props;
  
  
  
  
  useEffect(() => {
    axios.get(`http://localhost:8000/api/person`)
    .then((response) => {
      setGenList(response.data)
      setPerson(response.data)
      console.log("Response.data" , response.data)
    })
      .catch((err) => console.log(err))
                
    }, []);

   const deleteHandler = (id) => {
        axios
            .delete(`http://localhost:8000/api/person/${id}`)
            .then((res) => {setGenList(
                genList.filter((obj, i) => obj._id !==id)
            )} ) 
            
            .catch((err) => console.log("Error with Delete"));
    }
    return (
        <div className='content'>
          <table className='customers'>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Email</th>
                <th>Time Off</th>
                <th>Sick Time</th>
                <th>Hours Worked</th>
                <th>Account Actions</th>
              </tr>
            </thead>
            <tbody>
              {genList.map((Variable, index) => {
                return (
                  <tr key={Variable._id}>
                    <td><Link to={`/person/Content/${Variable._id}`}>{Variable.first_name} {Variable.last_name}</Link></td>
                    <td>{Variable.email}</td>
                    <td>{Variable.time_off}</td>
                    <td>{Variable.sick_time_off}</td>
                    {/* submitt handler for hourse worked will need ot be put in play. */}
                    <td>{}</td>
                    <td>
                      <button
                        onClick={() => deleteHandler(Variable._id)}>
                            DELETE
                        </button>
                        <button onClick={() => navigate(`/person/${Variable._id}`)}>
                            Edit
                        </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    };


export default Display
import {useState} from 'react';

import  Display from "../componets/Display";
import  Create from "../componets/Create";
// import  Update from "../componets/Update";



const Main = (props) => {
    const [pan, setPan] = useState([]);
    const {person, setPerson} = props;
    return (
        <>
            <div className='form'>

            <Display pan={pan} setPan={setPan} person={person} setPerson={setPerson}/>
            <Create pan={pan} setPan={setPan} person={person} setPerson={setPerson}/>
            </div>
        </>
    )
}
export default Main;
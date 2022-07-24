import {useContext} from 'react';
import SingleFormCard from "./SingleFormCard";
import mainContext from "../context/mainContext";


const FormsList = () => {
    const {allUsers} = useContext(mainContext)
    console.log(allUsers)
    return (
        <div>

        </div>
    );
};

export default FormsList;
import {useContext, useRef} from 'react';
import mainContext from "../context/mainContext";

const PostForm = () => {

    const {setAllUsers} = useContext(mainContext)

    const photoRef = useRef()
    const nameRef = useRef()
    const genderRef = useRef()

    function addForm() {

        const user = {
            photo: photoRef.current.value,
            name: nameRef.current.value,
            gender: genderRef.current.value
        }

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        }

        fetch("http://localhost:8000/createPost", options)
            .then(res => res.json())
            .then(data => {
                // setAllUsers(data.user)
                console.log(data.user)
            })
    }

    return (
        <div>
            <div>
                <input ref={photoRef} type="text" placeholder="Photo"/>
                <input ref={nameRef} type="text" placeholder="Name"/>
                <input ref={genderRef} type="text" placeholder="Gender"/>

                <button onClick={addForm}>Add Form</button>
            </div>
        </div>
    );
};

export default PostForm;
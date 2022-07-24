import './App.css';
import ProgressBar from "./components/ProgressBar";
import PostForm from "./components/PostForm";
import FormsList from "./components/FormsList";
import mainContext from "./context/mainContext";
import {useState} from "react";

function App() {

    const [allUsers, setAllUsers] = useState([])

  return (
      <mainContext.Provider value={{allUsers, setAllUsers}}>
          <div className="App">
              <ProgressBar/>
              <PostForm/>
              <FormsList/>
          </div>
      </mainContext.Provider>


  );
}

export default App;

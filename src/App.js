import { useState } from "react";
import "./App.css";
import Form from "./components/form";
import UsersList from "./components/users_list";
import Popup from "../src/components/popup";

function App() {
  const [list, updateList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("");

  const formdata = (data) => {
    if (data.username.trim().length === 0 || data.age === "") {
      setIsOpen(true);
      setType("invalidinput");
      return;
    }
    if (data.age <= 0) {
      setIsOpen(true);
      setType("invalidage");
      return;
    }
    updateList((prevState) => [data, ...prevState]);
  };

  let result = (<div></div>)
  if (isOpen) {
    result = (
      <Popup type={type} callbackfromApp={() => setIsOpen(false)}></Popup>
    );
  }

  return (
    <div>
      {result}
      <div>
        <section id="user-form" className="user-form">
          <Form callbackfromApp={formdata}></Form>
        </section>
        <section id="users">
          <UsersList list={list}></UsersList>
        </section>
      </div>
    </div>
  );
}

export default App;

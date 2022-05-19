import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";
function App() {
  const [usersList, setUserList] = useState([]);
  const addUserHandler = (user) => {
    setUserList((prev) => [...prev, user]);
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;

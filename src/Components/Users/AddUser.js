import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [isNegative, setIsNegative] = useState(false);
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsEmpty(true);
      return;
    }
    if (+enteredAge < 1) {
      setIsNegative(true);
      return;
    }
    props.onAddUser({
      id: Math.random().toString(),
      name: enteredUserName,
      age: enteredAge,
    });
    setEnteredAge("");
    setEnteredUserName("");
  };
  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const emptyOkayHandler = () => {
    setIsEmpty(false);
  };
  const negativeOkayHandler = () => {
    setIsNegative(false);
  };
  return (
    <div>
      {isEmpty && (
        <ErrorModal
          title="Empty Input!"
          message="Usename or Age is Empty!"
          okay={emptyOkayHandler}
        />
      )}
      {isNegative && (
        <ErrorModal
          title="Invalid Age!"
          message="Your Age should be grater than zero"
          okay={negativeOkayHandler}
        />
      )}

      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={enteredUserName}
            type="text"
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            value={enteredAge}
            type="number"
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;

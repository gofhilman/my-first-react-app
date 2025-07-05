import { useState } from "react";

function Person() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "",
    age: 100,
  });

  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  const handleFirstName = (e) => {
    setPerson({ ...person, firstName: e.target.value });
  };

  const handleLastName = (e) => {
    setPerson({ ...person, lastName: e.target.value });
  };

  return (
    <>
      <input
        type="text"
        value={person.firstName}
        onChange={handleFirstName}
        placeholder="First name"
      />
      <input
        type="text"
        value={person.lastName}
        onChange={handleLastName}
        placeholder="Last name"
      />
      <h1>{person.firstName}{person.lastName && " " + person.lastName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

export default Person;

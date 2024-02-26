import React from "react";
import { useState } from "react";
import UserData from "./UserData";
// import BkApp from "./BkApp";

function App() {
  const [formData, setFormData] = useState({ name: "", email: "", age: "" });
  const [formEntries, setFormEntries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCount((prevcount) => prevcount + 1);
    setFormEntries((prevEntries) => [...prevEntries, formData]);
    setFormData({ name: "", email: "", age: "" }); // Clear form fields after submission
    console.log("hello");
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUserData = formEntries.filter(
    (user) =>
      // console.log(user.name)
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div>
        <label>Sort By Name</label>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />

        <form onSubmit={handleSubmit}>
          <label>
            Name:{" "}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Email:{" "}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Age:{" "}
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        <UserData formCount={count} formEntries={filteredUserData} />
      </div>
    </>
  );
}

export default App;

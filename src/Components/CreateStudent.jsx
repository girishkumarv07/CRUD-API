import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../libraries/Axios";

const CreateStudent = () => {
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [std_id, setStdId] = useState("");
  let [email, setEmail] = useState("");
  let [courses, setCourses] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      let payload = { name, std_id, email, courses };
      await Axios.post(`/api/students`, payload);
      navigate("/get-students");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <main id="create">
        <article>
          <form action="" onSubmit={handleSubmit}>
            <h1>Create Student</h1> <br />
            <div>
              <label htmlFor="name">Name : </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter Name"
                required
              />
            </div>
            <div>
              <label htmlFor="std_id">
                Id :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
              <input
                type="text"
                id="std_id"
                value={std_id}
                onChange={e => setStdId(e.target.value)}
                placeholder="Enter ID"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email : </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter Email"
                required
              />
            </div>
            <div>
              <label htmlFor="courses">Courses : </label>
              <select
                name="courses"
                id="courses"
                multiple
                onChange={e => setCourses(e.target.value)}
                required
              >
                <option value="Javascript">Javascript</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="React">React</option>
              </select>
            </div>
            <br />
            <div>
              <button>Submit</button>
            </div>
          </form>
        </article>
      </main>
    </section>
  );
};

export default CreateStudent;

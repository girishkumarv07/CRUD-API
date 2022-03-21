import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "../libraries/Axios";

const UpdateStudent = () => {
  let { _id } = useParams();
  let [name, setName] = useState();
  let [std_id, setStdId] = useState();
  let [email, setEmail] = useState();
  let [courses, setCourses] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      let payload = await Axios.get(`/api/students/${_id}`);
      console.log(payload);
      let finalData = await payload.data.payload;
      let { name, std_id, email} = finalData;
      setName(name);
      setStdId(std_id);
      setEmail(email);
      console.log(finalData);
    };
    getData();
  }, [_id]);

  let editData = async e => {
    e.preventDefault();
    let payload = { name, std_id, email, courses };
    await Axios.put(`/api/students/${_id}`, payload);
    navigate("/get-students");
  };

  return (
    <section>
      <main id="create">
        <article>
          <form action="" onSubmit={editData}>
            <h1>Update Student Details</h1> <br />
            <div>
              <label htmlFor="name">Name : </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="std_id">
                Id :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <input
                type="text"
                id="std_id"
                value={std_id}
                onChange={e => setStdId(e.target.value)}
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
                required
              />
            </div>
            <div>
              <label htmlFor="courses">Courses : </label>
              <select
                name="courses"
                id="courses"
                multiple
                // value={courses}
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

export default UpdateStudent;

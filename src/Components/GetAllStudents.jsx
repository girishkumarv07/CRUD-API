import React, { useEffect, useState } from "react";
import Axios from "../libraries/Axios";

const GetAllStudents = () => {
  let [state, setState] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let getData = await Axios.get(`/api/students`);
        let finalData = await getData.data.payload;
        setState(finalData);
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <section id="table">
      {loading === true ? (
        "loading..."
      ) : (
        <article>
            <div>
              <h1>Students List</h1>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>ID</th>
                  <th>Email</th>
                  <th>Courses</th>
                </tr>
              </thead>
              <tbody>
                {state.map(e => {
                  return (
                    <tr key={e._id}>
                      <td>{e.name}</td>
                      <td>{e.std_id}</td>
                      <td>{e.email}</td>
                      <td>{e.courses}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </article>
      )}
    </section>
  );
};

export default GetAllStudents;

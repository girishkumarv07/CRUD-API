import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Axios from "../libraries/Axios";
import { FaTrashAlt, FaUserEdit } from "react-icons/fa";

const EditStudent = () => {
  let [state, setState] = useState([]);
  let [loading, setLoading] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    let getData = async () => {
      try {
        setLoading(true);
        let data = await Axios.get("/api/students");
        let finalData = await data.data.payload;
        setState(finalData);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getData();
  }, []);

  let deleteStudent = _id => {
    Axios.delete(`/api/students/${_id}`);
    window.location.assign('/edit-student');
  };

  return (
    <section id="table">
      {loading === true ? (
        "loading..."
      ) : (
        <article>
          <div>
            <h1>Edit Students Details</h1>
            <table>
              <thead>
                <th>Name</th>
                <th>ID</th>
                <th>Edit</th>
                <th>Delete</th>
              </thead>
              <tbody>
                {state.map(e => {
                  return (
                    <tr key={e._id}>
                      <td>{e.name}</td>
                      <td>{e.std_id}</td>
                      <td>
                        <span>
                          <Link to={`/update-student/${e._id}`}>
                            <FaUserEdit
                              style={{ cursor: "pointer", width: "100%" }}
                            />
                          </Link>
                        </span>
                      </td>
                      <td onClick={() => deleteStudent(e._id)}>
                        <span>
                          <FaTrashAlt
                            style={{ cursor: "pointer", width: "100%" }}
                          />
                        </span>
                      </td>
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

export default EditStudent;

import React from "react";
import { Link} from "react-router-dom";

const Sidebar = () => {
  return (
    <section id="sidebar">
      <article>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/create-student">Create student</Link>
        </div>
        <div>
          <Link to="/get-students">View all students</Link>
        </div>
        <div>
          <Link to="/edit-student">Edit students</Link>
        </div>
      </article>
    </section>
  );
};

export default Sidebar;

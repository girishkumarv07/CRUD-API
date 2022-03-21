import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import StudentRoutes from "./Routes/StudentRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <section>
        <div>
          <Navbar />
        </div>
        <article id="nav">
          <div>
            <Sidebar />
          </div>
          <div>
            <StudentRoutes />
          </div>
        </article>
      </section>
    </BrowserRouter>
  );
};

export default App;

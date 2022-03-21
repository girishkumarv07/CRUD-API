import React from "react";
import { useRoutes } from "react-router-dom";
import CreateStudent from "../Components/CreateStudent";
import EditStudent from "../Components/EditStudent";
import GetAllStudents from "../Components/GetAllStudents";
import Home from "../Components/Home";
import UpdateStudent from "../Components/UpdateStudent";

const StudentRoutes = () => {
  let StudentRoutes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "create-student",
      element: <CreateStudent />,
    },
    {
      path: "get-students",
      element: <GetAllStudents />,
    },
    {
      path: "edit-student",
      element: <EditStudent />,
    },
    {
      path: "update-student/:_id",
      element: <UpdateStudent />,
    },
  ]);
  return StudentRoutes;
};

export default StudentRoutes;

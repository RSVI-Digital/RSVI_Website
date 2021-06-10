import React, { useState } from "react";

import cx from "classnames";

import globalStyles from "../../../Assets/Global-Styles/bootstrap.min.module.css";

const WhatWeDo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const submitForm = (e) => {
    const newEntry = {
      name,
      email,
      department,
    };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  };
  return (
    <>
      <div
        id="first"
        style={{
          height: "600px",
          backgroundColor: "#F6DCBF",
          fontSize: "30px",
        }}
      >
        this is first
      </div>
      <div
        id="second"
        style={{
          height: "600px",
          backgroundColor: "#BCB2B6",
          fontSize: "30px",
        }}
      >
        this is second
      </div>
      <div
        id="third"
        style={{
          height: "600px",
          backgroundColor: "rgb(2,56,43)",
          fontSize: "30px",
        }}
      >
        this is third
      </div>
      <div
        id="fourth"
        style={{
          height: "600px",
          backgroundColor: "#CCDBD6",
          fontSize: "30px",
        }}
      >
        this is fourth
      </div>
    </>
  );
};

export default WhatWeDo;

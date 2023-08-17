import React from "react";

const FormDemo = () => {
  return (
    <>
      <div className="form" style={{ paddingTop: "20rem" }}>
        <form action="">
          <label htmlFor="uaername"> User Name </label>
          <br />
          <input type="text" required />
          <br />
          <label htmlFor="uaername"> phone </label>
          <br />
          <input type="text" required />
          <br />
          <label htmlFor="uaername"> email </label>
          <br />
          <input type="email" required />
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
};

export default FormDemo;

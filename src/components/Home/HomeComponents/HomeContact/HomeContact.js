import React from "react";
import { useForm } from "react-hook-form";

const HomeContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div
      className="container"
      style={{
        padding: "5rem 12rem",
        backgroundColor: "#3A4256",
        height: "500px",
      }}
    >
      <div className="text-center mb-5">
        <h5 style={{ color: "#14d1cc" }}>CONTACT US</h5>
        <h2 style={{ color: "white" }}>Always Connect with us</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          className="form-control"
          placeholder="email*"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span style={{ color: "red" }}>This field is required</span>
        )}
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="subject*"
          {...register("subject", { required: true })}
        />
        {errors.subject && <span>This field is required</span>}
        <br />
        <textarea
          className="form-control"
          placeholder="message*"
          row="3"
          {...register("message", { required: true })}
        />
        {errors.message && <span>This field is required</span>}
        <br />
        <div className="d-flex justify-content-center">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default HomeContact;

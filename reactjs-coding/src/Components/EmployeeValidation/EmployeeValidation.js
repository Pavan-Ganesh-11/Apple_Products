import React from "react";
import "./EmployeeValidation.css";
import { useForm } from "react-hook-form";

const EmployeeValidation = () => {
  const formValues = {
    name: "",
    email: "",
    empId: "",
    joiningDate: "",
  };

  const formDetails = useForm(formValues);
  const { register, control, handleSubmit, formState } = formDetails;
  const { errors } = formState;

  const validateDate = (value) => {
    let today = new Date();
    const inputDate = new Date(value);
    return inputDate <= today || "Joining Date cannot be in the future";
  }

  const onSubmitForm = (data) => {
    console.log(data)
  }

  return (
    <form
      className="layout-column align-items-center mt-20 "
      onSubmit={handleSubmit(onSubmitForm)}
    >
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-name"
      >
        <input
          className="w-100"
          type="text"
          name="name"
          placeholder="Name"
          data-testid="input-name-test"
          {...register("name", {
            required:
              "Name must be at least 4 characters long and only contain letters and spaces",
            pattern: {
              value: /^\S.*[a-zA-Z\s]{3,}$/g,
              message:
                "Name must be at least 4 characters long and only contain letters and spaces",
            },
          })}
        />
        {control.getFieldState("name").isTouched && (
          <p className="error mt-2">{errors.name?.message}</p>
        )}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-email"
      >
        <input
          className="w-100"
          type="text"
          name="email"
          placeholder="Email"
          {...register("email", {
            required: "Email must be a valid email address",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Email must be a valid email address",
            },
          })}
        />
        {control.getFieldState("email").isTouched && (
          <p className="error mt-2">{errors.email?.message}</p>
        )}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-employee-id"
      >
        <input
          className="w-100"
          type="text"
          name="employeeId"
          placeholder="Employee ID"
          {...register("empId", {
            required: "Employee ID must be exactly 6 digits",
            pattern: {
              value: /^\d{6}$/,
              message: "Employee ID must be exactly 6 digits",
            },
          })}
        />
        {control.getFieldState("empId").isTouched && (
          <p className="error mt-2">{errors.empId?.message}</p>
        )}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-joining-date"
      >
        <input
          className="w-100"
          type="date"
          name="joiningDate"
          placeholder="Joining Date"
          {...register("joiningDate", {
            required: "Joining Date cannot be in the future",
            validate: validateDate
          })}
        />
        {control.getFieldState("joiningDate").isTouched && (
          <p className="error mt-2">{errors.joiningDate?.message}</p>
        )}
      </div>
      <button data-testid="submit-btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default EmployeeValidation;

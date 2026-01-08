import { useState } from "react";
import { useForm } from "react-hook-form";
import type {SubmitHandler} from "react-hook-form";
import { addUser } from "../api/users";

type FormValues = {
  name: string;
  email: string;
}

export const AddUser = () => {
  const [id, setId] = useState(11);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const payload = { id, ...data };
    addUser(payload)
    setId(id + 1);
  };


  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="form-title">Register</h2>

      <div className="form-group">
        <label className="label">Name</label>
        <input
          className={`input ${errors.name ? "input-error" : ""}`}
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <span className="error-text">{errors.name.message}</span>
        )}
      </div>

      <div className="form-group">
        <label className="label">Email</label>
        <input
          className={`input ${errors.email ? "input-error" : ""}`}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <span className="error-text">{errors.email.message}</span>
        )}
      </div>

      <button className="button" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  )
}
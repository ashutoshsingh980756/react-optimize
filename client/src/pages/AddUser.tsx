import { useState } from "react";
import { useForm } from "react-hook-form";
import type {SubmitHandler} from "react-hook-form";
import { addUser } from "../api/users";
import type {UserList} from '../api/users'


export const AddUser = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UserList>();
  const [isError, setIsError] = useState<String>('');
  const [isSuccess, setIsSuccess] = useState<String>('');
  const onSubmit: SubmitHandler<UserList> = async (data) => {
    setIsError('');
    setIsSuccess('');
    const res = await addUser(data);
    try {
      setIsSuccess(res.message);
      reset()
    } catch(err: any) {
      setIsError(res.message);
    }
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

      {isSuccess && <p style={{ color: "green" }}>{isSuccess}</p>}
      {isError && <p style={{ color: "red" }}>{isError}</p>}
    </form>
  )
}
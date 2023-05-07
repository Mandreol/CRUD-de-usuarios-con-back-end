import React from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import "../styles/form.css";

const defaultValue = {
	mail: "",
	firs_name: "",
	last_name: "",
	email: "",
	birthday: "",
	password: "",
};

const FormUser = ({
	createNewUser,
	upDateInfo,
	editUserById,
	setUpDateInfo,
	showForm,
	setShowForm,
}) => {
	const { handleSubmit, register, reset } = useForm();
	const submit = (data) => {
		if (upDateInfo) {
			//update
			editUserById(upDateInfo.id, data);
			setUpDateInfo();
		} else {
			//Create
			createNewUser(data);
		}
		reset(defaultValue);
		setShowForm(false);
	};
	useEffect(() => {
		if (upDateInfo) reset(upDateInfo);
	}, [upDateInfo]);
	return (
		<>
			{showForm ? (
				<div className="form-container">
					{" "}
					(
					<form onSubmit={handleSubmit(submit)} className="form">
						<h2>{upDateInfo ? "Edit user" : "Create user"}</h2>
						<div>
							<label htmlFor="email">Email</label>
							<input id="email" type="text" {...register("email")} />
						</div>
						<div>
							<label htmlFor="password">Password</label>
							<input id="password" type="password" {...register("password")} />
						</div>
						<div>
							<label htmlFor="first_name">First name</label>
							<input id="first_name" type="text" {...register("firs_name")} />
						</div>
						<div>
							<label htmlFor="last_name">Last name</label>
							<input id="last_name" type="text" {...register("last_name")} />
						</div>
						<div>
							<label htmlFor="birthday">Birthday</label>
							<input id="birthday" type="date" {...register("birthday")} />
						</div>
						<button>{upDateInfo ? "Update user" : "Create new user"}</button>
					</form>
					){" "}
				</div>
			) : null}
		</>
	);
};

export default FormUser;

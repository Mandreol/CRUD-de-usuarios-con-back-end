import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import FormUser from "./components/FormUser";
import UserCard from "./components/UserCard";
import "./styles/button.css";
import "./styles/userCard.css";

const baseURL = "https://users-crud-glqx.onrender.com";

function App() {
	const [users, setUsers] = useState();
	const [upDateInfo, setUpDateInfo] = useState();
	const [showForm, setShowForm] = useState(false);

	const getAllUsers = () => {
		const URL = `${baseURL}/user/`;
		axios.get(URL).then((res) => setUsers(res.data));
	};

	useEffect(() => getAllUsers(), []);

	//función para crearu nuevo usuario
	const createNewUser = (data) => {
		const URL = `${baseURL}/user`;
		axios
			.post(URL, data)
			.then((res) => {
				console.log(res.data);
				getAllUsers();
			})
			.catch((err) => console.log(err));
	};
	//Función para elminar un suario
	const deleteCarById = (id) => {
		const URL = `${baseURL}/user/${id}/`;
		axios
			.delete(URL)
			.then((res) => {
				console.log(res.data);
				getAllUsers();
			})
			.catch((err) => console.log(err));
	};
	//Función para editar un usuario específico
	const editUserById = (id, data) => {
		const URL = `${baseURL}/user/${id}/`;
		axios
			.patch(URL, data)
			.then((res) => {
				console.log(res);
				getAllUsers();
			})
			.catch((err) => console.log(err));
	};
	return (
		<div className="App">
			<header className="header">
				<h1>Users Data Base</h1>
				<button class="icon-btn add-btn" onClick={() => setShowForm(true)}>
					<div class="add-icon"></div>
					<div class="btn-txt">Create User</div>
				</button>
			</header>
			<FormUser
				setShowForm={setShowForm}
				showForm={showForm}
				createNewUser={createNewUser}
				upDateInfo={upDateInfo}
				editUserById={editUserById}
				setUpDateInfo={setUpDateInfo}
			/>
			<section className="body">
				{users?.map((user) => (
					<UserCard
						setShowForm={setShowForm}
						user={user}
						key={user.id}
						deleteCarById={deleteCarById}
						setUpDateInfo={setUpDateInfo}
					/>
				))}
			</section>
		</div>
	);
}

export default App;

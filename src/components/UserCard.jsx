import React from "react";
import { FaTrashAlt, FaEdit, FaGift } from "react-icons/fa";

const UserCard = ({ user, deleteCarById, setUpDateInfo, setShowForm }) => {
	return (
		<div className="card">
			<h1>{`${user.first_name} ${user.last_name}`}</h1>
			<h3>{user.email}</h3>
			<h3>
				<FaGift /> {user.birthday}
			</h3>
			<span>
				<FaTrashAlt className="card__btn" onClick={() => deleteCarById(user.id)} />
				<FaEdit
					className="card__btn"
					onClick={() => {
						setUpDateInfo(user);
						setShowForm(true);
					}}
				/>
			</span>
		</div>
	);
};

export default UserCard;

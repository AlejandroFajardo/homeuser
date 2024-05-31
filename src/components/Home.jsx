import React, { useEffect, useState } from 'react';
import Card from './CardTurno';
import { useAuth } from "../context/AuthContext";
import { getTurns } from "../firebase/api";
import { useParams, useNavigate } from "react-router-dom";


export function Home() {

  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const [turns, setTurns] = useState([]);

  const getAllTurns = async () => {
    const querySnapshot = await getTurns();
    // onGetLinks((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach((doc) => {
      if (doc.data().user === user.displayName || doc.data().user === user.email){
        docs.push({ ...doc.data(), id: doc.id });
      }
    });
    setTurns(docs);
    // });
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
		getAllTurns();
	}, []);

  return (
		<>
			<br />
			<div className="d-flex align-items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="60"
					height="60"
					fill="currentColor"
					className="bi bi-person-fill"
					viewBox="0 0 16 16"
				>
					<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
				</svg>
				<div>
					<h6 style={{ margin: 0 }}>Bienvenido</h6>
					<h2 style={{ marginTop: 0 }}>{user.displayName || user.email}</h2>

					<button
						type="submit"
						className="btn btn-primary"
						style={{ width: "100%" }}
						onClick={handleLogout}
					>
						Cerrar sesión
					</button>
					<br />
				</div>
			</div>
			<br />
			<h3>Turnos agendados</h3>
			<br />
			<>
				{turns.map((turn) => (
					<div className="col-md-4" key={turn.id}>
						<Card turn={turn}/>
					</div>
				))}
			</>
			<br />
			<button
				type="submit"
				className="btn btn-primary"
				style={{ width: "100%" }}
        onClick={() => navigate("/AgendarTurnoUser")}
			>
				Agregar nuevo turno
			</button>
			<br />
		</>
	);
}

export default Home;

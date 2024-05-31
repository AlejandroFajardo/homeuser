import React, { useEffect, useState } from 'react';
import { deleteTurn, getTurnId, getTurns } from "../firebase/api";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";


const initialState = {
  user: "",
  hora: "",
  turn: "",
};
export const DetallesTurno = (props) => {

  const [turn, setTurn] = useState();
  const params = useParams();
  const navigate = useNavigate();

  const onDeleteTurn = async (id) => {
		if (window.confirm("Seguro quiere eliminar este turno")) {
			await deleteTurn(id);
			toast("turno eliminado satisfactoriamente", {
				type: "error",
				autoClose: 2000,
			});
		}
	};

  const getTurnById = async (id) => {
    try {
      const doc = await getTurnId(id);
      setTurn(...doc.data());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (props.id) {
      getTurnById(props.id);
    }
  }, [props.id]);

  

  return (
		<>
			{getTurnById(params.id)}
			<div className="container-fluid h-100 d-flex flex-column justify-content-center align-items-center">
				<br />
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="24"
					height="24"
					style={{
						position: "absolute",
						top: "10px",
						left: "10px",
						fontSize: "24px",
					}}
				>
					<path d="M0 0h24v24H0V0z" fill="none" />
					<path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
				</svg>
				<br />
				<h4>Dettalles del Turno {turn.turn}</h4>
				<div className="row justify-content-center align-items-center">
					<div className="col-12 text-center">
						<br />
						<br />
						<h5>Programado para </h5>
						<br />
						<div className="row">
							<div className="col text-center card">
								<div className="dia">
									<strong>{turn.hora}</strong>
									<br />
									dia
								</div>
							</div>
						</div>
					</div>
				</div>
				<button
					
					onClick={() => navigate(`/`)}
					className="btn btn-primary"
					style={{ width: "100%" }}
				>
					Volver al inicio
				</button>
				<button
					onClick={() => onDeleteTurn()}
					className="btn btn-danger"
					style={{ width: "100%" }}
				>
					Cancelar turno
				</button>
			</div>
		</>
	);
}

export default DetallesTurno;

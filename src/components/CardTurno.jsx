import React from 'react';
import { deleteTurn } from "../firebase/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function CardTurno({ turn }) {
  const navigate = useNavigate();

  const onDeleteTurn = async (id) => {
		if (window.confirm("Seguro quiere eliminar este turno")) {
			await deleteTurn(id);
			toast("turno eliminado satisfactoriamente", {
				type: "error",
				autoClose: 2000,
			});
      navigate("/");
		}
	};
  
  return (
		<div
			class="card text-white bg-info mb-3"
			key={turn.id}
      onClick={() => onDeleteTurn(turn.id)}
			style={{ maxwidth: " 18rem" }}
		>
			<div
				class="card-header text-center"
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				{turn.turn}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-three-dots-vertical"
					viewBox="0 0 16 16"
				>
					<path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
				</svg>
			</div>
			<div class="card-body">
				<div className="row">
					<div className=" col dia">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-calendar"
							viewBox="0 0 16 16"
							style={{ marginRight: "0.5em" }}
						>
							<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
						</svg>
						<p className="card-text" style={{ display: "inline-block" }}>
							{" "}
							{turn.hora}
						</p>
					</div>
					<div className=" col hora">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-clock-fill"
							viewBox="0 0 16 16"
							style={{ marginRight: "0.5em" }}
						>
							<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
						</svg>
						<p class="card-text" style={{ display: "inline-block" }}>
							{" "}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CardTurno;

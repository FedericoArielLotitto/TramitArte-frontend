import ButtonSubmitDesktop from "@/components/atomos/button/submit/defaultDesktop/ButtonSubmitDesktop"
import { Avatar } from "@mui/material"
import "./userCard.css"

const UserCardComponent = ({users, onDelete}) => {
 
    return(
    <>
        {users.map((user, index) => (
            <div className="request-card" key={index}>
                {/* <div className="card-info">
                    <Avatar src={user.image} style={{ width: "7em", height: "7em" }} />
                    <div className="user-info">
                        <p>{user.name}</p>
                    </div>
                </div>
                <div className="card-info">
                    <div className="user-info">
                        <p>ID: {user.id}</p>
                    </div>
                    <ButtonSubmitDesktop texto={"Aceptar"} event={() => onDelete(index)}/>
                </div> */}
                <div className="card-info">
                    <div className="user-info">
                        <div className="user-info-header">
                            <p>Solicitud de traducción</p>
                        </div>
                        <p>Nombre: {user.name}</p>
                        <p>Documento: {user.document}</p>
                        <p>Id de trámite: {user.id}</p>
                    </div>
                    <Avatar src={user.image} style={{ width: "15.6em", height: "15.6em" }} />
                </div>
                <div className="card-info">
                    <ButtonSubmitDesktop texto={"Aceptar"} event={() => onDelete(index)}/>
                    <ButtonSubmitDesktop texto={"Rechazar"} type={"cancel"} event={() => onDelete(index)}/>
                </div>
            </div>
        ))}
  </>
    )
}

export default UserCardComponent
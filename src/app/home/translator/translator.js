import UserCardComponent from "@/components/moleculas/userCard/userCard"
import "../tramite/tramite.css"
import "./translator.css"
import { Scrollbar } from "react-scrollbars-custom"

const TranslatorComponent = ({users, onDelete}) => {
    const handleDeleteUser = (index) => {
        const updatedUsers = [...users]
        updatedUsers.splice(index, 1)
        onDelete(updatedUsers)
      }

    return(
    <div className="translator-container">
        {users.length > 0 ? (
            // <div className="request-container">
            //     <div className="request-header">
            //         <p>Usuarios solicitando traducción</p>
            //     </div>
            //     <div className="request-card-container">
            //         <UserCardComponent users={users} onDelete={handleDeleteUser}/>
            //     </div>
            // </div>
            <Scrollbar style={{height: "100vh"}}>
                <div className="request-container">
                <div className="request-card-container">
                    <UserCardComponent users={users} onDelete={handleDeleteUser}/>
                </div>
                </div>
            </Scrollbar>
        ) : (
            <div className="card-container">
                <div className="card-no-iniciado">
                    <div className="mensaje">
                        <p>No hay solicitudes pendientes</p>
                    </div>
                </div>
            </div> 
        )}
    </div>
    )
}

export default TranslatorComponent
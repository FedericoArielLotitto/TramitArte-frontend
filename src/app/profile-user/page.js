"use client"

import { Avatar, Button } from "@mui/material"
import "./profile-user.css"
import BadgeIcon from '@mui/icons-material/Badge';
import CakeIcon from '@mui/icons-material/Cake';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from "next/navigation";

const infoIconStyle = {
    height:"2.4rem",
    width:"2.4rem",
    color:"#002B5B"
}

const buttonStyle = {
    width: "3.75rem",
    height: "3.75rem",
    backgroundColor: "white",
    borderRadius: "30px",
    color: "#002B5B",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

class User {
    constructor(name, id, image, birthdate, username) {
      this.name = name;
      this.id = id;
      this.image = image;
      this.birthdate = birthdate;
      this.username = username
    }
  }

const user1 = new User(
    "Estéban Echeverría", 
    0, 
    "https://img.freepik.com/fotos-premium/vista-lateral-perfil-retrato-hombre-barbudo-joven-guapo-tranquilo-serio-camisa-negra-pie-mirando-adelante-tiro-estudio-interior-aislado-sobre-fondo-pared-blanca-clara_2221-7780.jpg",
    "25/10/1995",
    "Mateador Argentino")

const UserProfile = () => {
    const router = useRouter();

    return(
        <div className="profile-container">
            <div className="profile">
                <div className="close-container">
                    <Button style={buttonStyle} onClick={() => router.back()}>
                        <CloseIcon style={{width:"1.6rem", height:"1.6rem"}}/>
                    </Button>
                </div>
                <div className="photo-name">
                    <Avatar style={{width:"7rem", height:"7rem", border:"5px solid #1A5F7A"}} src={user1.image}/>
                    <div className="username">
                        {user1.username}
                    </div>
                </div>
                <div className="full-name">
                    <BadgeIcon style={infoIconStyle}/>
                    <div className="profile-info">
                        {user1.name}
                    </div>
                </div>
                <div className="birthdate">
                    <CakeIcon style={infoIconStyle}/>
                    <div className="profile-info">
                        {user1.birthdate}
                    </div>
                </div>
                <div className="edit-container">
                    <Button style={buttonStyle}>
                        <EditIcon style={{width:"1.6rem", height:"1.6rem"}}/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
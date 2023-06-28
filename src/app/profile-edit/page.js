"use client"

import { Avatar, Button, TextField } from "@mui/material"
import "../profile-user/profile-user.css"
import"./page.css"
import BadgeIcon from '@mui/icons-material/Badge';
import CakeIcon from '@mui/icons-material/Cake';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from "next/navigation";
import DoneIcon from '@mui/icons-material/Done';
import { useState } from "react";

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

const UserProfileEdit = () => {
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
                    <Avatar style={{width:"7rem", height:"7rem", border:"5px solid #1A5F7A"}}/>
                    <div className="username-edit">
                        <CustomTextField label={"Username"}/>
                    </div>
                </div>
                <div className="full-name">
                    <BadgeIcon style={infoIconStyle}/>
                    <div className="profile-info-edit">
                        <CustomTextField label={"Full name"}/>
                    </div>
                </div>
                <div className="birthdate">
                    <CakeIcon style={infoIconStyle}/>
                    <div className="profile-info-edit">
                        <CustomTextField label={"Birthdate"}/>
                    </div>
                </div>
                <div className="edit-container">
                    <Button style={buttonStyle} onClick={() => router.back()}>
                        <DoneIcon style={{width:"1.6rem", height:"1.6rem"}}/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

const CustomTextField = ({ label, ...other }) => {
    const [touched, setTouched] = useState(false)
  
    return (
      <TextField
        className="edit-input"
        style={{
          backgroundColor: '#ffffff',
          width: '100%',
          marginTop: '20px',
        }}
        label={label}
        size="small"
        {...other}
        error={(touched || other.buttonTouched)}
        onBlur={() => setTouched(true)}
      />
    )
  }

export default UserProfileEdit
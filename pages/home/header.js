import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { InputAdornment, TextField } from "@mui/material";

export const HeaderComponent = () =>{
    return(<div class="header">
          <div class="logo">
            Logo de la aplicacion
          </div>
          <div class="header-button" style={{display: "flex"}}>
            <div class="search-button" >
              <TextField
                class="search-input"
                placeholder="Buscar..."
                variant="outlined"
                style={{color:"white"}}
                sx={ {
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: 'none'
                    },
                  },'& input': {
                    color: '#F6F4FF',
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchOutlinedIcon style={{color:"#F6F4FF", width:"33px", height:"33px"}}/>
                    </InputAdornment>
                  ),
                }}
              />
            </div >
            <div className="other-button">
              <AccountBoxOutlinedIcon style={{width:"33px", height:"33px"}}></AccountBoxOutlinedIcon>
            </div>
            <div className="other-button">
              <LogoutOutlinedIcon style={{width:"33px", height:"33px"}}></LogoutOutlinedIcon>
            </div>
           </div>
        </div>)
}
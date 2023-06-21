import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import "./header.css"
import Logo from '@/components/atomos/logo/Logo';

export const HeaderComponent = () => {
    return(<div class="header">
          <div class="logo">
            <Logo width={'60%'} />
          </div>
          <div class="header-button" style={{display: "flex"}}>
            <div className="other-button">
              <AccountBoxOutlinedIcon style={{width:"33px", height:"33px"}}></AccountBoxOutlinedIcon>
            </div>
            <div className="other-button">
              <LogoutOutlinedIcon style={{width:"33px", height:"33px"}}></LogoutOutlinedIcon>
            </div>
           </div>
        </div>)
}

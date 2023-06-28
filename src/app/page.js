"use client";

import { UserProvider } from "@auth0/nextjs-auth0/client";
import LoginIcon from '@mui/icons-material/Login';
import Logo from '@/app/components/atomos/logo/Logo'
import "./home-page.css";
import { useMediaQuery } from "@mui/material";

export default function Home() {
  const esMobile = useMediaQuery("(max-width: 576px)");

  return (
    <UserProvider>
      <main className="main">
        <div className="marca marca__disposicion marca__background">
          <section className="marca--h1__disposicion">
            <h1 className="marca--titulo__resaltado">
              TRAMITARTE
            </h1>
          </section>
          <a
            href="/api/auth/login"
            className=""
            // target="_blank"
            rel="noopener noreferrer"
          >
            {esMobile ? <LoginIcon></LoginIcon> : <h2>Iniciar Sesi&oacute;n</h2>}
          </a>
          {/* <a
            href="/api/auth/logout"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Logout <span>-&gt;</span>
            </h2>
          </a> */}
        </div>
        <div className="centrado">
          <Logo
            height={"50%"}
            width={esMobile ? "70%" : "25%"}
            customClass="ball"
          />
        </div>
      </main>
    </UserProvider>
  );
}

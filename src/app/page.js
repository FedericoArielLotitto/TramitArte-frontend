import { UserProvider } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <UserProvider>
      <main className={styles.main}>
        <div className={styles.description}>
          <div className={styles.center}>
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </div>

          <div className={styles.grid}>
            <a
              href="/api/auth/login"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
              >
              <h2>
                logIn <span>-&gt;</span>
              </h2>
            </a>

            <a
              href="/api/auth/logout"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Logout <span>-&gt;</span>
              </h2>
            </a>
          </div>
        </div>
      </main>
   
              </UserProvider>
  );
}

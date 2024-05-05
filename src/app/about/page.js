import { Roboto } from "next/font/google";
import Image from "next/image";
import styles from "./page.module.css";
import photo from "../../img/foto_personal.png"

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
})

export const metadata = {
  title: "David Pérez Ruiz - Sobre mí",
}

export default function Home() {
  return (
    <main className={`${styles.main} ${roboto.className}`}>
      
      <div className={styles.presentation}>
        <Image
          src={photo}
          alt="Foto de David"
          width={120}
        />
        <div className={styles.intro}>
          <p>Mi nombre es <span>David Pérez Ruiz</span>. Vivo en Córdoba, España.</p>
          <p>
            Me he formado como <span>Técnico Superior en Desarrollo de Aplicaciones Web</span> con
            especialidad en <span>desarrollo front-end</span>.
          </p>
          <p>
            Trabajo principalmente como <span>diseñador de páginas web</span>. Actualmente tengo
            un perfil junior, pero deseo aprender más y seguir creciendo como programador.
            </p>
        </div>
      </div>

      <div className={styles.tools}>

        <h2 className={styles.h2}>Mis herramientas de desarrollador</h2>

        <h3 className={styles.h3}>Desarrollo web</h3>

        <ul className={styles.list}>
          <li>HTML 5</li>
          <li>CSS 3</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>

        <h3 className={styles.h3}>Herramientas de trabajo</h3>

        <ul className={styles.list}>
          <li>GIT</li>
          <li>Kanban</li>
          <li>Metodologías ágiles</li>
        </ul>

        <h3 className={styles.h3}>Otras herramientas conocidas</h3>

        <ul className={styles.list}>
          <li>SQL</li>
          <li>PHP</li>
        </ul>
      </div>

    </main>
  );
}

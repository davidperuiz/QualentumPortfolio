import { Jost } from "next/font/google";
import { Roboto } from "next/font/google";
import Image from "next/image";
import styles from "./page.module.css";
import photo from "../img/foto_pc.png"

const jostBold = Jost({
  weight: "700",
  subsets: ["latin"]
});

const jostSemiBold = Jost({
  weight: "600",
  subsets: ["latin"]
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
})

export const metadata = {
  title: "David Pérez Ruiz",
}

export default function Home() {
  return (
    <main className={`${styles.main} ${roboto.className}`}>

      <header className={styles.header}>
        <Image
          src={photo}
          alt="Foto de David trabajando en el ordenador"
          width={500}
        />
        <h1 className={`${styles.h1} ${jostBold.className}`}>
          David Pérez Ruiz,<br/><span>desarrollador front-end</span>
        </h1>
      </header>

      <div className={`${styles.slogan} ${jostSemiBold.className}`}>
        <span>Creatividad</span> en código, diseño con <span>impacto</span>
      </div>

      <p className={styles.p}>
        Soluciones para la experiencia de su página web:<br/>
        proyectos innovadores que fusionan el cuidado del diseño con la calidad de su funcionalidad.
      </p>
    </main>
  );
}

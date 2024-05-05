import { Jost } from "next/font/google";
import { Roboto } from "next/font/google";
import styles from "./page.module.css";

const jostBold = Jost({
  weight: "700",
  subsets: ["latin"]
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
})

export const metadata = {
  title: "David Pérez Ruiz - Proyectos",
}

export default function Home() {
  return (
    <main className={`${styles.main} ${roboto.className}`}>
      
      <h1 className={`${styles.h1} ${jostBold.className}`}>Hello World!</h1>

      <p className={styles.p}>
        Te doy la bienvenida a mi carpeta de proyectos. En cada uno he volcado toda mi dedicación y
        creatividad para lograr un resultado que satisfaga a mis clientes. Explora cuanto gustes.
        ¡El próximo proyecto que aparezca puede ser el tuyo!
      </p>

      <div className={styles.projectList}>
        <div className={`${styles.projectCard} ${styles.projectSarga} ${jostBold.className}`}>Mercería Sarga</div>
        <div className={`${styles.projectCard} ${styles.projectKaisSa} ${jostBold.className}`}>Restaurante Chino Kais Sa</div>
        <div className={`${styles.projectCard} ${styles.projectFarmiga} ${jostBold.className}`}>Perfumería Farmiga</div>
        <div className={`${styles.projectCard} ${styles.projectVillaverde} ${jostBold.className}`}>Reformas Villaverde</div>
        <div className={`${styles.projectCard} ${styles.projectCafe} ${jostBold.className}`}>Cafetería del Rectorado</div>
        <div className={`${styles.projectCard} ${styles.projectZoey} ${jostBold.className}`}>Tienda de golosinas de la Tía Zoey</div>
        <div className={`${styles.projectCard} ${styles.projectFurry} ${jostBold.className}`}>Peluquería Canina Nick Furry</div>
      </div>

    </main>
  );
}

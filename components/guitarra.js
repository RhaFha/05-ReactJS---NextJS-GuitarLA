import Image from "next/image";
import Link from "next/link";
import styles from '../styles/guitarras.module.css';

function Guitarra({guitarra}) {
  const {id,  attributes: {descripcion, imagen, precio, url, nombre} } = guitarra;
  return (
    <div className={styles.guitarra}>
      <Image src={imagen.data.attributes.formats.medium.url} alt="Imagen de guitarra" width={600} height={400} />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <Link href={`/guitarras/${url}`} legacyBehavior>
          <a className={styles.enlace}>
            Ver producto
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Guitarra

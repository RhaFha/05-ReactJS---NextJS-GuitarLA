import Link from "next/link";
import styles from '../styles/footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.navegacion}>
          <Link href={'/'} legacyBehavior>
            Inicio
          </Link>
          <Link href={'/nosotros'} legacyBehavior>
            Nosotros
          </Link>
          <Link href={'/blog'} legacyBehavior>
            Blog
          </Link>
          <Link href={'/tienda'} legacyBehavior>
            Tienda
          </Link>
        </nav>
        <p className={styles.copyrigth}>Todos los derechos reservados {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer

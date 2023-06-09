import {useRouter} from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/header.module.css';

function Header() {

  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
          <Link href={'/'}>
            <Image src={'/img/logo.svg'} alt='logo' width={300} height={40} />
          </Link>
        <nav className={styles.navegacion} >
          <Link href={'/'} legacyBehavior>
            <a className={router.pathname === '/' ? styles.active : ''}>Inicio</a> 
          </Link>
          <Link href={'/nosotros'} legacyBehavior>
            <a className={router.pathname === '/nosotros' ? styles.active : ''}>Nosotros</a> 
          </Link>
          <Link href={'/tienda'} legacyBehavior>
            <a className={router.pathname === '/tienda' ? styles.active : ''}>Tienda</a> 
          </Link>
          <Link href={'/blog'} legacyBehavior>
            <a className={router.pathname === '/blog' ? styles.active : ''}>Blog</a> 
          </Link>
          <Link href={'/carrito'} legacyBehavior>
            <a className={router.pathname === '/blog' ? styles.active : ''}>
              <Image src={'/img/carrito.png'} alt='carrito' width={30} height={25} />
            </a> 
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header

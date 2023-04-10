import Link from "next/link";
import Image from "next/image";
import styles from '../styles/blog.module.css';
import { formatearFecha } from "@/utils/helpers";

function Post({post}) {
    const {id, attributes: {contenido, imagen, titulo, url, publishedAt}} = post;
  return (
    <article>
        <Image src={imagen.data.attributes.formats.medium.url} alt="imagen" width={600} height={400}/>
        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.resumen}>{contenido}</p>
            <Link href={`/blogs/${url}`} legacyBehavior>
                <a className={styles.enlace}>
                    Leer Post
                </a>
            </Link>
        </div>
    </article>
  )
}

export default Post

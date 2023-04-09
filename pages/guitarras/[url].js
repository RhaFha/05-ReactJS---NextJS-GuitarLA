import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout";
import styles from '../../styles/guitarras.module.css'

function Producto({guitarra}) {
    const {id, attributes: {nombre, descripcion, precio, imagen, url}} = guitarra[0];
  return (
    <Layout
        title={`GuitarLA - ${nombre}`}
    >
        <div className={styles.guitarra}>
      <Image src={imagen.data.attributes.url} alt="Imagen de guitarra" width={600} height={400} />
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

    </Layout>
  )
}

export default Producto

export async function getStaticPaths(){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
    const { data } = await respuesta.json();

    const paths = data.map( guitarra => ({
        params: {
            url: guitarra.attributes.url,
        }
    }));

    return{
        paths,
        fallback: false,

    }

}

export async function getStaticProps({params: {url}}){
    
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
    const {data: guitarra} = await respuesta.json()

    return{
        props: {guitarra}
    }

}

// export async function getServerSideProps({query: {url}}){
    
//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
//     const {data: guitarra} = await respuesta.json()

//     return{
//         props: {guitarra}
//     }

// }

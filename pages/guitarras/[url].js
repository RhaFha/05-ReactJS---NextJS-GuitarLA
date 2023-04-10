import { useState } from "react";
import Image from "next/image";
import Layout from "@/components/layout";
import styles from '../../styles/guitarras.module.css'

function Producto({guitarra, agregarCarrito}) {
    const {id, attributes: {nombre, descripcion, precio, imagen, url}} = guitarra[0];
    const [cantidad, setCantidad] = useState(0);

    const handleSubmit = e => {
      e.preventDefault();
      if(cantidad < 1){
        alert('Cantidad no valida!');
        return;
      }

      const guitarraSelecionada = {
        id,
        imagen: imagen.data.attributes.url,
        nombre,
        precio,
        cantidad,

      }

      agregarCarrito(guitarraSelecionada);
    }

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
        <form 
          className={styles.formulario}
          onSubmit={e => handleSubmit(e)}
        >
          <label htmlFor="cantidad">Cantidad:</label>
          <select 
            id="cantidad"
            onChange={e => setCantidad(Number(e.target.value))}
          >
            <option value={''}>--- Selecione una opcion ---</option>
            <option value={'1'}>1</option>
            <option value={'2'}>2</option>
            <option value={'3'}>3</option>
            <option value={'4'}>4</option>
          </select>
          <input type="submit" value={'Agregar al carrito'} />
        </form>
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

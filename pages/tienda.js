import Layout from "@/components/layout";
import Guitarra from "@/components/guitarra";
import styles from '../styles/grid.module.css';

function Tienda({ guitarras }) {
  return (
    <>
      <Layout
        title='Guitarra LA - Tienda'
        description="Pagina de guitarras"
      >

        <main className="contenedor">
          <h1 className="heading">Nuesta colección</h1>
          <div className={styles.grid}>

            {
              guitarras?.map(guitarra => (
                <Guitarra
                  guitarra={guitarra}
                  key={guitarra.id}
                />
              ))
            }

          </div>
        </main>
      </Layout>
    </>
  )
}

export default Tienda;

// export async function getStaticProps(){
//   const respiuesta = await fetch(`${process.env.API_URL}/guitarras`);
//   const {data: guitarras} = await respiuesta.json();
//   return {
//     props: {guitarras},
//   }
// }

export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`); console.log(respuesta);
  const { data: guitarras } = await respuesta.json();
  //const guitarras = [];
  return {
    props: { guitarras },
  }
}

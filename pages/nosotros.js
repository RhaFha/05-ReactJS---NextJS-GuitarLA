import Image from "next/image";
import Layout from "@/components/layout";
import styles from '../styles/nosotros.module.css';

function Nosotros() {
  return (
      <Layout
        title='GuitarLA - Nosotros'
        description='Blog de musicas'
      >
        <main className="contenedor">
          <h1 className="heading">Nosotros</h1>
          <div>

            <div className={styles.contenido} >
              <Image alt="Imagen de nosotros" src={'/img/nosotros.jpg'} width={1000} height={800} />
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget pellentesque orci. Quisque feugiat blandit lobortis. Aliquam mollis euismod velit, vel elementum lorem placerat eget. Curabitur nec felis diam.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget pellentesque orci. Quisque feugiat blandit lobortis. Aliquam mollis euismod velit, vel elementum lorem placerat eget. Curabitur nec felis diam.</p>
              </div>
            </div>
          </div>
        </main>
      </Layout>
  )
}

export default Nosotros

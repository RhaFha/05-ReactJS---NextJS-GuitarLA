import { useState, useEffect } from 'react';
import Image from 'next/image';
import Layout from '@/components/layout';
import styles from '../styles/carrito.module.css';

function Carrito({ carrito, actualizarCantidad, eliminarProducto }) {

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0);
    setTotal(newTotal);
  }, [carrito])

  return (
    <Layout
      titulo={'GuitarLA - Carrito'}
    >
      <main className='contenedor'>
        <h1 className='heading'>Carrito de compras</h1>

        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Articulos</h2>
            {carrito?.length === 0 ? 'Carrito vacio!' : (
              carrito?.map(producto => (
                <div key={producto.id} className={styles.producto}>
                  <div>
                    <Image src={producto.imagen} alt='Carrito' width={250} height={480} />
                  </div>
                  <div>
                    <p className={styles.nombre}>{producto.nombre}</p>
                    <div className={styles.cantidad}>
                      <p>Cantidad: </p>
                      <select
                        className={styles.select}
                        onChange={e => actualizarCantidad({
                          cantidad: Number(e.target.value),
                          id: producto.id
                        })}
                        value={producto.cantidad}
                      >
                        <option value={'1'}>1</option>
                        <option value={'2'}>2</option>
                        <option value={'3'}>3</option>
                        <option value={'4'}>4</option>
                      </select>
                    </div>
                    <p className={styles.precio}>$<span>{producto.precio}</span></p>
                    <p className={styles.subtotal}>Subtotal: $<span>{producto.cantidad * producto.precio}</span></p>
                  </div>
                  <button className={styles.eliminar} type='button' onClick={() => eliminarProducto(producto.id)}>x</button>
                </div>
              ))
            )}
          </div>
          <aside className={styles.resumen}>
            <h3>Resumen del pedido</h3>
            <p>Total a pagar: ${total}</p>
          </aside>
        </div>
      </main>
    </Layout>
  )
}

export default Carrito

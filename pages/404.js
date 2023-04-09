import Layout from "@/components/layout";
import Link from "next/link";

function Pagina404() {
  return (
    <Layout
        title="Pagina no encontrada"
    >
      <p className="error">Pagina no encontrada</p>
      <Link href={'/'} legacyBehavior>
        <a className="error-enlace">
            Ir a inicio
        </a>
      </Link>
    </Layout>
  )
}

export default Pagina404

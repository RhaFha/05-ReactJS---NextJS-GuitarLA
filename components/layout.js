import Head from "next/head"
import React, {ReactNode} from "react"

import Header from "./header";
import Footer from "./footer";

function Layout({children , title='', description=''}) {
  return (
    <>
    <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
    </Head>
    <Header />
      {children}
    <Footer />
    </>
  )
}

export default Layout;

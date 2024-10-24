// import Header from "@/components/Header"
// import Footer from "@/components/Footer"
// import Head from "next/head"; 
// export default function Form({children}){
//   return(
//     <>
//     <Head>
//       <title>Blog</title>
//     </Head>
//     <Header></Header>
//     <main>{children}</main>
//     <br></br><br></br>
//     <Footer></Footer>
//     </>
//   )
// }

import React, { ReactNode } from "react";
import Footer from "@/components/Footer";
import Head from "next/head";
import Header from "@/components/Header";

interface FormProps {
  children: ReactNode;  // Define the type for children
}

export default function Form({ children }: FormProps) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Header />
      <main>{children}</main>
      <br />
      <br />
      <Footer />
    </>
  );
}

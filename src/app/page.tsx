import Head from "next/head";
import Form from "@/layo/Form";
import Plant from "@/components/Plants";
import Section1 from "@/components/Section1";
import IndoorPlants from "@/components/IndoorPlants";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Your page description here" />
      </Head>
      
      <Form>
      
        <Section1 />
        <Plant/>
        <IndoorPlants/>
       
      </Form>
    </>
  );
}

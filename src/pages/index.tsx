import { lazy, Suspense } from "react";
import Head from "next/head";
import { endpoint } from "@/utils/endpoint";
import { HomeProps } from "@/utils/interface";

const HeroSection = lazy(() => import("@/components/HeroSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ProductSection = lazy(() => import("@/components/ProductSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Home = ({ products }: HomeProps) => (
  <>
    <Head>
      <title>ElectroStore - Pusat Elektronik Murah</title>
      <meta
        name="description"
        content="Tempat tersedianya produk elektronik bermerk dan berkualitas dengan harga terjangkau. Happy Shopping!"
      />
    </Head>
    <Suspense fallback={<div>Loading Hero Section...</div>}>
      <HeroSection />
    </Suspense>
    <Suspense fallback={<div>Loading About Section...</div>}>
      <AboutSection />
    </Suspense>
    <Suspense fallback={<div>Loading Products...</div>}>
      <ProductSection products={products} />
    </Suspense>
    <Suspense fallback={<div>Loading Contact Section...</div>}>
      <ContactSection />
    </Suspense>
    <Suspense fallback={<div>Loading Footer...</div>}>
      <Footer />
    </Suspense>
  </>
);

export default Home;

export async function getServerSideProps() {
  try {
    const response = await endpoint.getProduct();
    const products = response.data.products;
    console.log({ products });

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error("Error fetching API:", error);
    return {
      props: {
        products: [],
      },
    };
  }
}

import { useRouter } from "next/router";
import { endpoint } from "@/utils/endpoint";
import Head from "next/head";
import dynamic from "next/dynamic";
import { ProductDetailInterface } from "@/utils/interface";
import { GetServerSidePropsContext } from "next";

const ImageCarousel = dynamic(() => import("@/components/ImageCarousel"), {
  ssr: false,
});

export default function ProductDetail({
  product,
}: {
  product: ProductDetailInterface;
}) {
  const router = useRouter();

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto py-32 px-4">
      <Head>
        <title>ElectroStore - {product.title}</title>
        <meta name="description" content={product.description} />
      </Head>
      <button
        onClick={() => router.back()}
        className="text-blue-600 underline mb-4"
      >
        Back
      </button>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          {product.images.length > 0 ? (
            <ImageCarousel images={product.images} />
          ) : (
            <p>No additional images available.</p>
          )}
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {product.title}
          </h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-lg font-bold text-blue-600 mb-4">
            Rp. {product.price.toFixed(2)}
          </p>
          <span className="px-4 py-2 rounded-full text-white bg-red-500">
            {product.availabilityStatus}
          </span>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.params!;
  try {
    const response = await endpoint.getProductDetail(id as string);
    return {
      props: {
        product: response.data,
      },
    };
  } catch (error) {
    console.error("Failed to fetch product details:", error);
    return {
      notFound: true,
    };
  }
}

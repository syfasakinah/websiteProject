// import ProductsCards from "@/components/ProductsCards";
import ProductCard from "../components/ProductCard";
import { createClient } from "contentful";

async function getProducts() {
  try {
    const client = createClient({
      space: "8islx0y7lf8u",
      accessToken: "SUPmM9KbILxw23UsrYD1qQD7lUFB1T8F0ECSO4Uxa4s",
    });
    const res = await client.getEntries({ content_type: "companyProfile" });
    return res.items;
  } catch (error) {
    console.error(error);
    return []; // Handle error gracefully, return empty array or handle error state in UI
  }
}

export default async function Home() {
  const products = await getProducts();
  
  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.sys.id} product={product} />
      ))}
    </div>
  );
}

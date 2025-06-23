import { CounterFilter } from "@/components/module/CounterFilter/CounterFilter";

async function getData() {
  const resProduct = await fetch("https://jsonplaceholder.typicode.com/posts");
  const resUser = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!resProduct.ok) {
    throw new Error("Failed to fetch product data");
  }
  if (!resUser.ok) {
    throw new Error("Failed to fetch user data");
  }
  const productData = await resProduct.json();
  const userData = await resUser.json();
  return { productData, userData };
}

export default async function Home() {
  const { productData ,userData } = await getData(); 
  

  return (
    <main className="min-h-screen p-24">
      <h1 className="text-2xl font-bold mb-8">Next.js 15 with Zustand</h1>
        <CounterFilter productData={productData} users={userData} /> 
    </main>
  );
}

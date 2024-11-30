export default async function Home() {
  interface Product {
    id: number;
    title: string;
  }

  const getProduct = async (): Promise<{ products: Product[] }> => {
    const response = await fetch("https://dummyjson.com/products");
    return response.json();
  };

  const data = await getProduct();

  return (
    <>
      {data.products.map((item: Product, index: number) => (
        <div className="card" key={item.id}>{item.title}</div>
      ))}
    </>
  );
}

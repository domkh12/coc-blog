export default async function Home() {
  
  const getProduct = async () => {
    const response = await fetch("https://dummyjson.com/products");
    return response.json();
  };
  
  const data = await getProduct();

  return (
    <>
      {
        data.products.map((item: any, index: number)=>(
          <li key={index}>{item.title}</li>
        ))
      }
    </>
  );
}

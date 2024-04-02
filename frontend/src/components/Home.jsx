import { useEffect, useState } from "react"
import { fetchAllProducts } from "../../sanity/services/productServices"
import ProductCard from "./ProductCard"

export default function Home({setAmount, cart, setCart}){
    const [products, setProducts] = useState(null)

    const getAllProducts = async () => {
        const data = await fetchAllProducts()
        setProducts(data)
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    console.log(products)

    return (<main>
            <h2>Velkommen til LEGO-dudes</h2>
            {products?.map((product, index) => <ProductCard key={index} productInfo={product} setAmount={setAmount} cart={cart} setCart={setCart}  />)}
        </main>)
}
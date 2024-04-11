import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { fetchProductBySlug } from '../../sanity/services/productServices'

export default function ProductPage() {
    const {slug} = useParams()
    const [product, setProduct] = useState(null)

    const getProductBySlug = async (slug) => {
        const data = await fetchProductBySlug(slug)
        setProduct(data[0])
    }

    useEffect(() => {
        getProductBySlug(slug)
    }, [slug])

    if(product) {
        return (
            <main>
                <h2>{product?.productname}</h2>
            </main>
        )
    } else {
        return (
            <main>
                <p>Laster produktinfo...</p>
            </main>
        )
    }
    
}
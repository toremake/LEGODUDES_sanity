import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function ProductCard({productInfo, setAmount, setCart, cart}){
 const [product, setProduct] = useState({
  title: productInfo.productname,
  price: productInfo.price,
  prodid: productInfo._id
 })

 useEffect(()=>{
  countProducts()
 },[cart])

  const handleClick = ()=>{
    const exist = cart.find(item => item.prodid === product.prodid)
    setCart((prevCart) => 
    exist 
    ? 
    prevCart.map(item =>  item.prodid === product.prodid ? {...item, quantity: item.quantity + 1} : item )
    :
    [...prevCart, {...product, quantity: 1}])
  }

  const countProducts =()=>{
    setAmount(cart.reduce((total, item) => total + item.quantity, 0))
  }
 
    return(
      <article>
        <img src={productInfo.image} alt={productInfo.productname} />
        <Link to={"/produkter/" + productInfo.catslug}>{productInfo.catname}</Link>
        <h3>{productInfo.productname}</h3>
        <span>Kr.{productInfo.price}</span>
        <button onClick={handleClick}>Legg i handlekurv</button>
      </article>
    )
  }
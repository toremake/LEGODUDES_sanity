import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { fetchAllCategories } from "../../sanity/services/categoryServices"

export default function Nav() {
    const [active, setActive] = useState()
    const [categoryList, setCategoryList] = useState(null)  

    const getAllCategories = async () => {
        const data = await fetchAllCategories()
        setCategoryList(data)
    }
    //const categoryList = ["City", "Ninjago", "Castles and Knights", "Marine and Pirates", "Movie Characters"]
    
    useEffect(()=>{
        console.log(active)
        getAllCategories()
    }, [active])

    console.log(categoryList)

    return(
        <nav>
            <ul>
                {categoryList?.map((item, i) => 
                <li key={i+"cat"}>
                    <Link to={"/produkter/"+item.catslug}
                    //Lagt til en anonym funskjon som setter active staten til å ha verdien som er item i den den blir trykket på  
                    onClick={()=> setActive(item._id)}
                    className={active === item._id ? "active" : null}>{item.categorytitle}</Link>
                </li>)}
            </ul>
        </nav>
    )
}
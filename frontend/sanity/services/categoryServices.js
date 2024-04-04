import { client } from "../client";

export async function fetchAllCategories() {
    const data = await client.fetch(`*[_type == "categories"]{
        _id,
        categorytitle,
        "catslug":categoryurl.current}`)
    return data
}

export async function fetchCategoryBySlug(slug) {
    const data = await client.fetch(`*[_type == "categories" && categoryurl.current == $slug]`, {slug})
    return data
}
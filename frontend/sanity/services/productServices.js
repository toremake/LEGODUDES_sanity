import { client } from "../client";

export async function fetchAllProducts() {
    const data = await client.fetch('*[_type == "products"]')
    return data
}
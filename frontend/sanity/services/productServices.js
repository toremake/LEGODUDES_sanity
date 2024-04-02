import { client } from "../client";

export async function fetchAllProducts() {
    const data = client.fetch('*[_type == "products"]')
    return data
}
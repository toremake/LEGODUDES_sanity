export const products = {
    title: "Produkter",
    name: "products", 
    type: "document",
    fields: [
        {
            title: "Produktnavn",
            name: "productname",
            type: "string"
        },
        {
            title: "Produktlink",
            name: "producturl",
            type: "slug",
            options: {
                source: "productname",
                slugify: input => input.toLowerCase().replace(/\s+/g, '-')
            }
        },
        {
            title: "Beskrivelse",
            name: "description",
            type: "text"
        },
        {
            title: "Pris",
            name: "price",
            type: "number"
        },
        {
            title: "Produktbilde",
            name: "productimage",
            type: "image"
        },
        {
            title: "Kategori",
            name: "category",
            type: "reference",
            to: [{type: "categories"}]
        },
        {
            title: "Lager",
            name: "stock",
            type: "number"
        },
        {
            title: "Anmeldelser",
            name: "reviews",
            type: "array",
            of: [{type: "reviews"}]
        }
    ]
}
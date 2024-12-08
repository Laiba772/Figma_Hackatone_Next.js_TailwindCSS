import Image from "next/image";

export default function PopularProducts() {
    const products = [
        {
            name: "The Popular suede sofa",
            price: "$99.00",
            img: "/sofa.jpg",
        },
        {
            name: "The Dandy chair",
            price: "$39.00",
            img: "/chair1.png",
        },
        {
            name: "The Dandy chair",
            price: "$89.00",
            img: "/chair2.png",
        },
    ];

    return (
        <div className="p-8">
            <h3 className="text-xl font-bold mb-4 text-center">Our Popular Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-200"
                    >
                        <Image
                            src={product.img}
                            alt={product.name}
                            width={600}
                            height={300}
                            className="rounded mb-4"
                        />
                        <h4 className="font-bold text-lg">{product.name}</h4>
                        <p className="text-gray-700">{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
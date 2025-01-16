import Image from 'next/image';

export default function ProductPage() {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="max-w-4xl w-full flex gap-8">
        {/* Product Image */}
        <div className="w-1/2">
          <Image
            src={product.Image}
            alt="Library Stool Chair"
            width={500}
            height={500}
            className="object-cover rounded-lg"
          />
        </div>

        {/* Product Information */}
        <div className="w-1/2">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Library Stool Chair</h1>
          <p className="text-lg font-medium text-gray-600 mb-6">$20.00 USD</p>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          
          <button className="bg-teal-500 text-white py-2 px-6 rounded-md hover:bg-teal-600 transition duration-200">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

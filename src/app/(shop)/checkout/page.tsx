import { initialData } from "@/seed/seed";
import { Title } from "@/components";
import Image from "next/image";
import Link from "next/link";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function () {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Verify order" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Cart */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Adjust elements</span>
            <Link href="/cart" className="underline mb-5">
              Edit cart
            </Link>

            {/* Items */}
            {productsInCart.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product?.images[0]}`}
                  height={100}
                  width={100}
                  alt={product?.title}
                  className="mr-5 rounded"
                />

                <div>
                  <p>{product?.title}</p>
                  <p>${product?.price} x 3</p>
                  <p className="font-bold">Subtotal: ${product?.price * 3}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout */}
          <div className="bg-white rounded-xl shadow-xl h-fit p-7">
            {/* Address */}
            <h2 className="font-bold text-2xl mb-2">Delivery address</h2>
            <div className="mb-10">
              <p>Eduardo Rodríguez</p>
              <p>Av. Siempre viva</p>
              <p>Col. Centro</p>
              <p>Alcaldía Cuauhtémoc</p>
              <p>CP 8768744</p>
              <p>123.123.123</p>
            </div>

            {/* Divider */}
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

            {/* Summary */}
            <h2 className="font-bold text-2xl mb-2">Order summary</h2>

            <div className="grid grid-cols-2">
              <span>No. Products</span>
              <span className="text-right">3 items</span>

              <span>Subtotal</span>
              <span className="text-right">$100</span>

              <span>Taxes (16%)</span>
              <span className="text-right">$100</span>

              <span className="font-bold mt-5 text-2xl">Total:</span>
              <span className="font-bold mt-5 text-2xl text-right">$100</span>
            </div>

            <div className="mt-5 mb-2 w-full">
              {/* Disclaimer */}
              <p className="mb-5">
                <span className="text-xs">
                  By clicking "Order Now" you agree to our{" "}
                  <Link href="#" className="underline">
                    terms and conditions
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="underline">
                    privacy policy.
                  </Link>
                </span>
              </p>

              <Link
                className="flex btn-primary justify-center"
                href="/orders/123"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

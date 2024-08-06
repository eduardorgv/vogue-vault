import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import { QuantitySelector, SizeSelector } from "@/components";

interface Props {
  params: {
    slug: string;
  };
}

export default function ({ params }: Props) {
  const { slug } = params;
  const product = initialData.products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">
      {/* Slideshow */}
      <div className="col-span-1 md:col-span-2">
        <h1>Slideshow</h1>
      </div>

      {/* Details */}
      <div className="col-span-1 px-5">
        <h1 className="antialiased font-bold text-xl">{product?.title}</h1>
        <p className="text-lg mb-5"></p>

        {/* Selector de tallas */}
        <SizeSelector
          selectedSize={product.sizes[0]}
          avalibleSizes={product.sizes}
        />

        {/* Selector de cantidad */}
        <QuantitySelector quantity={2} />

        {/* Botón */}
        <button className="btn-primary my-5">Add to cart</button>

        {/* Descirpción */}
        <h3 className="font-bold text-sm">Description</h3>
        <p className="font-light">{product?.description}</p>
      </div>
    </div>
  );
}

import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import { ProductGrid, Title } from "@/components";

interface Props {
  params: {
    id: Category;
  };
}

const seedProducts = initialData.products;

const labels: Record<Category, string> = {
  men: "Men",
  women: "Women",
  kid: "Kids",
  unisex: "All",
};

const subtitle: Record<Category, string> = {
  men: "him",
  women: "her",
  kid: "they",
  unisex: "they",
};

// Type guard to check if a string is a Category
function isCategory(id: string): id is Category {
  return ["men", "women", "kid", "unisex"].includes(id);
}

export default function ({ params }: Props) {
  const { id } = params;

  if (!isCategory(id)) notFound();

  const products = seedProducts.filter((product) => product.gender === id);

  return (
    <>
      <Title
        title={`${labels[id]}`}
        subtitle={`All for ${subtitle[id]}`}
        className="mb-2"
      />
      <ProductGrid products={products} />
    </>
  );
}

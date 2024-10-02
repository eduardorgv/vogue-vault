import { initialData } from "./seed";
import prisma from "../lib/prisma";

async function main() {
  const { categories, products } = initialData;

  // 1. Delete previous data
  await Promise.all([
    prisma.productImage.deleteMany(),
    prisma.product.deleteMany(),
    prisma.category.deleteMany(),
  ]);

  // 2. Create categories
  const categoriesData = categories.map((category) => ({
    name: category,
  }));

  await prisma.category.createMany({
    data: categoriesData,
  });

  // 3. Create products
  const categoriesDB = await prisma.category.findMany();
  const categoriesMap = categoriesDB.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id;
    return map;
  }, {} as Record<string, string>); // <string=shirt, string=categoryID>

  products.forEach(async (product) => {
    const { images, type, ...rest } = product;

    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[type],
      },
    });

    const imagesData = images.map((image) => ({
      url: image,
      productId: dbProduct.id,
    }));

    await prisma.productImage.createMany({
      data: imagesData,
    });
  });

  console.log("🚀 ~ main: seed excecutted successfully!");
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();

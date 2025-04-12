import { component$, useSignal } from "@builder.io/qwik";
import { Product } from "../Product";
import type { ProductProps } from "~/interfaces";

const productList: ProductProps[] = [
  {
    id: 1,
    price: 2500000,
    title: "Syltherine",
    type: "Stylish cafe chair",
    url: "https://plus.unsplash.com/premium_photo-1724707432004-31ca0cfd06a8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    price: 2500000,
    title: "Syltherine",
    type: "Stylish cafe chair",
    url: "https://images.unsplash.com/photo-1729824155651-28388f2a31d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    price: 2500000,
    title: "Syltherine",
    type: "Stylish cafe chair",
    url: "https://plus.unsplash.com/premium_photo-1682402663301-7ca06756825a?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    price: 2500000,
    title: "Syltherine",
    type: "Stylish cafe chair",
    url: "https://plus.unsplash.com/premium_photo-1724707432004-31ca0cfd06a8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    price: 2500000,
    title: "Syltherine",
    type: "Stylish cafe chair",
    url: "https://images.unsplash.com/photo-1729824155651-28388f2a31d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    price: 2500000,
    title: "Syltherine",
    type: "Stylish cafe chair",
    url: "https://plus.unsplash.com/premium_photo-1682402663301-7ca06756825a?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    price: 2500000,
    title: "Syltherine",
    type: "Stylish cafe chair",
    url: "https://plus.unsplash.com/premium_photo-1724707432004-31ca0cfd06a8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    price: 2500000,
    title: "Syltherine",
    type: "Stylish cafe chair",
    url: "https://images.unsplash.com/photo-1729824155651-28388f2a31d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default component$(() => {
  const products = useSignal(productList);

  return (
    <section class="w-full px-4 md:px-10 lg:px-20 py-10">
      <h2 class="text-center text-[28px] sm:text-[32px] md:text-[40px] font-bold text-[#3a3a3a]">
        Our Products
      </h2>

      <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
        {products.value.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            price={product.price}
            title={product.title}
            type={product.type}
            url={product.url}
          />
        ))}
      </div>

      <div class="flex justify-center mt-10">
        <button
          class="w-[200px] sm:w-[245px] h-12 border border-primary bg-white text-primary font-semibold transition-all duration-200 hover:bg-primary hover:text-white"
          onClick$={() => console.log(`Click Show More`)}
        >
          Show More
        </button>
      </div>
    </section>
  );
});

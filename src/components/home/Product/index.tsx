import { component$ } from "@builder.io/qwik";
import type { ProductProps } from "~/interfaces";

export const Product = component$((product: ProductProps) => {
  return (
    <div class="w-full max-w-[285px] mx-auto">
      <img src={product.url} class="object-cover w-full h-[300px] rounded-t-lg" />
      <div class="pt-4 px-4 h-[145px] bg-[#f4f5f7] rounded-b-lg">
        <h3 class="font-semibold text-lg sm:text-xl">{product.title}</h3>
        <p class="text-[#898989] text-sm sm:text-base">{product.type}</p>
        <p class="mt-2 font-semibold text-[18px] sm:text-[20px]">
          Rp {product.price.toLocaleString("es-ES")}
        </p>
      </div>
    </div>
  );
});

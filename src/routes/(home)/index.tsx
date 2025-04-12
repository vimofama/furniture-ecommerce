import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import BrowseRange from "~/components/home/Browse-Range";
import Hero from "~/components/home/Hero";
import Inspirations from "~/components/home/Inspirations";
import Products from "~/components/home/Products";
import Share from "~/components/home/Share";

export default component$(() => {
  return (
    <>
      <Hero />
      <BrowseRange />
      <Products />
      <Inspirations />
      <Share />
    </>
  );
});

export const head: DocumentHead = {
  title: "Furniro",
  meta: [
    {
      name: "description",
      content: "Shop of furniture",
    },
  ],
};

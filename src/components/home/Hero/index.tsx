import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="relative bg-[url(/assets/images/scandinavian-interior-mockup-wall-decal-background.jpg)] h-[500px] md:h-[600px] lg:h-[716.828px] bg-no-repeat bg-center bg-cover flex items-center">
      <div class="relative mx-auto w-full max-w-[90%] sm:max-w-[500px] md:max-w-[600px] lg:absolute lg:right-[50px] lg:top-60 bg-[#FFF3E3] rounded-[10px] px-6 py-6 sm:px-[30px] sm:py-8 md:px-[40px] md:py-10">
        <p class="text-secondary text-sm sm:text-base">New Arrival</p>

        <h1 class="mt-2 text-primary font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[52px] leading-tight">
          Discover Our New Collection
        </h1>

        <p class="mt-4 text-secondary font-medium text-sm sm:text-base md:text-lg">
          Sint minim reprehenderit excepteur irure occaecat duis eu qui
          consectetur sint nostrud laborum.
        </p>

        <button class="mt-8 md:mt-[71px] bg-primary py-3 px-8 sm:py-5 sm:px-12 text-white font-bold cursor-pointer">
          BUY NOW
        </button>
      </div>
    </section>
  );
});

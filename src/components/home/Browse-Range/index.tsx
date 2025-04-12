import { component$ } from "@builder.io/qwik";

import ImageDining from '/assets/images/dining.jpg';
import ImageLiving from '/assets/images/living.jpg';
import ImageBedroom from '/assets/images/bedroom.jpg';

export default component$(() => {
  return (
    <section class="my-[55px] px-4 md:px-10 lg:px-24">
      <div class="flex flex-col items-center text-center">
        <h2 class="text-secondary font-bold text-2xl sm:text-3xl">Browse The Range</h2>
        <p class="text-[#666] font-normal text-base sm:text-lg max-w-xl">
          Consectetur consequat nostrud esse eiusmod officia enim exercitation.
        </p>
      </div>

      <div class="mt-[40px] grid gap-6 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        <div class="cursor-pointer w-full max-w-[381px]">
          <img
            src={ImageDining}
            alt="Dining"
            class="rounded-[10px] w-full h-[400px] object-cover"
          />
          <h3 class="mt-5 text-xl text-center sm:text-2xl">Dining</h3>
        </div>

        <div class="cursor-pointer w-full max-w-[381px]">
          <img
            src={ImageLiving}
            alt="Living"
            class="rounded-[10px] w-full h-[400px] object-cover"
          />
          <h3 class="mt-5 text-xl text-center sm:text-2xl">Living</h3>
        </div>

        <div class="cursor-pointer w-full max-w-[381px]">
          <img
            src={ImageBedroom}
            alt="Bedroom"
            class="rounded-[10px] w-full h-[400px] object-cover"
          />
          <h3 class="mt-5 text-xl text-center sm:text-2xl">Bedroom</h3>
        </div>
      </div>
    </section>
  );
});

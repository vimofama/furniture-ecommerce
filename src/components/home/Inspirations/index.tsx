import { component$, useSignal, $ } from "@builder.io/qwik";

const images = [
  "https://images.unsplash.com/photo-1688302741294-4646bf1f5059?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1600488999140-f5bb6339fd09?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default component$(() => {
  const current = useSignal(0);

  const nextImage = $(() => {
    current.value = (current.value + 1) % images.length;
  });

  return (
    <section class="relative mt-16 bg-[#fcf8f3] py-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-20 px-6 lg:px-[100px] overflow-hidden">
      {/* Left side content */}
      <div class="max-w-[422px]">
        <h1 class="font-bold text-[#3a3a3a] text-[32px] lg:text-[40px] leading-tight">
          50+ Beautiful rooms inspiration
        </h1>
        <p class="text-[#616161] font-medium text-base mt-4">
          Our designer already made a lot of beautiful prototype of rooms that inspire you.
        </p>
        <button class="mt-8 w-[176px] h-12 bg-primary text-white text-base font-semibold">
          Explore More
        </button>
      </div>

      {/* Images carousel */}
      <div class="relative flex items-center gap-6">
        {/* Main image */}
        <div class="relative">
          <img
            src={images[current.value]}
            alt="room"
            class="w-[340px] sm:w-[404px] h-[400px] sm:h-[582px] object-cover rounded-lg transition-all duration-500"
          />
          <div class="absolute bottom-6 left-6 flex">
            <div class="w-[217px] h-[130px] bg-white/80 backdrop-blur-sm rounded-lg flex flex-col justify-center pl-5 shadow-md">
              <h3 class="text-[#616161] text-sm">0{current.value + 1} --- Bed Room</h3>
              <h1 class="text-[#3a3a3a] font-semibold text-[22px] sm:text-[28px]">
                Inner Peace
              </h1>
            </div>
            {/* Arrow overlay button */}
            <button
              onClick$={nextImage}
              class="absolute w-12 h-12 bg-primary rounded-full p-3 bottom-0 left-[217px] hover:bg-[#aa7117] transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 12H3M21 12L15 6M21 12L15 18"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Second image for aesthetic */}
        <img
          src={images[(current.value + 1) % images.length]}
          alt="next room"
          class="hidden lg:block w-[240px] h-[300px] object-cover rounded-lg"
        />

        {/* Next arrow (outside image) */}
        <div
          onClick$={nextImage}
          class="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md cursor-pointer flex items-center justify-center hover:scale-105 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9.00006 5L16.0001 12L9.00006 19"
              stroke="#B88E2F"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Indicators */}
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <span
            key={index}
            class={`w-3 h-3 rounded-full ${
              current.value === index ? "bg-primary" : "bg-[#d8d8d8]"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
});

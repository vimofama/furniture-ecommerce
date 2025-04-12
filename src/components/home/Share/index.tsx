import { component$ } from "@builder.io/qwik";
import Images from '/assets/images/shareImages.jpg';

export default component$(() => {
  return (
    <section class="my-16 h-[780px]">
      {/* Header */}
      <div class="flex flex-col items-center text-center mb-6">
        <h3 class="text-[#616161] font-semibold text-[20px]">Share your setup with</h3>
        <h1 class="text-[#3a3a3a] font-bold text-[40px]">#FuniroFurniture</h1>
      </div>

      {/* Image */}
      <div>
        <img
          src={Images}
          alt="Share your Funiro setup"
          class="w-full h-[721px] object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
});

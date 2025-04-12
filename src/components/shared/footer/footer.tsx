import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Footer = component$(() => {
  const year = useSignal(new Date(Date.now()).getFullYear());

  return (
    <footer class="mt-2.5 px-4 pb-10 lg:px-[100px] lg:pb-[38px]">
      <div class="w-full border border-[#D9D9D9]"></div>

      <div class="flex flex-col gap-10 pt-12 lg:flex-row lg:items-baseline lg:justify-start lg:gap-36">
        {/* Branding */}
        <section>
          <h2 class="text-2xl font-bold">Funiro.</h2>
          <p class="mt-6 text-[#9F9F9F] font-normal text-base max-w-xs">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </section>

        {/* Links */}
        <section>
          <h3 class="text-[#9F9F9F] font-normal text-base">Links</h3>
          <ul class="mt-6 space-y-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#">Shop</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </section>

        {/* Help */}
        <section>
          <h3 class="text-[#9F9F9F] font-normal text-base">Help</h3>
          <ul class="mt-6 space-y-6">
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </section>

        {/* Newsletter */}
        <section>
          <h3 class="text-[#9F9F9F] font-normal text-base">Newsletter</h3>
          <div class="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div class="w-full sm:w-[200px]">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                class="w-full border-b border-black bg-transparent focus:outline-none"
              />
            </div>
            <div>
              <button class="cursor-pointer border-b border-black">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </section>
      </div>

      <div class="border w-full border-[#D9D9D9] mt-12"></div>
      <p class="mt-6 text-sm text-center lg:text-left">
        {year.value} Funiro. All rights reserved
      </p>
    </footer>
  );
});

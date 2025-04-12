import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import logo from "/assets/icons/House_Logo.svg";
import { Icons } from "./icons";

export const Navbar = component$(() => {
  const isMenuOpen = useSignal(false);

  return (
    <nav class="h-[80px] lg:h-[100px] my-4 px-12 lg:px-[100px] bg-white">
      <div class="flex items-center justify-between h-full">
        {/* Logo */}
        <Link href="/" class="flex items-center gap-2">
          <img src={logo} alt="Furniro Logo" class="w-8 h-8" />
          <h2 class="font-mont text-2xl lg:text-[34px]">Furniro</h2>
        </Link>

        {/* Desktop Nav */}
        <ul class="hidden lg:flex justify-center items-center gap-[55px]">
          <li>
            <Link href="#">Home</Link>
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

        {/* Icons */}
        <div class="hidden lg:flex items-center gap-[35px]">
          <Icons />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          class="lg:hidden focus:outline-none cursor-pointer"
          onClick$={() => {
            isMenuOpen.value = !isMenuOpen.value;
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d={
                isMenuOpen.value
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              } // Cross or hamburger icon
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (visible from the right) */}
      {isMenuOpen.value && (
        <div class="lg:hidden fixed top-0 right-0 pr-1.5 w-[150px] h-full bg-white shadow-md z-50">
          <div class="flex flex-col items-end gap-4 p-4">
            {/* Close Button */}
            <button
              class="self-end cursor-pointer"
              onClick$={() => {
                isMenuOpen.value = false; // Close the menu
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12" // "X" icon
                />
              </svg>
            </button>

            <ul class="flex flex-col items-start gap-4 text-lg font-medium">
              <li>
                <Link href="#">Home</Link>
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
            <div class="flex flex-col gap-6 mt-4">
              <Icons />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
});

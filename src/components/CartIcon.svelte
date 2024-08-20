<script lang="ts">
  import { onMount } from "svelte";
  import { initCart, cart, isCartDrawerOpen } from "../stores/cart";

  onMount(() => {
    initCart();
  });

  function openCart() {
    isCartDrawerOpen.set(true);
  }
</script>

<div class="justify-self-end flex justify-center items-center">
  <button class="relative" on:click={() => openCart()}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 27" fill="none" class="w-6 h-auto stroke-dark pointer-events-none">
      <rect x="3" y="5" width="20" height="19" rx="2" stroke-width="2"/>
      <path d="M9 4V4C9 2.34315 10.3431 1 12 1H13H14C15.6569 1 17 2.34315 17 4V4" stroke="black" stroke-width="2"/>
    </svg>
    {#if $cart && $cart.totalQuantity > 0}
      <div
        class="absolute -top-1 -left-1 bg-dark text-light text-[7px] rounded-full"
      >
        <span class="w-3 h-3 pb-[1px] flex justify-center text-center items-center">
          {$cart.totalQuantity}
        </span>
      </div>
    {/if}
  </button>
</div>

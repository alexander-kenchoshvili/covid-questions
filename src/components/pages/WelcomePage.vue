<template>
  <div class="h-[100vh] flex flex-col items-center justify-center bg-[#EAEAEA]">
    <img
      src="@/assets/images/mainLogo.svg"
      alt="main logo"
      class="mb-[100px]"
    />
    <div>
      <router-link class="flex flex-col items-center" to="/identification">
        <span class="text-3xl font-bold">კითხვარის</span>
        <span class="text-3xl font-bold">დაწყება</span>
      </router-link>
    </div>
  </div>
</template>

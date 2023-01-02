<template>
  <div class="bg-[#232323] h-[100vh] flex items-center justify-center">
    <div class="relative">
      <h2 class="text-white font-bold text-6xl tracking-[20px]">მადლობა</h2>
      <img
        v-motion
        :initial="{ opacity: 0, x: 40, y: 100 }"
        :enter="{ opacity: 1, x: 0, y: 0 }"
        src="@/assets/images/star1.svg"
        class="absolute top-[-80px] transition duration-100 ease-in delay-300 left-[30px]"
        alt="big star"
      />
      <img
        v-motion
        :initial="{ opacity: 0, x: -100, y: -35 }"
        :enter="{ opacity: 1, x: 0, y: 0 }"
        class="absolute right-[40px] transition duration-100 ease-in delay-300"
        src="@/assets/images/star2.svg"
        alt="little star"
      />
    </div>
  </div>
</template>

<template>
  <section class="h-screen relative">
    <div class="absolute inset-0 bg-black opacity-50 z-20"></div>
    <img
      class="absolute inset-0 w-full h-full object-cover"
      :src="backgroundImage"
      :alt="backgroundAlt"
    />
    <div class="container-wrapper absolute inset-0 z-50 text-center py-16">
      <div class="flex flex-wrap">
        <h1
          :id="`sec${key}Title`"
          class="text-white text-6xl font-bold w-full relative"
        >
          {{ title }}
        </h1>
        <p class="text-white w-full my-2">
          {{ desc }}
        </p>

        <!-- Cards -->
        <Cards
          :id="`${cardWrapperId}Wrapper`"
          :cards="cards"
          :cardId="cardWrapperId"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    'key',
    'title',
    'cardWrapperId',
    'backgroundImage',
    'backgroundAlt',
    'cards',
    'desc',
  ],
}
</script>

<style></style>

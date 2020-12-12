<template>
  <div :id="id" class="flex justify-between w-full" style="opacity: 0">
    <!-- For Loop Through the Cards Passed from parent -->
    <div class="flex py-10 px-4" v-for="(card, index) in cards" :key="index">
      <div :id="`${cardId}${index}`" class="card-hover relative">
        <img
          class="flex-1 relative"
          :src="card.imageUrl"
          :alt="card.name"
          width="223px"
        />
        <div
          class="card-info absolute inset-0 bg-black bg-opacity-90 opacity-0"
        >
          <div class="p-2">
            <span class="text-white block">{{ card.name }}</span>
            <span class="text-white block">{{ card.originalType }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'cardId', 'cards'],
}
</script>

<style scoped>
.card-hover {
  @apply cursor-pointer;
}

.card-info {
  transition: all 0.25s ease-in-out;
}

.card-hover:hover .card-info {
  @apply opacity-100;
}

.card-hover {
  @apply transform transition-all scale-100 ease-in-out;
}
.card-hover:hover {
  @apply scale-125;
}
</style>

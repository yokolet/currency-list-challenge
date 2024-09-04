<script setup lang="ts">
import { useCurrencyStore } from '../stores/currency';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import Currency from '../components/Currency.vue';

const usOnly = ref<boolean>(false);

const store = useCurrencyStore();
onMounted(() => store.getInfo());
const { data } = storeToRefs(store);

const sortAsc = () => {
  console.log('sort asc');
  if (usOnly.value) {
    data.value = data.value.filter((a) => a.isSupportedInUS);
  }
  data.value = data.value.sort((a, b) => a.name.localeCompare(b.name));
}

const sortDesc = () => {
  console.log('sort desc');
  if (usOnly.value) {
    data.value = data.value.filter((a) => a.isSupportedInUS);
  }
  data.value = data.value.sort((a, b) => b.name.localeCompare(a.name));
}

function shuffleArray(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const shuffle = () => {
  data.value = shuffleArray(data.value);
}

</script>

<template>
  <div class="text-gray-800 dark:text-white">
    <div class="flex items-center justify-center">
      <button class="button" @click="sortAsc">
        Sort Ascending
      </button>
      <button class="button" @click="sortDesc">
        Sort Descending
      </button>
      <button class="button" @click="shuffle">
        Shuffle
      </button>
      <input
          id="usonly"
          type="checkbox"
          class="checkbox"
          :checked="usOnly"
          @click="usOnly = !usOnly" />
      <label for="usonly">US Only</label>
    </div>

    <div class="grid grid-cols-3 gap-1">
      <div
          v-for="item in data"
          :key="item.id"
          class="flex flex-col items-start justify-center m-4"
      >
        <Currency :icon="item.icon" :name="item.name" :code="item.code" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.button {
  @apply font-bold py-2 px-4 m-4 rounded-md text-white bg-gray-600;
}
.checkbox {
  @apply h-4 w-4 border-2 border-gray-300 rounded
}
</style>

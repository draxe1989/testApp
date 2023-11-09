<template>
  <div class="text-slate-300">
    <RouterLink to="/"> Назад</RouterLink>
  </div>
  <div class="text-slate-400">Результаты:</div>
  <div v-if="loading">Загрузка...</div>
  <div v-else-if="error">Ошибка...</div>
  <div class="grid grid-cols-3 gap-4 mt-4" v-else>
    <div v-for="(item) in data" :key="item.id" class="p-8 rounded bg-slate-500">
      <div class="flex flex-col gap-3">
        <div>
          <span class="font-bold">Наименование:</span>
          <span>{{ item.model }}</span>
        </div>
        <div>
          <span class="font-bold">Цена:</span>
          <span>{{ item.price }}</span>
        </div>
      </div>
      <div class="flex mt-4">

        <button class=" block h-12 w-12 bg-slate-400 rounded-l-full"
                @click="counters[item.id] > 0 ? counters[item.id]-- : null">-
        </button>
        <input type="number" class="w-20 text-center" v-model="counters[item.id]">
        <button class=" block h-12 w-12 bg-slate-400 rounded-r-full" @click="counters[item.id]++">+</button>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRest} from "../../composables/useRest.ts";
import {useRoute} from "vue-router";

const {GET, data, error, loading} = useRest([], "/list")

const route = useRoute()

const counters = ref<{ [key: string]: number }>({})


onMounted(async () => {
  await GET({
    query: route.query as { [ke: string]: string }
  })
  counters.value = data.value.reduce((ac, item) => {
    return {...ac, [item.id]: 0}
  }, {})
})
</script>
<template>
  <div class="text-slate-400 mt-8">
    Выбранные опции:
  </div>
  <button @click="size = null" class="border-amber-100 border bg-slate-400 py-2 px-6 rounded-2xl mt-4"
          v-if="size">резмер
    {{ sizes.find(item => item.id === size)?.name || "" }} &#215;
  </button>
  <button @click="drinkCount = null" class="border-amber-100 border bg-slate-400 py-2 px-6 rounded-2xl mt-4"
          v-if="drinkCount">количество
    напитков {{ drinkCounts.find(item => item.id === drinkCount)?.name || "" }} &#215;
  </button>

  <div class="flex gap-10 p-4 bg-slate-700 rounded mt-4 w-fit">

    <label class="block">
      <div class="">Размер устройства</div>
      <select class="mt-4 p-4 bg-slate-400 w-full rounded-2xl" v-model="size">
        <option :value="s.id" class="bg-slate-400" v-for="s in sizes">{{ s.name }}</option>
      </select>

    </label>

    <label class="block">
      <div class="">Количество напитков</div>
      <select class="mt-4 p-4 bg-slate-400 w-full rounded-2xl" v-model="drinkCount">
        <option :value="s.id" class="bg-slate-400" v-for="s in drinkCounts">{{ s.name }}</option>
      </select>
    </label>

    <button class="bg-slate-400 px-8 rounded-2xl" @click="router.push({
    name: 'list',
    query: {
      size,
      drinkCount
    }
    })">
      Далее
    </button>
  </div>


  <div class="mt-4 flex flex-col gap-4 w-fit">
    <button @click="saveToStorage" v-if="size || drinkCount" class="bg-slate-400 px-8 py-2 rounded-2xl">Сохранить
      фильтры
    </button>
    <button @click="clearStorage" v-if="hasStorage" class="bg-slate-400 px-8 py-2 rounded-2xl">
      Очистить сохраненные
      фильтры
    </button>
  </div>

</template>
<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {useRouter} from "vue-router";
import {useRest} from "../../composables/useRest";

const router = useRouter()


const sizeStorage = localStorage.getItem("size")
const drinkCountStorage = localStorage.getItem("size")


const size = ref<null | string>(null)
const drinkCount = ref<null | string>(null)


if (sizeStorage) {
  size.value = JSON.parse(sizeStorage)
}
if (drinkCountStorage) {
  drinkCount.value = JSON.parse(drinkCountStorage)
}

const hasStorage = ref<boolean>(!!sizeStorage || !!drinkCountStorage)


function clearStorage() {
  localStorage.clear()
  hasStorage.value = false
}

function saveToStorage() {
  if (size.value) {
    localStorage.setItem("size", JSON.stringify(size.value))
  }
  if (drinkCount.value) {
    localStorage.setItem("drinkCount", JSON.stringify(drinkCount.value))
  }
  hasStorage.value = true
}

const {GET: getSizes, data: sizes} = useRest([], "/sizes")
const {GET: getDrinkCounts, data: drinkCounts} = useRest([], "/drinkCounts")

onMounted(() => {
  getSizes({})
  getDrinkCounts({})
})

</script>

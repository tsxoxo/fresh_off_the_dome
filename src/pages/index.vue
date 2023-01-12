<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})

interface Item {
  id: number
  text: string
  isChecked: boolean
}
const ITEMS_INIT: Item[] = [
  {
    id: 0,
    text: 'a',
    isChecked: false,
  },
  {
    id: 1,
    text: 'b',
    isChecked: false,
  },
  {
    id: 2,
    text: 'c',
    isChecked: true,
  },
  {
    id: 3,
    text: 'd',
    isChecked: true,
  },
]
const lastID = $ref(3)

const vFocus = {
  mounted: (el: HTMLInputElement) => el.focus(),
}
const input: null | HTMLInputElement = $ref(null)

let inputText = $ref('')
const items: Item[] = $ref(ITEMS_INIT)

const checkedItems = computed(() => {
  return items.filter(item => item.isChecked)
})
const uncheckedItems = computed(() => {
  return items.filter(item => !item.isChecked)
})

// const updateItem = (index: number): void => {
//   items[index].isChecked = !items[index].isChecked
// }

const add = () => {
  if (inputText) {
    items.unshift({
      id: lastID + 1,
      text: inputText,
      isChecked: false,
    })
    inputText = ''
    if (input !== null)
      input.focus()
  }
}
</script>

<template>
  <div grid gap-4>
    <div w="full" flex gap-3>
      <input
        id="input"
        ref="input"
        v-model.trim="inputText"
        v-focus
        type="text" p="x-4 y-2" bg="transparent"
        font="900"
        class="font-900 juicy-border" outline="none active:none"
        @keydown.enter="add"
      >
      <button
        w="48px"
        h="48px"
        grid
        place-items-center
        text="3xl"
        class="juicy-border"
        @click="add"
      >
        +
      </button>
    </div>
    <div
      py-4
      juicy-border
    >
      <ul p="x-4" flex flex-col gap-4>
        <li
          v-for="item in uncheckedItems" :key="item.id"
          flex justify-between
        >
          {{ item.text }}
          <input
            v-model="item.isChecked"
            type="checkbox"
            w-8 h-8
          >
        </li>
      </ul>
    </div>
    <div
      p="x-4 y-4"
      juicy-border
    >
      <p text-xl>
        The things I've done
      </p>
      <ul mt-4 flex flex-col gap-4>
        <li
          v-for="item in checkedItems" :key="item.id"
          flex justify-between
        >
          <label :for="String(item.id)">
            {{ item.text }}
          </label>

          <input
            :id="String(item.id)"
            v-model="item.isChecked"
            type="checkbox"
            w-8
            h-8
          >
        </li>
      </ul>
    </div>
  </div>
</template>

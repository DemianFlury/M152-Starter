<script setup>
import { computed, ref } from "vue";

const log = ref([
  {
    id: 1,
    text: "Startsaldo",
    value: 1500,
  },
  {
    id: 2,
    text: "Bus-Abo",
    value: -79,
  },
  {
    id: 3,
    text: "Lohn",
    value: 3,
  },
  {
    id: 4,
    text: "Windeln für Lian gekauft",
    value: -69,
  },
  {
    id: 5,
    text: "Gloryhole",
    value: -420,
  },
  {
    id: 6,
    text: "Lohn",
    value: 3,
  },
  {
    id: 7,
    text: "Kremation von Yannics Schlaf",
    value: -70,
  },
  {
    id: 8,
    text: 'Mein Song "Skybase" hittet die Charts',
    value: 69420.696969,
  },
  {
    id: 9,
    text: "China government hat mich gefunden (ich habe negative social credit)",
    value: -9,
  },
]);
const text = ref();
const value = ref();
const newTextField = ref();

const formdialog = ref()

const balance = computed(()=> {
  return income.value + outcome.value
})

const income = computed(()=>{
  let positiveArray = log.value.filter((entry) => {
    return entry.value > 0
  })
  return roundTo05(positiveArray.reduce((acc, item) => acc + item.value, 0))
})

const outcome = computed(()=>{
    let positiveArray = log.value.filter((entry) => {
    return entry.value < 0
  })
  return roundTo05(positiveArray.reduce((acc, item) => acc + item.value, 0))
})

function saveEntry() {
  log.value.push({
    id: ++currentId.value,
    text: text.value,
    value: parseFloat(value.value),
  });

  text.value = ''
  value.value = ''
  newTextField.value.focus()
}

function deleteEntry(idToRemove){
  log.value = log.value.filter((entry) => {
    return entry.id !== idToRemove;
});
}

function roundTo05(number) {
  return Math.round(number / 0.5) * 0.5;
}
const currentId = ref(9);
</script>

<template>
  <table>
    <tr>
      <th>ID</th>
      <th>Text</th>
      <th>Eingang</th>
      <th>Ausgang</th>
    </tr>
    <tr
      v-for="entry in log"
      :key="entry.id"
      :class="entry.value >= 0 ? 'profits' : 'loss'">
      <td>{{ entry.id }}</td>
      <td>{{ entry.text }}</td>
      <td class="text-right">
        <span v-if="entry.value >= 0"> {{ roundTo05(entry.value) }} CHF</span>
      </td>
      <td class="text-right">
        <span v-if="entry.value < 0"> {{ roundTo05(entry.value) }} CHF</span>
      </td>
      <td><button @click="deleteEntry(entry.id)" >X</button></td>
    </tr>
    <tfoot>
      <td></td>
      <td>Total</td>
      <td>{{income}} CHF</td>
      <td>{{outcome}} CHF</td>
      <td>{{balance}} CHF</td>
    </tfoot>
  </table>

<button @click="formdialog.showModal()">Änderung erfassen</button>

<dialog ref="formdialog">
  <div class="form">
    <label for="text">Text</label>
    <input v-model="text" type="text" id="text" name="text" @keyup.enter="saveEntry" ref="newTextField"/>

    <label for="value">Betrag</label>
    <input v-model="value" type="number" name="value" id="value" @keyup.enter="saveEntry" />

    <button type="submit" @click="saveEntry">Hinzufügen</button>
  </div>
</dialog>
</template>

<style lang="scss">
table {
  width: 800px;
  margin: 0 auto;

  tr td {
    border-bottom: 1px solid black;
  }

  .text-right {
    text-align: right;
  }
}

.form {
  margin: 10px auto;
  display: flex;

}

.profits {
  color: rgb(22, 161, 22);
}
.loss {
  color: rgb(243, 11, 11);
}
</style>
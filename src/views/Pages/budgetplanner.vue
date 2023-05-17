<script setup>
import { ref } from "vue";

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
    value: -9999999999,
  },
]);
const text = ref("");
const value = ref("");
var i = 10;

function saveEntry() {
  log.push({
    id: i,
    text: text.value,
    value: value.value,
  });
  text.value, (value.value = "");
  i++;
}

function roundTo05(number) {
  return Math.round(number / 0.5) * 0.5;
}
const currentId = ref(2);
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
      <td class="text-center">{{ entry.text }}</td>
      <td class="text-right">
        <span v-if="entry.value >= 0"> {{ roundTo05(entry.value) }} CHF</span>
      </td>
      <td class="text-right">
        <span v-if="entry.value < 0"> {{ roundTo05(entry.value) }} CHF</span>
      </td>
    </tr>
  </table>

  <div class="form">
    <label for="text">Text</label>
    <input v-model="text" type="text" id="text" name="text" />

    <label for="value">Betrag</label>
    <input v-model="value" type="text" name="value" id="value" />

    <button type="submit" @click="saveEntry()">Hinzufügen</button>
  </div>
</template>

<style lang="scss">
table {
  width: 800px;
  margin: 0 auto;

  tr td {
    border-bottom: 1px solid black;
  }

  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
}

.form {
  margin: 10px auto;
  display: flex;

    input{

    }

}

.profits {
  color: green;
}
.loss {
  color: red;
}
</style>
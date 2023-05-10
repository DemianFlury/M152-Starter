<template>

<button @click="dialog.showModal()" class="btn">Form anzeigen</button>

  <dialog ref="dialog">
    <form>
      <div class="form-pack">
        <label for="username">Username</label>
        <input type="text" name="username" id="username" />
      </div>

      <div class="form-twoset">
        <div class="form-pack">
          <label for="firstname">Vorname</label>
          <input type="text" name="firstname" id="firstname" />
        </div>
        <div class="form-pack">
          <label for="lastname">Nachname</label>
          <input type="text" name="lastname" id="lastname" />
        </div>
      </div>

      <div class="form-pack">
        <label for="email">E-Mail</label>
        <input type="email" name="email" id="email" />
      </div>

      <div class="form-twoset">
        <div class="form-pack">
          <label for="postal">PLZ</label>
          <input type="text" name="postal" id="postal" />
        </div>
        <div class="form-pack">
          <label for="address">Strasse</label>
          <input type="text" name="address" id="address" />
        </div>
      </div>

      <div class="form-pack">
        <label for="city">Ort</label>
        <input type="text" name="city" id="city" />
      </div>

      <div class="form-pack">
        <label for="password">Passwort</label>
        <input type="password" name="password" id="password" />
      </div>

      <div class="form-pack">
        <label for="year">Lehrjahr</label>
        <input type="number" name="year" id="year" max="3" min="1" />
      </div>

      <button @click="dialog.close()">Absenden</button>
    </form>
  </dialog>
</template>

<script setup>
import { ref } from "vue";

const dialog = ref(null);

</script>

<style scoped lang="scss">
.btn {
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #3e8e41;
  }
}

.dialog {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}

.form {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 12px;
}

.form-pack {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-twoset {
  display: flex;
  gap: 12px;
}

input{
  padding: 10px;
  margin-bottom: 10px;
}
</style>
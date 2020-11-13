<template>
  <div class="modal-background">
    <div class="modal" id="editModal">
      <div class="modal-header">
        <slot name="header">

          <button type=button class="modal-close__button" @click="$emit('editModalClose')">
            X
          </button>
        </slot>
      </div>
      <div class="modal-body">
        <slot name="body">
            <label class="modal-form">
              <input class="modal-form__input" type="text" placeholder="Describe the task" v-model="title"/>
              <input class="modal-form__input" type="text" placeholder="Task deadline" v-model="date"/>
              <input class="modal-form__input" type="text" placeholder="Task priority" v-model="priority"/>
            </label>
        </slot>
      </div>
      <div class="modal-footer">
        <slot name="footer">
          <button v-if="toggleTaskStatus" type="button" class="modal-confirm__button" @click="$emit('editModalConfirm')">
            Save
          </button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "editModal",
  props: {
    editTask: {
      type: Object
    }
  },
  data() {
    return {
      toggleTaskStatus: true
    }
  }
}
</script>

<style>
.modal-background {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: var(--main-white);
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header {
  padding: 2px;
  display: flex;
}

.modal-footer {
  padding: 6px;
  display: flex;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid var(--light-gray);
  color: var(--main-green);
}

.modal-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--light-gray);
}

.modal-body {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 12px 12px;
}

.modal-form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
}

.modal-form__input {
  width: 250px;
  height: 20px;
  padding: 2px 6px;
}

.modal-close__button {
  border: none;
  font-size: 16px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: var(--main-green);
  background: transparent;
}

.modal-confirm__button {
  color: var(--main-white);
  background: var(--main-green);
  border: 1px solid var(--main-green);
  padding: 2px 4px;
  border-radius: 4px;
}
</style>
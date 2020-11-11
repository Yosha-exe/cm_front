<template>
  <div class="task">
    <div class="task-header">
       {{ task.title }}
      <div class="task-editors">
        <button class="task-edit__button" @click="$emit('edit-task')">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="feather feather-edit">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        </button>
        <button class="task-delete__button" @click="$emit('delete-task')">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="feather feather-trash-2">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </button>
      </div>
    </div>
    <div class="task-team">
      <img src="https://via.placeholder.com/30.png?text=Img" alt="avatar" class="task-avatar">
    </div>
    <div class="task-main">
      <div class="task-deadline">
        {{ task.date }}
      </div>
      <button type="button" class="task-comments__button">
        <img alt="comments" src="../assets/comment-icon.png" width="30" height="30"/>
      </button>
    </div>
    <div class="task-comments"></div>
    <span class="task-status">
      {{ task.priority }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style>
.task {
  display: flex;
  flex-direction: column;
  height: auto;
  width: auto;
  padding: 12px;
  background-color: var(--component-bg-color);
  border-radius: 4px;
  margin-bottom: 12px;
}

.task-header {
  display: flex;
  justify-content: space-between;
  min-height: 30px;
  color: var(--light-blue);
}

.task-editors {
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  width: 50px;
}

.task-edit__button {
  height: 22px;
  width: 20px;
  border: none;
  background: transparent;
  color: var(--light-blue);
}

.task-delete__button {
  height: 22px;
  width: 20px;
  border: none;
  background: transparent;
  color: var(--main-red);
}

.task-team {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  min-height: 40px;
  flex-shrink: 0;
}

.task-avatar {
  margin-top: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
}

.task-main {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 30px;
}

.task-deadline {
  flex: 1 1 auto;
  color: var(--light-blue);
}

.task-comments__button {
  border: none;
  background: transparent;
  height: 30px;
  width: 30px;
}

.task-status {
  color: var(--light-blue);
}
</style>
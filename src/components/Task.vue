<template>
  <div class="task">
    <div class="task-header">
      {{task.title}}
    </div>
    <div class="task-team">
      <img src="https://via.placeholder.com/30.png?text=Img" alt="avatar" class="task-avatar">
    </div>
    <div class="task-main">
      <div class="task-deadline">
        {{task.date}}
      </div>
      <button type="button" class="task-comments__button">
        <img alt="comments" src="../assets/comment-icon.png" width="30" height="30"/>
      </button>
    </div>
    <div class="task-comments"></div>
    <span class="task-status">
      {{task.priority}}
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
  min-height: 30px;
  color: var(--light-blue);
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
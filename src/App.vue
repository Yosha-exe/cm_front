<template>
  <div id="app">
    <header>
      <div class="header container">
        <div class="header-logo">
          Project title
        </div>
        <nav class="header-menu">
          <button type="button" class="menu__button team__button"
                  v-on:click="teamToggle"
                  v-bind:class="{menu__buttonActive: menuTeam}">
            Team
          </button>
          <button type="button" class="menu__button goals__button"
                  v-on:click="goalsToggle"
                  v-bind:class="{menu__buttonActive: menuGoals}">
            Goals
          </button>
          <button type="button" class="menu__button login__button"
                  v-on:click="loginToggle">
            Login
          </button>
          <!--                <button v-if="logoutStatus" type="button" class="menu__button logout__button">-->
          <!--                    Logout-->
          <!--                </button>-->
        </nav>
      </div>
    </header>

    <loginForm
        v-show="isLoginFormVisible "
        @loginFormClose="loginFormClose"
        @loginFormEnter="loginFormEnter"
    />

    <addModal
        v-show="isAddModalVisible "
        @addModalClose="addModalClose"
        @addModalConfirm="addModalConfirm"
    />

    <editModal
        v-show="isEditModalVisible"
        @editModalClose="editModalClose"
        @editModalConfirm="editModalConfirm"
    />

    <!--        v-bind:title="task.title"-->
    <!--        v-bind:date="task.date"-->
    <!--        v-bind:priority="task.priority"-->

    <section class="team-section container" v-bind:class="{sectionActive: menuTeam}">
      <div class="team-section__main section-main">
        <div class="member__block">
          <img src="https://via.placeholder.com/30.png?text=Img" alt="avatar" class="member-avatar">
          <div class="member-name">Employee name</div>
        </div>

      </div>
    </section>

    <section class="goals-section container" v-bind:class="{sectionActive: menuGoals}">
      <div class="goals-section__main section-main">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi atque ipsa, molestiae officia quae
        temporibus tenetur! Atque consequuntur expedita fugit inventore iusto magnam molestias neque quibusdam,
        repudiandae, tempora temporibus!
      </div>
    </section>

    <main>
      <div class="board container">
        <section
            v-for="section in sections"
            :key="section.title"
            class="board-section">
          <div class="board-header">
            {{ section.title }}
            <button class="task-add__btn" @click="addModalShow">
                    <span class="plus">
                        <svg fill="currentColor" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><g><path
                            d="m83 0h34.1v200h-34.1z" transform="matrix(0 1 -1 0 200 0)"/><path
                            d="m83 0h34.1v200h-34.1z"/></g></svg>
                    </span>
            </button>
          </div>
          <div class="board-main">
            <draggable :list="section.tasks" :animation="200" :emptyInsertThreshold="100" group="tasks">
              <task
                  v-for="(task) in section.tasks"
                  :key="task.id"
                  :task="task"
                  @editTask="editTask()"
                  @deleteTask="deleteTask(section, task)"
                  class="cursor-move">
              </task>
            </draggable>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import task from "./components/Task.vue";
import editModal from './components/EditModal.vue';
import addModal from './components/AddModal.vue';
import loginForm from './components/LoginForm.vue';

export default {
  name: "App",
  components: {
    task,
    draggable,
    editModal,
    addModal,
    loginForm
  },
  data() {
    return {
      menuTeam: false,
      menuGoals: false,
      menuLogin: false,
      logoutStatus: false,
      commentsStatus: true,
      isEditModalVisible: false,
      isAddModalVisible: false,
      isLoginFormVisible: false,
      addTaskTitle: '',
      addTaskDate: '',
      addTaskPriority: '',
      sections: [
        {
          id: 1,
          title: "Tasks",
          tasks: [
            {
              id: 1,
              title: "Task title 1",
              date: "Nov 24",
              priority: "High"
            },
            {
              id: 2,
              title: "Task title 2",
              date: "Nov 24",
              priority: "High"
            },
            {
              id: 3,
              title: "Task title 3",
              date: "Nov 24",
              priority: "High"
            },
            {
              id: 4,
              title: "Task title 4",
              date: "Nov 24",
              priority: "High"
            }
          ]
        },
        {
          id: 2,
          title: "In progress",
          tasks: [
            {
              id: 5,
              title: "Task title 5",
              date: "Nov 24",
              priority: "High"
            },
            {
              id: 6,
              title: "Task title 6",
              date: "Nov 24",
              priority: "High"
            }
          ]
        },
        {
          id: 3,
          title: "Review",
          tasks: [
            {
              id: 7,
              title: "Task title 7",
              date: "Nov 24",
              priority: "High"
            },
            {
              id: 8,
              title: "Task title 8",
              date: "Nov 24",
              priority: "High"
            },
            {
              id: 9,
              title: "Task title 9",
              date: "Nov 24",
              priority: "High"
            }
          ]
        },
        {
          id: 4,
          title: "Completed",
          tasks: [
            {
              id: 10,
              title: "Task title 10",
              date: "Nov 24",
              priority: "High"
            },
            {
              id: 11,
              title: "Task title 11",
              date: "Nov 24",
              priority: "High"
            }
          ]
        }
      ]
    }
  },
  methods: {
    teamToggle: function () {
      if (this.menuTeam) {
        this.menuTeam = !this.menuTeam;
      } else {
        this.menuTeam = !this.menuTeam;
        this.menuGoals = false;
        this.menuLogin = false;
      }
    },
    goalsToggle: function () {
      if (this.menuGoals) {
        this.menuGoals = !this.menuGoals;
      } else {
        this.menuGoals = !this.menuGoals;
        this.menuTeam = false;
        this.menuLogin = false;
      }
    },
    loginToggle: function () {
      this.isLoginFormVisible = true;
    },
    loginFormClose: function () {
      this.isLoginFormVisible = false;
    },
    loginFormEnter: function () {
      this.isLoginFormVisible = false;
    },
    editTask: function () {
      this.isEditModalVisible = true;
      this.toggleTaskStatus = true;
    },
    deleteTask: function (section, task) {
      let index = section.tasks.indexOf(task);
      section.tasks.splice(index, 1);
    },
    addModalShow() {
      this.isAddModalVisible = true;
      this.toggleTaskStatus = false;
    },
    addModalClose() {
      this.isAddModalVisible = false;
    },
    editModalClose() {
      this.isEditModalVisible = false;
    },
    addModalConfirm(data) {
      console.log('addModalConfirm data', data);
      this.isAddModalVisible = false;
    },
    editModalConfirm(data) {
      console.log('editModalConfirm data', data);
      this.isEditModalVisible = false;
    }
  }
}
</script>

<style>
html {
  font-size: 16px;
  font-family: Roboto, sans-serif;
  font-weight: 500;
}

body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

:root {
  --dark-blue: #200772;
  --light-blue: #644aa0;
  --main-yellow: #FFF100;
  --main-orange: #FFB700;
  --main-red: #cc4e47;
  --main-black: #333;
  --main-white: #fff;
  --light-gray: #f1f1f1;
  --light-green: #87F03C;
  --bg-color: #edeef0;
  --component-bg-color: #acefe0;
  --main-green: #3ba67a;
  --track-color: #ADD8E6;
}

button {
  font-size: 16px;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  padding: 0;
  outline: none;
  cursor: pointer;

}

.container {
  width: 1200px;
  padding: 0 12px;
  margin: 0 auto;
}

.header {
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: var(--bg-color);
}

.header-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  width: 120px;
  height: 40px;
  font-size: 20px;
  color: var(--main-green);
}

.header-menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 260px;
}

.menu__button {
  width: 80px;
  height: 34px;
  color: var(--main-green);
  background-color: var(--main-white);
  border: 1px solid var(--main-green);
  border-radius: 4px;
}

.menu__buttonActive {
  color: var(--main-white);
  background-color: var(--main-green);
}

.menu__button:hover {
  color: var(--main-white);
  background-color: var(--main-green);
}

.logout__button {
  color: var(--main-red);
  border-color: var(--main-red);
}

.logout__button:hover {
  color: var(--main-white);
  background-color: var(--main-red);
}

.team-section, .goals-section {
  display: none;
  min-height: 50px;
  padding-top: 5px;
  padding-bottom: 5px;
  background: var(--light-gray);
}

.sectionActive {
  display: block;
}

.section-main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
  padding: 12px;
  min-height: 40px;
  color: var(--light-blue);
  background: var(--main-white);
}

.member__block {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  padding: 6px;
  background: var(--main-green);
  border-radius: 4px;
}

.member-avatar {
  width: 30px;
  height: 30px;
  border-radius: 4px;
}

.member-name {
  color: var(--main-white);
}

.board {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  background: var(--bg-color);
  overflow: hidden;
}

.board-section {
  padding: 12px 0;
  overflow: hidden;
}

.board-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  background-color: var(--main-green);
  color: var(--main-white);
  padding: 0 12px;
}

.task-add__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 22px;
  min-height: 22px;
  max-height: 22px;
  min-width: 22px;
  max-width: 22px;
  background-color: inherit;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  color: var(--main-white);
}

.plus {

  width: 12px;
  height: 12px;
}

.plus svg {
  display: block;
  margin: 0 auto;
}

.board-main {
  display: flex;
  flex-direction: column;
  background-color: var(--main-white);
  height: 76vh;
  padding: 12px;
  overflow-y: auto;
}

.board-main::-webkit-scrollbar {
  width: 10px;
}

.board-main::-webkit-scrollbar-track {
  background: var(--main-white);
}

.board-main::-webkit-scrollbar-thumb {
  background: var(--track-color);
}
</style>


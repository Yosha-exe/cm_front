<template>
  <div id="app">
    <header>
      <div class="header container">
        <div v-for="(element, index) in title" :key="index" class="header-logo">
          {{ element.value }}
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

    <section class="team-section container" v-bind:class="{sectionActive: menuTeam}">
      <div class="team-section__main section-main">
        <div class="member__block" v-for="(employee, index) in team" :key="index">
          <img :src="employee.avatar" alt="avatar" class="member-avatar">
          <div class="member-name">{{ employee.name }} | {{ employee.department }}</div>
        </div>
      </div>
    </section>

    <section class="goals-section container" v-bind:class="{sectionActive: menuGoals}">
      <div v-for="(element, index) in goals" :key="index" class="goals-section__main section-main">
        {{ element.value }}
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
            <button class="task-add__btn" @click="addModalShow(section)">
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
                  @editTask="editTask(section, task)"
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
// import vmodal from 'vue-js-modal';
import task from "./components/Task.vue";
import editModal from './components/EditModal.vue';
import addModal from './components/AddModal.vue';
import loginForm from './components/LoginForm.vue';
import axios from 'axios';


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
      lastId: 11,
      team: [],
      sections: [],
      title: [],
      goals: []
    }
  },
  mounted() {
    axios
        .get('http://localhost:3000/team')
        .then(response => this.team = response.data)
        .catch(error => console.log(error));
    axios
        .get('http://localhost:3000/sections')
        .then(response => this.sections = response.data)
        .catch(error => console.log(error));
    axios
        .get('http://localhost:3000/title')
        .then(response => this.title = response.data)
        .catch(error => console.log(error));
    axios
        .get('http://localhost:3000/goals')
        .then(response => this.goals = response.data)
        .catch(error => console.log(error));
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
    addModalShow(section) {
      this.addSection = section;
      this.isAddModalVisible = true;
      this.toggleTaskStatus = false;
    },
    addModalConfirm(data) {
      let obj = {
        id: ++this.lastId,
        title: data.addTaskTitle,
        date: data.addTaskDate,
        priority: data.addTaskPriority
      };
      this.addSection.tasks.push(obj);
      this.isAddModalVisible = false;
    },
    editModalConfirm: function () {

    },
    addModalClose() {
      this.isAddModalVisible = false;
    },
    editModalClose() {
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


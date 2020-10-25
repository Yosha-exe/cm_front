// sectionToggle: function(currentParameter, secondParameter, thirdParameter) {
//     if (this.currentParameter) {
//         this.currentParameter = !this.currentParameter;
//     } else {
//         this.currentParameter = !this.currentParameter;
//         this.secondParameter = false;
//         this.thirdParameter = false;
//     }
// }

var taskComponent = Vue.component('task-component', {
    template: '<div class="task">' +
        '                    <div class="task-header">\n' +
        '                        Task title Lorem ipsum dolor sit amet\n' +
        '                    </div>\n' +
        '                    <div class="task-team">\n' +
        '                         <img src="https://via.placeholder.com/30.png?text=Img" alt="avatar" class="task-avatar">\n' +
        '                    </div>\n' +
        '                    <div class="task-main">\n' +
        '                        <div class="task-deadline">\n' +
        '                            Month 31\n' +
        '                        </div>\n' +
        '                        <button type="button" class="task-comments__button">\n' +
        '                            <img alt="comments" src="./src/img/comment-icon.png" width="30" height="30"/>\n' +
        '                        </button>\n' +
        '                    </div>\n' +
        '                        <div class="task-comments"></div>\n' +
        '                        <span class="task-status">\n' +
        '                            Priority value\n' +
        '                        </span>\n' +
        '                    </div>\n' +
        '                </div>'
})

var App = new Vue({
    el: '#app',
    data: function () {
        return {
            menuTeam: false,
            menuGoals: false,
            menuLogin: false,
            logoutStatus: false,
            commentsStatus: true,
            tasks: [
                {title: 'New button design'},
                {title: 'Add filters in market'},
                {title: 'Create new component for admin panel'}
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
            if (this.menuLogin) {
                this.menuLogin = !this.menuLogin;
            } else {
                this.menuLogin = !this.menuLogin;
                this.menuTeam = false;
                this.menuGoals = false;
            }
        },
        commentsToggle: function () {
            if (this.commentsStatus) {
                this.commentsStatus = !this.commentsStatus;
            } else {
                this.commentsStatus = true;
            }
        }
    }
})

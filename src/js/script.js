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
        '                        <button class="task-comments__button">\n' +
        '                            <img alt="comments" src="./src/img/comment-icon.png" width="30" height="30"/>\n' +
        '                        </button>\n' +
        '                    </div>\n' +
        '                    <div class="task-footer">\n' +
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
            tasks: [
                {title: 'New button design'},
                {title: 'Add filters in market'},
                {title: 'Create new component for admin panel'}
            ]
        }
    },
    methods: {
        menuToggle: function () {
            
        }
    }
})

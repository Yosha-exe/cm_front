

// Vue.component('exampleComponent', require('./components/ExampleComponent.vue'));

var taskComponent = Vue.component('task-component', {
    template: '<div class="task-component">' +
        '                    <div class="task-component__header">\n' +
        '                        Task title\n' +
        '                    </div>\n' +
        '                    <div class="task-component__main">\n' +
        '                        <img src="https://via.placeholder.com/30.png?text=F" alt="avatar" class="component-avatar">\n' +
        '                        <div class="component-deadline">\n' +
        '                            Month 31\n' +
        '                        </div>\n' +
        '                        <button class="component-comments__btn">\n' +
        '                            <img alt="comments" src="./src/img/comment-icon.png" width="30" height="30"/>\n' +
        '                        </button>\n' +
        '                    </div>\n' +
        '                    <div class="task-component__footer">\n' +
        '                        <span class="component-status">\n' +
        '                            Priority value\n' +
        '                        </span>\n' +
        '                    </div>\n' +
        '                </div>'
})

var App = new Vue({
    el: '#app',
    data: function (){
        return {
            tasks: [
                { title: 'New button design' },
                { title: 'Add filters in market' },
                { title: 'Create new component for admin panel' }
            ]
        }
    }
})

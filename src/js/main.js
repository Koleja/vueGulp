var PROJECT = PROJECT || {};

PROJECT.init = function () {
    PROJECT.vue.init();
};

PROJECT.vue = {
    init: function () {



        var app = new Vue ({
            el: '#modal',
            data: {
                message: 'no hej!'
            }
        })




// z pracy trening
        var app = new Vue ({
            el: '#app',
            data: {
                message: '<span style="color: red;">what</span>'
            }
        })

        var app2 = new Vue ({
            el: '#app-2',
            data: {
                message: 'You loaded thi spage on ' + new Date().toLocaleString()
            }
        })

        var app3 = new Vue ({
            el: '#app-3',
            data: {
                seen: true
            }
        })
        app3.seen = false;

        var app4 = new Vue ({
            el: '#app-4',
            data: {
                tabs: [
                    {text: 'tralalala'},
                    {text: 'lalala'},
                    {text: 'rumpt tum tum'}
                ]
            }
        })
        app4.tabs.push({text: 'o la la!'});

        var app5 = new Vue ({
            el: '#app-5',
            data: {
                message: 'No hej tam'
            },
            methods: {
                reverseMessage: function () {
                    this.message = this.message.split('').reverse().join('');
                }
            }
        })

        var app6 = new Vue ({
            el: '#app-6',
            data: {
                message: 'Hejka'
            }
        })
        //defining components

        Vue.component('todo-item', {
            props: ['todo'],
            template: '<li>{{ todo.text }}</li>'
        })

        var app7 = new Vue ({
            el: '#app-7',
            data: {
                groceryList: [
                    { id: 0, text: 'apple'},
                    { id: 1, text: 'milk'},
                    { id: 2, text: 'bread'}
                ]
            }
        })
    }
};

$(document).ready(function () {
    PROJECT.init();    
});
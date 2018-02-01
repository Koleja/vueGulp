var PROJECT = PROJECT || {};

PROJECT.init = function () {
    $.browserDetection(true);
    PROJECT.mobile.init();
    PROJECT.goto.init();
    PROJECT.modals.init();
    PROJECT.goToNextField.init();
    PROJECT.orphans.init();
    PROJECT.vue.init();
};

PROJECT.mobile = {
    isMobile: false,
    init: function () {
        this.md = new MobileDetect(window.navigator.userAgent);
        this.isMobile = (this.md.mobile() !== null);
    }
};

PROJECT.goto = {
    $body: $("html, body"),
    init: function () {
        var that = this;        

        if ($("body").hasClass("Chrome") || $("body").hasClass("Opera")) {
            that.$body = $("body");
        }

        $(".js-goto").on("click", function (e) {
            
            LECH.mobileNav.isOpened = false;
            $(".js-nav").removeClass("opened");

            that.$body.stop().animate({
                scrollTop: $($(this).attr("href")).offset().top
            }, 1000, 'swing');
        });
    }        
};

PROJECT.modals = {
    $body: $("body"),
    init: function () {
        var that = this;

        that.$body.on("click", ".js-modal-close, .js-overlay", function (e) {
            that.modalClose(e, $(this));
        });
        if ($(".js-modal").is(":visible")) {
            that.$body.addClass("scroll-lock")
        }
    },
    modalOpen: function () {
        // this.$body.addClass("scroll-lock")
    },
    modalClose: function (event, object) {
        event.preventDefault();
        object.closest(".js-modal").fadeOut(100);
        this.$body.removeClass("scroll-lock");        
    }
}

PROJECT.goToNextField = {
    init: function () {
        $(".js-inp-field input").focus(function () {
            $(this).val("")
        })
        $(".js-inp-field input").keydown( function (e) {
            e.stopImmediatePropagation();
            var $this = $(this),
                kCode = e.keyCode || e.which,
                inpQty = $this.parents(".js-inp-fields-wrapper").find(".js-inp-field").length;

            if ($this.attr("type") === "number") {
                if ((kCode < 48 || kCode > 57) && kCode != 229 && kCode != 8 && kCode != 13 && (kCode < 96 || kCode > 105)) {    
                    $this.val("")
                    return false;           
                }
            }

            if (kCode == 8) {
                if (!$this.val()){
                    $this.parent().prev().find("input").val("").focus();
                }
            } else {
                if ($this.val()) {                     
                    $this.parent().next().find("input").val("").focus();   

                    if ($this.parent().index() + 1 != inpQty) {
                        $this.parent().next().find("input").focus();    
                    } else {
                        $this.blur();
                    }
                }
            }   
        });
    },
}

PROJECT.orphans = {
    init: function () {
        $(".js-orphans").each(function () {
            $(this).html($(this).html().replace(/(\s[iuawzo]|do|się)(\s)/ig,'$1&nbsp;'));
        }); 
    }    
};

PROJECT.vue = {
    init: function () {

        var app = new Vue ({
            el: '#app',
            data: {
                message: 'Hejka'
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
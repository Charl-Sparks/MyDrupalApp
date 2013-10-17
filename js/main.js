var app = {

    route: function() {
        var hash = window.location.hash;
        if (!hash) {
            $('body').html(new HomeView(this.store).render().el);
            return;
        }
        var match = hash.match(app.detailsURL);
        if (match) {
            this.store.findById(Number(match[1]), function(employee) {
                $('body').html(new FormView(employee).render().el);
            });
        }
        var newform = hash.match(app.newformURL);
        if (newform) {
            this.store.addData(tx, function(employee) {
                $('body').html(new FormCreate(employee).render().el);
            });
        }
    },

    registerEvents: function() {
        var self = this;
        $(window).on('hashchange', $.proxy(this.route, this));
    },

    initialize: function() {
        var self = this;
        this.detailsURL = /^#employees\/(\d{1,})/;
        this.newformURL = /#newform/;
        this.registerEvents();
        this.store = new WebSqlStore(function() {
            self.route();
        });
    }

};

app.initialize();
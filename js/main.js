var app = {

    renderHomeView: function() {
    var html =
            "<div class='header'><h1>iAudit</h1></div>" +
            "<div class='search-view'>" +
            "<input class='search-key topcoat-search-input--large'/>" +
            "<ul class='form-list'></ul>" +
            "</div>"
    $('body').html(html);
    $('.search-key').on('keyup', $.proxy(this.findByName, this));
},

    findByName: function() {
        console.log('findByName');
        this.store.findByName($('.search-key').val(), function(employees) {
            var l = employees.length;
            var e;
            $('.employee-list').empty();
            for (var i=0; i<l; i++) {
                e = employees[i];
                $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
            }
        });
    },

    initialize: function() {
        var self = this;
        this.store = new WebSqlStore(function() {
            self.renderHomeView();
        });
    }

};

app.initialize();
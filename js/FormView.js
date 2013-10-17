var FormView = function(employee) {

	this.render = function() {
	    this.el.html(FormView.template(employee));
	    return this;
	};
 
    this.initialize = function() {
        this.el = $('<div/>');
    };
 
    this.initialize();
 
 }
 
FormView.template = Handlebars.compile($("#form-tpl").html());
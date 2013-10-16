var FormCreate = function(employee) {

	this.render = function() {
	    this.el.html(FormCreate.template(employee));
	    return this;
	};
 
    this.initialize = function() {
        this.el = $('<div/>');
    };
 
    this.initialize();
 
 }
 
EmployeeView.template = Handlebars.compile($("#form-create-tpl").html());
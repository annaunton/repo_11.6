// scripts.js

function Button(text) {
	
	this.text = text || 'Hello';

}

Button.prototype.create = function () {
	var self = this;
	this.$element = $('<button>');
	$('body').append(this.$element);

	this.$element.text(this.text);

	this.$element.click(function() {
		alert(self.text);

	});


}

var btn1 = new Button('Hello');
btn1.create ();

var btn2 = new Button('Good bye');
btn2.create ();

var btn3 = new Button();
btn3.create ();


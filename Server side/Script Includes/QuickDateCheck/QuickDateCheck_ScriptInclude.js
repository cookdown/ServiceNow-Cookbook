var QuickDateCheck = Class.create();
QuickDateCheck.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
	
	isFutureDate: function (date_string) {
		// Check for server side parameter, then for a AJAX one
		if (!date_string){
			date_string = this.getParameter('sysparm_test_date');
			if(!date_string){
				return false;
			}
		}		
		var testDate = new GlideDate();
		testDate.setDisplayValue(date_string);
		return testDate.after(new GlideDate());
	},
	
	isPastDate: function (date_string) {
		// Check for server side parameter, then for a AJAX one
		if (!date_string){
			date_string = this.getParameter('sysparm_test_date');
			if(!date_string){
				return false;
			}
		}
		
		var testDate = new GlideDate();
		testDate.setDisplayValue(date_string);
		return testDate.before(new GlideDate());
	},
	
	isFutureDateTime: function (date_string) {
		// Check for server side parameter, then for a AJAX one
		if (!date_string){
			date_string = this.getParameter('sysparm_test_date');
			if(!date_string){
				return false;
			}
		}
		
		var testDate = new GlideDateTime();
		testDate.setDisplayValue(date_string);
		return testDate.after(new GlideDateTime());
	},
	
	isPastDateTime: function (date_string) {
		// Check for server side parameter, then for a AJAX one
		if (!date_string){
			date_string = this.getParameter('sysparm_test_date');
			if(!date_string){
				return false;
			}
		}
		
		var testDate = new GlideDateTime();
		testDate.setDisplayValue(date_string);
		return testDate.before(new GlideDateTime());
	},
	
	type: 'QuickDateCheck'
});
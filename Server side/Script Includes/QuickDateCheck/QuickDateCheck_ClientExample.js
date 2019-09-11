function onChange(control, oldValue, newValue, isLoading)  {
	
	// This is important to prevent loop-like behavior
	if (isLoading || newValue == '') {
		return;
	}
	
	var ga = new GlideAjax('QuickDateCheck');	
	ga.addParam('sysparm_name','isPastDateTime');	
	ga.addParam('sysparm_test_date', newValue);	
	ga.getXMLAnswer(checkAllowed);
	
	// Based on our script include, inform the user
	function checkAllowed(answer){		
		if (answer !== 'true') {			
			g_form.addErrorMessage('Discovery date can\'t be in the future');
			g_form.clearValue('last_discovered');			
		}	
	}	
}
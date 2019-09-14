function onChange(control, oldValue, newValue, isLoading, isTemplate) {
	if (isLoading || newValue === '') {
		return;
	}
	var assignee = g_form.getReference('assigned_to',checkUserStatus);
	
	// call back to notify on the case of inactive users
	function checkUserStatus(assignee){
		if(assignee.active === "false"){
			var msg = assignee.first_name + ' ' + assignee.last_name + '[' + assignee.email +'] is not an active user';
			g_form.showFieldMsg('assigned_to',msg,'error');
		}
	}
}
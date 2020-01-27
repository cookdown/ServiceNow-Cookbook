// This example looks up a record from the windows server table, but can be easily modified for other tables.

var serverGr = new GlideRecord('cmdb_ci_win_server');
serverGr.addQuery('name', 'Infra-Web01')
serverGr.query();

// .next() only moves to the record if one exists/matched the query
if (serverGr.next()) {
    // Running a debug on the object reveals its a GlideRecord 
    gs.debug(serverGr)

    // We can quickly pull the sys_id of the object to use in another field or confirm in the UI
    gs.debug(serverGr.sys_id)
}

// // // Using the ServerIdLookup_function.js function
// When you've dropped the ServerIdLookup function in your script, only the below line is needed
lookupServer('infra-web01');
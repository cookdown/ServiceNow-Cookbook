function lookupServer(serverName, strictMode) {
    // We'll search against the server table, getting windows and linux servers    
    var serverGr = new GlideRecord('cmdb_ci_server');

    // Our query will look at the name and fqdn fields for an exact match
    serverGr.addQuery('name', serverName);
    serverGr.addOrCondition('fqdn', serverName);
    serverGr.query();

    // When using strict mode, error for no servers 
    if (serverGr.getRowCount() == 0 && strictMode) {
        throw "No server has been found.";
    }

    // When using strict mode, error for more than a single match
    if (serverGr.getRowCount() > 1 && strictMode) {
        throw "More than one server was returned by the query.";
    }

    // .next() only moves to the record if one exists/matched the query
    if (serverGr.next()) {
        // We can quickly pull the sys_id of the object to use in another field or confirm in the UI
        return serverGr.sys_id;
    }
    else {
        return null;
    }
}

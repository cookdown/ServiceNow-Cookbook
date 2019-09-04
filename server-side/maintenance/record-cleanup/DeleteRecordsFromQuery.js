// ---------- Begin configuration section ---------- //
var tableName = 'cmdb_ci_server';
var queryFilter = 'nameLIKEcar';
var simulationMode = true;
// ---------- End configuration section ---------- //

var gr = new GlideRecord(tableName);
gr.addEncodedQuery(queryFilter);
gr.query();
while (gr.next()) {
    var recordDisplayName = gr.getDisplayValue();
    if (simulationMode) {
        gs.debug('Potentially deleted record: ' + recordDisplayName);
    } else {
        if (gr.deleteRecord()) {
            gs.debug('SUCCESS deleting record: ' + recordDisplayName);
        } else {
            gs.debug('FAILURE deleting record: ' + recordDisplayName);
        }
    }
}

function associateProblemRecord(problemNumber, incidentNumber) {
    // We'll get the incident and problem records by their respective numbers
    
    // Create the glide record instance
    var prbGr = new GlideRecord('problem');
    var incGr = new GlideRecord('incident');

    // Using get will return the first match
    prbGr.get('number',problemNumber);
    incGr.get('number',incidentNumber);

    // Assign the problem to the incident and update it.
    incGr.problem_id = prbGr.sys_id;
    incGr.Update();
}

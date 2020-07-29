function addChoiceToList(tableName, fieldName, value, label) {
    // The entries created will go in the Choice table
    var choiceTable = new GlideRecord('sys_choice');

    // Initialize a new blank record for our choice.
    choiceTable.initialize();

    // Set the values passed into the function for this choice
    choiceTable.setValue('name',tableName);
    choiceTable.setValue('element',fieldName);
    choiceTable.setValue('value',value);
    choiceTable.setValue('label',label);

    // Commit the record to the table
    choiceTable.update();
}

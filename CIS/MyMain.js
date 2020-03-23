$(document).ready(function() {
    //UI Initialize
    initUIStandard();

    // Initialize the object, before adding data to it.
    //  { } is declarative shorthand for new Object().
    var voFormData = {};
    var DTO;
    var vsActType = "VIEW";
    getFormValue();
    setStateView();

}); //End $(document).ready

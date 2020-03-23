$(document).ready(function() {
    //UI Initialize
    initUIStandard();


    //Command Search Contact
    $("#cmdSearch").click(function() {
        setResultContent();
    });

    //Search Textbox Event
    $('#fldSearchContact').keypress(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            setResultContent();
        } //End if
    }); //End keypress

    function setResultContent() {
        $("#ResultContent").empty();
        var vsSearchValue = $("#fldSearchContact").val();

        if ((vsSearchValue != "") && (vsSearchValue != null)) {
            $('#DialogLoadOnProgress').dialog('open');
            var vsURL = "frmMain_Part1SearchResult.aspx?";
            vsURL = vsURL + "SEARCHKEYWORD=" + $("#fldSearchContact").val();
            $.get(vsURL, function(data, status) {
                $('#DialogLoadOnProgress').dialog('close');
                $("#ResultContent").html(data);
                setHideDivContent(".HiddenDiv");
            });
        } //End if
    } //End function setResultContent
});      //End $(document).ready

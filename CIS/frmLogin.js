$(document).ready(function() {

    // Initialize UI
    initUIStandard();

    // Initialize the object, before adding data to it.
    //  { } is declarative shorthand for new Object().
    var voFormData = {};
    var DTO;
    getFormValue();
    $("#LoadingLogin").hide();

    //Add the page method call as an onclick handler for the div.
    $("#cmdLogin").click(function() {
        doLogin();
    });
    //Search Textbox Event
    $('#fldUserID').keypress(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            doLogin();
        } //End if
    }); //End keypress
    //Search Textbox Event
    $('#fldPassword').keypress(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            doLogin();
        } //End if
    }); //End keypress
    //Function doLogin
    function doLogin() {
        if (($("#fldUserID").val() != "") && ($("#fldPassword").val() != "")) {
            getFormValue();
            doValidate(DTO);
        } //End if
    } //End function doLogin

    //Function load form value
    function getFormValue() {
        //Value to pass
        voFormData.USR_ID = $("#fldUserID").val();
        voFormData.USR_PSWD = $("#fldPassword").val();

        //Return value
        voFormData.IS_VALID = "N";
        voFormData.RSLT_NO = "0";
        voFormData.RSLT_MSG = "";
        voFormData.RSLT_URL = "";

        // Create a data transfer object (DTO) with the proper structure.
        DTO = { 'voFormData': voFormData };
    } //End function getFormValue

    //Function initialize UI
    function initUI() {
        // Dialog Error
        $('#DialogError').dialog({
            autoOpen: false,
            width: 400,
            buttons: {
                "Ok": function() {
                    $(this).dialog("close");
                }
            }
        });
        // Dialog Information
        $('#DialogInformation').dialog({
            autoOpen: false,
            width: 400,
            buttons: {
                "Ok": function() {
                    $(this).dialog("close");
                }
            }
        });
    } //End function initUI

    //Function form validation
    function doValidate(poDTO) {
        $("#LoadingLogin").show();
        $("#cmdLogin").attr("disabled", "disabled");
        $.ajax({
            type: getAJAXType1(),
            contentType: getAJAXContentType1(),
            url: "frmLogin.asmx/isValidLogin",
            data: JSON.stringify(poDTO),
            dataType: getAJAXDataType1(),
            success: function(msg) {
                vResult = msg.d;
            },
            complete: function(msg) {
                $("#LoadingLogin").hide();
                $("#cmdLogin").removeAttr("disabled");
                if (vResult != null) {
                    if (vResult.IS_VALID == getFlagValid()) {
                        //                    $('#DialogInformationMsg').text(vResult.RSLT_MSG);
                        //                    $('#DialogInformation').dialog('open');
                        window.location.href = vResult.RSLT_URL;
                    }
                    else {
                        //$('#DialogInformationMsg').text(vResult.RSLT_MSG);
                        $('#DialogInformationMsg').html(vResult.RSLT_MSG);
                        $('#DialogInformation').dialog('open');
                    } //End if
                } //End if

            },
            error: function() {
                $('#DialogErrorMsg').text(vResult.RSLT_MSG);
                $('#DialogError').dialog('open');
            }
        });
    } //End function doValidate

});

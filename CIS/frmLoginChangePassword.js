$(document).ready(function() {

    // Initialize UI
    initUIStandard();

    // Initialize the object, before adding data to it.
    //  { } is declarative shorthand for new Object().
    var voFormData = {};
    var DTO;
    getFormValue();
    $("#LoadingChangePassword").hide();

    //Add the page method call as an onclick handler for the div.
    $("#cmdChangePassword").click(function() {
        if (($("#fldUserID").val() != "") && ($("#fldPasswordOld").val() != "")
           && ($("#fldPasswordNew1").val() != "") && ($("#fldPasswordNew2").val() != "")) {
            getFormValue();
            doValidate(DTO);
        } //End if
    });
    $("#cmdCancel").click(function() {
        CancelChangePassword();
    });

    //Function load form value
    function getFormValue() {
        //Value to pass
        voFormData.USR_ID = $("#fldUserID").val();
        voFormData.USR_PSWD_OLD = $("#fldPasswordOld").val();
        voFormData.USR_PSWD_NEW1 = $("#fldPasswordNew1").val();
        voFormData.USR_PSWD_NEW2 = $("#fldPasswordNew2").val();

        //Return value
        voFormData.IS_VALID = "N";
        voFormData.RSLT_NO = "0";
        voFormData.RSLT_MSG = "";
        voFormData.RSLT_URL = "";

        // Create a data transfer object (DTO) with the proper structure.
        DTO = { 'voFormData': voFormData };
    } //End function getFormValue

    //Function form validation
    function doValidate(poDTO) {
        $("#LoadingChangePassword").show();
        $("#cmdChangePassword").attr("disabled", "disabled");
        $.ajax({
            type: getAJAXType1(),
            contentType: getAJAXContentType1(),
            url: "Default.asmx/ChangePassword",
            data: JSON.stringify(poDTO),
            dataType: getAJAXDataType1(),
            success: function(msg) {
                vResult = msg.d;
            },
            complete: function(msg) {
                $("#LoadingChangePassword").hide();
                $("#cmdChangePassword").removeAttr("disabled");
                if (vResult != null) {
                    if (vResult.IS_VALID == getFlagValid()) {
                        window.location.href = vResult.RSLT_URL;
                    }
                    else {
                        $('#DialogInformationMsg').html(vResult.RSLT_MSG);
                        $('#DialogInformation').dialog('open');
                    } //End if
                } //End if

            },
            error: function() {
                $('#DialogErrorMsg').text(vResult.RSLT_MSG);
                $('#DialogError').dialog('open');
            }
        }); //End AJAX
    } //End function doValidate
    function CancelChangePassword() {
        $.ajax({
            type: getAJAXType1(),
            contentType: getAJAXContentType1(),
            url: "frmLogin.asmx/getURLMain",
            dataType: getAJAXDataType1(),
            success: function(msg) {
                vResult = msg.d;
            },
            complete: function(msg) {
                window.location.href = vResult;
            },
            error: function() {
            }
        });  //End AJAX

    } //End function CancelChangePassword
});

/*
====================================================
Mandatory Sign
====================================================
*/
function resetMandatorySignByFieldID(psID) {
    var vsID = psID.replace("#", "");
    var vsIDLabel = vsID.replace("fld", "lbl");
    var vsIDSpan = vsIDLabel + "_MandatorySign";

    $("#" + vsIDSpan).remove();
}
function initMandatorySignByFieldClass() {
    $(".FieldAsMandatory").each(function(index) {
        var vsID = $(this).attr("id");
        var vsIDLabel = vsID.replace("fld", "lbl");
        var vsIDSpan = vsIDLabel + "_MandatorySign";

        $("#" + vsIDLabel).append('<span id="' + vsIDSpan + '">*</span>');
        $("#" + vsIDSpan).css("color", "#FF80A4");
    });


}
function addMandatorySignByFieldID(psID) {
    var vsID = psID.replace("#", "");
    var vsIDLabel = vsID.replace("fld", "lbl");
    var vsIDSpan = vsIDLabel + "_MandatorySign";

    $("#" + vsIDLabel).append('<span id="' + vsIDSpan + '">*</span>');
    $("#" + vsIDSpan).css("color", "#FF80A4");

}
/*
====================================================
Reset Validation Information
====================================================
*/
function resetValidationInfo(psID) {
    var vsID = psID.replace("#", "");
    var vsIDx = vsID + "x";
    var vsIDxInfo1 = vsID + "xInfo1";
    $("#" + vsIDxInfo1).empty();
    $("#" + vsID).removeClass("FieldInvalid");
    $("#" + vsIDx).removeClass("FieldInvalid");
} //End resetValidationInfo
/*
====================================================
Mandatory Validation Information
====================================================
*/
function resetMandatoryValue() {
    $(".FieldAsMandatory").each(function(index) {
        var vsID = $(this).attr("id");
        $("#" + vsID).val("");
    }); //End each
} //End function resetMandatoryValue
function resetMandatoryInfo() {
    $(".FieldAsMandatory").each(function(index) {
        var vsID = $(this).attr("id");
        resetValidationInfo(vsID);
    });     //End Validate Mandatory Field
} //End resetMandatoryInfo
function isValidMandatory() {
    var vReturn = "Y";

    //Get Mandatory Info
    var aFormDataMandatory = new Array();
    aFormDataMandatory = getMandatoryInfo(".FieldAsMandatory");
    if (aFormDataMandatory != "") {
        vReturn = "N";
        //Add Invalid Field to validation message container
        displayMandatoryInfo(aFormDataMandatory);
    }

    return vReturn;
} //End isValidMandatory
function getMandatoryInfo(psClassID) {
    var aFormDataMandatory = new Array();

    //Validate Mandatory Field
    var i = -1;
    $(".FieldAsMandatory").each(function(index) {
        var vsID = $(this).attr("id");
        var vsIDx = vsID + "x";
        var vsIDLabel = vsID.replace("fld", "lbl");
        var vsIDxInfo1 = vsID + "xInfo1";
        var vsIDxInfo1_MandatoryInfo = vsIDxInfo1 + "_MandatoryInfo";
        if ($("#" + vsID).val() == "") {
            vReturn = "N";
            i++;
            aFormDataMandatory[i] = {};
            //ID
            aFormDataMandatory[i].FieldID = vsID;
            //IDx
            aFormDataMandatory[i].FieldIDx = vsIDx;
            //Caption
            aFormDataMandatory[i].FieldCaption = $("#" + vsIDLabel).text();
            //Span vsIDxInfo1 ID
            aFormDataMandatory[i].IDxInfo1 = vsIDxInfo1;
            //Span vsIDxInfo1_MandatoryInfo ID
            aFormDataMandatory[i].IDxInfo1_MandatoryInfo = vsIDxInfo1_MandatoryInfo;
            //Field Value
            aFormDataMandatory[i].FieldValue = "";
            //Message 1:mandatory info (Dynamic)
            aFormDataMandatory[i].MessageMandatory = gsMandatoryMsg;
        } //End if
    });    //End Validate Mandatory Field

    return aFormDataMandatory;
} //End getMandatoryInfo
function displayMandatoryInfo(paFormDataMandatory) {
    var aFormDataMandatory = paFormDataMandatory;

    if (aFormDataMandatory != null) {
        //Row
        var vnRowCount = aFormDataMandatory.length;
        for (var i = 0; i < vnRowCount; i++) {
            if (aFormDataMandatory[i] != null) {
                //Remove existing span
                $("#" + aFormDataMandatory[i].IDxInfo1_MandatoryInfo).remove();
                //Add span
                $("#" + aFormDataMandatory[i].IDxInfo1).append('<span id="' + aFormDataMandatory[i].IDxInfo1_MandatoryInfo + '" class="imgMandatory"></span>');
                //Add Message Mandatory
                $("#" + aFormDataMandatory[i].IDxInfo1_MandatoryInfo).text(aFormDataMandatory[i].MessageMandatory);
                //Add Color to Message
                $("#" + aFormDataMandatory[i].FieldID).addClass("FieldInvalid");
                $("#" + aFormDataMandatory[i].FieldIDx).addClass("FieldInvalid");
                $("#" + aFormDataMandatory[i].IDxInfo1_MandatoryInfo).css("color", "#FF80A4");
                $("#" + aFormDataMandatory[i].IDxInfo1_MandatoryInfo).css("font-size", "10px");
                $("#" + aFormDataMandatory[i].IDxInfo1_MandatoryInfo).css("font-style", "italic");
            } //End if
        } //End for Row
    } //End if
} //End displayMandatoryInfo
/*
====================================================
Unique XKey Validation Information
====================================================
*/
function resetUniqueXKInfo(paParUniqueXK) {
    if (paParUniqueXK != "") {
        var vsID = "";
        var vnRowCount = paParUniqueXK.length;
        for (var i = 0; i < vnRowCount; i++) {
            vsID = paParUniqueXK[i].FieldID;
            resetValidationInfo(vsID);
        } //End for
    } //End if
} //End resetUniqueXKInfo
function isValidUniqueXK(paParUniqueXK) {
    var vReturn = "Y";
    //Show unique XKey
    vReturn = displayUniqueXKInfo(paParUniqueXK);
    return vReturn;
} //End paParUniqueXK
function displayUniqueXKInfo(paParUniqueXK) {
    var vReturn = "Y";
    if (paParUniqueXK != "") {
        var psFieldID = "";
        var vsID = "";
        var vsIDx = "";
        var vsIDLabel = "";
        var vsIDxInfo1 = "";
        var vsIDxInfo1_MandatoryInfo = "";
        var vnRowCount = paParUniqueXK.length;
        var vsDataInUseMsg = "";
        for (var i = 0; i < vnRowCount; i++) {
            if (paParUniqueXK[i].isExist == "Y") {
                vReturn = "N";
                vsDataInUseMsg = paParUniqueXK[i].FieldMessage;
                psFieldID = paParUniqueXK[i].FieldID;
                vsID = psFieldID.replace("#", "");
                vsIDx = vsID + "x";
                vsIDLabel = vsID.replace("fld", "lbl");
                vsIDxInfo1 = vsID + "xInfo1";
                vsIDxInfo1_UniqueXKInfo = vsIDxInfo1 + "_UniqueXKInfo";
                //Remove existing span
                $("#" + vsIDxInfo1_UniqueXKInfo).remove();
                //Add span
                $("#" + vsIDxInfo1).append('<span id="' + vsIDxInfo1_UniqueXKInfo + '" class="imgUniqueXK"></span>');
                //Add Message Mandatory
                $("#" + vsIDxInfo1_UniqueXKInfo).text(vsDataInUseMsg);
                //Add Color to Message
                $("#" + vsID).addClass("FieldInvalid");
                $("#" + vsIDx).addClass("FieldInvalid");
                $("#" + vsIDxInfo1_UniqueXKInfo).css("color", "#FF80A4");
                $("#" + vsIDxInfo1_UniqueXKInfo).css("font-size", "10px");
                $("#" + vsIDxInfo1_UniqueXKInfo).css("font-style", "italic");
            } //End if
        } //End for
    } //End if
    return vReturn;
} //End displayUniqueXKInfo

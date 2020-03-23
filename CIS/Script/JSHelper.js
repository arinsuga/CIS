//jQuery AJAX function collection
function getAJAXType1() {
    return "POST";
}
function getAJAXType2() {
    return "GET";
}
function getAJAXContentType1() {
    return "application/json; charset=utf-8";
}
function getAJAXDataType1() {
    return "json";
}
function runAJAX_CRUD(psUrl, poDTO) {
    var vReturn = false;
    $('#DialogSaveOnProgress').dialog('open');
    $.ajax({
        type: getAJAXType1(),
        contentType: getAJAXContentType1(),
        url: psUrl,
        data: JSON.stringify(poDTO),
        dataType: getAJAXDataType1(),
        success: function(msg) {
            vReturn = true;
            voMsg = msg.d;
        },
        complete: function() {
            $('#DialogSaveOnProgress').dialog('close');
            if (voMsg.IS_VALID != "Y") {
                $('#DialogErrorMsg').text(voMsg.RSLT_MSG);
                $('#DialogError').dialog('open');
            }
        },
        error: function() {
            $('#DialogSaveOnProgress').dialog('close');
            $('#DialogErrorMsg').text('Please check for Event log');
            $('#DialogError').dialog('open');
        }
    });
    return vReturn;
}
function runAJAX_IsValid(psUrl, poDTO) {
    var vReturn = false;
    $.ajax({
        type: getAJAXType1(),
        contentType: getAJAXContentType1(),
        url: psUrl,
        data: JSON.stringify(poDTO),
        dataType: getAJAXDataType1(),
        success: function(msg) {
            vReturn = true;
            voMsg = msg.d;
            $('#DialogInformationMsg').text(voMsg.RSLT_MSG);
            $('#DialogInformation').dialog('open');
        },
        error: function() {
            //$('#DialogSaveOnProgress').dialog('close');
            $('#DialogErrorMsg').text('Please check for Event log');
            $('#DialogError').dialog('open');
        }
    });
    return vReturn;
}
function runAJAX_getSession(psSessionID) {
    vReturn = null;
    var vsUrl = WSUrl + "/WSHelper.asmx/getSession";  //"~/WebServices/WSHelper.asmx/getSession";
    var DTO = { 'psSessionID': psSessionID };
    var vReturn = $.ajax({
        type: getAJAXType1(),
        contentType: getAJAXContentType1(),
        url: vsUrl,
        data: JSON.stringify(DTO),
        dataType: getAJAXDataType1(),
        success: function(msg) {
            voMsg = msg.d;
            //$('#DialogInformationMsg').text(voMsg);
            //$('#DialogInformation').dialog('open');
        },
        error: function() {
        }
    });
    return vReturn;
}

//Text function collection
function getResultMessage(psIsValid) {
    if (psIsValid == "Y")
        return "Berhasil - dari function getResultMessage [" + psIsValid + "]"
    else
        return "Gagal - dari function getResultMessage [" + psIsValid + "]";
}
function getFlagNotValid() {
    return "N";
}
function getFlagValid() {
    return "Y";
}

// Init Dialog Information
function initFormWindowsMain(psID, psTitle, pnWidth, pnHeight) {
    $(psID).dialog({
        title: psTitle,
        autoOpen: true,
        modal: false,
        draggable: false,
        resizable: false,
        dialogClass: 'myPosition'
        //height: pnWidth,
        //width: pnHeight
    });
}

//Init Dialog Save On Progress
function initDlgSaveOnProgress(psID) {
    $(psID).dialog({
        autoOpen: false,
        modal: true,
        overlay: { opacity: 0.2, background: "cyan" },
        width: 400
    });
}
//Init Dialog Load On Progress
function initDlgLoadOnProgress(psID) {
    $(psID).dialog({
        autoOpen: false,
        modal: true,
        overlay: { opacity: 0.2, background: "cyan" },
        width: 400
    });
}

// Init Dialog Information
function initDlgInformation(psID) {
    $(psID).dialog({
        autoOpen: false,
        modal: true,
        overlay: { opacity: 0.2, background: "cyan" },
        width: 400,
        buttons: {
            "Ok": function() {
                $(this).dialog("close");
            }
        }
    });
}

// Init Dialog Warning
function initDlgWarning(psID) {
    $(psID).dialog({
        autoOpen: false,
        modal: true,
        overlay: { opacity: 0.2, background: "cyan" },
        width: 400,
        buttons: {
            "Ok": function() {
                $(this).dialog("close");
            }
        }
    });
}

// Init Dialog Error
function initDlgError(psID) {
    $(psID).dialog({
        autoOpen: false,
        modal: true,
        overlay: { opacity: 0.2, background: "red" },
        width: 400,
        buttons: {
            "Ok": function() {
                $(this).dialog("close");
            }
        }
    });
}

// Init Dialog LookUp
function initDlgLookUp(psID) {
    $(psID).dialog({
        autoOpen: false,
        modal: true,
        overlay: { opacity: 0.2, background: "red" },
        width: 700,
        height: 500,
        resizable: false,
        buttons: {
            "Ok": function() {
                $(this).dialog("close");
            }
        }
    });
}
//Init Format number decimal
function initNumberDecimal(psID) {
    $(psID).format({ precision: vssnAppDefDecimalDigit, decimal: vssnAppDefDecimalSign, autofix: true });
    $(psID).focusout(function() {
        if ($(this).val() != null) {
            $(this).val(add100Separator($(this).val()));
        }
    });
}
function initNumberInteger(psID) {
    $(psID).format({ precision: 0, autofix: true });
    $(psID).focusout(function() {
        $(this).val(add100Separator($(this).val()));
    });
}
function formatNumberDecimal(psID) {
    $(psID).each(function(index) {
        var vsID = '#' + $(this).attr('id');
        if ($(vsID).val() != null) {
            var vnValue = parseFloat($(vsID).val());
            var vnValueX = vnValue.toFixed(vssnAppDefDecimalDigit)
            $(vsID).val(setFormatNumber(vnValueX));
        }
    });
}
function formatNumberInteger(psID) {
    $(psID).each(function(index) {
        var vsID = '#' + $(this).attr('id');
        if ($(vsID).val() != null) {
            $(vsID).val(add100Separator($(vsID).val()));
        }
    });
}
function setFormatNumber(nStr) {
    var vs100Sep = "";
    if (vssnAppDef1000Separator != null) { vs100Sep = vssnAppDef1000Separator; }
    else { vs100Sep = ","; }
    var vsDecSep = "";
    if (vssnAppDefDecimalSign != null) { vsDecSep = vssnAppDefDecimalSign; }
    else { vsDecSep = "."; }
    
    
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + vs100Sep + '$2');
    }

    return x1 + x2.replace(".", vsDecSep);
}
function setUnformatNumber(sStr) {
    var vs100Sep = "";
    if (vssnAppDef1000Separator != null) { vs100Sep = vssnAppDef1000Separator; }
    else { vs100Sep = ","; }
    var vsDecSep = "";
    if (vssnAppDefDecimalSign != null) { vsDecSep = vssnAppDefDecimalSign; }
    else { vsDecSep = "."; }

    sStr += '';
    x = sStr.split(vsDecSep);
    x1 = x[0].replace(vs100Sep, "");
    x2 = x.length > 1 ? '.' + x[1] : '';
    return x1 + x2;
}
function add100Separator(nStr) {
    var vs100Sep = "";
    if (vssnAppDef1000Separator != null) { vs100Sep = vssnAppDef1000Separator; }
    else { vs100Sep = ","; }

    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + vs100Sep + '$2');
    }
    return x1 + x2;
}
function ConvertStringToDecimal(psValue) {
    var vsTemp1 = psValue;
    var vsTemp2 = vsTemp.replace(vssnAppDef1000Separator, "");
    var vsTemp3 = vsTemp.replace(vssnAppDef1000Separator, "");
    return vsTemp.replace(vssnAppDef1000Separator, "");
}
function ConvertStringToInteger(psValue) {
    var vsTemp = psValue;
    return vsTemp.replace(vssnAppDef1000Separator, "");
}
function MultiplyMe(psMyID, psSrcID1, psSrcID2) {
    $(psSrcID1).focusout(function() {
    var vnSrcValue1 = $(psSrcID1).val();
    var vnSrcValue2 = $(psSrcID2).val()
    if ((vnSrcValue1 != "") && (vnSrcValue2 != "")) {
            var vnSrcValue1 = parseFloat(setUnformatNumber($(psSrcID1).val()));
            var vnSrcValue2 = parseFloat(setUnformatNumber($(psSrcID2).val()));
            var vnResult = vnSrcValue1 * vnSrcValue2;
            var vsResult = setFormatNumber(vnResult);
            $(psMyID).val(vsResult);
        }
    });

    $(psSrcID2).focusout(function() {
        var vnSrcValue1 = $(psSrcID1).val();
        var vnSrcValue2 = $(psSrcID2).val()
        if ((vnSrcValue1 != "") && (vnSrcValue2 != "")) {
            var vnSrcValue1 = parseFloat(setUnformatNumber($(psSrcID1).val()));
            var vnSrcValue2 = parseFloat(setUnformatNumber($(psSrcID2).val()));
            var vnResult = vnSrcValue1 * vnSrcValue2;
            var vsResult = setFormatNumber(vnResult);
            $(psMyID).val(vsResult);
        }
    });
}
function DevideMe(psMyID, psSrcID1, psSrcID2) {
    $(psSrcID1).focusout(function() {
        var vnSrcValue1 = $(psSrcID1).val();
        var vnSrcValue2 = $(psSrcID2).val()
        if ((vnSrcValue1 != "") && (vnSrcValue2 != "")) {
            var vnSrcValue1 = parseFloat(setUnformatNumber($(psSrcID1).val()));
            var vnSrcValue2 = parseFloat(setUnformatNumber($(psSrcID2).val()));
            var vnResult = vnSrcValue1 / vnSrcValue2;
            var vsResult = setFormatNumber(vnResult);
            $(psMyID).val(vsResult);
        }
    });

    $(psSrcID2).focusout(function() {
        var vnSrcValue1 = $(psSrcID1).val();
        var vnSrcValue2 = $(psSrcID2).val()
        if ((vnSrcValue1 != "") && (vnSrcValue2 != "")) {
            var vnSrcValue1 = parseFloat(setUnformatNumber($(psSrcID1).val()));
            var vnSrcValue2 = parseFloat(setUnformatNumber($(psSrcID2).val()));
            var vnResult = vnSrcValue1 / vnSrcValue2;
            var vsResult = setFormatNumber(vnResult);
            $(psMyID).val(vsResult);
        }
    });
}
function IncrementMe(psMyID, psSrcID1, psSrcID2) {
    $(psSrcID1).focusout(function() {
        var vnSrcValue1 = $(psSrcID1).val();
        var vnSrcValue2 = $(psSrcID2).val()
        if ((vnSrcValue1 != "") && (vnSrcValue2 != "")) {
            var vnSrcValue1 = parseFloat(setUnformatNumber($(psSrcID1).val()));
            var vnSrcValue2 = parseFloat(setUnformatNumber($(psSrcID2).val()));
            var vnResult = vnSrcValue1 + vnSrcValue2;
            var vsResult = setFormatNumber(vnResult);
            $(psMyID).val(vsResult);
        }
    });

    $(psSrcID2).focusout(function() {
        var vnSrcValue1 = $(psSrcID1).val();
        var vnSrcValue2 = $(psSrcID2).val()
        if ((vnSrcValue1 != "") && (vnSrcValue2 != "")) {
            var vnSrcValue1 = parseFloat(setUnformatNumber($(psSrcID1).val()));
            var vnSrcValue2 = parseFloat(setUnformatNumber($(psSrcID2).val()));
            var vnResult = vnSrcValue1 + vnSrcValue2;
            var vsResult = setFormatNumber(vnResult);
            $(psMyID).val(vsResult);
        }
    });
}
function SubstractMe(psMyID, psSrcID1, psSrcID2) {
    $(psSrcID1).focusout(function() {
        var vnSrcValue1 = $(psSrcID1).val();
        var vnSrcValue2 = $(psSrcID2).val()
        if ((vnSrcValue1 != "") && (vnSrcValue2 != "")) {
            var vnSrcValue1 = parseFloat(setUnformatNumber($(psSrcID1).val()));
            var vnSrcValue2 = parseFloat(setUnformatNumber($(psSrcID2).val()));
            var vnResult = vnSrcValue1 - vnSrcValue2;
            var vsResult = setFormatNumber(vnResult);
            $(psMyID).val(vsResult);
        }
    });

    $(psSrcID2).focusout(function() {
        var vnSrcValue1 = $(psSrcID1).val();
        var vnSrcValue2 = $(psSrcID2).val()
        if ((vnSrcValue1 != "") && (vnSrcValue2 != "")) {
            var vnSrcValue1 = parseFloat(setUnformatNumber($(psSrcID1).val()));
            var vnSrcValue2 = parseFloat(setUnformatNumber($(psSrcID2).val()));
            var vnResult = vnSrcValue1 - vnSrcValue2;
            var vsResult = setFormatNumber(vnResult);
            $(psMyID).val(vsResult);
        }
    });
}
// Init jQuery UI Calender
function initDatePickerShort(psID) {
    var vsDateFmt = vssnAppDefDateFormatShort;
    vsDateFmt = vsDateFmt.replace("MM", "mm")
    if (vsDateFmt.indexOf("yyyy") == -1)
        vsDateFmt = vsDateFmt.replace("yy", "y")
    else
        vsDateFmt = vsDateFmt.replace("yyyy", "yy")

    //Date Picker
    $(psID).datepicker({
        changeMonth: true,
        changeYear: true
    });
    $(psID).datepicker("option", "dateFormat", vsDateFmt);
    $(psID).datepicker("option", "showAnim", "slide");
    $(psID).datepicker("option", "yearRange", "1945:2100");
    $(psID).mask(vssnAppDefDateInputMaskShort);

    //validate date
    $(psID).each(function(index) {
        var vsID = '#' + $(this).attr('id');
        $(vsID).focusout(function() {
            var vsDateValue = $(vsID).val();
            var vsMessage = "Invalid date : " + vsDateValue;
            if ((vsDateValue != "") && (vsDateValue != "__/__/____") && (vsDateValue != "__/__/__")) {
                if (isValidDate(vsDateValue) == false) {
                    $('#DialogInformationMsg').text(vsMessage);
                    $('#DialogInformation').dialog('open');
                    $(vsID).val("");
                }
            }
        });
    });

}

// Validation Date
function isValidDate(psDate) {
    var currVal = psDate;
    if (currVal == '')
        return false;

    //Declare Regex  
    var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
    var dtArray = currVal.match(rxDatePattern); // is format OK?

    if (dtArray == null) {
        return false;
    }
    if (vssnAppDefDateFormatShort == "MM/dd/yyyy") {
        //Checks for mm/dd/yyyy format.
        dtMonth = dtArray[1]; //mm
        dtDay = dtArray[3];   //dd
        dtYear = dtArray[5];  //yyyy
    }
    if (vssnAppDefDateFormatShort == "dd/MM/yyyy") {
        //Checks for mm/dd/yyyy format.
        dtDay = dtArray[1]; //mm
        dtMonth = dtArray[3];   //dd
        dtYear = dtArray[5];  //yyyy
    }


    if (dtMonth < 1 || dtMonth > 12)
        return false;
    else if (dtDay < 1 || dtDay > 31)
        return false;
    else if ((dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) && dtDay == 31)
        return false;
    else if (dtMonth == 2) {
        var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
        if (dtDay > 29 || (dtDay == 29 && !isleap))
            return false;
    }
    return true;
}

function setHiddenField(psContentID) {
    $(psContentID).each(function(index) {
        var vsID = '#' + $(this).attr('id');
        $(vsID).hide();
    });
}
function setHideDivContent(psContentID) {
    $(psContentID).hide();
}

function setStateView() {
    //Color TextBox
    $("input[type=text]").removeClass("FieldTextBoxEnable").addClass("FieldTextBoxDisable");
    $("input[type=text].FieldAsLabelDesc").removeClass("FieldTextBoxEnable").addClass("FieldTextBoxDisable");
    $("input[type=text].FieldEnableOnNew").removeClass("FieldTextBoxEnable").addClass("FieldTextBoxDisable");
    $("input[type=text].FieldAsReadOnly").removeClass("FieldTextBoxEnable").addClass("FieldTextBoxDisable");
    $("input[type=text].FieldEnableAlways").removeClass("FieldTextBoxDisable").addClass("FieldTextBoxEnable");
    //Color TextArea
    $("textarea").removeClass("FieldTextAreaEnable").addClass("FieldTextAreaDisable");
    $("textarea.FieldAsLabelDesc").removeClass("FieldTextAreaEnable").addClass("FieldTextAreaDisable");
    $("textarea.FieldEnableOnNew").removeClass("FieldTextAreaEnable").addClass("FieldTextAreaDisable");
    $("textarea.FieldAsReadOnly").removeClass("FieldTextAreaEnable").addClass("FieldTextAreaDisable");
    $("textarea.FieldEnableAlways").removeClass("FieldTextAreaDisable").addClass("FieldTextAreaEnable");

    //ReadOnly TextBox
    $("input[type=text]").attr('readonly', 'readonly');
    $("input[type=text].FieldEnableAlways").removeAttr("readonly");
    //ReadOnly TextArea
    $("textarea").attr('readonly', 'readonly');
    $("textarea.FieldEnableAlways").removeAttr("readonly");

    //CmdAsLookUp,CmdAsLookUpKey,CmdAsLink,CmdAsLinkKey
    $("input[type=button].CmdAsLookUpKey").removeAttr("disabled");
    $("input[type=button].CmdAsLookUp").attr("disabled", "disabled");
    $("input[type=button].CmdAsLinkKey").removeAttr("disabled");
    $("input[type=button].CmdAsLinkUpload").attr("disabled", "disabled");
    $("input[type=button].CmdAsLink").attr("disabled", "disabled");
    $("input[type=button].CmdAsLinkAlwaysEnable").removeAttr("disabled");
    $("input[type=button].CmdAsLookUpAlwaysEnable").removeAttr("disabled");
    //CmdLink,CmdLinkDisabled
    $("input[type=button].CmdAsLookUpKey").removeClass("cmdLookUpDisabled").addClass("cmdLookUp");
    $("input[type=button].CmdAsLookUp").removeClass("cmdLookUp").addClass("cmdLookUpDisabled");
    $("input[type=button].CmdAsLinkKey").removeClass("CmdLinkDisabled").addClass("CmdLink");
    $("input[type=button].CmdAsLink").removeClass("CmdLink").addClass("CmdLinkDisabled");
    $("input[type=button].CmdAsLinkUpload").removeClass("CmdLink").addClass("CmdLinkDisabled");
    $("input[type=button].CmdAsLinkAlwaysEnable").removeClass("CmdLinkDisabled").addClass("CmdLink");
    $("input[type=button].CmdAsLookUpAlwaysEnable").removeClass("cmdLookUpDisabled").addClass("cmdLookUp");
    //Diable/Enable Command CRUD
    setStateViewButton();
}
function setStateNew() {
    //Color TextBox
    $("input[type=text]").removeClass("FieldTextBoxDisable").addClass("FieldTextBoxEnable");
    $("input[type=text].FieldAsLabelDesc").removeClass("FieldTextBoxEnable").addClass("FieldTextBoxDisable");
    $("input[type=text].FieldEnableOnNew").removeClass("FieldTextBoxDisable").addClass("FieldTextBoxEnable");
    $("input[type=text].FieldAsReadOnly").removeClass("FieldTextBoxEnable").addClass("FieldTextBoxDisable");
    $("input[type=text].FieldEnableAlways").removeClass("FieldTextBoxDisable").addClass("FieldTextBoxEnable");
    //Color TextArea
    $("textarea").removeClass("FieldTextAreaDisable").addClass("FieldTextAreaEnable");
    $("textarea.FieldAsLabelDesc").removeClass("FieldTextAreaEnable").addClass("FieldTextAreaDisable");
    $("textarea.FieldEnableOnNew").removeClass("FieldTextAreaDisable").addClass("FieldTextAreaEnable");
    $("textarea.FieldAsReadOnly").removeClass("FieldTextAreaEnable").addClass("FieldTextAreaDisable");
    $("textarea.FieldEnableAlways").removeClass("FieldTextAreaDisable").addClass("FieldTextAreaEnable");

    //ReadOnly TextBox
    $("input[type=text]").removeAttr("readonly");
    $("input[type=text].FieldAsLabelDesc").attr('readonly', 'readonly');
    $("input[type=text].FieldEnableOnNew").removeAttr("readonly");
    $("input[type=text].FieldAsReadOnly").attr('readonly', 'readonly');
    $("input[type=text].FieldEnableAlways").removeAttr("readonly");
    //ReadOnly TextArea
    $("textarea").removeAttr("readonly");
    $("textarea.FieldAsLabelDesc").attr('readonly', 'readonly');
    $("textarea.FieldEnableOnNew").removeAttr("readonly");
    $("textarea.FieldAsReadOnly").attr('readonly', 'readonly');
    $("textarea.FieldEnableAlways").removeAttr("readonly");

    //CmdAsLookUp,CmdAsLookUpKey,CmdAsLink,CmdAsLinkKey, CmdAsLinkUpload
    $("input[type=button].CmdAsLookUpKey").attr("disabled", "disabled");
    $("input[type=button].CmdAsLookUp").removeAttr("disabled");
    $("input[type=button].CmdAsLinkKey").attr("disabled", "disabled");
    $("input[type=button].CmdAsLinkUpload").attr("disabled", "disabled");
    $("input[type=button].CmdAsLink").removeAttr("disabled");
    $("input[type=button].CmdAsLinkAlwaysEnable").removeAttr("disabled");
    $("input[type=button].CmdAsLookUpAlwaysEnable").removeAttr("disabled");
    //CmdLink,CmdLinkDisabled
    $("input[type=button].CmdAsLookUpKey").removeClass("cmdLookUp").addClass("cmdLookUpDisabled");
    $("input[type=button].CmdAsLookUp").removeClass("cmdLookUpDisabled").addClass("cmdLookUp");
    $("input[type=button].CmdAsLinkKey").removeClass("CmdLink").addClass("CmdLinkDisabled");
    $("input[type=button].CmdAsLinkUpload").removeClass("CmdLink").addClass("CmdLinkDisabled");
    $("input[type=button].CmdAsLink").removeClass("CmdLinkDisabled").addClass("CmdLink");
    $("input[type=button].CmdAsLinkAlwaysEnable").removeClass("CmdLinkDisabled").addClass("CmdLink");
    $("input[type=button].CmdAsLookUpAlwaysEnable").removeClass("cmdLookUpDisabled").addClass("cmdLookUp");
    //Diable/Enable Command CRUD
    setStateNewButton();
}
function setStateEdit() {
    //Color TextBox
    $("input[type=text]").removeClass("FieldTextBoxDisable").addClass("FieldTextBoxEnable");
    $("input[type=text].FieldAsLabelDesc").removeClass("FieldTextBoxEnable").addClass("FieldTextBoxDisable");
    $("input[type=text].FieldEnableOnNew").removeClass("FieldTextBoxEnable").addClass("FieldTextBoxDisable");
    $("input[type=text].FieldAsReadOnly").removeClass("FieldTextBoxEnable").addClass("FieldTextBoxDisable");
    $("input[type=text].FieldEnableAlways").removeClass("FieldTextBoxDisable").addClass("FieldTextBoxEnable");
    //Color TextArea
    $("textarea").removeClass("FieldTextAreaDisable").addClass("FieldTextAreaEnable");
    $("textarea.FieldAsLabelDesc").removeClass("FieldTextAreaEnable").addClass("FieldTextAreaDisable");
    $("textarea.FieldEnableOnNew").removeClass("FieldTextAreaEnable").addClass("FieldTextAreaDisable");
    $("textarea.FieldAsReadOnly").removeClass("FieldTextAreaEnable").addClass("FieldTextAreaDisable");
    $("textarea.FieldEnableAlways").removeClass("FieldTextAreaDisable").addClass("FieldTextAreaEnable");

    //ReadOnly TextBox
    $("input[type=text]").removeAttr("readonly");
    $("input[type=text].FieldAsLabelDesc").attr('readonly', 'readonly');
    $("input[type=text].FieldEnableOnNew").attr('readonly', 'readonly');
    $("input[type=text].FieldAsReadOnly").attr('readonly', 'readonly');
    $("input[type=text].FieldEnableAlways").removeAttr("readonly");
    //ReadOnly TextArea
    $("textarea").removeAttr("readonly");
    $("textarea.FieldAsLabelDesc").attr('readonly', 'readonly');
    $("textarea.FieldEnableOnNew").attr('readonly', 'readonly');
    $("textarea.FieldAsReadOnly").attr('readonly', 'readonly');
    $("textarea.FieldEnableAlways").removeAttr("readonly");

    //CmdAsLookUp,CmdAsLookUpKey,CmdAsLink,CmdAsLinkKey
    $("input[type=button].CmdAsLookUpKey").attr("disabled", "disabled");
    $("input[type=button].CmdAsLookUp").removeAttr("disabled");
    $("input[type=button].CmdAsLinkKey").removeAttr("disable");
    $("input[type=button].CmdAsLinkUpload").removeAttr("disabled");
    $("input[type=button].CmdAsLink").removeAttr("disabled");
    $("input[type=button].CmdAsLinkAlwaysEnable").removeAttr("disabled");
    $("input[type=button].CmdAsLookUpAlwaysEnable").removeAttr("disabled");
    //CmdLink,CmdLinkDisabled
    $("input[type=button].CmdAsLookUpKey").removeClass("cmdLookUp").addClass("cmdLookUpDisabled");
    $("input[type=button].CmdAsLookUp").removeClass("cmdLookUpDisabled").addClass("cmdLookUp");
    $("input[type=button].CmdAsLinkKey").removeClass("CmdLink").addClass("CmdLinkDisabled");
    $("input[type=button].CmdAsLinkUpload").removeClass("CmdLinkDisabled").addClass("CmdLink");
    $("input[type=button].CmdAsLink").removeClass("CmdLinkDisabled").addClass("CmdLink");
    $("input[type=button].CmdAsLinkAlwaysEnable").removeClass("CmdLinkDisabled").addClass("CmdLink");
    $("input[type=button].CmdAsLookUpAlwaysEnable").removeClass("cmdLookUpDisabled").addClass("cmdLookUp");
    //Diable/Enable Command CRUD
    setStateEditButton();
}
function setStateViewButton() {
    //Enable/Disable
    $("#cmdNew").removeAttr("disabled");
    $("#cmdEdit").attr("disabled", "disabled");
    $("#cmdDelete").attr("disabled", "disabled");
    $("#cmdSave").attr("disabled", "disabled");
    $("#cmdReset").removeAttr("disabled");
    //CmdLink,CmdLinkDisabled
    $("#cmdNew").removeClass("CmdLinkDisabled").addClass("CmdLink");
    $("#cmdEdit").removeClass("CmdLink").addClass("CmdLinkDisabled");
    $("#cmdDelete").removeClass("CmdLink").addClass("CmdLinkDisabled");
    $("#cmdSave").removeClass("CmdLink").addClass("CmdLinkDisabled");
    $("#cmdReset").removeClass("CmdLinkDisabled").addClass("CmdLink");
}
function setStateNewButton() {
    //Enable/Disable
    $("#cmdNew").attr("disabled", "disabled");
    $("#cmdEdit").attr("disabled", "disabled");
    $("#cmdDelete").attr("disabled", "disabled");
    $("#cmdSave").removeAttr("disabled");
    $("#cmdReset").removeAttr("disabled");
    //CmdLink,CmdLinkDisabled
    $("#cmdNew").removeClass("CmdLink").addClass("CmdLinkDisabled");
    $("#cmdEdit").removeClass("CmdLink").addClass("CmdLinkDisabled");
    $("#cmdDelete").removeClass("CmdLink").addClass("CmdLinkDisabled");
    $("#cmdSave").removeClass("CmdLinkDisabled").addClass("CmdLink");
    $("#cmdReset").removeClass("CmdLinkDisabled").addClass("CmdLink");
}
function setStateEditButton() {
    //Enable/Disable
    $("#cmdNew").attr("disabled", "disabled");
    $("#cmdEdit").attr("disabled", "disabled");
    $("#cmdDelete").attr("disabled", "disabled");
    $("#cmdSave").removeAttr("disabled");
    $("#cmdReset").removeAttr("disabled");
    //CmdLink,CmdLinkDisabled
    $("#cmdNew").removeClass("CmdLink").addClass("CmdLinkDisabled");
    $("#cmdEdit").removeClass("CmdLink").addClass("CmdLinkDisabled");
    $("#cmdDelete").removeClass("CmdLink").addClass("CmdLinkDisabled");
    $("#cmdSave").removeClass("CmdLinkDisabled").addClass("CmdLink");
    $("#cmdReset").removeClass("CmdLinkDisabled").addClass("CmdLink");
}
function setStateReadyEditDelete() {
    //Enable/Disable
    $("#cmdNew").attr("disabled", "disabled");
    $("#cmdEdit").removeAttr("disabled");
    $("#cmdDelete").removeAttr("disabled");
    $("#cmdSave").attr("disabled", "disabled");
    $("#cmdReset").removeAttr("disabled");
    //CmdLink,CmdLinkDisabled
    $("#cmdNew").removeClass("CmdLink").addClass("CmdLinkDisabled");
    $("#cmdEdit").removeClass("CmdLinkDisabled").addClass("CmdLink");
    $("#cmdDelete").removeClass("CmdLinkDisabled").addClass("CmdLink");
    $("#cmdSave").removeClass("CmdLink").addClass("CmdLinkDisabled");
    $("#cmdReset").removeClass("CmdLinkDisabled").addClass("CmdLink");
}
function showLoadingIndicator(psLoadingID) {
    $(psLoadingID).removeClass("imgLoadHide").addClass("imgLoadShow");
}
function hideLoadingIndicator(psLoadingID) {
    $(psLoadingID).removeClass("imgLoadShow").addClass("imgLoadHide");
}
function setEnableTextbox(psFieldID, psCmdLkpKeyID, psCmdLkpID, psCmdLinkKeyID, psCmdLinkID) {
    //Field TextBox
    if (psFieldID != "") {
        //Color TextBox
        $(psFieldID).removeClass("FieldTextBoxDisable").addClass("FieldTextBoxEnable");
        //ReadOnly TextBox
        $(psFieldID).removeAttr("readonly");
    }
    //Command LookUpKey
    if (psCmdLkpKeyID != "") {
        //Color Command
        $(psCmdLkpKeyID).removeClass("cmdLookUpDisabled").addClass("cmdLookUp");
        //Readonly Command
        $(psCmdLkpKeyID).removeAttr("disabled");
    }
    //Command LookUp
    if (psCmdLkpID != "") {
        //Color Command
        $(psCmdLkpID).removeClass("cmdLookUpDisabled").addClass("cmdLookUp");
        //Readonly Command
        $(psCmdLkpID).removeAttr("disabled");
    }
    //Command LinkKey
    if (psCmdLinkKeyID != "") {
        //Color Command Link
        $(psCmdLinkKeyID).removeClass("CmdLinkDisabled").addClass("CmdLink");
        //Readonly Command Link
        $(psCmdLinkKeyID).removeAttr("disabled");
    }
    //Command Link
    if (psCmdLinkID != "") {
        //Color Command Link
        $(psCmdLinkID).removeClass("CmdLinkDisabled").addClass("CmdLink");
        //Readonly Command Link
        $(psCmdLinkID).removeAttr("disabled");
    }
}
function setEnableComboBox(psFieldID, psCmdLkpKeyID, psCmdLkpID, psCmdLinkKeyID, psCmdLinkID) {
    //Field TextBox
    if (psFieldID != "") {
        //Color TextBox
        $(psFieldID).removeClass("FieldComboBoxDisable").addClass("FieldComboBoxEnable");
        //ReadOnly TextBox
        $(psFieldID).removeAttr("readonly");
    }
    //Command LookUpKey
    if (psCmdLkpKeyID != "") {
        //Color Command
        $(psCmdLkpKeyID).removeClass("cmdLookUpDisabled").addClass("cmdLookUp");
        //Readonly Command
        $(psCmdLkpKeyID).removeAttr("disabled");
    }
    //Command LookUp
    if (psCmdLkpID != "") {
        //Color Command
        $(psCmdLkpID).removeClass("cmdLookUpDisabled").addClass("cmdLookUp");
        //Readonly Command
        $(psCmdLkpID).removeAttr("disabled");
    }
    //Command LinkKey
    if (psCmdLinkKeyID != "") {
        //Color Command Link
        $(psCmdLinkKeyID).removeClass("CmdLinkDisabled").addClass("CmdLink");
        //Readonly Command Link
        $(psCmdLinkKeyID).removeAttr("disabled");
    }
    //Command Link
    if (psCmdLinkID != "") {
        //Color Command Link
        $(psCmdLinkID).removeClass("CmdLinkDisabled").addClass("CmdLink");
        //Readonly Command Link
        $(psCmdLinkID).removeAttr("disabled");
    }
}
function setEnableTextArea(psFieldID, psCmdLkpKeyID, psCmdLkpID, psCmdLinkKeyID, psCmdLinkID) {
    //Field TextBox
    if (psFieldID != "") {
        //Color TextBox
        $(psFieldID).removeClass("FieldTextAreaDisable").addClass("FieldTextAreaEnable");
        //ReadOnly TextBox
        $(psFieldID).removeAttr("readonly");
    }
    //Command LookUpKey
    if (psCmdLkpKeyID != "") {
        //Color Command
        $(psCmdLkpKeyID).removeClass("cmdLookUpDisabled").addClass("cmdLookUp");
        //Readonly Command
        $(psCmdLkpKeyID).removeAttr("disabled");
    }
    //Command LookUp
    if (psCmdLkpID != "") {
        //Color Command
        $(psCmdLkpID).removeClass("cmdLookUpDisabled").addClass("cmdLookUp");
        //Readonly Command
        $(psCmdLkpID).removeAttr("disabled");
    }
    //Command LinkKey
    if (psCmdLinkKeyID != "") {
        //Color Command Link
        $(psCmdLinkKeyID).removeClass("CmdLinkDisabled").addClass("CmdLink");
        //Readonly Command Link
        $(psCmdLinkKeyID).removeAttr("disabled");
    }
    //Command Link
    if (psCmdLinkID != "") {
        //Color Command Link
        $(psCmdLinkID).removeClass("CmdLinkDisabled").addClass("CmdLink");
        //Readonly Command Link
        $(psCmdLinkID).removeAttr("disabled");
    }
}
function setDisableTextbox(psFieldID, psCmdLkpKeyID, psCmdLkpID, psCmdLinkKeyID, psCmdLinkID) {
    //Field TextBox
    if (psFieldID != "") {
        //Color TextBox
        $(psFieldID).removeClass("FieldTextBoxEnable").addClass("FieldTextBoxDisable");
        //ReadOnly TextBox
        $(psFieldID).attr('readonly', 'readonly');
    }
    //Command LookUpKey
    if (psCmdLkpKeyID != "") {
        //Color Command
        $(psCmdLkpKeyID).removeClass("cmdLookUp").addClass("cmdLookUpDisabled");
        //Readonly Command
        $(psCmdLkpKeyID).attr("disabled", "disabled");
    }
    //Command LookUp
    if (psCmdLkpID != "") {
        //Color Command
        $(psCmdLkpID).removeClass("cmdLookUp").addClass("cmdLookUpDisabled");
        //Readonly Command
        $(psCmdLkpID).attr("disabled", "disabled");
    }
    //Command LinkKey
    if (psCmdLinkKeyID != "") {
        //Color Command Link
        $(psCmdLinkKeyID).removeClass("CmdLink").addClass("CmdLinkDisabled");
        //Readonly Command Link
        $(psCmdLinkKeyID).attr("disabled", "disabled");
    }
    //Command Link
    if (psCmdLinkID != "") {
        //Color Command Link
        $(psCmdLinkID).removeClass("CmdLink").addClass("CmdLinkDisabled");
        //Readonly Command Link
        $(psCmdLinkID).attr("disabled", "disabled");
    }
}
function setDisableComboBox(psFieldID, psCmdLkpKeyID, psCmdLkpID, psCmdLinkKeyID, psCmdLinkID) {
    //Field TextBox
    if (psFieldID != "") {
        //Color TextBox
        $(psFieldID).removeClass("FieldComboBoxEnable").addClass("FieldComboBoxDisable");
        //ReadOnly TextBox
        $(psFieldID).attr('readonly', 'readonly');
    }
    //Command LookUpKey
    if (psCmdLkpKeyID != "") {
        //Color Command
        $(psCmdLkpKeyID).removeClass("cmdLookUp").addClass("cmdLookUpDisabled");
        //Readonly Command
        $(psCmdLkpKeyID).attr("disabled", "disabled");
    }
    //Command LookUp
    if (psCmdLkpID != "") {
        //Color Command
        $(psCmdLkpID).removeClass("cmdLookUp").addClass("cmdLookUpDisabled");
        //Readonly Command
        $(psCmdLkpID).attr("disabled", "disabled");
    }
    //Command LinkKey
    if (psCmdLinkKeyID != "") {
        //Color Command Link
        $(psCmdLinkKeyID).removeClass("CmdLink").addClass("CmdLinkDisabled");
        //Readonly Command Link
        $(psCmdLinkKeyID).attr("disabled", "disabled");
    }
    //Command Link
    if (psCmdLinkID != "") {
        //Color Command Link
        $(psCmdLinkID).removeClass("CmdLink").addClass("CmdLinkDisabled");
        //Readonly Command Link
        $(psCmdLinkID).attr("disabled", "disabled");
    }
}
function setDisableTextArea(psFieldID, psCmdLkpKeyID, psCmdLkpID, psCmdLinkKeyID, psCmdLinkID) {
    //Field TextBox
    if (psFieldID != "") {
        //Color TextBox
        $(psFieldID).removeClass("FieldTextAreaEnable").addClass("FieldTextAreaDisable");
        //ReadOnly TextBox
        $(psFieldID).attr('readonly', 'readonly');
    }
    //Command LookUpKey
    if (psCmdLkpKeyID != "") {
        //Color Command
        $(psCmdLkpKeyID).removeClass("cmdLookUp").addClass("cmdLookUpDisabled");
        //Readonly Command
        $(psCmdLkpKeyID).attr("disabled", "disabled");
    }
    //Command LookUp
    if (psCmdLkpID != "") {
        //Color Command
        $(psCmdLkpID).removeClass("cmdLookUp").addClass("cmdLookUpDisabled");
        //Readonly Command
        $(psCmdLkpID).attr("disabled", "disabled");
    }
    //Command LinkKey
    if (psCmdLinkKeyID != "") {
        //Color Command Link
        $(psCmdLinkKeyID).removeClass("CmdLink").addClass("CmdLinkDisabled");
        //Readonly Command Link
        $(psCmdLinkKeyID).attr("disabled", "disabled");
    }
    //Command Link
    if (psCmdLinkID != "") {
        //Color Command Link
        $(psCmdLinkID).removeClass("CmdLink").addClass("CmdLinkDisabled");
        //Readonly Command Link
        $(psCmdLinkID).attr("disabled", "disabled");
    }
}
function previewImage(poFileID, psImgID) {
    var input = poFileID;
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $(psImgID).attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
} //End function previewImage
function isValidValue(pnValue, pnRangeVal1, pnRangeVal2, psOprID) {
    var vReturn = false;

    if (vReturn == false) { 
        if (psOprID == 'LOV_RNGOPR_001') {
            if ((pnValue >= pnRangeVal1) && (pnValue <= pnRangeVal2)) { vReturn = true; }
        } //End if
    } //End if

    if (vReturn == false) { 
        if (psOprID == 'LOV_RNGOPR_002') {
            if ((pnValue > pnRangeVal1) && (pnValue < pnRangeVal2)) { vReturn = true; }
        } //End if
    } //End if

    if (vReturn == false) { 
        if (psOprID == 'LOV_RNGOPR_003') {
            if ((pnValue >= pnRangeVal1) && (pnValue < pnRangeVal2)) { vReturn = true; }
        } //End if
    } //End if

    if (vReturn == false) { 
        if (psOprID == 'LOV_RNGOPR_004') {
            if ((pnValue > pnRangeVal1) && (pnValue <= pnRangeVal2)) { vReturn = true; }
        } //End if
    } //End if

    if (vReturn == false) { 
        if (psOprID == 'LOV_RNGOPR_005') {
            if (pnValue >= pnRangeVal1) { vReturn = true; }
        } //End if
    } //End if

    if (vReturn == false) { 
        if (psOprID == 'LOV_RNGOPR_006') {
            if (pnValue <= pnRangeVal1) { vReturn = true; }
        } //End if
    } //End if

    if (vReturn == false) { 
        if (psOprID == 'LOV_RNGOPR_007') {
            if (pnValue > pnRangeVal1) { vReturn = true; }
        } //End if
    } //End if

    if (vReturn == false) { 
        if (psOprID == 'LOV_RNGOPR_008') {
            if (pnValue < pnRangeVal1) { vReturn = true; }
        } //End if
    } //End if

    return vReturn;
} //End function isValidValue
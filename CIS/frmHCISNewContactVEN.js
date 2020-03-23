$(document).ready(function() {
    //UI Initialize
    initUIStandard();
    setStateView();

    // Initialize the object, before adding data to it.
    //  { } is declarative shorthand for new Object().
    var voFormData = {};
    var DTO;
    var vsActType = "VIEW";
    getFormValue();
    setStateView();

    //Command CRUD
    $("#cmdNew").click(function() {
        $("#cmdReset").click();
        setStateNew();
        vsActType = "NEW";
        $("#fldFIELD_ID").focus();
    });
    //Command CRUD
    $("#cmdEdit").click(function() {
        vsActType = "EDIT";
        setStateEdit();
    });
    //Command CRUD
    $("#cmdDelete").click(function() {
        getFormValue();
        doDeleteData();
    });
    //Command CRUD
    $("#cmdSave").click(function() {
        if ($("#fldRES_NM").val() != "") {
            getFormValue();
            if (vsActType == "NEW") {
                doInsertData();
                setStateView();
            }
            if (vsActType == "EDIT") {
                doUpdateData();
                setStateView();
            }
        }

    });
    //Command CRUD
    $("#cmdReset").click(function() {
        vsActType = "VIEW";
        setStateView();
        $('#fldRUID').val("");
    });
    //Command CRUD
    $("#cmdClose").click(function() {
    });


    //Command LookUp
    $('#LKP_RUID').click(function() {
        vsSearchValue = new Array();
        vsSearchValue[0] = "";
        showLookup('LKP_HCIS_RESCONTACT_VEN', '#imgRUID', vsSearchValue,
                   '#fldRUID', '#fldRES_ID', '#fldRES_NM');
    });

    //Command browse to form
    $('#cmdBrowseByRUID').click(function() {
        if ($("#fldRUID").val() != "") {
            setStateReadyEditDelete();
            getDBValueByRUID($('#fldRUID').val());
        }
    });

    //Command LookUp Country
    $('#LKP_CNTRY_RUID').click(function() {
        vsSearchValue = new Array();
        vsSearchValue[0] = "";
        showLookup('LKP_HCIS_COUNTRY', '#imgCNTRY_RUID', vsSearchValue,
                   '#fldCNTRY_RUID', '', '#fldCNTRY_NM');
    });

    //Command LookUp City
    $('#LKP_CITY_RUID').click(function() {
        vsSearchValue = new Array();
        vsSearchValue[0] = "";
        showLookup('LKP_HCIS_CITY', '#imgCITY_RUID', vsSearchValue,
                   '#fldCITY_RUID', '', '#fldCITY_NM');
    });

    function getDBValueByRUID(psRUID) {
        var vsURL = "frmHCISNewContact.asmx/doPopDataByRUID";
        var DTOx = { 'psRUID': psRUID };
        $.ajax({
            type: getAJAXType1(),
            contentType: getAJAXContentType1(),
            url: vsURL,
            data: JSON.stringify(DTOx),
            dataType: getAJAXDataType1(),
            success: function(msg) {
                vReturn = true;
                voMsg = msg.d;
                setFormValue(voMsg)
            },
            error: function() {
            }
        });
    }

    //Function set form value
    function setFormValue(poMsg) {
        $("#fldADTRL_WKS").val(poMsg.fldADTRL_WKS);
        $("#fldADTRL_IP").val(poMsg.fldADTRL_IP);
        $("#fldADTRL_USR").val(poMsg.fldADTRL_USR);
        $("#fldADTRL_PRG").val(poMsg.fldADTRL_PRG);
        $("#fldADTRL_DT").val(poMsg.fldADTRL_DT);
        $("#fldRSEQNO").val(poMsg.fldRSEQNO);
        $("#fldRUID").val(poMsg.fldRUID);
        $("#fldDTA_STS").val(poMsg.fldDTA_STS);
        $("#fldACT_TYPE").val(poMsg.fldACT_TYPE);
        $("#fldIMG_SRC").val(poMsg.fldIMG_SRC);
        $("#fldRES_TYPE").val(poMsg.fldRES_TYPE);
        $("#fldRES_SUBTYPE").val(poMsg.fldRES_SUBTYPE);
        $("#fldRES_ID").val(poMsg.fldRES_ID);
        $("#fldRES_NM").val(poMsg.fldRES_NM);
        $("#fldRES_NMX1").val(poMsg.fldRES_NMX1);
        $("#fldRES_NMX2").val(poMsg.fldRES_NMX2);
        $("#fldRES_NMX3").val(poMsg.fldRES_NMX3);
        $("#fldPHN1").val(poMsg.fldPHN1);
        $("#fldPHN2").val(poMsg.fldPHN2);
        $("#fldPHN3").val(poMsg.fldPHN3);
        $("#fldFAX").val(poMsg.fldFAX);
        $("#fldMAIL").val(poMsg.fldMAIL);
        $("#fldWEBSITE").val(poMsg.fldWEBSITE);
        $("#fldCNTRY_RUID").val(poMsg.fldCNTRY_RUID);
        $("#fldCNTRY_NM").val(poMsg.fldCNTRY_NM);
        $("#fldCITY_RUID").val(poMsg.fldCITY_RUID);
        $("#fldCITY_NM").val(poMsg.fldCITY_NM);
        $("#fldZIP").val(poMsg.fldZIP);
        $("#fldADDR1").val(poMsg.fldADDR1);
        $("#fldADDR2").val(poMsg.fldADDR2);
        $("#fldADDR3").val(poMsg.fldADDR3);
        $("#fldADDR4").val(poMsg.fldADDR4);
        $("#fldADDR5").val(poMsg.fldADDR5);
        $("#fldCP1_NM").val(poMsg.fldCP1_NM);
        $("#fldCP1_PHN1").val(poMsg.fldCP1_PHN1);
        $("#fldCP1_PHN2").val(poMsg.fldCP1_PHN2);
        $("#fldCP1_MAIL").val(poMsg.fldCP1_MAIL);
        $("#fldCP1_WEBSITE").val(poMsg.fldCP1_WEBSITE);
        $("#fldCP2_NM").val(poMsg.fldCP2_NM);
        $("#fldCP2_PHN1").val(poMsg.fldCP2_PHN1);
        $("#fldCP2_PHN2").val(poMsg.fldCP2_PHN2);
        $("#fldCP2_MAIL").val(poMsg.fldCP2_MAIL);
        $("#fldCP2_WEBSITE").val(poMsg.fldCP2_WEBSITE);
        $("#fldNOTES").val(poMsg.fldNOTES);

        //Lookup inline (if need)
        //showLookupInline("ASM_PROD_SUBCTGRY", poMsg.fldPROD_SUBCTGRY, "#fldPROD_SUBCTGRYx");
        //Field Formating Number Decimal
        //formatNumberDecimal(".FieldAsDecimal");
        //Field Formating Number Integer
        //formatNumberInteger(".FieldAsInteger");
    }
    //Function load form value
    function getFormValue() {
        voFormData.fldADTRL_WKS = $("#fldADTRL_WKS").val();
        voFormData.fldADTRL_IP = $("#fldADTRL_IP").val();
        voFormData.fldADTRL_USR = $("#fldADTRL_USR").val();
        voFormData.fldADTRL_PRG = $("#fldADTRL_PRG").val();
        voFormData.fldADTRL_DT = $("#fldADTRL_DT").val();
        voFormData.fldRSEQNO = $("#fldRSEQNO").val();
        voFormData.fldRUID = $("#fldRUID").val();
        voFormData.fldDTA_STS = $("#fldDTA_STS").val();
        voFormData.fldACT_TYPE = $("#fldACT_TYPE").val();
        voFormData.fldIMG_SRC = $("#fldIMG_SRC").val();
        voFormData.fldRES_TYPE = "VEN"; //$("#fldRES_TYPE").val();
        voFormData.fldRES_SUBTYPE = "";  //$("#fldRES_SUBTYPE").val();
        voFormData.fldRES_ID = $("#fldRES_ID").val();
        voFormData.fldRES_NM = $("#fldRES_NM").val();
        voFormData.fldRES_NMX1 = $("#fldRES_NMX1").val();
        voFormData.fldRES_NMX2 = $("#fldRES_NMX2").val();
        voFormData.fldRES_NMX3 = $("#fldRES_NMX3").val();
        voFormData.fldPHN1 = $("#fldPHN1").val();
        voFormData.fldPHN2 = $("#fldPHN2").val();
        voFormData.fldPHN3 = $("#fldPHN3").val();
        voFormData.fldFAX = $("#fldFAX").val();
        voFormData.fldMAIL = $("#fldMAIL").val();
        voFormData.fldWEBSITE = $("#fldWEBSITE").val();
        voFormData.fldCNTRY_RUID = $("#fldCNTRY_RUID").val();
        voFormData.fldCNTRY_NM = $("#fldCNTRY_NM").val();
        voFormData.fldCITY_RUID = $("#fldCITY_RUID").val();
        voFormData.fldCITY_NM = $("#fldCITY_NM").val();
        voFormData.fldZIP = $("#fldZIP").val();
        voFormData.fldADDR1 = $("#fldADDR1").val();
        voFormData.fldADDR2 = $("#fldADDR2").val();
        voFormData.fldADDR3 = $("#fldADDR3").val();
        voFormData.fldADDR4 = $("#fldADDR4").val();
        voFormData.fldADDR5 = $("#fldADDR5").val();
        voFormData.fldCP1_NM = $("#fldCP1_NM").val();
        voFormData.fldCP1_PHN1 = $("#fldCP1_PHN1").val();
        voFormData.fldCP1_PHN2 = $("#fldCP1_PHN2").val();
        voFormData.fldCP1_MAIL = $("#fldCP1_MAIL").val();
        voFormData.fldCP1_WEBSITE = $("#fldCP1_WEBSITE").val();
        voFormData.fldCP2_NM = $("#fldCP2_NM").val();
        voFormData.fldCP2_PHN1 = $("#fldCP2_PHN1").val();
        voFormData.fldCP2_PHN2 = $("#fldCP2_PHN2").val();
        voFormData.fldCP2_MAIL = $("#fldCP2_MAIL").val();
        voFormData.fldCP2_WEBSITE = $("#fldCP2_WEBSITE").val();
        voFormData.fldNOTES = $("#fldNOTES").val();

        // Create a data transfer object (DTO) with the proper structure.
        DTO = { 'voFormData': voFormData };
    }

    //Function form validation
    function doValidate(psSessionID) {
        var vReturn;
        vReturn = false;
        psSessionID = psSessionID;
        var DTO = { 'psSessionID': psSessionID };

        $.ajax({
            type: getAJAXType1(),
            contentType: getAJAXContentType1(),
            url: "frmEntXxx.asmx/doValidate",
            data: JSON.stringify(DTO),
            dataType: getAJAXDataType1(),
            success: function(msg) {
                $('#DialogInformationMsg').text(msg.d);
                $('#DialogInformation').dialog('open');
            },
            error: function() {
                $('#DialogInformationMsg').text(msg.d);
                $('#DialogInformation').dialog('open');
            }
        });

        return vReturn;
    }


    //Function Insert Data
    function doInsertData() {
        var vReturn = false;
        runAJAX_CRUD("frmHCISNewContact.asmx/doInsertData", DTO);
        return vReturn;


    }
    //Function Update Data
    function doUpdateData() {
        var vReturn = false;
        runAJAX_CRUD("frmHCISNewContact.asmx/doUpdateData", DTO);
        return vReturn;
    }
    //Function Update Data
    function doDeleteData() {
        var vReturn = false;
        runAJAX_CRUD("frmHCISNewContact.asmx/doDeleteData", DTO);
        return vReturn;
    }


});   //End $(document).ready

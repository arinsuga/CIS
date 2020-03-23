//Initialize variable
var vsDialogLookup = '#DialogLookup';
var vsDivforgrdLookUp = '#divforgrdLookUp';

function showLookup(psLkpID, psLoadingImage, psSearchValue,
                    psHtmlTagID_RUID, psHtmlTagID_ID, psHtmlTagID_Desc) 
{
    if (psLoadingImage != '') { showLoadingIndicator(psLoadingImage); }
    var DTO = { 'psLkpID': psLkpID, 'psSearchValue': psSearchValue };
    var vsURL = WSUrl + "/WSHelper.asmx/showLookUp";
    $.ajax({
        type: getAJAXType1(),
        contentType: getAJAXContentType1(),
        url: vsURL,
        data: JSON.stringify(DTO),
        dataType: getAJAXDataType1(),
        success: function(msg) {
            //ASP.NET WebService JSON Return msg.d
            voMsg = msg.d;
            //Set Lookup Container
            $(vsDialogLookup).dialog('option', 'title', voMsg.ContainerConfig.CONFIG_TITLE_LANG_ID);
            //Show Lookup
            $(vsDialogLookup).dialog('open');
            //Render Table lookup
            renderLookup(voMsg);
            //Set Event
            setLookUpEventRetRUID(psHtmlTagID_RUID);
            setLookUpEventRetID(psHtmlTagID_ID);
            setLookUpEventRetDesc(psHtmlTagID_Desc);


            //            //Set Search Action (Pending for Advance Search)
            //            $('#cmdLkpSearch').click(function() {
            //                reloadLookUp(psLkpID);
            //            });
            //            //Set Reset Action (Pending for Advance Search)
            //            $('#cmdLkpReset').click(function() {
            //                $('#fldLkpSearchValue').val("");
            //                renderLookup(voMsg);
            //            });
        },
        complete: function(msg) {
            if (psLoadingImage != '') { hideLoadingIndicator(psLoadingImage); }
        },
        error: function() {
        }
    });

}

//Render Lookup table
function renderLookup(voMsg) {
    //Column Array
    var aoColumns = constructLkpColumn(voMsg);
    //Column Hide Array
    var aoColumnDefs = constructLkpColumnHide(voMsg);
    //Container Language
    var oLanguage = constructLkpContainerLang(voMsg);
    //Data Array
    var aaData = constructLkpData(voMsg);
    //Order data
    var aaSorting = constructLkpDataSort(voMsg);
    //Initialize grid Lookup
    $(vsDivforgrdLookUp).html('<table width="100%" cellpadding="0" cellspacing="0" border="0" class="display" id="grdLookUp"></table>');
    var voGRID = $('#grdLookUp').dataTable({
        "bJQueryUI": true,
        "bPaginate": false,
        "sScrollY": "200",
        "bScrollCollapse": true,
        "bScrollInfinite": false,
        "bAutoWidth": true,
        "aaData": aaData,
        "aaSorting": aaSorting,
        "aoColumns": aoColumns,
        "aoColumnDefs": aoColumnDefs,
        "oLanguage": oLanguage
    });

//        voGRID.fnClearTable();
//        voGRID.fnAddData(aaData);
//        voGRID.fnDraw();
    $(window).bind('resize', function() {
    voGRID.fnAdjustColumnSizing();
    });
    return voGRID;
}

//Construct LookUp Column
function constructLkpColumn(poMsg) {
    //Column Array
    var aoColumns = new Array();
    var vnColCount = poMsg.aoColumns.length;

    for (var i = 0; i < vnColCount; i++) {
        aoColumns.push({ "sTitle": poMsg.aoColumns[i].CONFIG_LANG_ID,
            "sWidth": poMsg.aoColumns[i].CONFIG_WIDTH + "%"
        });
    }

    return aoColumns;
}

//Construct LookUp Column Hide
function constructLkpColumnHide(poMsg) {
    //Column Hide Array
    var aoColumnDefs = new Array();
    var vnColCount = poMsg.aoColumns.length;

    for (var i = 0; i < vnColCount; i++) {

        if (poMsg.aoColumns[i].CONFIG_ISHIDDEN == "Y") {
            aoColumnDefs.push({ "bVisible": false, "aTargets": [i] });
            //            voGRID.fnSetColumnVis(0, false, true);
        }


    }

    return aoColumnDefs;
}

//Construct language
function constructLkpContainerLang(poMsg) {


    var sLengthMenu = poMsg.ContainerConfig.CONFIG_LBL_HEADER_PAGE_PFX_LANG_ID + " _MENU_ " +
                      poMsg.ContainerConfig.CONFIG_LBL_HEADER_PAGE_SFX_LANG_ID;
    var sZeroRecords = poMsg.ContainerConfig.CONFIG_MSG_ZRECORD1_LANG_ID;
    var sInfo = poMsg.ContainerConfig.CONFIG_LBL_FOOTER_PAGE_PFX_LANG_ID + " _START_ " +
                 poMsg.ContainerConfig.CONFIG_LBL_FOOTER_PAGE_MID1_LANG_ID+" _END_ "+
                 poMsg.ContainerConfig.CONFIG_LBL_FOOTER_PAGE_MID2_LANG_ID+" _TOTAL_ "+
                 poMsg.ContainerConfig.CONFIG_LBL_FOOTER_PAGE_SFX_LANG_ID;
    var sInfoEmpty = poMsg.ContainerConfig.CONFIG_MSG_ZRECORD2_LANG_ID;
    var sSearch = poMsg.ContainerConfig.CONFIG_LBL_FILTER_LANG_ID;

    var oLanguage = {
        "sLengthMenu": sLengthMenu,
        "sZeroRecords": sZeroRecords,
        "sInfo": sInfo,
        "sInfoEmpty": sInfoEmpty,
        "sSearch": sSearch,
        "sInfoFiltered": "(filtered from _MAX_ total records)"
    };

    return oLanguage;
}


//Construct LookUp Data
function constructLkpData(poMsg) {

    //Data Array
    var aaData = new Array();
    if (poMsg.aaData != null) {
        var vnRowCount = poMsg.aaData.length;
        var vnColCount = -1;
        for (var i = 0; i < vnRowCount; i++) {
            aaData[i] = new Array();
            vnColCount = poMsg.aaData[i].length;
            for (var j = 0; j < vnColCount; j++) {
                aaData[i][j] = poMsg.aaData[i][j];
            }
        }
    }

    return aaData;
}

//Reload lookup (pending for Advance Search)
//function reloadLookUp(psLkpID) {

//    var vsSearchValue = $('#fldLkpSearchValue').val();
//    var DTO = { 'psLkpID': psLkpID, 'psSearchValue': vsSearchValue };
//    var vsURL = WSUrl + "/WSHelper.asmx/showLookUp";
//    //Grid to Reload
//    var voGRID = $('#grdLookUp').dataTable();
//    voGRID.fnClearTable(0);
//    voGRID.fnDraw();

//    $.ajax({
//        type: getAJAXType1(),
//        contentType: getAJAXContentType1(),
//        url: vsURL,
//        data: JSON.stringify(DTO),
//        dataType: getAJAXDataType1(),
//        success: function(msg) {
//            //ASP.NET WebService JSON Return msg.d
//            voMsg = msg.d;
//            //Data Array
//            var aaData = constructLkpData(voMsg);
//            voGRID.fnAddData(aaData);
//            voGRID.fnDraw();

//        },
//        error: function() {
//        }
//    });
//}

//LookUp Event - RetRUID
function setLookUpEventRetRUID(psTagID) {
    var vsReturn = '';

    $('#grdLookUp tbody tr').click(function() {
        var voGRID = $('#grdLookUp').dataTable();
        vsReturn = voGRID.fnGetData(this, 0);
        if (psTagID != '') {
            var vsBefore = $(psTagID).val();
            var vsAfter = vsReturn;
            $(psTagID).val(vsReturn);
            if (vsBefore != vsAfter) { $(psTagID).change(); }
        }
        $(vsDialogLookup).dialog("close");
    });
    return vsReturn;
}

//LookUp Event - RetID
function setLookUpEventRetID(psTagID) {
    var vsReturn = '';

    $('#grdLookUp tbody tr').click(function() {
        var voGRID = $('#grdLookUp').dataTable();
        vsReturn = voGRID.fnGetData(this, 1);
        if (psTagID != '') {
            var vsBefore = $(psTagID).val();
            var vsAfter = vsReturn;
            $(psTagID).val(vsReturn);
            if (vsBefore != vsAfter) { $(psTagID).change(); }
        }
        $(vsDialogLookup).dialog("close");
    });
    return vsReturn;
}

//LookUp Event - RetDesc
function setLookUpEventRetDesc(psTagID) {
    var vsReturn = '';

    $('#grdLookUp tbody tr').click(function() {
        var voGRID = $('#grdLookUp').dataTable();
        vsReturn = voGRID.fnGetData(this, 2);
        if (psTagID != '') {
            var vsBefore = $(psTagID).val();
            var vsAfter = vsReturn;
            $(psTagID).val(vsReturn);
            if (vsBefore != vsAfter) { $(psTagID).change(); }
        }
        $(vsDialogLookup).dialog("close");
    });
    return vsReturn;
}

function InitLoading(psID) {

}
function showLoading(psID) {

}
function hideLoading(psID) {

}

/*
==========================================================
Inline Lookup
==========================================================
*/

function showLookupInline(psLKPID, psLoadingImage, psRUID, psTagID) {
    if (psLoadingImage != '') { showLoadingIndicator(psLoadingImage); }
    var DTO = { 'psLKPID': psLKPID, 'psRUID': psRUID };
    var vsURL = WSUrl + "/WSHelper.asmx/showLookupInline";
    $.ajax({
        type: getAJAXType1(),
        contentType: getAJAXContentType1(),
        url: vsURL,
        data: JSON.stringify(DTO),
        dataType: getAJAXDataType1(),
        success: function(msg) {
            //ASP.NET WebService JSON Return msg.d
            voMsg = msg.d;
            $(psTagID).val(voMsg);
        },
        complete: function(msg) {
            if (psLoadingImage != '') { hideLoadingIndicator(psLoadingImage); }
        },
        error: function() {
        }
    });
}


//Construct Order Lookup Data
function constructLkpDataSort(poMsg) {

    //Data Array Sort
    var aaSorting = new Array();

    var vsCONFIG_TABLE_ORDERBY = poMsg.ContainerConfig.CONFIG_TABLE_ORDERBY;
    if (vsCONFIG_TABLE_ORDERBY != null) {
        var aOrderByList = new Array();
        aOrderByList = vsCONFIG_TABLE_ORDERBY.split(";");
        if (aOrderByList != null) {
            var vnRowCount = aOrderByList.length;
            for (var i = 0; i < vnRowCount; i++) {
                var vsOrderBy = aOrderByList[i];
                var aOrderBy = new Array();
                aOrderBy = vsOrderBy.split("x");
                if (aOrderBy != null) {
                    aaSorting[i] = [parseInt(aOrderBy[0]), aOrderBy[1]];
                }
            }
        }
    }

    return aaSorting;
}

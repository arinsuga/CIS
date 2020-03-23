//Initialize variable
//var vsDialogList = '#DialogList';

function showListNoData(psContainerID, psLkpID, psSearchValue) {
    var DTO = { 'psLkpID': psLkpID, 'psSearchValue': psSearchValue, 'psIsGetData': 'N' };
    var vsURL = WSUrl + "/WSHelper.asmx/showList";
    $.ajax({
        type: getAJAXType1(),
        contentType: getAJAXContentType1(),
        url: vsURL,
        data: JSON.stringify(DTO),
        dataType: getAJAXDataType1(),
        success: function(msg) {
            //ASP.NET WebService JSON Return msg.d
            voMsg = msg.d;

            //Render Table lookup
            renderList(psContainerID, voMsg);
            //Set Event


        },
        complete: function(msg) {
        },
        error: function() {
        }
    });

}

function showList(psContainerID, psLkpID, psLoadingImage, psSearchValue,
                  psHtmlTagID_RUID, psHtmlTagID_ID, psHtmlTagID_Desc) {
    if (psLoadingImage != '') { showLoadingIndicator(psLoadingImage); }
    var DTO = { 'psLkpID': psLkpID, 'psSearchValue': psSearchValue, 'psIsGetData': 'Y' };
    var vsURL = WSUrl + "/WSHelper.asmx/showList";
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
            //$(vsDialogList).text(voMsg.ContainerConfig.CONFIG_TITLE_LANG_ID);
            //Render Table lookup
            renderList(psContainerID, voMsg);
            //Set Event
            setListUpEventRetRUID(psHtmlTagID_RUID);
            setListEventRetID(psHtmlTagID_ID);
            setListUpEventRetDesc(psHtmlTagID_Desc);


            //            //Set Search Action (Pending for Advance Search)
            //            $('#cmdLkpSearch').click(function() {
            //                reloadLookUp(psLkpID);
            //            });
            //            //Set Reset Action (Pending for Advance Search)
            //            $('#cmdLkpReset').click(function() {
            //                $('#fldLkpSearchValue').val("");
            //                renderList(voMsg);
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
function renderList(psContainerID, voMsg) {
    //Column Array
    var aoColumns = constructLstColumn(voMsg);
    //Column Hide Array
    var aoColumnDefs = constructLstColumnHide(voMsg);
    //Container Language
    var oLanguage = constructLstContainerLang(voMsg);
    //Data Array
    var aaData = constructLstData(voMsg);
    //Order data
    var aaSorting = constructLstDataSort(voMsg);
    //Column to Export
    var mColumns = constructLstColumnExport(voMsg);
    //Initialize grid Lookup
    var vsGridID = voMsg.ContainerConfig.CONFIG_TABLE_ID
    $(psContainerID).html('<table width="100%" cellpadding="0" cellspacing="0" border="0" class="display" id="' + vsGridID + '"></table>');
    var voGRID = $('#' + vsGridID).dataTable({
            "sDom": '<"H"Tfr>t<"F"ip>',
            "oTableTools": {
                            "sSwfPath": sSwfPath,
                            "aButtons": [
                                    {
                                        "sExtends": "copy",
                                        "sButtonText": "Copy to clipboard",
                                        "mColumns": mColumns
                                    },
                                    {
                                        "sExtends": "xls",
                                        "sButtonText": "Save to Excel",
                                        "mColumns": mColumns
                                    }
			                            ]
                        },
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

    //            voGRID.fnClearTable();
//            voGRID.fnAddData(aaData);
//            voGRID.fnDraw();
    $(window).bind('resize', function() {
        voGRID.fnAdjustColumnSizing();
    });

    //Styling
    $('#' + vsGridID).addClass("grdList");
    return voGRID;
}

//Construct LookUp Column
function constructLstColumn(poMsg) {
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

//Construct List Column Hide
function constructLstColumnHide(poMsg) {
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

//Construct List Column Hide Export
function constructLstColumnExport(poMsg) {
    //Column Hide Array
    var mColumns = new Array();
    var vnColCount = poMsg.aoColumns.length;
    j = -1;
    for (var i = 0; i < vnColCount; i++) {
        if (poMsg.aoColumns[i].CONFIG_ISHIDDEN != "Y") {
            j++;
            mColumns[j] = i;
        }
    }

    return mColumns;
}

//Construct language
function constructLstContainerLang(poMsg) {


    var sLengthMenu = poMsg.ContainerConfig.CONFIG_LBL_HEADER_PAGE_PFX_LANG_ID + " _MENU_ " +
                      poMsg.ContainerConfig.CONFIG_LBL_HEADER_PAGE_SFX_LANG_ID;
    var sZeroRecords = poMsg.ContainerConfig.CONFIG_MSG_ZRECORD1_LANG_ID;
    var sInfo = poMsg.ContainerConfig.CONFIG_LBL_FOOTER_PAGE_PFX_LANG_ID + " _START_ " +
                 poMsg.ContainerConfig.CONFIG_LBL_FOOTER_PAGE_MID1_LANG_ID + " _END_ " +
                 poMsg.ContainerConfig.CONFIG_LBL_FOOTER_PAGE_MID2_LANG_ID + " _TOTAL_ " +
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
function constructLstData(poMsg) {

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
function setListUpEventRetRUID(psTagID) {
    var vsReturn = '';

    $('#grdLookUp tbody tr').click(function() {
        var voGRID = $('#grdLookUp').dataTable();
        vsReturn = voGRID.fnGetData(this, 0);
        if (psTagID != '') {
            $(psTagID).val(vsReturn);
        }
        //$(vsDialogList).dialog("close");
    });
    return vsReturn;
}

//LookUp Event - RetID
function setListEventRetID(psTagID) {
    var vsReturn = '';

    $('#grdLookUp tbody tr').click(function() {
        var voGRID = $('#grdLookUp').dataTable();
        vsReturn = voGRID.fnGetData(this, 1);
        if (psTagID != '') { $(psTagID).val(vsReturn); }
        //$(vsDialogList).dialog("close");
    });
    return vsReturn;
}

//LookUp Event - RetDesc
function setListUpEventRetDesc(psTagID) {
    var vsReturn = '';

    $('#grdLookUp tbody tr').click(function() {
        var voGRID = $('#grdLookUp').dataTable();
        vsReturn = voGRID.fnGetData(this, 2);
        if (psTagID != '') { $(psTagID).val(vsReturn); }
        //$(vsDialogList).dialog("close");
    });
    return vsReturn;
}

function InitLoading(psID) {

}
function showLoading(psID) {

}
function hideLoading(psID) {

}

//Construct Order List Data
function constructLstDataSort(poMsg) {

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


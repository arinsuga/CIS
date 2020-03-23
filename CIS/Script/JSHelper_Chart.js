/*
======================================================================================
Chart Pie
======================================================================================
*/

    function ChartPieShow(psContainerID, psLkpID, psLoadingImage, psSearchValue,
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

                //Render Table lookup
                ChartPieRender(psContainerID, voMsg);
            },
            complete: function(msg) {
                if (psLoadingImage != '') { hideLoadingIndicator(psLoadingImage); }
            },
            error: function() {
            }
        });

    }

    function ChartPieRender(psContainerID, poMsg) {

        //Data Array
        var aaData = constructCrtData(voMsg);
        //Initialize Div for Chart
        var vsGridID = psContainerID.replace("#", ""); // voMsg.ContainerConfig.CONFIG_TABLE_ID;

        //Start Render
        var plot1 = jQuery.jqplot(vsGridID, [aaData],
            {
                seriesDefaults: {
                    // Make this a pie chart.
                    renderer: jQuery.jqplot.PieRenderer,
                    rendererOptions: {
                        // Put data labels on the pie slices.
                        // By default, labels show the percentage of the slice.
                        showDataLabels: true
                    }
                },
                legend: { show: true, location: 'e' },
                title: poMsg.ContainerConfig.CONFIG_TITLE_LANG_ID,
            }); //End plot1

    } //End function ChartPieRender

    //Construct Chart Data
    function constructCrtData(poMsg) {
        //Data Array
        var aaData = new Array();
        if (poMsg.aaData != null) {
            var vnRowCount = poMsg.aaData.length;
            var vnColCount = -1;
            for (var i = 0; i < vnRowCount; i++) {
                var vnValue = parseInt(poMsg.aaData[i][1]);
                aaData[i] = [poMsg.aaData[i][0], vnValue];
            } //End for Rows
        }

        return aaData;
    } //End function constructCrtData

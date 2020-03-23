/*=========================================
Function Collection of Calculation
===========================================*/
function getCoeffVal(pnAgrCrVal, poCoefficient) {
    var vReturn = null;
    if (poCoefficient != "") {
        for (var i = 0; i < poCoefficient.length; i++) {
            if (parseInt(poCoefficient[i].fldAGRCR_VAL) == parseInt(pnAgrCrVal)) {
                vReturn = poCoefficient[i].fldCOEFF_VAL;
            } //End if
        } //End for

    } //End if

    return vReturn;
} //End function getCoeffVal
function calcCPYIndex(pnItemScore, poScaleCPY) {
    var vReturn = null;
    var vnValue = pnItemScore;
    var vnRangeVal1 = 0;
    var vnRangeVal2 = 0;
    var vsOprID = '';
    
    if (poScaleCPY != "") {
        for (var i = 0; i < poScaleCPY.length; i++) {
            vnRangeVal1 = parseFloat(poScaleCPY[i].fldLOV_VAL1);
            vnRangeVal2 = parseFloat(poScaleCPY[i].fldLOV_VAL2);
            vsOprID = poScaleCPY[i].fldRNGOPR_RUID;

            if (isValidValue(vnValue, vnRangeVal1, vnRangeVal2, vsOprID) == true) {
                vReturn = poScaleCPY[i].fldLOV_VAL;
                break;
            } //End if
        } //End for
    } //End if

    return vReturn;
} //End function calcCPYIndex

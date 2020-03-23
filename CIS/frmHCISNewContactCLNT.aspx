<%@ Page Title="" Language="C#" MasterPageFile="~/MAINMST.Master" AutoEventWireup="true" CodeBehind="frmHCISNewContactCLNT.aspx.cs" Inherits="APPBASE.frmHCISNewContactCLNT" %>
<%@ Register TagPrefix="ctr" TagName="MyUserControl" Src="frmButtonCRUD.ascx" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleHolder" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="HeadCustomHolder" runat="server">
    <!--Custom CSS -->
    <style type="text/css">
            
    </style>
    
    <!--Custom JS -->
    <script src="frmHCISNewContactCLNT.js" type="text/javascript"></script>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="PageHeaderHolder" runat="server">
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="PageContentHolder" runat="server">
    <form id="frmHCISNewContactCLNT" runat="server">

        <div class="FormEntry">
            <table>
                <tr>
                    <td colspan="3">
                    <h1>Entry Data Client</h1>
                    <hr />
                    </td>
                </tr>

                <tr>
                    <td><label for="lblRES_NM" id="lblRES_NM"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("RES_NM")%></label></td>
                    <td><label for="lblRES_NMx" id="lblRES_NMx">:</label></td>
                    <td>
                        <input type="text" id="fldRES_NM" class="FieldAsName" />
                        <span>
                        <input type="button" id="LKP_RUID" class="CmdAsLookUpKey cmdLookUp IconLink" />
                        </span>
                        <span>
                        <input type="button" id="cmdBrowseByRUID" class="CmdAsLinkKey CmdLink" value="<%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("BTN_BROWSE")%>" />
                        </span>
                        <span id="imgRUID" class="imgLoadHide"><img src="Style/images/loading.gif" /></span>
                        <span id="fldRUIDxInfo1"></span>
                    </td>
                </tr>

                <tr>
                    <td><label for="lblRES_NMX1" id="lblRES_NMX1">Nama Project</label></td>
                    <td><label for="lblRES_NMX1x" id="lblRES_NMX1x">:</label></td>
                    <td><input type="text" id="fldRES_NMX1" class="FieldAsName" /></td>
                </tr>

                <tr>
                    <td><label for="lblRES_NMX2" id="lblRES_NMX2">Owner</label></td>
                    <td><label for="lblRES_NMX2x" id="lblRES_NMX2x">:</label></td>
                    <td><input type="text" id="fldRES_NMX2" class="FieldAsName" /></td>
                </tr>

                <tr>
                    <td><label for="lblPHN1" id="lblPHN1"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("PHN1")%></label></td>
                    <td><label for="lblPHN1x" id="lblPHN1x">:</label></td>
                    <td><input type="text" id="fldPHN1" class="FieldAsPhoneNo" /></td>
                </tr>

                <tr>
                    <td><label for="lblPHN2" id="lblPHN2"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("PHN2")%></label></td>
                    <td><label for="lblPHN2x" id="lblPHN2x">:</label></td>
                    <td><input type="text" id="fldPHN2" class="FieldAsPhoneNo" /></td>
                </tr>

                <tr>
                    <td><label for="lblPHN3" id="lblPHN3"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("PHN3")%></label></td>
                    <td><label for="lblPHN3x" id="lblPHN3x">:</label></td>
                    <td><input type="text" id="fldPHN3" class="FieldAsPhoneNo" /></td>
                </tr>

                <tr>
                    <td><label for="lblFAX" id="lblFAX"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("FAX")%></label></td>
                    <td><label for="lblFAXx" id="lblFAXx">:</label></td>
                    <td><input type="text" id="fldFAX" class="FieldAsPhoneNo" /></td>
                </tr>

                <tr>
                    <td><label for="lblMAIL" id="lblMAIL"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("MAIL")%></label></td>
                    <td><label for="lblMAILx" id="lblMAILx">:</label></td>
                    <td><input type="text" id="fldMAIL" class="FieldAsEmail" /></td>
                </tr>

                <tr>
                    <td><label for="lblWEBSITE" id="lblWEBSITE"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("WEBSITE")%></label></td>
                    <td><label for="lblWEBSITEx" id="lblWEBSITEx">:</label></td>
                    <td><input type="text" id="fldWEBSITE" class="FieldAsWebsite" /></td>
                </tr>
                
                <tr>
                    <td colspan="3">&nbsp;</td>
                </tr>
                <tr>
                    <td colspan="3">
                    <h3>Alamat Utama</h3>
                    <hr />
                    </td>
                </tr>
                
                <tr>
                    <td><label for="lblCNTRY_RUID" id="lblCNTRY_RUID"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("CNTRY_RUID")%></label></td>
                    <td><label for="lblCNTRY_RUIDx" id="lblCNTRY_RUIDx">:</label></td>
                    <td>
                        <input type="hidden" id="fldCNTRY_RUID" class="FieldAsCountry" />
                        <input type="text" id="fldCNTRY_NM" class="FieldAsLabelDesc" />
                        <span><input type="button" id="LKP_CNTRY_RUID" class="CmdAsLookUp cmdLookUp IconLink" /></span>
                        <span id="imgCNTRY_RUID" class="imgLoadHide"><img src="Style/images/LoadingField.gif" /></span>
                    </td>
                </tr>

                <tr>
                    <td><label for="lblCITY_RUID" id="lblCITY_RUID"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("CITY_RUID")%></label></td>
                    <td><label for="lblCITY_RUIDx" id="lblCITY_RUIDx">:</label></td>
                    <td>
                        <input type="hidden" id="fldCITY_RUID" class="FieldAsCity" />
                        <input type="text" id="fldCITY_NM" class="FieldAsName" />
                        <span><input type="button" id="LKP_CITY_RUID" class="CmdAsLookUp cmdLookUp IconLink" /></span>
                        <span id="imgCITY_RUID" class="imgLoadHide"><img src="Style/images/images/LoadingField.gif" /></span>
                    </td>
                </tr>

                <tr>
                    <td><label for="lblZIP" id="lblZIP"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("ZIP")%></label></td>
                    <td><label for="lblZIPx" id="lblZIPx">:</label></td>
                    <td><input type="text" id="fldZIP" class="FieldAsZip" /></td>
                </tr>

                <tr>
                    <td><label for="lblADDR1" id="lblADDR1"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("ADDR1")%></label></td>
                    <td><label for="lblADDR1x" id="lblADDR1x">:</label></td>
                    <td><input type="text" id="fldADDR1" class="FieldAsAddress" /></td>
                </tr>

                <tr>
                    <td><label for="lblADDR2" id="lblADDR2"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("ADDR2")%></label></td>
                    <td><label for="lblADDR2x" id="lblADDR2x">:</label></td>
                    <td><input type="text" id="fldADDR2" class="FieldAsAddress" /></td>
                </tr>

                <tr>
                    <td><label for="lblADDR3" id="lblADDR3"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("ADDR3")%></label></td>
                    <td><label for="lblADDR3x" id="lblADDR3x">:</label></td>
                    <td><input type="text" id="fldADDR3" class="FieldAsAddress" /></td>
                </tr>

                <tr>
                    <td colspan="3">&nbsp;</td>
                </tr>
                <tr>
                    <td colspan="3">
                    <h3>Contact Person 1</h3>
                    <hr />
                    </td>
                </tr>

                <tr>
                    <td><label for="lblCP1_NM" id="lblCP1_NM"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("CP1_NM")%></label></td>
                    <td><label for="lblCP1_NMx" id="lblCP1_NMx">:</label></td>
                    <td><input type="text" id="fldCP1_NM" /></td>
                </tr>

                <tr>
                    <td><label for="lblCP1_PHN1" id="lblCP1_PHN1"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("CP1_PHN1")%></label></td>
                    <td><label for="lblCP1_PHN1x" id="lblCP1_PHN1x">:</label></td>
                    <td><input type="text" id="fldCP1_PHN1" /></td>
                </tr>

                <tr>
                    <td><label for="lblCP1_PHN2" id="lblCP1_PHN2"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("CP1_PHN2")%></label></td>
                    <td><label for="lblCP1_PHN2x" id="lblCP1_PHN2x">:</label></td>
                    <td><input type="text" id="fldCP1_PHN2" /></td>
                </tr>

                <tr>
                    <td><label for="lblCP1_MAIL" id="lblCP1_MAIL"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("CP1_MAIL")%></label></td>
                    <td><label for="lblCP1_MAILx" id="lblCP1_MAILx">:</label></td>
                    <td><input type="text" id="fldCP1_MAIL" /></td>
                </tr>

                <tr>
                    <td><label for="lblCP1_WEBSITE" id="lblCP1_WEBSITE"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("CP1_WEBSITE")%></label></td>
                    <td><label for="lblCP1_WEBSITEx" id="lblCP1_WEBSITEx">:</label></td>
                    <td><input type="text" id="fldCP1_WEBSITE" /></td>
                </tr>

                <tr>
                    <td colspan="3">&nbsp;</td>
                </tr>
                <tr>
                    <td colspan="3">
                    <h3>Contact Person 2</h3>
                    <hr />
                    </td>
                </tr>

                <tr>
                    <td><label for="lblCP2_NM" id="lblCP2_NM"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("CP2_NM")%></label></td>
                    <td><label for="lblCP2_NMx" id="lblCP2_NMx">:</label></td>
                    <td><input type="text" id="fldCP2_NM" /></td>
                </tr>

                <tr>
                    <td><label for="lblCP2_PHN1" id="lblCP2_PHN1"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("CP2_PHN1")%></label></td>
                    <td><label for="lblCP2_PHN1x" id="lblCP2_PHN1x">:</label></td>
                    <td><input type="text" id="fldCP2_PHN1" /></td>
                </tr>

                <tr>
                    <td><label for="lblCP2_PHN2" id="lblCP2_PHN2"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("CP2_PHN2")%></label></td>
                    <td><label for="lblCP2_PHN2x" id="lblCP2_PHN2x">:</label></td>
                    <td><input type="text" id="fldCP2_PHN2" /></td>
                </tr>

                <tr>
                    <td><label for="lblCP2_MAIL" id="lblCP2_MAIL"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("CP2_MAIL")%></label></td>
                    <td><label for="lblCP2_MAILx" id="lblCP2_MAILx">:</label></td>
                    <td><input type="text" id="fldCP2_MAIL" /></td>
                </tr>

                <tr>
                    <td><label for="lblCP2_WEBSITE" id="lblCP2_WEBSITE"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("CP2_WEBSITE")%></label></td>
                    <td><label for="lblCP2_WEBSITEx" id="lblCP2_WEBSITEx">:</label></td>
                    <td><input type="text" id="fldCP2_WEBSITE" /></td>
                </tr>

                <tr>
                    <td colspan="3">&nbsp;</td>
                </tr>
                <tr>
                    <td colspan="3">
                    <h3>Catatan</h3>
                    <hr />
                    </td>
                </tr>

                <tr>
                    <td><label for="lblNOTES" id="lblNOTES"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("NOTES")%></label></td>
                    <td><label for="lblNOTESx" id="lblNOTESx">:</label></td>
                    <td><textarea id="fldNOTES" class="FieldAsNote"></textarea></td>
                </tr>


                <tr>
                    <td colspan="3">
                    <ctr:MyUserControl runat="server" ID="MyUserControlID" />
                    </td>
                </tr>
            </table> <!--End table -->
        </div>
        
        <div id="HiddenDivArea" class="HiddenDiv">
                    <tr>
                        <td><label for="lblRES_NMX3" id="lblRES_NMX3"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("RES_NMX3")%></label></td>
                        <td><label for="lblRES_NMX3x" id="lblRES_NMX3x">:</label></td>
                        <td><input type="text" id="fldRES_NMX3" /></td>
                    </tr>

                    <tr>
                        <td><label for="lblCNTRY_NM" id="lblCNTRY_NM"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("CNTRY_NM")%></label></td>
                        <td><label for="lblCNTRY_NMx" id="lblCNTRY_NMx">:</label></td>
                    </tr>

                    <tr>
                        <td><label for="lblCITY_NM" id="lblCITY_NM"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("CITY_NM")%></label></td>
                        <td><label for="lblCITY_NMx" id="lblCITY_NMx">:</label></td>
                    </tr>

                    <tr>
                        <td><label for="lblADTRL_WKS" id="lblADTRL_WKS"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("ADTRL_WKS")%></label></td>
                        <td><label for="lblADTRL_WKSx" id="lblADTRL_WKSx">:</label></td>
                        <td><input type="text" id="fldADTRL_WKS" /></td>
                    </tr>

                    <tr>
                        <td><label for="lblADTRL_IP" id="lblADTRL_IP"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("ADTRL_IP")%></label></td>
                        <td><label for="lblADTRL_IPx" id="lblADTRL_IPx">:</label></td>
                        <td><input type="text" id="fldADTRL_IP" /></td>
                    </tr>

                    <tr>
                        <td><label for="lblADTRL_USR" id="lblADTRL_USR"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("ADTRL_USR")%></label></td>
                        <td><label for="lblADTRL_USRx" id="lblADTRL_USRx">:</label></td>
                        <td><input type="text" id="fldADTRL_USR" /></td>
                    </tr>

                    <tr>
                        <td><label for="lblADTRL_PRG" id="lblADTRL_PRG"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("ADTRL_PRG")%></label></td>
                        <td><label for="lblADTRL_PRGx" id="lblADTRL_PRGx">:</label></td>
                        <td><input type="text" id="fldADTRL_PRG" value="frmHCISNewContactCLNT.aspx" /></td>
                    </tr>

                    <tr>
                        <td><label for="lblADTRL_DT" id="lblADTRL_DT"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("ADTRL_DT")%></label></td>
                        <td><label for="lblADTRL_DTx" id="lblADTRL_DTx">:</label></td>
                        <td><input type="text" id="fldADTRL_DT" /></td>
                    </tr>

                    <tr>
                        <td><label for="lblRSEQNO" id="lblRSEQNO"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("RSEQNO")%></label></td>
                        <td><label for="lblRSEQNOx" id="lblRSEQNOx">:</label></td>
                        <td><input type="text" id="fldRSEQNO" /></td>
                    </tr>

                    <tr>
                        <td><label for="lblRUID" id="lblRUID"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("RUID")%></label></td>
                        <td><label for="lblRUIDx" id="lblRUIDx">:</label></td>
                        <td><input type="text" id="fldRUID" /></td>
                    </tr>

                    <tr>
                        <td><label for="lblDTA_STS" id="lblDTA_STS"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("DTA_STS")%></label></td>
                        <td><label for="lblDTA_STSx" id="lblDTA_STSx">:</label></td>
                        <td><input type="text" id="fldDTA_STS" /></td>
                    </tr>

                    <tr>
                        <td><label for="lblACT_TYPE" id="lblACT_TYPE"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("ACT_TYPE")%></label></td>
                        <td><label for="lblACT_TYPEx" id="lblACT_TYPEx">:</label></td>
                        <td><input type="text" id="fldACT_TYPE" /></td>
                    </tr>

                    <tr>
                        <td><label for="lblIMG_SRC" id="lblIMG_SRC"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("IMG_SRC")%></label></td>
                        <td><label for="lblIMG_SRCx" id="lblIMG_SRCx">:</label></td>
                        <td><input type="text" id="fldIMG_SRC" /></td>
                    </tr>

                    <tr>
                        <td><label for="lblRES_TYPE" id="lblRES_TYPE"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("RES_TYPE")%></label></td>
                        <td><label for="lblRES_TYPEx" id="lblRES_TYPEx">:</label></td>
                        <td><input type="text" id="fldRES_TYPE" /></td>
                    </tr>

                    <tr>
                        <td><label for="lblRES_SUBTYPE" id="lblRES_SUBTYPE"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("RES_SUBTYPE")%></label></td>
                        <td><label for="lblRES_SUBTYPEx" id="lblRES_SUBTYPEx">:</label></td>
                        <td><input type="text" id="fldRES_SUBTYPE" /></td>
                    </tr>

                    <tr>
                        <td><label for="lblRES_ID" id="lblRES_ID"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("RES_ID")%></label></td>
                        <td><label for="lblRES_IDx" id="lblRES_IDx">:</label></td>
                        <td><input type="text" id="fldRES_ID" /></td>
                    </tr>

                    <tr>
                        <td><label for="lblADDR4" id="lblADDR4"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("ADDR4")%></label></td>
                        <td><label for="lblADDR4x" id="lblADDR4x">:</label></td>
                        <td><input type="text" id="fldADDR4" /></td>
                    </tr>

                    <tr>
                        <td><label for="lblADDR5" id="lblADDR5"><%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("ADDR5")%></label></td>
                        <td><label for="lblADDR5x" id="lblADDR5x">:</label></td>
                        <td><input type="text" id="fldADDR5" /></td>
                    </tr>



        </div> <!--End HiddenDivArea -->
    </form> <!--End form -->
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="PageFooterHolder" runat="server">
</asp:Content>

<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="frmMain_Part1SearchResult.aspx.cs" Inherits="APPBASE.frmMain_Part1SearchResult" %>

<% 
    string vsSEARCHKEYWORD = HttpContext.Current.Request["SEARCHKEYWORD"];
    APPBASE.Model.modHCISRes.HCISResSearchDS voHCISResSearchDS = new APPBASE.Model.modHCISRes.HCISResSearchDS(vsSEARCHKEYWORD);
%>


    
<% for (int i = 0; i < voHCISResSearchDS.TBLData.Length; i++) { %>
    <div class="ResultGroup">
        
        <% if (voHCISResSearchDS.TBLData[i].RES_TYPE == "CLNT") { %>
            <h3>CLIENT</h3>
        <% } else { %>
            <h3>SUPPLIER</h3>
        <% } %>
        
        
        <hr />
        <table>
            <tr>
                <td>
                    <h4><%=voHCISResSearchDS.TBLData[i].RES_NM%></h4>
                </td>
            </tr>
            <tr>
                <td>
                    <%=voHCISResSearchDS.TBLData[i].ADDR1%>
                </td>
            </tr>
            <tr>
                <td>
                    <%=voHCISResSearchDS.TBLData[i].ADDR2%>
                </td>
            </tr>
            <tr>
                <td>
                    <%=voHCISResSearchDS.TBLData[i].ADDR3%>
                </td>
            </tr>
            <tr>
                <td>
                    <%=voHCISResSearchDS.TBLData[i].CITY_NM%>
                </td>
            </tr>
            <tr>
                <td>
                    <%=voHCISResSearchDS.TBLData[i].CNTRY_NM%>
                </td>
            </tr>
            
            <tr>
                <td colspan="3">
                    <div class="ContactDetail">
                        <table width="100%;">
                            <tr>
                                <td style="width:150px;">
                                    <div><h5>Phone</h5></div>
                                    <div><%=voHCISResSearchDS.TBLData[i].PHN1%></div>
                                    <div><%=voHCISResSearchDS.TBLData[i].PHN2%></div>
                                    <div><%=voHCISResSearchDS.TBLData[i].PHN3%></div>
                                </td>
                                <td style="width:150px;">
                                    <div><h5>Contact Person 1</h5></div>
                                    <div><%=voHCISResSearchDS.TBLData[i].CP1_NM%></div>
                                    <div><%=voHCISResSearchDS.TBLData[i].CP1_PHN1%></div>
                                    <div><%=voHCISResSearchDS.TBLData[i].CP1_PHN2%></div>
                                </td>
                                <td style="width:150px;">
                                    <div><h5>Contact Person 2</h5></div>
                                    <div><%=voHCISResSearchDS.TBLData[i].CP2_NM%></div>
                                    <div><%=voHCISResSearchDS.TBLData[i].CP2_PHN1%></div>
                                    <div><%=voHCISResSearchDS.TBLData[i].CP2_PHN2%></div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </td>
            </tr>
        </table>
    </div>
<% } //End for %>

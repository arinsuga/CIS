<%@ Page Title="" Language="C#" MasterPageFile="~/LOGIN.Master" AutoEventWireup="true" CodeBehind="frmLogin.aspx.cs" Inherits="APPBASE.frmLogin" %>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleHolder" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="HeadCustomHolder" runat="server">
    <!--Custom CSS -->
    <link href="Style/LoginStyleBootstrap.css" rel="stylesheet" type="text/css" />
    <link href="Style/LoginStyleBootstrapResponsive.css" rel="stylesheet" type="text/css" />
    <link href="Style/LoginStyle.css" rel="stylesheet" type="text/css" />
    <!--Custom JS -->
    <script src="frmLogin.js" type="text/javascript"></script>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder" runat="server">
<% APPBASE.Helper.clsSecurity.resetSessions(); %>
    <form id="form1" runat="server">
        <div class="login">
	        <div class="header">
                <img src="Style/Company_Logo_White.png" />
	        </div>

	        <div class="layout-header">
		        <div class="sidebar-title">
			        <h4>LOGIN - HCIS</h4>
		        </div>
	        </div>
        	
	        <div class="layout-body">
		        <div class="content">				
			        <fieldset>
			                <div id="LoadingLogin" class="control-group">
                                <img src="Style/images/LoadingLogin.gif"  style="vertical-align:middle;" />
                                <%=APPBASE.Helper.clsXML.clsLanguage.getLangByID("MSG_INFO_LOGIN_ONPROGRESS") %>
			                </div>
					        <div class="control-group">            
						        <div class="controls">
							        <div class="input text required">
							        <input type="text" id="fldUserID" class="input-xlarge" placeholder="User ID">
						            </div>						
						        </div>
					        </div>
					        <div class="control-group">            
						        <div class="controls">
							        <div class="input password required">
							        <input type="password" id="fldPassword" class="input-xlarge" placeholder="Password">
							        </div>
						        </div>
					        </div>
					        <div class="control-action">
						        <button type="button" id="cmdLogin" class="btn btn-primary">Login</button>
					        </div>
				        </fieldset>
			        </div>
	        </div><!--/row-->
        </div>
    </form>
</asp:Content>

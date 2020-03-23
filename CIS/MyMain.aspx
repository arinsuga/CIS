<%@ Page Title="" Language="C#" MasterPageFile="~/MAINMST.Master" AutoEventWireup="true" CodeBehind="MyMain.aspx.cs" Inherits="APPBASE.MyMain" %>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleHolder" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="HeadCustomHolder" runat="server">
    <!--Custom CSS -->
    <style type="text/css">
        .SearchGroup
        {
            background-color:#F1F1F1;
            border:solid 1px #E5E5E5;
            height:70px;
        }
        .SearchGroupContent
        {
            margin-left:auto;
            margin-right:auto;
            margin-top:15px;
            border:solid 1px #E5E5E5;
            width:554px;
            height:32px;
            padding:2px;
            background-color:#FFFFFF;
            -moz-border-radius: 5px;
            border-radius: 5px;
        }
        .SearchGroupContent input[type=text]
        {
            border:none;
            height:30px;
            width:400px;
            float:left;
        }
        .SearchGroupContent input[type=button]
        {
            border:none;
            height:30px;
            width:150px;
            float:left;
            color:#FFFFFF;
            background-color:#4084F2;
            font-weight:bold;
            -moz-border-radius: 5px;
            border-radius: 5px;
        }
        div#ResultContent
        {
            width:50%;
            margin-left:auto;
            margin-right:auto;
            margin-top:10px;
        }
        div.ResultGroup
        {
            margin-top:10px;
            border:solid 1px #E5E5E5;
            -moz-border-radius: 10px;
            border-radius: 10px;
            padding:20px;
        }
        div.ResultGroup table tr td
        {
            padding-left:2px;
            padding-top:2px;
        }
        div.ResultGroup hr
        {
            color:#E5E5E5
        }
        div.ContactDetail
        {
        }
    </style>
    
    <!--Custom JS -->
    <script src="MyMain.js" type="text/javascript"></script>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="PageHeaderHolder" runat="server">
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="PageContentHolder" runat="server">

<form id="MyMain">
<input type="text" id="Myinput" />
</form>

</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="PageFooterHolder" runat="server">
</asp:Content>

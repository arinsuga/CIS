<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="MainMenu.ascx.cs" Inherits="APPBASE.MainMenu" %>

<div id="menu">
    <%=APPBASE.Helper.clsMenu.MenuDropDown.DisplayMenu("menu","","","parentx","") %>
</div>

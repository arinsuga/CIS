<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Obf.aspx.cs" Inherits="APPBASE.Obf" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        Obfuscator<br />
        <asp:TextBox ID="txtValue" runat="server" Width="356px"></asp:TextBox>
        <br />
        <asp:TextBox ID="txtResult" runat="server" Width="352px"></asp:TextBox>
        <br />
        <asp:Button ID="btnEncrypt" runat="server" onclick="btnEncrypt_Click" 
            Text="Encrypt" />
        <asp:Button ID="btnDecrypt" runat="server" onclick="btnDecrypt_Click" 
            Text="Decrypt" />
    
    </div>
    </form>
</body>
</html>

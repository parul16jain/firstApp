var app = angular.module("ContactsApp",[]);
app.controller("HeaderCntrlr", HeaderCntrlr);
app.controller("FooterCntrlr", FooterCntrlr);

app.constant("AppSvc","MyContacts App");   //works same as value with little difference

app.value("AppSvc",prepareAppData());

function prepareAppData(AppSvc)
{
    var value = {};
    value.name = AppSvc;
    value.author = "Parul";
    value.date = new Date().toLocaleDateString();
    return value;
}


app.factory("AppFactorySvc",prepareAppData); //angular computes it as prepareAppData()




function HeaderCntrlr(AppFactorySvc)
{
    this.appHeader = AppFactorySvc.name;
}

function FooterCntrlr(AppDataServiceSvc)
{
    this.appFooter = AppDataServiceSvc.author;
    this.date = AppDataServiceSvc.date;
}
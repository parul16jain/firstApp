(function(){
    var app = angular.module("ContactsApp");
    function AppConfig(AppSvc)
    {
        //var this = {};
        
        this.name = AppSvc;
        this.author = "Parul";
        this.date = new Date().toLocaleDateString();

        //return value;
    }

    app.service("AppDataServiceSvc",AppConfig); //computes it as a constructor func new AppConfig()
})();

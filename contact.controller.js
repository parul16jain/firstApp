(function(){
    var app = angular.module("ContactsApp");
    app.controller("ContactCntrlr", ContactCntrlr);
    function ContactCntrlr(ContactDataSvc)
    {
        var self = this;
        self.editMode = false;
        self.addMode = false;
        ContactDataSvc.getContacts()
        .then(function(data){
            self.contacts = data;
        });
        

        this.selectContact = function(index){
        this.selectedContact = this.contacts[index]
        self.successMsg = undefined;
        self.errorMsg = undefined;
        }

        this.toggleEdit = function()
        {
            this.editMode = ! this.editMode;
        }

        this.Save = function()
        {
            this.toggleEdit();
            var userData = this.selectedContact;
            if(self.addMode)
            {
                ContactDataSvc.addUser(userData)
                .then(function()
                {
                    self.successMsg = "User Added Successfully"
                },
                function()
                {
                    self.errorMsg = "There is some error.PLease try again"
                });

            }
            else{
                ContactDataSvc.saveUser(userData)
                .then(function()
                {
                    self.successMsg = "Data Updated Successfully"
                },
                function()
                {
                    self.errorMsg = "There is some error.PLease try again"
                });
            }
            

        }

        this.addContact = function()
        {
            this.selectedContact = {
                "id": new Date().toTimeString()
            };
            this.editMode = true;
            this.addMode = true;
        }
    }
})();

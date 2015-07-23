// You will need jquery + knockout.js to run this successfully

$(function(){
   var viewModel = {
       firstName: ko.observable(""),
       lastName: ko.observable(""),
    };

    viewModel.fullName = ko.computed(function() {
       return this.firstName() + " " + this.lastName();
    }, viewModel);

    viewModel.fullName.subscribe(function(){
        if(viewModel.fullName() == "Bryan Holdt" || viewModel.fullName() == "Jordan Dashel")
            document.getElementById("output").style.color = "#00FF00";
        else
            document.getElementById("output").style.color = "#FF0000";
    });

    ko.applyBindings(viewModel);
});

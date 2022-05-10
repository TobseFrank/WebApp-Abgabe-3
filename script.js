function ViewModel(){
    var self = this;

    self.firstName = ko.observable("Wayne");

    self.firstName = "George"
}

ko.applyBindings(new ViewModel(),
document.querySelector("#knockout-app"))
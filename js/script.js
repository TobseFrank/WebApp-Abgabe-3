function myViewModel(){
    var users = loadData();
    var self = this;
    const min = 1;
    let currentLeftView = 1;
    let currentCenterView = 2;
    let currentRightView = 3;
    let max;

    self.leftPreviewImage = ko.observable("img/204022.png");

    self.name = ko.observable("Cristiano Ronaldo");
    self.matrikelNumber = ko.observable("ID: 200000");
    self.centerPreviewImage = ko.observable("img/200000.png");
    self.reason = ko.observable("Ich habe mich für Web Application Development entschieden, weil ich die ECTS noch brauche.");
    self.semester = ko.observable("Semester 3");

    self.rightPreviewImage = ko.observable("img/200001.png");
    
    self.moveOnceLeft = function(){
        currentLeftView--;
        currentCenterView--;
        currentRightView--;

        if (currentLeftView < min){
            currentLeftView = max;
        }
        if(currentCenterView < min){
            currentCenterView = max;
        }
        if(currentRightView < min){
            currentRightView = max;
        }
        loadUpdatetView();
    };

    self.moveOnceRight = function(){
        currentLeftView++;
        currentCenterView++;
        currentRightView++;

        if (currentLeftView > max){
            currentLeftView = min;
        }
        if(currentCenterView > max){
            currentCenterView = min;
        }
        if(currentRightView > max){
            currentRightView = min;
        }
        loadUpdatetView();
    }

    function loadUpdatetView(){
        self.leftPreviewImage(String(users[currentLeftView][2]));
        self.centerPreviewImage(String(users[currentCenterView][2]));
        self.rightPreviewImage(String(users[currentRightView][2]));
        self.name(String(users[currentCenterView][0]));
        self.matrikelNumber("ID: " + String(users[currentCenterView][1]));
        self.reason(String(users[currentCenterView][3]));
        self.semester(String(users[currentCenterView][4]));
    }

    function loadData(){
        $.getJSON( "json/list.json", function(data) {
        max = Object.keys(data).length;
        users = [];
        users.push(new Array("","",""))
        for(i = 1; i <= max; i++){
            users.push(new Array(data[i].name, data[i].id, data[i].imagePath, data[i].reason, data[i].semester));
        }
        console.log(users)
        return users;
    }); 
    }
}

ko.applyBindings(new myViewModel());

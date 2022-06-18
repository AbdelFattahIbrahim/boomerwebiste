//string var
var boomerName = "Boomer bill";
//boolean var
var isBoomer = true;
//number var
var boomersAge = 99;


    //function to get boomers name and display
    //from the boomerName element
    function getBoomerName(){
        var userEnteredBoomerName = document.getElementById("boomerName").value;
        boomerNameAlert(userEnteredBoomerName);

    }
    function boomerNameAlert(boomName){
        window.alert("Welcome Boomer named: " + boomName);
    }

$('document').ready(function() {
    
var number_changer = function(number, limit, alert_massage, object_name) {    
    if(String(number).length == 1 ) {
        alert_raise("");
        return "0" + number;
    }else if (String(number).length == 0) {
        alert_raise("");
        return "00";
    }else if (number >= limit) {
        alert_raise(alert_massage, object_name);
        return "00";
    }else
        alert_raise("");
        return number;
};

var alert_raise = function(alert_massage, object_name) {
    if(alert_massage == "") {
        $(".flash-alert").html(alert_massage);
        $(object_name).css("border", "none");
    }else {
        $(".flash-alert").html(alert_massage);
        $(object_name).css("border", "rgba(200,0,0,0.7) solid 3px");
    }
};


    $("#hours").blur(function() {
        changed_number = number_changer($("#hours").val(), 24, "There's only 24 hours in a day, dummy! Try Again.", "#hours");
        $("#hours").val(changed_number);
    });
});
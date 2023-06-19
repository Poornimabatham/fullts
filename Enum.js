// a set of values we define and use only from define values 
var days;
(function (days) {
    days[days["mon"] = 0] = "mon";
    days[days["tues"] = 1] = "tues";
    days[days["wed"] = 2] = "wed";
    days[days["thu"] = 3] = "thu";
    days[days["fri"] = 4] = "fri";
    days[days["sat"] = 5] = "sat";
    days[days["sun"] = 6] = "sun";
})(days || (days = {}));
var wichday;
wichday = 1;
wichday = days.tues;
// wichday="test" cant assign bcs enum have already decalare there properties above
// and it take bydefault value 0 to so 
console.log(wichday);

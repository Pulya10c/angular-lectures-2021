function makeArr(arg) {
    return [arg];
}
;
console.log(makeArr('abc'), makeArr(123), makeArr('a1b2c3'));
var someStatus = 'on';
var daysOfWeek;
(function (daysOfWeek) {
    daysOfWeek[daysOfWeek["Sun"] = 0] = "Sun";
    daysOfWeek[daysOfWeek["Mon"] = 1] = "Mon";
    daysOfWeek[daysOfWeek["Tue"] = 2] = "Tue";
    daysOfWeek[daysOfWeek["Wed"] = 3] = "Wed";
    daysOfWeek[daysOfWeek["Thu"] = 4] = "Thu";
    daysOfWeek[daysOfWeek["Fri"] = 5] = "Fri";
    daysOfWeek[daysOfWeek["Sat"] = 6] = "Sat";
})(daysOfWeek || (daysOfWeek = {}));
;
var today = daysOfWeek.Fri;

var years;
(function (years) {
    years[years["january"] = 1] = "january";
    years[years["february"] = 2] = "february";
    years[years["march"] = 3] = "march";
    years[years["april"] = 4] = "april";
    years[years["may"] = 5] = "may";
    years[years["june"] = 6] = "june";
    years[years["july"] = 7] = "july";
    years[years["august"] = 8] = "august";
    years[years["september"] = 9] = "september";
    years[years["october"] = 10] = "october";
    years[years["november"] = 11] = "november";
    years[years["december"] = 12] = "december";
})(years || (years = {}));
var thisMonth = years.november;
console.log("Today's month is " + thisMonth);

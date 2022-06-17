// function
exports.Hash = function(innerText) {
    console.log("#######################");
    console.log(innerText);
    console.log("#######################");
};

exports.With = function( icon, innerText) {
    var iconResult = ""
    for (var i = 0; i < 100 ; i++) {
        iconResult += icon;
    }
    console.log(iconResult)
    console.log(innerText)
    console.log(iconResult)
}
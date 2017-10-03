const player = {
    money: 990,
    funds: 1000
};

var lastUpdate = new Date().getTime();
var scientific = true;

document.querySelectorAll("[name=shortenType]").forEach(
    function(e) {
        e.onclick = function() {
            scientific = (e.value === "scientific") ? true : false;
        };
    }
);

MoneyFormat = ['K', 'M', 'B', 'T', 'Qd', 'Qt', 'Sx', 'Sp', 'Oc', 'No', 'Dc', 'UDc', 'DDc', 'TDc', 'QdDc', 'QtDc', 'SxDc', 'SpDc', 'ODc', 'NDc', 'Vg', 'UVg', 'DVg', 'TVg', 'QdVg', 'QtVg', 'SxVg', 'SpVg', 'OVg', 'NVg', 'Tg', 'UTg', 'DTg', 'TTg', 'QdTg', 'QtTg', 'SxTg', 'SpTg', 'OTg','NTg', 'Qa', 'UQa', 'DQa', 'TQa', 'QdQa', 'QtQa', 'SxQa', 'SpQa', 'OQa', 'NQa', 'Qi', 'UQi', 'DQi', 'TQi', 'QaQi', 'QtQi', 'SxQi', 'SpQi', 'OQi', 'NQi', 'Se', 'USe', 'DSe', 'TSe', 'QaSe', 'QtSe', 'SxSe', 'SpSe', 'OSe', 'NSe', 'St', 'USt', 'DSt', 'TSt', 'QaSt', 'QtSt', 'SxSt', 'SpSt', 'OSt', 'NSt', 'Og', 'UOg', 'DOg', 'TOg', 'QdOg', 'QtOg', 'SxOg', 'SpOg', 'OOg', 'NOg', 'Nn', 'UNn', 'DNn', 'TNn', 'QdNn', 'QtNn', 'SxNn', 'SpNn', 'ONn', 'NNn'];
MoneyFormat.reverse();

shorten = function(money) {
	var temp = MoneyFormat.length;
	var digitMul = Math.pow(10, 2);
	for (var i = 0; i < MoneyFormat.length; i++) {
		if ( Math.pow(10, temp * 3) <= money ) {
			money = money / Math.pow(10, temp * 3);
			return scientific ? money.toFixed(2) + 'e+' + (MoneyFormat.length-i)*3 : money.toFixed(2) + ' ' + MoneyFormat[i];
		}
		temp--;
	}
	return money.toFixed(1);
};

setInterval(function() {
    var thisUpdate = new Date().getTime();
    var diff = thisUpdate - lastUpdate;
    diff = diff / 100;

    document.getElementById("numbers").innerHTML = shorten(player.money);

    player.money += player.funds*(1.2)*diff;

    lastUpdate = thisUpdate;    
}, 100);
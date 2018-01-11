function get_data(name){

	var xhr = new XMLHttpRequest();
	var url = "https://api.coinmarketcap.com/v1/ticker/" + name + "/";
	xhr.open("GET", url, false);
	xhr.send();

	return JSON.parse(xhr.response)[0];
}

function add_personal_data(data, balance, principal){
	
	var _r2 = d3.format(".3f");  
	data.price_usd = +data.price_usd;
	data.percent_change_24h = +data.percent_change_24h;

	data.balance = balance;
	data.principal = principal;
	data.value = _r2(data.price_usd * balance);
	data.value_24h = _r2(data.value * (1.0 - data.percent_change_24h * 0.01));

}

function make_c3_array(json_data, name, label){

	var result = [label];
	for(var i = 0; i < json_data.length; i++){
		result.push(json_data[i][name]);
	}

	return result;
}

function sum_c3_array(c3_data){
  var result = 0;
  for (var i = 1; i < c3_data.length; i++){
    result += parseFloat(c3_data[i]);
  }
  return result;

}


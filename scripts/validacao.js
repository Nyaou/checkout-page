var submit = document.getElementById('btn-submit');
var teste = 0;
var email = document.getElementById('input-email');
var phone = document.getElementById('input-phone');
var nome = document.getElementById('input-name');
var address = document.getElementById('input-address');
var city = document.getElementById('input-city');
var country =  document.getElementById('input-country');
var postal = document.getElementById('input-postal');
var saveInformation = document.getElementById('checkbox-save');

var inputs = [
			email,
			phone,
			nome,
			address,
			city,
			postal,
			country
		];

submit.addEventListener('click', e => {
	e.preventDefault();
	teste = 0;
	inputs.forEach( element => {
		if(element.value === '' || element.value === 'country'){
			teste += 1;
		}
	});
	console.log(teste);
	if(teste === 0){
		window.alert('Obrigado por preencher todos os campos');
	}else{
		window.alert('Porfavor preencha todos os campos do formulario');
	}
});

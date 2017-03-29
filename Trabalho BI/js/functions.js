$(document).ready(function(){

	$('#adicionar').click(function(){
		var numero = $('#last_name').val();

		// alert(numero);
		alert(parseInt(Math.random() * 10)+1);

		var teste = numero;


	 	// $("#batata").html(novoLista);

	});
});
	





// var random = new Random();
// var lista = [];

// for (var i = 122 - 1; i >= 0; i--) {
// 	var x = {
// 	numero : random.next(1,4),
// 	telefone: random.next(1,4)
// }
// 	lista.push(x);
// }


 	// 	$.post('http://localhost:2000/enviar', numero, function(data){
		// var novoLista = [];
	 // 	for (var i = lista.length - 1; i >= 0; i--) {
	 // 		var x = "<td>"+lista[i].nome+"</td>";
	 // 	} });

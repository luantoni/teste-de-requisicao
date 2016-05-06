var i;
var check;
var listatodos;

	function assyncRequest(){
		i = document.getElementById("chave").value;
		check = document.getElementById("listatodos").value;
		
		console.log(check);
		console.log(listatodos);
		var valor = isNaN(i);
			var xmlhttp = new XMLHttpRequest();
			
			if (valor == true) {
				var url ="http://192.168.1.109:8080/product?nome="+i;
			}
			
			if (valor == false){
				var url ="http://192.168.1.109:8080/product?chave="+i;
			}
			
			if (check == true){
				var url ="http://192.168.1.109:8080/list";
				listatodos = 1;
			}
			
			xmlhttp.onreadystatechange = function (){
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
					var myArr = JSON.parse(xmlhttp.responseText);
					estoque(myArr);
				}
			}; 
			xmlhttp.open("GET", url, true);
			xmlhttp.send();
		
		
			if (listatodos == 1){
				function estoque(produtos){
					var x;
					for (x = 0; x < produtos.length; x++){
						var out = "";
						out+='<table border="1"><tr><th>Produto</th><th>Valor</th><th>Status</th><th>Estoque</th></tr>';
						out+= '<tr><td>' + produtos[x].nome + '</td>';
						out+='<td>' + produtos[x].valor + '</td>';
						out+='<td>' + produtos[x].status + '</td>';
						out+='<td>' + produtos[x].estoque + '</td></tr></table>';
						document.getElementById("conteudo").innerHTML = out;
					}
				}
			}
			
		
			else if (listatodos !=1){
				function estoque(produtos){
				var out = "";
				out+='<table border="1"><tr><th>Chave</th><th>Produto</th><th>Valor</th><th>Status</th><th>Estoque</th></tr>';
				out+= '<tr><td>' + produtos.chave + '</td>';
				out+= '<td>' + produtos.nome + '</td>';
				out+='<td>' + produtos.valor + '</td>';
				out+='<td>' + produtos.status + '</td>';
				out+='<td>' + produtos.estoque + '</td></tr></table>';
				document.getElementById("conteudo").innerHTML = out;
				}
			}
		}	
		
	

		
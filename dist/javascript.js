var url;

	function todos(){
		lista=2;
		url= "http://192.168.1.109:8080/list";
		assyncRequest(lista);
	}
	
	function limpa(){
		document.getElementById("conteudo").innerHTML = "";
		/*document.getElementById("chave").innerHTML = '';*/
	}

	function teste(){
		var lista;
		var i = document.getElementById("chave").value.toLowerCase();
		if (i != ""){
			var valor = isNaN(i);
			lista = 1;
			if (valor == true) {
				url ="http://192.168.1.109:8080/product?nome="+i;
			}
			
			if (valor == false){
				url ="http://192.168.1.109:8080/product?chave="+i;
			}
			assyncRequest(lista);
		}
	}
	
	function assyncRequest(lista){
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function (){
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
				var myArr = JSON.parse(xmlhttp.responseText);
					estoque(myArr, lista);
			}
		}; 
		
		xmlhttp.open("GET", url, true);
		xmlhttp.send();		
	}
	
	function estoque(produtos, lista){
		var out = "";
		
		if (lista == 1){
			out+='<table border="1"><tr><th>Chave</th><th>Produto</th><th>Valor</th><th>Status</th><th>Estoque</th></tr>';
			out+= '<tr><td>' + produtos.chave + '</td>';
			out+= '<td>' + produtos.nome + '</td>';
			out+='<td>' + produtos.valor + '</td>';
			out+='<td>' + produtos.status + '</td>';
			out+='<td>' + produtos.estoque + '</td></tr></table>';
		}
		
		if (lista == 2){
			out+='<table border="1"><tr><th>Chave</th><th>Produto</th><th>Valor</th><th>Status</th><th>Estoque</th></tr>';
			for (i=0; i < produtos.length; i++){
				out+= '<tr><td>' + produtos[i].chave + '</td>';
				out+= '<td>' + produtos[i].nome + '</td>';
				out+='<td>' + produtos[i].valor + '</td>';
				out+='<td>' + produtos[i].status + '</td>';
				out+='<td>' + produtos[i].estoque + '</td></tr>';
			}
			'</table>'
		}
		document.getElementById("conteudo").innerHTML = out;			
	}


		
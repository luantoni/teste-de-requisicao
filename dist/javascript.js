var url;
	function todos(){
		lista=2;
		url= "http://192.168.1.109:8080/list";
		document.getElementById("chave").value = "Todos os itens";
		assyncRequest(lista);
	}
	
	function limpa(){
		document.getElementById("conteudo").innerHTML = "";
		document.getElementById("chave").value = "";
	}

	function teste(){
		var i = document.getElementById("chave").value.toLowerCase();
		var lista;
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
					/*estoque(myArr, lista);*/
					document.getElementById("tabela").innerHTML = xmlhttp.responseText;
			}
		}; 
		
		xmlhttp.open("GET", url, true);
		xmlhttp.send();		
	}
	
	function estoque(produtos, lista){
		var out = "";
		out+='<table border="1"><tr><th>Chave</th><th>Produto</th><th>Valor</th><th>Status</th><th>Estoque</th></tr>';
		if (lista == 1){			
			out+= '<tr><td>' + produtos.chave + '</td>';
			out+= '<td>' + produtos.nome + '</td>';
			out+='<td>' + produtos.valor + '</td>';
			out+='<td>' + produtos.status + '</td>';
			out+='<td>' + produtos.estoque + '</td></tr></table>';
		}
		
		if (lista == 2){
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

		
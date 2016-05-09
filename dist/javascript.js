var i;
var lista;
var lebotao;
var url;
	
	$( document ).ready(function() {
		$('#botao').click(function(){
			$.getJSON("http://192.168.1.109:8080/list", function (data){
				var i;
				var out = "";
				out+='<table border="1"><tr><th>Chave</th><th>Produto</th><th>Valor</th><th>Status</th><th>Estoque</th></tr>';
				for (i=0; i < data.length; i++){
				out+= '<tr><td>' + data[i].chave + '</td>';
				out+= '<td>' + data[i].nome + '</td>';
				out+='<td>' + data[i].valor + '</td>';
				out+='<td>' + data[i].status + '</td>';
				out+='<td>' + data[i].estoque + '</td></tr>';
				}
				'</table>'
			$("#conteudo").html(out);
		});
		});
	});
	
	function assyncRequest(){
		i = document.getElementById("chave").value;
		var valor = isNaN(i);
		
		var xmlhttp = new XMLHttpRequest();
		
		if (valor == true) {
			url ="http://192.168.1.109:8080/product?nome="+i;
			lista=0;
		}
		
		if (valor == false){
			url ="http://192.168.1.109:8080/product?chave="+i;
			lista=0;
		}
		

		
		xmlhttp.onreadystatechange = function (){
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
				var myArr = JSON.parse(xmlhttp.responseText);
				
				if (lista == 0){
					estoque(myArr);
				}
				
				if (lista == 1){
					estoque2(myArr);
				}
			}
		}; 
		
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
		
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
		
		function estoque2(produtos){
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
		
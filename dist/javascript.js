var i;
var nome;

	function assyncRequest(){
		i = document.getElementById("chave").value;
		nome = document.getElementById("chavenome").value;

			var xmlhttp = new XMLHttpRequest();
			
			if (i == "") {
				var url ="http://192.168.1.109:8080/product?nome="+nome;
			}
			if (nome == ""){
				var url ="http://192.168.1.109:8080/product?chave="+i;
			}
			
			xmlhttp.onreadystatechange = function (){
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
					var myArr = JSON.parse(xmlhttp.responseText);
					estoque(myArr);
				}
			}; 
			xmlhttp.open("GET", url, true);
			xmlhttp.send();
		
			function estoque(produtos){
				var out = "";
				out+= 'Nome: ' + produtos.nome + '<br />';
				out+='Valor: ' + produtos.valor + '<br />';
				out+='Status: ' + produtos.status + '<br />';
				out+='Estoque: ' + produtos.estoque + '<br />';
				document.getElementById("conteudo").innerHTML = out;
			}
		}	
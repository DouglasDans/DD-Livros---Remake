var valorTotal = 0;
function Salvar(){
    document.getElementById('txtNomeCliente').value = document.getElementById('txtNome');

    var i;
    for( i = 0; i < document.formVenda.rdEntrega.length;i++){
        if (document.formVenda.rdEntrega[i].checked)
            break;
    }
    if  (parseInt(document.formVenda.rdEntrega[i].value) == 1)
        document.getElementById("txtEntregaSelec").value = document.formVendaslcFormaPgto
}
function addProduto(){
    var tabela = document.getElementById('tbProduto');
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");


    var tr = document.createElement("tr");
    var cod = parseInt(document.getElementById('codProduto').value);
    switch(cod){
        case 1:
            var descricao = "A Guerra Dos Consoles";
            var preco = 24.99;
            var qtde = document.getElementById("qtde").value;
            valorTotal += (parseInt(qtde)* (preco));
            break;
        case 2:
            var descricao = "Vingadores: A Cruzada das Cranças";
            var preco = 59.99;
            var qtde = document.getElementById("qtde").value;
            valorTotal += (parseInt(qtde)* (preco));
            break;
        case 3:
            var descricao = "Assassin´s Creed - Revelações";
            var preco = 32.90;
            var qtde = document.getElementById("qtde").value;
            valorTotal += (parseInt(qtde)* (preco));
            break;
         case 4:
            var descricao = "Harry Potter E as Relíquias da Morte";
            var preco = 30.99;
            var qtde = document.getElementById("qtde").value;
            valorTotal += (parseInt(qtde)* (preco));
            break;
        case 5:
            var descricao = "Animais Fantásticos";
            var preco = 35.90;
            var qtde = document.getElementById("qtde").value;
            valorTotal += (parseInt(qtde)* (preco));
            break;
         case 6:
            var descricao = "Um Mais Um";
            var preco = 15.99;
            var qtde = document.getElementById("qtde").value;
            valorTotal += (parseInt(qtde)* (preco));
            break;
         case 7:
            var descricao = "Hellboy";
            var preco = 10.99;
            var qtde = document.getElementById("qtde").value;
            valorTotal += (parseInt(qtde)* (preco));
            break;
         case 8:
            var descricao = "As aventuras de Sherlock Holmes:";
            var preco = 20.99;
            var qtde = document.getElementById("qtde").value;
            valorTotal += (parseInt(qtde)* (preco));
            break;
         case 9:
            var descricao = "Star Wars : Provação";
            var preco = 23.99;
            var qtde = document.getElementById("qtde").value;
            valorTotal += (parseInt(qtde)* (preco));
            break;
         case 10:
            var descricao = "O Pequeno Príncipe";
            var preco = 30.00;
            var qtde = document.getElementById("qtde").value;
            valorTotal += (parseInt(qtde)* (preco));
            break;
        case 11:
            var descricao = "O SENHOR DOS ANÉIS: A SOCIEDADE DO ANEL";
            var preco = 35.00;
            var qtde = document.getElementById("qtde").value;
            valorTotal += (parseInt(qtde)* (preco));
            break;   
        case 12:
            var descricao = "Vingadores - A Queda";
            var preco = 28.00;
            var qtde = document.getElementById("qtde").value;
            valorTotal += (parseInt(qtde)* (preco));
            break;
        case 13:
            var descricao = "Rip Van Winkle";
            var preco = 6.99;
            var qtde = document.getElementById("qtde").value;
            valorTotal += (parseInt(qtde)* (preco));
            break;
        case 14:
            var descricao = "A Ilha Misteriosa";
            var preco = 25.99;
            var qtde = document.getElementById("qtde").value;
            valorTotal += (parseInt(qtde)* (preco));
            break;      
        case 15:
            var descricao = "Viagem ao Centro da Terra";
            var preco = 28.00;
            var qtde = document.getElementById("qtde").value;
            valorTotal += (parseInt(qtde)* (preco));
            break;    
        case 16:
            var descricao = "God Of War";
            var preco = 39.99;
            var qtde = document.getElementById("qtde").value;
            valorTotal += (parseInt(qtde)* (preco));
            break;    
        default:
            var descricao = "Indefinido";
            var preco = 0.0;
            var qtde = document.getElementById("qtde").value;
            valorTotal += (parseInt(qtde)* (preco));
            cod = 0;
            qtde=0;
    }
    var codNode = document.createTextNode(cod);
    var descricaoNode = document.createTextNode(descricao);
    var precoNode = document.createTextNode(preco.toFixed(2));
    var qtdeNode = document.createTextNode(qtde);
    var vtNode = document.createTextNode(valorTotal.toFixed(2));


    td1.appendChild(codNode);
    td2.appendChild(descricaoNode);
    td3.appendChild(precoNode);
    td4.appendChild(qtdeNode);
    td5.appendChild(vtNode);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    tabela.appendChild(tr);

    document.getElementById('codProduto').value = '';
    document.getElementById('qtde').value = '';
    document.getElementById('codProduto').focus();

    document.getElementById('txtValorTotal').value = valortotal;
}
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
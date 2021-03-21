
function  loadAllOrders(){
    var order=getAllOrder();
    var orderid = document.getElementById('txtMange-Orders');
    for (var i in order){
        var opt = document.createElement("option");
        opt.value=order[i].getOrderID();
        opt.text=order[i].getOrderID();
        orderid.appendChild(opt);
    }
}

function getAllOrder() {
    return orderTable;
}


function  constructorMethords(){
    loadAllOrders();
    forPageFive();
}

$('#txtMange-Orders').click(function (){
    let orders=searchOrders($('#txtMange-Orders').val());
    $('#tblManage-orders').empty();
    if (orders !=null){
        let orderid=orders.getOrderID();
        let  custname=orders.getOdrCustomerName();
        let itmname=orders.getOdrItemName();
        let price=orders.getOrderTotal();

        var row="<tr><td>"+orderid+"</td><td>"+custname+"</td><td>"+itmname+"</td><td>"+price+"</td>></tr>";
        $('#tblManage-orders').append(row);
    }
})
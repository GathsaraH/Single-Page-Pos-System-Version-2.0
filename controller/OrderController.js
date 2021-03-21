function generateOrderNumber() {
    try {
        let lastOrderId = orderTable[orderTable.length - 1].getOrderID();
        let newOrderId = parseInt(lastOrderId.substring(1, 4)) + 1;
        if (newOrderId < 10) {
            $("#txtOrderID").val("H00" + newOrderId);
        } else if (newOrderId < 100) {
            $("#txtOrderID").val("H0" + newOrderId);
        } else {
            $("#txtOrderID").val("H" + newOrderId);
        }
    } catch (e) {
        $("#txtOrderID").val("H001");
    }

}


function loadCustomers() {
    var customer = getCustomers();
    var ids = document.getElementById('mydropdown');
    for (var i in customer) {
        var opt = document.createElement("option")
        opt.value = customer[i].getCustomerID();
        opt.text = customer[i].getCustomerID();
        ids.appendChild(opt);
    }
}


function getCustomers() {
    return customerTable;
}


function forOrder() {
    forPageTwo();
    loadCustomers();
    generateOrderNumber();
}

$('#mydropdown').click(function () {
    let customer = searchCustomerID($('#mydropdown').val());
    if (customer != null) {
        $('#txtOrderCustName').val(customer.getCustomerName());
        $('#txtOrderCustContact').val(customer.getCustomerContact());
    } else {
        clearOrders();
    }

})

function getCustomerID() {
    return customerTable;
}

function searchCustomerID(id) {
    for (var i in customerTable) {
        if (customerTable[i].getCustomerID() == id) return customerTable[i];
    }
    return null;
}

// ------------------------------------------------------CUSTOMEr ID SECTOn OVER-----------------------------------------------------------------------
$('#orderTable>tr').click(function () {
    let itmid = $(this).children('td:eq(0)').text();
    let itmname = $(this).children('td:eq(1)').text();
    let itmprice = $(this).children('td:eq(2)').text();

    $('#txtOrderItemName').val(itmname);
    $('#txtOrderItemID').val(itmid);
    $('#txtOrderItemPrice').val(itmprice);
})

$('#btnAddCart').click(function () {
    let odrqty = $('#txtOrderItemQty').val();
    let itmprice = $('#txtOrderItemPrice').val();
    let finl = (odrqty * itmprice);
    let totalFinal = $('#txtTotal').text(finl);

    let orderDate = $('#txtDate').val();
    let orderID = $('#txtOrderID').val();
    let custID = $('#mydropdown').val();
    let custName = $('#txtOrderCustName').val();
    let custContact = $('#txtOrderCustContact').val();
    let itmName = $('#txtOrderItemName').val();
    let itmID = $('#txtOrderItemID').val();
    let cash = $('#txtOrderItemCash').val();
    let discount = $('#txtOrderItemDiscount').val();
    let total = $('#txtTotal').val();


    var searchCart1 = searchOrders($('#txtOrderID').val());
    if (searchCart1 == null) {
        let all = saveOrder(orderDate, orderID, custID, custName, custContact, itmName, itmID, itmprice, odrqty, cash, discount, finl);
        $('#btnAddCart').html("Add Cart");

    } else {
        let orderqty1 = $('#txtOrderItemQty').val();
        let updat = updateOrderQty(orderqty1, finl);
        loadItemCart();
        $('#btnAddCart').html("Update Cart");

    }

    clearOrders();
    generateOrderNumber();


})

function clearOrders() {
    $('#txtOrderItemQty').val();
    $('#txtOrderItemPrice').val();
    $('#txtTotal').text(finl);
    $('#txtDate').val("");
    $('#txtOrderID').val("");
    $('#mydropdown').val("");
    $('#txtOrderCustName').val("");
    $('#txtOrderCustContact').val("");
    $('#txtOrderItemName').val("");
    $('#txtOrderItemID').val("");
    $('#txtOrderItemCash').val("");
    $('#txtOrderItemDiscount').val("");
    $('#txtTotal').val("");

}

function saveOrder(orderDate, orderID, custID, custName, custContact, itmName, itmID, itmprice, odrqty, cash, discount, total) {
    let order = new OrderDTO(orderDate, orderID, custID, custName, custContact, itmName, itmID, itmprice, odrqty, cash, discount, total);
    orderTable.push(order);
    loadItemCart();
    return true;
}

function getAllOrder() {
    return orderTable;
}


function loadItemCart() {
    let allOrders = getAllOrder();
    $('#ordet-cart-table').empty();
    for (var i in allOrders) {
        let orderID = allOrders[i].getOrderID();
        let custName = allOrders[i].getOdrCustomerName();
        let itmID = allOrders[i].getOdrItemID();
        let itmName = allOrders[i].getOdrItemName();
        let itmprice = allOrders[i].getOdrItemPrice();
        let odrqty = allOrders[i].getOrderQTY();
        let total = allOrders[i].getOrderTotal();

        var row = "<tr><td>" + orderID + "</td><td>" + custName + "</td><td>" + itmID + "</td><td>" + itmName + "</td><td>" + itmprice + "</td><td>" + odrqty + "</td><td>" + total + "</td></tr>";
        $('#ordet-cart-table').append(row);
    }
}

function searchOrders(id) {
    for (var i in orderTable) {
        if (orderTable[i].getOrderID() == id) return orderTable[i]
    }
    return null;
}


// function updateOrderCart() {
//     var searchCart1 = searchItem($('#txtOrderID').val());
//     if (searchCart1 == null) {
//         $('#btnAddCart').html("Add Cart");
//
//     } else {
//         $('#btnAddCart').html("Update Cart");
//         alert("Update")
//     }
//
//
// }


// function UpdateOrder(orderDate, orderID, custID, custName, custContact, itmName, itmID, itmprice, odrqty, cash, discount, total) {
//     let order = searchOrders(orderID);
//     if (order != null) {
//         order.setOrderQTY(odrqty);
//         return true;
//     } else {
//         return false;
//     }
// }

function updateOrderQty(odrqty, total) {
    let order = searchOrders($('#txtOrderID').val());
    if (order != null) {
        order.setOrderQTY(odrqty);
        order.setOrderTotal(total);
        return true;
    } else {
        return false;
    }
}
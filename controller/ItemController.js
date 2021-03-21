$('#btnItem').click(function () {
    let iid = $('#itemCode').val();
    let iname = $('#itemName').val();
    let iqty = $('#itemQty').val();
    let iprice = $('#itemPrice').val();

    let all = saveItem(iid, iname, iqty, iprice);

    $('#tblItem>tr').click(function () {
        let iid = $(this).children('td:eq(0)').text();
        let iname = $(this).children('td:eq(1)').text();
        let iqty = $(this).children('td:eq(2)').text();
        let iprice = $(this).children('td:eq(3)').text();

        $('#itemCode').val(iid);
        $('#itemName').val(iname);
        $('#itemQty').val(iqty);
        $('#itemPrice').val(iprice);
    })
    // $('#tblItem').on('dblclick', function () {
    //     $(this).remove();
    // })

    clearItems();

})

function saveItem(id, name, qty, price) {
    let item = new ItemDTO(id, name, qty, price);
    itemTable.push(item);
    loadAllItem();
    return true;
}

function getAllItem() {
    return itemTable;
}

function loadAllItem() {
    let allItem = getAllItem();
    $('#tblItem').empty();
    for (var i in allItem) {
        let iid = allItem[i].getItemID();
        let iname = allItem[i].getItemName();
        let iqty = allItem[i].getItemQty();
        let iprice = allItem[i].getItemPrice();

        var row = "<tr><td>" + iid + "</td><td>" + iname + "</td><td>" + iqty + "</td><td>" + iprice + "</td></tr>"
        $('#tblItem').append(row)
    }
}

function searchItem(id) {
    for (var i in itemTable) {
        if (itemTable[i].getItemID() == id) return itemTable[i];
    }
    return null
}

function deleteItem(id) {
    let item = searchItem(id);
    if (item != null) {
        let indexNumber = itemTable.indexOf(item);
        itemTable.splice(indexNumber, 1);
        return true;
    } else {
        return false;
    }
}


// --------DELETE ITEMS-------------------------
$('#btnItemDelete').click(function () {
    let iid = $('#itemCode').val();
    let option = confirm(`Do you want to delete ID:${iid}`);
    if (option) {
        let erase = deleteItem(iid);
        if (erase) {
            alert("Item Deleted")
        } else {
            alert("Delete Failed")
        }
    }
    clearItems();
    loadAllItem();
})

// ---------SERCH ITEM KEY PRESS SERCH----------
$('#itemCode').on('keyup', function (btn) {
    if (btn.key == "Enter") {
        let item = searchItem($(this).val());
        if (item != null) {
            $('#itemCode').val(item.getItemID());
            $('#itemName').val(item.getItemName());
            $('#itemQty').val(item.getItemQty());
            $('#itemPrice').val(item.getItemPrice());
        } else {
            clearItems();
        }
    }
})

function clearItems() {
    $('#itemCode').val("");
    $('#itemName').val("");
    $('#itemQty').val("");
    $('#itemPrice').val("");
}


//GENERATE ITEM CODE
function generateItemID() {
    try {
        let lastItemId = itemTable[itemTable.length - 1].getItemID();
        let newItemId = parseInt(lastItemId.substring(1, 4)) + 1;
        if (newItemId < 10) {
            $("#itemCode").val("I00" + newItemId);
        } else if (newItemId < 100) {
            $("#itemCode").val("I0" + newItemId);
        } else {
            $("#itemCode").val("I" + newItemId);
        }
    } catch (e) {
        $("#itemCode").val("I001");
    }

}

function loadingMehtord() {
    forPageFour();
    generateItemID();

}

// --------------CLERE----------------
$('#btn-clear').click(function () {
    clearItems();
})

function updateItem(id, name, qty, price) {
    let item = searchItem(id);
    if (item != null) {
        item.setItemName(name);
        item.setItemQty(qty);
        item.setItemPrice(price);
        return true
    } else {
        return false;
    }
}

// ------------------ITEM UPDATE---------------------
$('#btnItemUpdate').click(function () {
    let iid = $('#itemCode').val();
    let iname = $('#itemName').val();
    let qty = $('#itemQty').val();
    let prise = $('#itemPrice').val();
    let option = confirm(`Do you want to Update Item ID:${iid}`);
    if (option) {
        let updt = updateItem(iid, iname, qty, prise);
        if (updt) {
            alert("Item Updated");
        } else {
            alert("Update Faild");
        }
    }
    loadAllItem();
    clearItems();
});

//---------Validation-------------
function itemValidation(pattern, value) {
    return pattern.test(value);
}
//---Name-----
$("#itemName").on("keyup", function (event) {
    let name_alert = $("#lblname");
    if (itemValidation(/^[A-z ]{1,}$/, $("#itemName").val())) {
        name_alert.text("");
        if (event.key === "Enter") {
            $("#itemName").focus();
        }
    } else {
        name_alert.text("Only add letters (A,B,C,a,b,c,..)");
        name_alert.css({
            "color" : "red",
            "font-size" : "13px"
        });
    }
});

//-----QTY--------------
$("#itemQty").on("keyup", function (event) {
    let qty_alert = $("#lblqty");
    if (itemValidation(/^[0-9]{1,}$/, $("#itemQty").val())) {
        qty_alert.text("");
        if (event.key === "Enter") {
            $("#itemQty").focus();
        }
    } else {
        qty_alert.text("Only add numbers (1234..)");
        qty_alert.css({
            "color" : "red",
            "font-size" : "13px"
        });
    }
});
 //---PRICE----
$("#itemPrice").on("keyup", function (event) {
    let unitePrice_alert = $("#lblprice");
    if (itemValidation(/^[0-9.]{1,}$/, $("#itemPrice").val())) {
        unitePrice_alert.text("");
        if (event.key === "Enter") {
            $("#itemPrice").focus();
        }
    } else {
        unitePrice_alert.text("Only add numbers (1234..)");
        unitePrice_alert.css({
            "color" : "red",
            "font-size" : "13px"
        });
    }
});


$('#btnCustomer').click(function () {
    let custid = $('#txtCustomerID').val();
    let custname = $('#txtCustomerName').val();
    let custaddress = $('#txtCustomerAddress').val();
    let custsalary = $('#txtCustomerSalry').val();
    let custcontact = $('#txtCustomerContact').val();

    let all = saveCustomer(custid, custname, custaddress, custsalary, custcontact);
    console.log(all)

    $('#tblCustomer>tr').click(function () {
        let id = $(this).children('td:eq(0)').text();
        let name = $(this).children('td:eq(1)').text();
        let address = $(this).children('td:eq(2)').text();
        let salary = $(this).children('td:eq(3)').text();
        let contact = $(this).children('td:eq(4)').text();

        $('#txtCustomerID').val(id);
        $('#txtCustomerName').val(name);
        $('#txtCustomerAddress').val(address);
        $('#txtCustomerSalry').val(salary);
        $('#txtCustomerContact').val(contact);
    });

    $('#tblCustomer').on('dblclick', function () {
        $(this).remove();
    })


    // $('#txtCustomerID').val(document.getElementById('txtCustomerID').textContent++);
    clearCustomer();
    generateCustomerID();

})

function saveCustomer(id, name, address, salary, contact) {
    let customer = new CustomerDTO(id, name, address, salary, contact);
    customerTable.push(customer);

    loadAllCustomer();
    return true;
}

function getAllCustomers() {
    return customerTable;
}

function loadAllCustomer() {
    let allCustomer = getAllCustomers();
    $('#tblCustomer').empty();
    for (var i in allCustomer) {
        let id = allCustomer[i].getCustomerID();
        let name = allCustomer[i].getCustomerName();
        let address = allCustomer[i].getCustomerAddress();
        let salary = allCustomer[i].getCustomerSalary();
        let contact = allCustomer[i].getCustomerContact();

        var row = "<tr><td>" + id + "</td><td>" + name + "</td><td>" + address + "</td><td>" + salary + "</td><td>" + contact + "</td></tr>"
        $('#tblCustomer').append(row);
    }

}


function searchCustomer(id) {
    for (var i in customerTable) {
        if (customerTable[i].getCustomerID() == id) return customerTable[i]
    }
    return null;
}

$('#btnGetAll').click(function () {
    loadAllCustomer();
})

// ---------SERCH CUSTOMER KEY PRESS SERCH----------

$('#txtCustomerID').on('keyup', function (button) {
    if (button.key == "Enter") {
        let customer = searchCustomer($(this).val());
        if (customer != null) {
            $('#txtCustomerID').val(customer.getCustomerID());
            $('#txtCustomerName').val(customer.getCustomerName());
            $('#txtCustomerAddress').val(customer.getCustomerAddress());
            $('#txtCustomerSalry').val(customer.getCustomerSalary());
            $('#txtCustomerContact').val(customer.getCustomerContact());

        } else {
            clearCustomer();
        }
    }
})

function clearCustomer() {
    $('#txtCustomerID').val("");
    $('#txtCustomerName').val("");
    $('#txtCustomerAddress').val("");
    $('#txtCustomerSalry').val("");
    $('#txtCustomerContact').val("");
}

$('#btn-clear1').click(function () {
    $('#txtCustomerID').val("");
    $('#txtCustomerName').val("");
    $('#txtCustomerAddress').val("");
    $('#txtCustomerSalry').val("");
    $('#txtCustomerContact').val("");
})


// ------------------------UPDATE---------------------------------

function updateCustomer(id, name, address, salary, contact) {
    let customer = searchCustomer(id);
    if (customer != null) {
        customer.setCustomerName(name);
        customer.setCustomerAddress(address);
        customer.setCustomerSalary(salary);
        customer.setCustomerContact(contact);
        return true;
    } else {
        return false;
    }
}

$('#btnUpdate').click(function () {
    let id = $('#txtCustomerID').val();
    let name = $('#txtCustomerName').val();
    let address = $('#txtCustomerAddress').val();
    let salary = $('#txtCustomerSalry').val();
    let contact = $('#txtCustomerContact').val();
    let option = confirm(`Do you want to Update Customer ID:${id}`);
    if (option) {
        let update = updateCustomer(id, name, address, salary, contact);
        if (update) {
            alert("Customer Updated");
        } else {
            alert("Update Faild");
        }
    }
    clearCustomer();
    loadAllCustomer();
})



function generateCustomerID() {
    try {
        let lastCustId = customerTable[customerTable.length - 1].getCustomerID();
        let newCustId = parseInt(lastCustId.substring(1, 4)) + 1;
        if (newCustId < 10) {
            $("#txtCustomerID").val("C00" + newCustId);
        } else if (newCustId < 100) {
            $("#txtCustomerID").val("C0" + newCustId);
        } else {
            $("#txtCustomerID").val("C" + newCustId);
        }
    } catch (e) {
        $("#txtCustomerID").val("C001");
    }

}

function OpenLoadFuntion(){
    generateCustomerID();
    forPageThree();
}

// --------------------------------DELETE--------------------------------------
function deleteCustomer(id) {
    let customerID = searchCustomer(id);
    if (customerID != null) {
        let indexNumber = customerTable.indexOf(customerID);
        customerTable.splice(indexNumber, 1);
        return true;

    } else {
        return false;
    }
}
$('#btnCusDelete').click(function (){
    let id=$('#txtCustomerID').val();
    let option = confirm(`Do you want to delete ID:${id}`);
    if (option){
        let erase=deleteCustomer(id);
        if (erase){
            alert("Customer Deleted")
        }else {
            alert("Delete Failed")
        }
    }
    clearCustomer();
    loadAllCustomer();
})

// ------------VALIDATION------------------
function  customerValidation(pattern,value){
    return pattern.test(value);
}
// -----NAME------
$("#txtCustomerName").on("keyup", function (event) {
    let name_alert = $("#lblcusname");
    if (customerValidation(/^[A-z ]{1,}$/, $("#txtCustomerName").val())) {
        name_alert.text("");
        if (event.key === "Enter") {
            $("#txtCustomerName").focus();
        }
    } else {
        name_alert.text("Only add letters (A,B,C,a,b,c,..)");
        name_alert.css({
            "color" : "red",
            "font-size" : "13px"
        });
    }
});
//-------ADDRESS-------------
$("#txtCustomerAddress").on("keyup", function (event) {
    let address_alert = $("#lblcusaddress");
    if (customerValidation(/^[A-z .,/0-9]{1,}$/, $("#txtCustomerAddress").val())) {
        address_alert.text("");
        if (event.key === "Enter") {
            $("#txtCustomerAddress").focus();
        }
    } else {
        address_alert.text("Check again!");
        address_alert.css({
            "color" : "red",
            "font-size" : "13px"
        });
    }
});

//------Salary---------
$("#txtCustomerSalry").on("keyup", function (event) {
    let contact_alert = $("#lblcussalary");
    if (customerValidation(/^[0-9 -]{1,}$/, $("#txtCustomerSalry").val())) {
        contact_alert.text("");
        if (event.key === "Enter") {
            $("#txtCustomerSalry").focus();
        }
    } else {
        contact_alert.text("Only add numbers (1234..)");
        contact_alert.css({
            "color" : "red",
            "font-size" : "13px"
        });
    }
});

//--------CONTACT---------

$("#txtCustomerContact").on("keyup", function (event) {
    let contact_alert = $("#lblcuscontact");
    if (customerValidation(/^[0-9 -]{1,}$/, $("#txtCustomerContact").val())) {
        contact_alert.text("");
        if (event.key === "Enter") {
            $("#txtCustomerContact").focus();
        }
    } else {
        contact_alert.text("Only add numbers (1234..)");
        contact_alert.css({
            "color" : "red",
            "font-size" : "13px"
        });
    }
});

function OrderDTO(odrdate,odrid,custid,custname,custcontact,itmname,itmid,itmprise,odrqty,cash,discount,total){
    var  __odrdate=odrdate;
    var __odrid=odrid;
    var __custid=custid;
    var __custname=custname;
    var __custcontact=custcontact;
    var __itmname=itmname;
    var __itmid=itmid;
    var __itmprise=itmprise;
    var __odrqty=odrqty;
    var __cash=cash;
    var __discount=discount;
    var __total=total;

    this.getOrderTotal =function (){
        return __total;
    }
    this.setOrderTotal =function (newTotal){
        __total=newTotal;
    }

    this.getOrderDate = function (){
        return __odrdate;
    }
    this.getOrderID = function (){
        return __odrid;
    }
    this.getCustomerID = function (){
        return __custid
    }

    this.getOdrCustomerName = function (){
        return  __custname;
    }
    this.getCustomerContact = function (){
        return __custcontact;
    }
    this.getOdrItemName = function (){
        return __itmname;
    }
    this.getOdrItemID = function (){
        return __itmid;
    }
    this.getOdrItemPrice = function (){
        return __itmprise
    }
    this.getOrderQTY = function (){
        return __odrqty;
    }
    this.getCash = function (){
        return __cash;
    }
    this.getDiscount = function (){
        return __discount;
    }

    this.setOrderDate = function (newDate){
        __odrdate=newDate;
    }

    this.setOrderID = function (newOdrID){
        __odrid=newOdrID;
    }
    this.setCustomerID = function (newCustID){
        __custid=newCustID;
    }
    this.setOdrCustomerName = function (newCustName){
        __custname=newCustName;
    }

    this.setCustomerContact = function (newCustContact){
        __custcontact=newCustContact;
    }
    this.setOdrItemName = function (newItmName){
        __itmname=newItmName;
    }
    this.setOdrItemID = function (newItmID){
        __itmid=newItmID;
    }
    this.setOdrItemPrice = function (newItmPrice){
        __itmprise=newItmPrice;
    }
    this.setOrderQTY = function (newOdrQty){
        __odrqty=newOdrQty;
    }

    this.setCash = function (newCash){
        __cash=newCash;
    }

    this.setDiscount = function (newDiscount){
        __discount=newDiscount;
    }
}
function ItemDTO(id,name,qty,price){
    var __id=id;
    var __name=name;
    var __qty=qty;
    var __price=price;

    this.getItemID = function (){
        return __id;
    }
    this.getItemName = function (){
        return __name;

    }
    this.getItemQty = function (){
        return __qty;
    }
    this.getItemPrice = function (){
        return __price;
    }
    this.setItemID = function (newID){
        __id=newID;
    }
    this.setItemName = function (newName){
        __name=newName;
    }
    this.setItemQty = function (newQty){
        __qty=newQty;
    }
    this.setItemPrice = function (newPrice){
        __price=newPrice;
    }
}
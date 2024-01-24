pragma solidity ^0.8.19;
contract Marketplace{
    
    uint public orderCount = 0;
    mapping(uint => EnergyPurchase) public energypurchase;

    struct EnergyPurchase {
        uint id;
        uint energyUnits;
        uint price;
        address payable owner;
        bool purchased;
    }
    event ProductBought(uint id, uint energyUnits, uint price, address payable owner,bool purchased);
    event ProductSold(uint id, uint energyUnits, uint price, address payable owner,bool purchased);

    function  SellOrder(uint _energyunits,uint _price) public{
        //require a valid energyunits
        require(_energyunits> 0);
        //require a valid price
        require(_price > 0);
        //require the sender to be the owner of the product
       // require(msg.sender.balance >= _price);
          // require(!energypurchase[orderCount].purchased, "Product has already been purchased");
          //  require(energypurchase[orderCount].owner == payable(msg.sender), "Invalid owner");
        //require(energypurchase[orderCount].price == _price, "Invalid price");
        //require the product to be not sold
        //require(energypurchase[payable(msg.sender).address].id == 0);
        //require the product to be not purchased
        //require(energypurchase[payable(msg.sender).address].purchased == false);
        // Increment product count
        orderCount ++;
        // Create the product
        energypurchase[orderCount] = EnergyPurchase(orderCount, _energyunits, _price, payable(msg.sender), false);
        // Trigger an event
        emit ProductSold(orderCount, _energyunits, _price, payable(msg.sender), false);
    }
    function BuyOrder(uint _id) public payable {
    // Fetch the product
    EnergyPurchase storage _energypurchase = energypurchase[_id];
    // Fetch the owner
    address payable _seller = _energypurchase.owner;
    // Make sure the product has a valid id
    require(_energypurchase.id > 0 && _energypurchase.id <= orderCount);
    // Require that there is enough Ether in the transaction
    require(msg.value >= _energypurchase.price);
    // Require that the product has not been purchased already
    require(!_energypurchase.purchased);
    // Require that the buyer is not the seller
    require(_seller != msg.sender);
    // Transfer ownership to the buyer
    _energypurchase.owner = payable(msg.sender);
    // Mark as purchased
    _energypurchase.purchased = true;
    // Update the product
    energypurchase[_id] = _energypurchase;
    // Transfer Ether to the seller
    (bool success, ) = payable(_seller).call{value: msg.value}("");
    require(success, "Transfer failed.");
    // Trigger an event
    emit ProductBought(orderCount, _energypurchase.energyUnits, _energypurchase.price, payable(msg.sender), true);
}


}
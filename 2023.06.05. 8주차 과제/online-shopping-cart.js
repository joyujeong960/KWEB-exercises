let item_dict = {
    apple: 700,
    orange: 800, 
    lemon: 900
};
let totalPrice = 0;

for (let addButton of document.getElementsByClassName('add-to-cart')){
    addButton.addEventListener('click', e=>{
        let itemName = e.target.parentNode.parentNode.getAttribute('id');
        totalPrice += item_dict[itemName];
        document.getElementById('cost').innerText = totalPrice;
    })
}
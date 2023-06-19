var cartItem=[
    {'id':'esteelauder', 'name':'에스티로더', 'price': '59,400'},
    {'id':'clinique', 'name':'크리니크', 'price': '26,400'},
    {'id':'formant', 'name':'포맨트', 'price': '12,400'},
    {'id':'hera', 'name':'헤라', 'price': '52,900'},
    {'id':'mac', 'name':'에스티로더', 'price': '59,400'},
    {'id':'john', 'name':'존바바토스', 'price': '87,000'},
    {'id':'roman', 'name':'롬앤', 'price': '28,000'},
    {'id':'dalba', 'name':'달바', 'price': '45,000'},
    {'id':'bobbybrown', 'name':'바비브라운', 'price': '87,000'},
    {'id':'lab', 'name':'랩시리즈', 'price': '70,000'},
]
function getId(){
    var id = localStorage.getItem('item');
    var name = document.getElementById('cos_detail_title');
    var price = document.getElementById('cos_detail_price');
    var img = document.getElementById('cos_detail_img');
    var cartBt = document.getElementsByClassName('cartBt');
    $('.cartBt').prop('id', id);
    name.innerText = cartItem[id]['name'];
    price.innerText = cartItem[id]['price'] + '원';
    img.src = '../static/img/' + cartItem[id]['id'] + '.jpeg';
}

function count(type){
    const resultElement = document.getElementById('num');
    let number = resultElement.innerText;
    if(type === 'plus') {
        number = parseInt(number) + 1;
    } else if(type === 'minus')  {
        if(number != 0){
            number = parseInt(number) - 1;
        }
    }
    resultElement.innerText = number;
}

function pushCart(){
    var id = localStorage.getItem('item');
    const resultElement = document.getElementById('num');
    var cartNumber = resultElement.innerHTML;
    var cartItem = [id, cartNumber];
    alert(cartItem);
}

window.onload = getId();
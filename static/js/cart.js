function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

function cartDelete(id){
    var csrftoken = getCookie('csrftoken');
    $.ajax({
        url: '/product/cart/delete/',
        method: 'POST',
        headers: {
          'X-CSRFToken': csrftoken
        },
        data:JSON.stringify({
            "id" : id,
        }),
        success: function(){
            alert('성공');
            window.location = "/product/cart/list/";
        }, error: function(){
            alert('주문 실패');
        }
    })
}

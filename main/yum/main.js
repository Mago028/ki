/*메가커피 - 스크린 크기와 동일한 버튼을 누르면 
1. 광고 포스터 이미지 사라짐
2. 포스터와 같은 크기의 투명한 버튼 사라짐
3. 오더 창 나타남
4. 4x3의 메뉴창 뜸
5. 페이지 표시 버튼 뜸
6. 결제 관련 페이지 뜸
7. 담은 항복 가려짐
*/
function start_btn() {
    document.getElementById("mega_start_img").style.display = 'none';
    document.getElementById("mega_start_btn").style.display = 'none';
    document.getElementById("mega_order").style.display = 'block';
    document.getElementById("mega_menu_table").style.display = 'block';
    document.getElementById("nextpage").style.display = 'flex';
    document.getElementById("pay").style.display = 'flex';
    hide_order_list();
    showOnlyKoreanMenu();
}

function showOnlyKoreanMenu() {
    var menuCategories = ["한식", "양식", "중식", "일식"];
    
    for (var i = 0; i < menuCategories.length; i++) {
        var category = menuCategories[i];
        if (category === "한식") {
            document.getElementById(category).style.display = 'block';
        } else {
            document.getElementById(category).style.display = 'none';
        }
    }
}

function hide_order_list() {
    var list = document.getElementsByClassName("cart");
    for (i = 0; i < list.length; i++) {
        list[i].style.display = 'none';
    }
}


var menu_list = ["한식"];
function open_menu_table(id) {
    all_menu_none();
    // document.getElementById(menu_list[0]).style.display = 'none';
    // menu_list.pop();
    // menu_list.push(id);
    document.getElementById(id).style.display = 'block';
}

function all_menu_none() {
    document.getElementById("한식").style.display = 'none';
    document.getElementById("양식").style.display = 'none';
    document.getElementById("중식").style.display = 'none';
    document.getElementById("일식").style.display = 'none';
}



function Item(name, price) {
    this.name = name;
    this.number = 0;
    this.price = parseInt(price);
}

var order_list = [];
function option(id, type, price) {
    var drink = document.getElementById(id);
    drink.style.borderStyle = 'solid';
    drink.style.borderColor = 'red';


    var order = new Item(id, price);
    order.number += 1;

    var cnt = 0;
    for (i = 0; i < order_list.length; i++) {
        if (order.name == order_list[i].name) {
            order_list[i].number += 1;
            cnt += 1;
        }
    }
    if (cnt == 0 || order_list.length == 0) {
        order_list.push(order);
    }
    
    open_order_list(order_list);

    if (type == "no_option") {
        /**/
    }
}


function delete_item(index) {
    order_list.splice(index, 1);
    open_order_list(order_list);
}
function increaseQuantity(index) {
    order_list[index].number++;
    open_order_list(order_list);
}

function decreaseQuantity(index) {
    if (order_list[index].number > 0) {
        order_list[index].number--;
        open_order_list(order_list);
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const orderItems = document.querySelectorAll(".cart");

    orderItems.forEach(function(item, index) {
        const minusButton = item.querySelector(`#minus_${index + 1}`);
        const plusButton = item.querySelector(`#plus_${index + 1}`);
        const deleteButton = item.querySelector(`#delete_${index + 1}`);

        minusButton.addEventListener("click", function() {
            decreaseQuantity(index);
        });

        plusButton.addEventListener("click", function() {
            increaseQuantity(index);
        });

        deleteButton.addEventListener("click", function() {
            delete_item(index);
        });
    });
});


/*order_list에 표시하기*/
var total_list= [0, 0];
function open_order_list(order_list) {
    var total_num = 0;
    var total_price = 0;

    for (i = 0; i < order_list.length; i++) {
        var order_id = "order_" + (i + 1);
        document.getElementById(order_id).style.display = 'flex';

        document.getElementById("range_" + (i + 1)).innerText = (i + 1) + ". " + (order_list[i].name);
        document.getElementById("amount_" + (i + 1)).innerText = (order_list[i].number) + "개";
        document.getElementById("item_price_" + (i + 1)).innerText = (order_list[i].price) * (order_list[i].number) + "원";
        
        total_num += order_list[i].number;
        total_price += (order_list[i].price)*(order_list[i].number);
    }
    document.getElementById("item_number").innerHTML= "<br>선택한 상품<br>" + (total_num) + "개";
    document.getElementById("total_price").innerHTML = (total_price)+"원<br>결제하기";
    total_list[0] = total_num;
    total_list[1] = total_price;

}


/*결제 창*/
function open_window_pay () {

    document.getElementById("window_pay").style.display = 'block';
    document.getElementById("screen_to_window_pay").style.display  = 'block';
    write_order_list_window_pay(order_list);
    
    document.getElementById("w_total_number").innerText = total_list[0];
    document.getElementById("w_total_price").innerText =total_list[1];
    
    document.getElementById("돌아가기").style.display = 'block';
   
    document.getElementById("결제하기").style.display = 'block';

    document.getElementById("결제하기").addEventListener("click", function() {
        open_w_카드결제(); // 카드결제 창 바로 열기
    });
    


}




function close_window_pay () {
    document.getElementById("window_pay").style.display = 'none';
    document.getElementById("screen_to_window_pay").style.display  = 'none';

}

function write_order_list_window_pay (order_list) {
    for (i=0; i<order_list.length; i++) {
        var window_id = "window_" + (i+1);
        document.getElementById(window_id).style.display = 'flex';
        document.getElementById("w_order_" + (i + 1)).innerText = (i + 1) + ". " + (order_list[i].name);
        document.getElementById("w_number_" + (i + 1)).innerText = (order_list[i].number) + "개 " + (order_list[i].price) * (order_list[i].number) + "원";


    }

}



function open_w_카드결제() {
    document.getElementById("w_카드결제").style.display = 'block';
    document.getElementById("window_pay").style.display = 'none';
    document.getElementById("w_카드결제_total_price").innerText = total_list[1]+"원";

    document.getElementById("insert_card_moving").style.display='block';
    
}

function close_w_카드결제() {
    document.getElementById("w_카드결제").style.display = 'none';
    document.getElementById("screen_to_window_pay").style.display = 'none';
    document.getElementById("insert_card_moving").style.display = 'none';

}

function 결제완료() {
    alert("감사합니다. 결제가 완료되었습니다. 교환권과 카드를 챙겨가세요.");
    location.href = "mega.html";
}

function herf_home() {
    location.href = "mega.html";
}
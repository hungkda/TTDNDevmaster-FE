var listProduct = [
    { img: "../images/xemtatca_sanpham/sp1.png", title: "BÀN UỐNG NƯỚC", des: "(Size vừa, nâu đậm)", price: "8.999.999" },
    { img: "../images/xemtatca_sanpham/sp2.png", title: "BÀN KHÔNG NƯỚC", des: "(Size vừa, xanh đậm)", price: "18.999.999" },
    { img: "../images/xemtatca_sanpham/sp3.png", title: "BÀN UỐNG TRÀ", des: "(Size to, nâu đậm)", price: "8.999.999" },
    { img: "../images/xemtatca_sanpham/sp4.png", title: "BÀN UỐNG NƯỚC", des: "(Size vừa, nâu đậm)", price: "8.999.999" },
    { img: "../images/xemtatca_sanpham/sp5.png", title: "BÀN UỐNG NƯỚC", des: "(Size vừa, nâu đậm)", price: "8.999.999" },
    { img: "../images/xemtatca_sanpham/sp6.png", title: "BÀN UỐNG TRÀ", des: "(Size vừa, vàng đậm)", price: "28.999.999" },
    { img: "../images/xemtatca_sanpham/sp7.png", title: "BÀN KHÔNG NƯỚC", des: "(Size bé, nâu đậm)", price: "8.999.999" },
    { img: "../images/xemtatca_sanpham/sp8.png", title: "BÀN UỐNG NƯỚC", des: "(Size vừa, nâu đậm)", price: "8.999.999" },
    { img: "../images/xemtatca_sanpham/sp9.png", title: "BÀN UỐNG TRÀ", des: "(Size vừa, nâu đậm)", price: "8.999.999" },
    { img: "../images/xemtatca_sanpham/sp10.png", title: "BÀN KHÔNG NƯỚC", des: "(Size vừa, nâu đậm)", price: "8.999.999" },
    { img: "../images/xemtatca_sanpham/sp11.png", title: "BÀN UỐNG NƯỚC", des: "(Size vừa, nâu đậm)", price: "8.999.999" },
    { img: "../images/xemtatca_sanpham/sp12.png", title: "BÀN UỐNG NƯỚC", des: "(Size vừa, nâu đậm)", price: "38.999.999" },
    { img: "../images/xemtatca_sanpham/sp1.png", title: "BÀN KHÔNG TRÀ", des: "(Size vừa, tím đậm)", price: "8.999.999 đ" },
    { img: "../images/xemtatca_sanpham/sp2.png", title: "BÀN UỐNG NƯỚC", des: "(Size vừa, nâu đậm)", price: "8.999.999 đ" },
    { img: "../images/xemtatca_sanpham/sp3.png", title: "BÀN UỐNG NƯỚC", des: "(Size lớn, nâu đậm)", price: "8.999.999 đ" },
    { img: "../images/xemtatca_sanpham/sp4.png", title: "BÀN UỐNG NƯỚC", des: "(Size vừa, đen đậm)", price: "48.999.999 đ" },
    { img: "../images/xemtatca_sanpham/sp5.png", title: "BÀN KHÔNG TRÀ", des: "(Size vừa, nâu đậm)", price: "8.999.999 đ" },
    { img: "../images/xemtatca_sanpham/sp6.png", title: "BÀN UỐNG NƯỚC", des: "(Size vừa, nâu đậm)", price: "8.999.999 đ" },
    { img: "../images/xemtatca_sanpham/sp7.png", title: "BÀN KHÔNG NƯỚC", des: "(Size vừa, hồng đậm)", price: "58.999.999 đ" },
    { img: "../images/xemtatca_sanpham/sp8.png", title: "BÀN UỐNG NƯỚC", des: "(Size vừa, nâu đậm)", price: "8.999.999 đ" },
]

var currentPage = 1;
var perPage = 8;
var pageNumber = Math.ceil(listProduct.length / perPage);
var listPageProduct = [];
function render(list) {
    var html = "";
    for (let i = 0; i < list.length; i++) {
        html += `<div class="col-md-3 col-sm-6 mt-4">
                            <div class="card">
                                <img src="${list[i].img}" class="card-img-top" alt="">
                                <div class="card-body text-center">
                                    <h5 class="card-title text-blue">${list[i].title}</h5>
                                    <div class="star ">
                                        <i class="fa-solid fa-star text-gold"></i>
                                        <i class="fa-solid fa-star text-gold"></i>
                                        <i class="fa-solid fa-star text-gold"></i>
                                        <i class="fa-solid fa-star text-gold"></i>
                                        <i class="fa-solid fa-star text-gold"></i>
                                    </div>
                                    <span class="text-secondary d-block"> ${list[i].des}
                                    </span>
                                    <span class="price"> ${list[i].price}
                                    </span>
                                </div>
                            </div>
                        </div>`
    }
    $('.list-products-item').html(html);
}

function rederPagination() {
    var li = "";

    for (let i = 2; i <= pageNumber; i++) {
        li += `<li class="page-item page-number" data-id="${i}"><a class="page-link" href="#main">${i}</a></li>`
    }

    var ul = `<li class="page-item">
                                    <a class="page-link page-down disabled" href="#main" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li class="page-item page-number active" data-id="1"><a class="page-link" href="#main">1</a></li>
                                ${li}
                                <li class="page-item">
                                    <a class="page-link page-up" href="#main" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>`

    $('.js-pagination').html(ul);
}
listPageProduct = listProduct.slice((currentPage - 1) * perPage, currentPage * perPage);
render(listPageProduct);
rederPagination();

$(".page-number").click(function () {
    $(".page-down").removeClass("disabled")
    $(".page-up").removeClass("disabled")
    currentPage = $(this).data('id');
    listPageProduct = listProduct.slice((currentPage - 1) * perPage, currentPage * perPage);
    $('.page-number').removeClass("active");
    $(this).addClass("active")
    if (currentPage == 1) {
        $(".page-down").addClass("disabled")
    } else if (currentPage == pageNumber) {
        $(".page-up").addClass("disabled")
    }
    render(listPageProduct);
})

$(".page-down").click(function () {
    if (currentPage == 2) {
        currentPage--;
        $(".page-down").addClass("disabled")
    } else {
        currentPage--;
        $(".page-up").removeClass("disabled")
    }
    listPageProduct = listProduct.slice((currentPage - 1) * perPage, currentPage * perPage);
    $('.page-number').removeClass("active");
    render(listPageProduct);
})

$(".page-up").click(function () {
    if (currentPage == (pageNumber - 1)) {
        currentPage++;
        $(".page-up").addClass("disabled")
    } else {
        currentPage++;
        $(".page-down").removeClass("disabled")
    }
    listPageProduct = listProduct.slice((currentPage - 1) * perPage, currentPage * perPage);
    $('.page-number').removeClass("active");
    render(listPageProduct);
})


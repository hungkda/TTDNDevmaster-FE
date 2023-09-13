$(document).ready(function () {
    var listProduct = [
        { img: "sp1.png", title: "BÀN UỐNG NƯỚC", rate: 5, des: "(Size vừa, nâu đậm)", price: "8.999.999" },
        { img: "sp2.png", title: "BÀN TI VI", rate: 5, des: "(Size vừa, xanh đậm)", price: "18.999.999" },
        { img: "sp3.png", title: "BÀN UỐNG TRÀ", rate: 2, des: "(Size to, nâu đậm)", price: "8.999.999" },
        { img: "sp4.png", title: "BÀN UỐNG NƯỚC", rate: 5, des: "(Size vừa, nâu đậm)", price: "8.999.999" },
        { img: "sp5.png", title: "BÀN UỐNG NƯỚC", rate: 4, des: "(Size vừa, nâu đậm)", price: "8.999.999" },
        { img: "sp6.png", title: "BÀN UỐNG TRÀ", rate: 5, des: "(Size vừa, vàng đậm)", price: "28.999.999" },
        { img: "sp7.png", title: "BÀN KHÔNG NƯỚC", rate: 5, des: "(Size bé, nâu đậm)", price: "8.999.999" },
        { img: "sp8.png", title: "BÀN UỐNG NƯỚC", rate: 3, des: "(Size vừa, nâu đậm)", price: "8.999.999" },
        { img: "sp9.png", title: "BÀN UỐNG TRÀ 2", rate: 3, des: "(Size vừa, nâu đậm)", price: "8.999.999" },
        { img: "sp10.png", title: "BÀN KHÔNG NƯỚC 2", rate: 3, des: "(Size vừa, nâu đậm)", price: "8.999.999" },
        { img: "sp11.png", title: "BÀN UỐNG NƯỚC 2", rate: 3, des: "(Size vừa, nâu đậm)", price: "8.999.999" },
        { img: "sp12.png", title: "A UỐNG NƯỚC 2", rate: 4, des: "(Size vừa, nâu đậm)", price: "38.999.999" },
        { img: "sp1.png", title: "BÀN KHÔNG TRÀ 2", rate: 3, des: "(Size vừa, tím đậm)", price: "8.999.999 đ" },
        { img: "sp2.png", title: "BÀN UỐNG NƯỚC 2", rate: 3, des: "(Size vừa, nâu đậm)", price: "8.999.999 đ" },
        { img: "sp3.png", title: "BÀN UỐNG NƯỚC 2", rate: 5, des: "(Size lớn, nâu đậm)", price: "8.999.999 đ" },
        { img: "sp4.png", title: "BÀN UỐNG NƯỚC 2", rate: 3, des: "(Size vừa, đen đậm)", price: "48.999.999 đ" },
        { img: "sp5.png", title: "BÀN KHÔNG TRÀ 3", rate: 3, des: "(Size vừa, nâu đậm)", price: "8.999.999 đ" },
        { img: "sp6.png", title: "BÀN UỐNG NƯỚC 3", rate: 3, des: "(Size vừa, nâu đậm)", price: "8.999.999 đ" },
        { img: "sp7.png", title: "BÀN KHÔNG NƯỚC 3", rate: 3, des: "(Size vừa, hồng đậm)", price: "58.999.999 đ" },
        { img: "sp8.png", title: "BÀN UỐNG NƯỚC 3", rate: 3, des: "(Size vừa, nâu đậm)", price: "8.999.999 đ" },
    ]


    //add item nhanh hơn và gọn hơn
    listProduct.push(addProduct("sp1.png", "BÀN UỐNG NƯỚC 3", 5, "(Size vừa, nâu đậm)", "8.999.999"))

    function addProduct(img, title, rate, des, price) {
        return {
            img: img,
            title: title,
            rate: rate,
            des: des,
            price: price
        }
    }



    var currentPage = 1;
    var perPage = 8;
    var pageNumber = Math.ceil(listProduct.length / perPage);
    var listProduct2 = listProduct;
    var listPageProduct = [];
    //render products
    function render(list) {
        var html = "";
        for (let i = 0; i < list.length; i++) {
            var htmlStar = "";
            for (let j = 0; j < list[i].rate; j++) {
                htmlStar += `<i class="fa-solid fa-star text-gold"></i>`
            }
            html += `<div class="col-md-3 col-sm-6 mt-4 parent-modal" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${i}">
                            <div class="card">
                                <img src="../images/xemtatca_sanpham/${list[i].img}" class="card-img-top" alt="">
                                <div class="card-body text-center">
                                    <h5 class="card-title text-blue">${list[i].title}</h5>
                                    <div class="star ">
                                    ${htmlStar}
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

        // hiển thông tin chi tiết sản phẩm
        $(".parent-modal").click(function () {
            var a = $(this).data("id");
            console.log(listPageProduct)
            renderModal(listPageProduct[a])
        })
    }

    //render page
    function rederPagination() {
        var li = "";

        for (let i = 2; i <= pageNumber; i++) {
            li += `<li class="page-item page-number" data-id="${i}"><a class="page-link" href="#main">${i}</a></li>`
        }

        var ul = `<li class="page-item">
                                    <a class="page-link page-down" href="#main" aria-label="Previous">
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
    listPageProduct = listProduct2.slice((currentPage - 1) * perPage, currentPage * perPage);
    render(listPageProduct);
    rederPagination();

    //sắp xếp theo rate
    $("#sortRate").click(function () {
        //copy array object;
        listProduct2 = listProduct.slice()
        listProduct2 = listProduct2.sort(function (a, b) {
            return b.rate - a.rate
        })
        listPageProduct = listProduct2.slice((currentPage - 1) * perPage, currentPage * perPage);
        render(listPageProduct)
    })

    //mặc định
    $("#sortDefault").click(function () {
        listProduct2 = listProduct.slice();
        listPageProduct = listProduct2.slice((currentPage - 1) * perPage, currentPage * perPage);
        render(listPageProduct)
    })

    //theo tên
    $("#sortName").click(function () {
        //copy array object;
        listProduct2 = listProduct.slice()

        listProduct2 = listProduct2.sort(function (a, b) {
            if (a.title <= b.title) { return -1; }
            else {
                return 1;
            }
        })
        listPageProduct = listProduct2.slice((currentPage - 1) * perPage, currentPage * perPage);
        render(listPageProduct)

    })

    //điểu khiển page
    if (currentPage == 1) {
        $(".page-down").addClass("disabled")
    }
    if (currentPage == pageNumber) {
        $(".page-up").addClass("disabled")
    }

    $(".page-number").click(function () {
        $(".page-down").removeClass("disabled")
        $(".page-up").removeClass("disabled")
        currentPage = $(this).data('id');
        listPageProduct = listProduct2.slice((currentPage - 1) * perPage, currentPage * perPage);
        $('.page-number').removeClass("active");
        $(this).addClass("active")
        if (currentPage == 1) {
            $(".page-down").addClass("disabled")
        }
        if (currentPage == pageNumber) {
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
        listPageProduct = listProduct2.slice((currentPage - 1) * perPage, currentPage * perPage);
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
        listPageProduct = listProduct2.slice((currentPage - 1) * perPage, currentPage * perPage);
        $('.page-number').removeClass("active");
        render(listPageProduct);
    })

    function renderModal(a) {
        var htmlStar = "";
        for (let j = 0; j < a.rate; j++) {
            htmlStar += `<i class="fa-solid fa-star text-gold"></i>`
        }
        var div = `<div class="product-title text-blue h2">${a.title}</div>
                        <div class="product-info d-flex">
                            <div class="product-slide" style="width: 60%;">
                                <div class="slider-for">
                                    <div class="img-box">
                                        <img class="w-100" style="height: 25rem" src="../images/xemtatca_sanpham/${a.img}" alt="">
                                    </div>
                                    <div class="img-box">
                                        <img class="w-100" src="../images/xemtatca_sanpham/ban-uong-nuoc-2.png" alt="">
                                    </div>
                                    <div class="img-box">
                                        <img class="w-100" src="../images/xemtatca_sanpham/ban-uong-nuoc-3.png" alt="">
                                    </div>
                                    <div class="img-box">
                                        <img class="w-100" src="../images/xemtatca_sanpham/ban-uong-nuoc-4.png" alt="">
                                    </div>
                                    <div class="img-box">
                                        <img class="w-100" src="../images/xemtatca_sanpham/ban-uong-nuoc-2.png" alt="">
                                    </div>
                                </div>
                                <div class="slider-nav mt-3">
                                    <div class="img-box me-2">
                                        <img class="w-100" style="height: 6rem" src="../images/xemtatca_sanpham/${a.img}" alt="">
                                    </div>
                                    <div class="img-box me-2">
                                        <img src="../images/xemtatca_sanpham/ban-uong-nuoc-2.png" alt="">
                                    </div>
                                    <div class="img-box me-2">
                                        <img src="../images/xemtatca_sanpham/ban-uong-nuoc-3.png" alt="">
                                    </div>
                                    <div class="img-box me-2">
                                        <img src="../images/xemtatca_sanpham/ban-uong-nuoc-4.png" alt="">
                                    </div>
                                    <div class="img-box me-2">
                                        <img src="../images/xemtatca_sanpham/ban-uong-nuoc-2.png" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="product-desc ms-4" style="width: 40%;">
                                <div class="rate h4">
                                    Đánh giá:
                                    ${htmlStar}
                                </div>
                                <div class="desc text-blue">${a.des}</div>
                                <div class="price h3 text-gold">${a.price}</div>
                            </div>
                        </div>
                        <div class="product-details-desc">
                            <ul class="list-details-desc d-flex ps-0 mb-0">
                                <li class="text-gold h3">Đặc trưng <span class="text-gold h3">|</span></li>
                                <li class="text-gold h3">Thông số <span class="text-gold h3">|</span></li>
                                <li class="text-gold h3">Bảo quản <span class="text-gold h3">|</span></li>
                                <li class="text-gold h3">Bảo hành <span class="text-gold h3">|</span></li>
                                <li class="text-gold h3">Cam kết </li>
                            </ul>
                            <p class="mt-2 text-blue">
                                - Bàn cà phê cứng đơn giản với kệ mở <br>
                                - Phong cách hình học tối giản<br>
                                - Kệ bên trong có kích thước hoàn hảo cho tạp chí, đế lót ly và các phụ kiện phòng khách
                                khác<br>
                                - Có thể được sử dụng như một bàn TV thấp - Kệ mỏng hoàn hảo để chứa một hộp hàng đầu
                                hoặc đầu phát blu-ray<br>
                                - Làm bằng gỗ Sheesham cao cấp<br>
                                - Không cần lắp ráp.<br>
                            </p>
                        </div>`

        $('.modal-main').html(div);

        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            arrows: false,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            focusOnSelect: true,
            arrows: false
        });
    }

})

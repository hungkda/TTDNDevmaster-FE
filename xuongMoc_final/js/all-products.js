$(document).ready(function () {
    var listProduct = [
        { img: ["sp1.png", "sp2.png", "sp3.png", "sp4.png", "sp5.png"], title: "BÀN UỐNG NƯỚC", rate: 5, des: "(Size vừa, nâu đậm)", price: 1000000 },
        { img: ["sp2.png", "sp2.png", "sp3.png", "sp4.png", "sp5.png"], title: "BÀN TI VI", rate: 5, des: "(Size vừa, xanh đậm)", price: 18999999 },
        { img: ["sp3.png", "sp2.png", "sp3.png", "sp4.png", "sp5.png"], title: "KỆ UỐNG TRÀ", rate: 2, des: "(Size to, nâu đậm)", price: 8999999 },
        { img: ["sp4.png", "sp2.png", "sp3.png", "sp4.png", "sp5.png"], title: "KỆ LIMITED", rate: 5, des: "(Size vừa, nâu đậm)", price: 100000000 },
        { img: ["sp5.png", "sp2.png", "sp3.png", "sp4.png", "sp5.png"], title: "BÀN UỐNG NƯỚC", rate: 4, des: "(Size vừa, nâu đậm)", price: 1999999 },
        { img: ["sp6.png", "sp2.png", "sp3.png", "sp4.png", "sp5.png"], title: "GIƯỜNG UỐNG TRÀ", rate: 5, des: "(Size vừa, vàng đậm)", price: 28999999 },
        { img: ["sp7.png", "sp2.png", "sp3.png", "sp4.png", "sp5.png"], title: "BÀN KHÔNG NƯỚC", rate: 1, des: "(Size bé, nâu đậm)", price: 8999699 },
        { img: ["sp8.png", "sp2.png", "sp3.png", "sp4.png", "sp5.png"], title: "BÀN UỐNG NƯỚC", rate: 3, des: "(Size vừa, nâu đậm)", price: 8989999 },
        { img: ["sp9.png", "sp2.png", "sp3.png", "sp4.png", "sp5.png"], title: "GHẾ UỐNG TRÀ 2", rate: 3, des: "(Size vừa, nâu đậm)", price: 12999999 },
        { img: ["sp10.png", "sp2.png", "sp3.png", "sp4.png", "sp5.png"], title: "BÀN KHÔNG NƯỚC 2", rate: 3, des: "(Size vừa, nâu đậm)", price: 8999999 },
        { img: ["sp11.png", "sp2.png", "sp3.png", "sp4.png", "sp5.png"], title: "BÀN UỐNG NƯỚC 2", rate: 3, des: "(Size vừa, nâu đậm)", price: 1999999 },
        { img: ["sp12.png", "sp2.png", "sp3.png", "sp4.png", "sp5.png"], title: "A UỐNG NƯỚC 2", rate: 4, des: "(Size vừa, nâu đậm)", price: 18999999 },
        { img: ["sp1.png", "sp2.png", "sp3.png", "sp4.png", "sp5.png"], title: "BÀN KHÔNG TRÀ 2", rate: 3, des: "(Size vừa, tím đậm)", price: 8999999 },
        { img: ["sp2.png", "sp2.png", "sp3.png", "sp4.png", "sp5.png"], title: "BÀN UỐNG NƯỚC 2", rate: 4, des: "(Size vừa, nâu đậm)", price: 14999999 },
        { img: ["sp3.png", "sp2.png", "sp3.png", "sp4.png", "sp5.png"], title: "BÀN UỐNG NƯỚC 2", rate: 5, des: "(Size lớn, nâu đậm)", price: 8939999 },
        { img: ["sp4.png", "sp2.png", "sp3.png", "sp4.png", "sp5.png"], title: "KỆ UỐNG NƯỚC 2", rate: 3, des: "(Size vừa, đen đậm)", price: 48999999 },
        { img: ["sp5.png", "sp2.png", "sp3.png", "sp4.png", "sp5.png"], title: "BÀN KHÔNG TRÀ 3", rate: 3, des: "(Size vừa, nâu đậm)", price: 8999999 },
        { img: ["sp6.png", "sp2.png", "sp3.png", "sp4.png", "sp5.png"], title: "BÀN UỐNG NƯỚC 3", rate: 3, des: "(Size vừa, nâu đậm)", price: 4999699 },
        { img: ["sp7.png", "sp2.png", "sp3.png", "sp4.png", "sp5.png"], title: "TỦ KHÔNG NƯỚC 3", rate: 1, des: "(Size vừa, hồng đậm)", price: 58999999 },
        { img: ["sp8.png", "sp2.png", "sp3.png", "sp4.png", "sp5.png"], title: "BÀN UỐNG NƯỚC 3", rate: 2, des: "(Size vừa, nâu đậm)", price: 8999999 },
    ]


    //add item nhanh hơn và gọn hơn
    listProduct.push(addProduct("sp1.png", "BÀN UỐNG NƯỚC 3", 5, "(Size vừa, nâu đậm)", 8999999))

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
    var listProduct2 = listProduct;
    var pageNumber = Math.ceil(listProduct2.length / perPage);
    var listPageProduct = [];
    var check = false;
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
                                <img src="../images/xemtatca_sanpham/${list[i].img[0]}" class="card-img-top" alt="">
                                <div class="card-body text-center">
                                    <h5 class="card-title text-blue">${list[i].title}</h5>
                                    <div class="star ">
                                    ${htmlStar}
                                    </div>
                                    <span class="text-secondary d-block"> ${list[i].des}
                                    </span>
                                    <span class="price">${list[i].price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
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
            // $('.slider-for').slick('refresh');
            // $('.slider-nav').slick('refresh');
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
        if (currentPage == 1) {
            $(".page-down").addClass("disabled")
        }
        if (currentPage == pageNumber) {
            $(".page-up").addClass("disabled")
        }

        //điểu khiển page
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
                $(".page-up").removeClass("disabled")
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
                $(".page-down").removeClass("disabled")
            } else {
                currentPage++;
                $(".page-down").removeClass("disabled")
            }
            listPageProduct = listProduct2.slice((currentPage - 1) * perPage, currentPage * perPage);
            $('.page-number').removeClass("active");
            render(listPageProduct);
        })
    }

    //render modal
    function renderModal(a) {
        var htmlStar = "";
        for (let j = 0; j < a.rate; j++) {
            htmlStar += `<i class="fa-solid fa-star text-gold"></i>`
        }
        var div = `<div class="product-title text-blue h2">${a.title}</div>
                        <div class="product-info d-flex mb-4">
                            <div class="product-slide" style="width: 60%;">
                                <div class="slider-for">
                                    <div class="img-box">
                                        <img class="w-100" style="height: 25rem" src="../images/xemtatca_sanpham/${a.img[0]}" alt="">
                                    </div>
                                    <div class="img-box">
                                        <img class="w-100" style="height: 25rem" src="../images/xemtatca_sanpham/${a.img[1]}" alt="">
                                    </div>
                                    <div class="img-box">
                                        <img class="w-100" style="height: 25rem" src="../images/xemtatca_sanpham/${a.img[2]}" alt="">
                                    </div>
                                    <div class="img-box">
                                        <img class="w-100" style="height: 25rem" src="../images/xemtatca_sanpham/${a.img[3]}" alt="">
                                    </div>
                                    <div class="img-box">
                                        <img class="w-100" style="height: 25rem" src="../images/xemtatca_sanpham/${a.img[4]}" alt="">
                                    </div>
                                </div>
                                <div class="slider-nav mt-3">
                                    <div class="img-box me-2">
                                        <img class="w-100" style="height: 6rem" src="../images/xemtatca_sanpham/${a.img[0]}" alt="">
                                    </div>
                                    <div class="img-box me-2">
                                        <img class="w-100" style="height: 6rem" src="../images/xemtatca_sanpham/${a.img[1]}" alt="">
                                    </div>
                                    <div class="img-box me-2">
                                        <img class="w-100" style="height: 6rem" src="../images/xemtatca_sanpham/${a.img[2]}" alt="">
                                    </div>
                                    <div class="img-box me-2">
                                        <img class="w-100" style="height: 6rem" src="../images/xemtatca_sanpham/${a.img[3]}" alt="">
                                    </div>
                                    <div class="img-box me-2">
                                        <img class="w-100" style="height: 6rem" src="../images/xemtatca_sanpham/${a.img[4]}" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="product-desc ms-4" style="width: 40%;">
                                <div class="rate h4">
                                    Đánh giá:</br>
                                    ${htmlStar}
                                </div>
                                <div class="desc h4 text-blue mt-4">${a.des}</div>
                                <div class="price h4 text-gold mt-4">COST: ${a.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</div>
                            </div>
                        </div>
                        <div class="product-details-desc">
                            <ul class="list-details-desc d-flex ps-0 mb-0 ">
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
            dots: false,
            focusOnSelect: true,
            arrows: false
        });

    }
    listPageProduct = listProduct2.slice((currentPage - 1) * perPage, currentPage * perPage);
    render(listPageProduct);
    rederPagination();

    //filter price
    // filter dưới 5tr
    $("#less5m").click(function () {
        currentPage = 1;
        listProduct2 = listProduct.slice()
        listProduct2 = listProduct2.filter(function (item) {
            return item.price < 5000000;
        })
        pageNumber = Math.ceil(listProduct2.length / perPage);
        listPageProduct = listProduct2.slice((currentPage - 1) * perPage, currentPage * perPage);
        render(listPageProduct);
        rederPagination();
    })

    $("#5mTo10m").click(function () {
        currentPage = 1;
        listProduct2 = listProduct.slice()
        listProduct2 = listProduct2.filter(function (item) {
            return item.price > 5000000 && item.price < 10000000;
        })
        pageNumber = Math.ceil(listProduct2.length / perPage);
        listPageProduct = listProduct2.slice((currentPage - 1) * perPage, currentPage * perPage);
        render(listPageProduct);
        rederPagination();
    })

    $("#10mTo15m").click(function () {
        currentPage = 1;
        listProduct2 = listProduct.slice()
        listProduct2 = listProduct2.filter(function (item) {
            return item.price > 10000000 && item.price < 15000000;
        })
        pageNumber = Math.ceil(listProduct2.length / perPage);
        listPageProduct = listProduct2.slice((currentPage - 1) * perPage, currentPage * perPage);
        render(listPageProduct);
        rederPagination();
    })

    $("#more15m").click(function () {
        currentPage = 1;
        listProduct2 = listProduct.slice()
        listProduct2 = listProduct2.filter(function (item) {
            return item.price > 15000000;

        })
        pageNumber = Math.ceil(listProduct2.length / perPage);
        listPageProduct = listProduct2.slice((currentPage - 1) * perPage, currentPage * perPage);
        render(listPageProduct);
        rederPagination();
    })

    //sắp xếp theo rate
    $("#sortRate").click(function () {
        currentPage = 1;
        //copy array object;
        listProduct2 = listProduct.slice()
        listProduct2 = listProduct2.sort(function (a, b) {
            return b.rate - a.rate
        })
        pageNumber = Math.ceil(listProduct2.length / perPage);
        listPageProduct = listProduct2.slice((currentPage - 1) * perPage, currentPage * perPage);
        render(listPageProduct)
        rederPagination();
    })

    //mặc định
    $("#sortDefault").click(function () {
        currentPage = 1;
        listProduct2 = listProduct.slice();
        pageNumber = Math.ceil(listProduct2.length / perPage);
        listPageProduct = listProduct2.slice((currentPage - 1) * perPage, currentPage * perPage);
        render(listPageProduct)
        rederPagination();
    })

    //theo tên
    $("#sortName").click(function () {
        currentPage = 1;
        //copy array object;
        listProduct2 = listProduct.slice()

        listProduct2 = listProduct2.sort(function (a, b) {
            if (a.title <= b.title) { return -1; }
            else {
                return 1;
            }
        })
        pageNumber = Math.ceil(listProduct2.length / perPage);
        listPageProduct = listProduct2.slice((currentPage - 1) * perPage, currentPage * perPage);
        render(listPageProduct)
        rederPagination();
    })

    //giá tăng dần
    $("#sortPriceASC").click(function () {
        currentPage = 1;
        //copy array object;
        listProduct2 = listProduct.slice()
        listProduct2 = listProduct2.sort(function (a, b) {
            return a.price - b.price
        })
        pageNumber = Math.ceil(listProduct2.length / perPage);
        listPageProduct = listProduct2.slice((currentPage - 1) * perPage, currentPage * perPage);
        render(listPageProduct)
        rederPagination();
    })

    //giá giảm dần
    $("#sortPriceDESC").click(function () {
        currentPage = 1;
        //copy array object;
        listProduct2 = listProduct.slice()
        listProduct2 = listProduct2.sort(function (a, b) {
            return b.price - a.price
        })
        pageNumber = Math.ceil(listProduct2.length / perPage);
        listPageProduct = listProduct2.slice((currentPage - 1) * perPage, currentPage * perPage);
        render(listPageProduct);
        rederPagination();
    })

})

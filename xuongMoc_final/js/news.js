var data = [
    { img: 'tintuc-1.png', title: 'NGẤT NGÂY VỚI TOP 10 MẪU NỘI THẤT CHUNG CƯ 1 PHÒNG NGỦ ĐẸP', desc: 'Những căn hộ chung cư mini, có diện tích nhỏ ngày càng trở nên nên ưa chuộng hơn trong cuộc sống hiện đại với những ai có khoản kinh phí "hạn hẹp".' },
    { img: 'tintuc-2.png', title: '25+ MẪU GIƯỜNG NGỦ HỘC KÉO THÔNG MINH CHO CĂN PHÒNG BẠN', desc: 'Sự thật là chúng ta dành hết 1/3 cuộc đời chỉ để ngủ, vì thế việc tạo được một giấc ngủ ngon là một điều đặc biệt quan trọng.' },
    { img: 'tintuc-3.png', title: 'TUYỆT CHIÊU THIẾT KẾ CHUNG CƯ MINI 2 PHÒNG NGỦ SIÊU ĐẸP', desc: 'Độ tuổi khởi nghiệp và tự lập ngày càng trẻ hóa trong xã hội hiện đại thời nay, thế nên việc “thiết kế căn hộ chung cư mini 2 phòng ngủ”' },
    { img: 'tintuc-1.png', title: 'NGẤT NGÂY VỚI TOP 10 MẪU NỘI THẤT CHUNG CƯ 1 PHÒNG NGỦ ĐẸP', desc: 'Những căn hộ chung cư mini, có diện tích nhỏ ngày càng trở nên nên ưa chuộng hơn trong cuộc sống hiện đại với những ai có khoản kinh phí "hạn hẹp".' },
    { img: 'tintuc-2.png', title: '25+ MẪU GIƯỜNG NGỦ HỘC KÉO THÔNG MINH CHO CĂN PHÒNG BẠN', desc: 'Sự thật là chúng ta dành hết 1/3 cuộc đời chỉ để ngủ, vì thế việc tạo được một giấc ngủ ngon là một điều đặc biệt quan trọng.' },
    { img: 'tintuc-3.png', title: 'TUYỆT CHIÊU THIẾT KẾ CHUNG CƯ MINI 2 PHÒNG NGỦ SIÊU ĐẸP', desc: 'Độ tuổi khởi nghiệp và tự lập ngày càng trẻ hóa trong xã hội hiện đại thời nay, thế nên việc “thiết kế căn hộ chung cư mini 2 phòng ngủ”' },
    { img: 'tintuc-1.png', title: 'NGẤT NGÂY VỚI TOP 10 MẪU NỘI THẤT CHUNG CƯ 1 PHÒNG NGỦ ĐẸP', desc: 'Những căn hộ chung cư mini, có diện tích nhỏ ngày càng trở nên nên ưa chuộng hơn trong cuộc sống hiện đại với những ai có khoản kinh phí "hạn hẹp".' },
    { img: 'tintuc-2.png', title: '25+ MẪU GIƯỜNG NGỦ HỘC KÉO THÔNG MINH CHO CĂN PHÒNG BẠN', desc: 'Sự thật là chúng ta dành hết 1/3 cuộc đời chỉ để ngủ, vì thế việc tạo được một giấc ngủ ngon là một điều đặc biệt quan trọng.' },
    { img: 'tintuc-3.png', title: 'TUYỆT CHIÊU THIẾT KẾ CHUNG CƯ MINI 2 PHÒNG NGỦ SIÊU ĐẸP', desc: 'Độ tuổi khởi nghiệp và tự lập ngày càng trẻ hóa trong xã hội hiện đại thời nay, thế nên việc “thiết kế căn hộ chung cư mini 2 phòng ngủ”' },
    { img: 'tintuc-1.png', title: 'NGẤT NGÂY VỚI TOP 10 MẪU NỘI THẤT CHUNG CƯ 1 PHÒNG NGỦ ĐẸP', desc: 'Những căn hộ chung cư mini, có diện tích nhỏ ngày càng trở nên nên ưa chuộng hơn trong cuộc sống hiện đại với những ai có khoản kinh phí "hạn hẹp".' },

];

const render = (arr) => {
    var table = "";
    for (let i = 0; i < arr.length; i++) {
        table += `<div class="product col-lg-4 col-md-6 col-xs-12 mt-5">
        <a href="../view/news-details.html">
            <img class="w-100" src="../images/tin-tuc/${arr[i].img}" alt="">
            <div class="product-content mt-3">
                <h4 class="font-ultra text-gold">${arr[i].title}
                </h4>
                <p class="text-justify pt-2">${arr[i].desc}</p>
            </div>
        </a>
    </div>`
    }
    $('.render-news').html(table)
}

var curentPage = 1;
var perPage = 6;
var totalPage = Math.ceil(data.length / perPage);
var perData = [];

const renderPage = () => {
    var li = "";
    for (let i = 1; i < totalPage; i++) {
        li += `
    <li class="page-item page-number" data-id="${i + 1}">
        <a class="page-link" href="#news">${i + 1}</a>
    </li>`
    }

    var ul = `<ul class="pagination">
    <li class="page-item">
        <a class="page-link page-previous" href="#news">Trước</a>
    </li>
    <li class="page-item page-number active" data-id="1">
        <a class="page-link" href="##news">1</a>
    </li>
    ${li}
    <li class="page-item">
        <a class="page-link page-next" href="#newss">Sau</a>
    </li>
</ul>`

    $('.renderPage').html(ul)

    $('.page-previous').addClass('disabled')
    if (totalPage == 1) {
        $('.page-next').addClass('disabled')
    }

    $('.page-number').click(function () {
        $('.page-previous').removeClass('disabled')
        $('.page-next').removeClass('disabled')

        curentPage = $(this).data('id')
        perData = data.slice((curentPage - 1) * perPage, curentPage * perPage)

        $('.page-number').removeClass('active')
        $(this).addClass('active')

        if (curentPage == 1) {
            $('.page-previous').addClass('disabled')
        }
        if (curentPage == totalPage) {
            $('.page-next').addClass('disabled')
        }
        render(perData)
    })

    $('.page-previous').click(() => {
        if (curentPage == 2) {
            curentPage--;
            $('.page-previous').addClass('disabled')
            $('.page-next').removeClass('disabled')
        }
        else {
            curentPage--;
            $('.page-next').removeClass('disabled')
        }

        perData = data.slice((curentPage - 1) * perPage, curentPage * perPage)
        $('.page-number').removeClass('active')
        $(this).addClass('active')
        render(perData)
    })

    $('.page-next').click(() => {
        if (curentPage == totalPage - 1) {
            curentPage++;
            $('.page-next').addClass('disabled')
            $('.page-previous').removeClass('disabled')
        }
        else {
            curentPage++;
            $('.page-previous').removeClass('disabled')
        }

        perData = data.slice((curentPage - 1) * perPage, curentPage * perPage)
        $('.page-number').removeClass('active')
        $(this).addClass('active')
        render(perData)
    })
}
perData = data.slice((curentPage - 1) * perPage, curentPage * perPage)
render(perData)
renderPage()


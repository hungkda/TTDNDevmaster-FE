var stt = 3;
var studentInfo = [
    { id: "1", studentId: "SD01", fullName: "Nguyễn Thành Hưng", className: 0, faculty: 0, adrress: "Hà Nội", phoneNumber: "0989898222", email: "thanh.hung.st302@gmail.com", dateOfBirth: "01-01-2000", gender: 0 },
    { id: "2", studentId: "SD02", fullName: "Trần Hữu Hoàng", className: 2, faculty: 1, adrress: "Hà Nội", phoneNumber: "0123456789", email: "hoang@gmail.com", dateOfBirth: "14-07-2003", gender: 0 },
]

const handleClickAdd = () => {
    // khai báo 
    var objectInfo = {
        studentId: "",
        fullName: "",
        dateOfBirth: "",
        gender: "",
        phoneNumber: "",
        email: "",
        address: "",
        faculty: "",
        className: ""
    }

    // gán giá trị
    objectInfo.fullName = document.getElementById("Name").value;
    objectInfo.dateOfBirth = document.getElementById("DateBirth").value;
    objectInfo.gender = document.getElementById("Gender").value;
    objectInfo.phoneNumber = document.getElementById("PhoneNumber").value;
    objectInfo.email = document.getElementById("Email").value;
    objectInfo.address = document.getElementById("Address").value;
    objectInfo.faculty = document.getElementById("Faculty").value;
    objectInfo.className = document.getElementById("Class").value;

    studentInfo.push(objectInfo);

    // thêm html
    var htmlTbody = `<tr class="align-middle" id="${stt}">
        <th scope="row">${stt}</th>
        <td>SD02</td>
        <td>${objectInfo.fullName}</td>
        <td>${objectInfo.className}</td>
        <td>${objectInfo.faculty}</td>
        <td>${objectInfo.address}</td>
        <td>${objectInfo.phoneNumber}</td>
        <td>${objectInfo.email}</td>
        <td class="d-flex justify-content-evenly">
            <button type="button" class="btn btn-outline-primary js-btn-details">
                <i class="bi bi-eye"></i>
                Details
            </button>
            <button type="button" clabtn-outline-info js-btn-update"
                style="margin:0 0.5rem 0 0.5rem;">
                <i class="bi bi-arrow-repeat"></i>
                Update
            </button>
            <button type="button" clabtn-outline-danger js-btn-delete"
                data-bs-toggle=data-bs-target="#exampleModal" onclick="">
                <i class="bi bi-trash3"></i>
                Delete
            </button>
        </td>
    </tr>`

    document.querySelector("tbody").innerHTML += htmlTbody;

    handleClickReset();
    document.querySelector(".student-details").classList.remove("student-details-show");
    // console.log(fullName, birthday, gender, phone, email, address, faculty, classId);

    stt++;
}

const handleClickReset = () => {
    document.getElementById("Name").value = "";
    document.getElementById("DateBirth").value = "";
    document.getElementById("Gender").value = "-1";
    document.getElementById("PhoneNumber").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Address").value = "";
    document.getElementById("Faculty").value = "";
    document.getElementById("Class").value = "";
}
// js raw
// document.querySelector(".add-new").addEventListener("click", () => {
//     // document.querySelector(".student-details").style.display = "block";
//     document.querySelector(".student-details").classList.add("student-details-show")
// })

// document.querySelector(".js-btn-cancel").addEventListener('click', () => {
//     // document.querySelector(".student-details").style.display = "block";
//     document.querySelector(".student-details").classList.remove("student-details-show")
// })

// var details = document.querySelectorAll(".js-btn-details");

// for (let i = 0; i < details.length; i++) {
//     details[i].addEventListener('click', () => {
//         document.querySelector(".student-details").classList.add("student-details-show");
//     })
// }

// // jquery


$(document).ready(function () {
    $(".add-new").click(function () {
        $(".student-details").addClass("student-details-show");
        $(".js-btn-reset").show();
        $(".js-btn-add").show();
    }
    )

    $(".js-btn-cancel").click(function () {
        $(".student-details").removeClass("student-details-show")
    })

    $(".js-btn-details").click(function () {
        $(".student-details").addClass("student-details-show");
        $(".js-btn-reset").hide();
        $(".js-btn-add").hide();
        var a = $(this).parents("tr").id;
        console.log(a)
    })
})

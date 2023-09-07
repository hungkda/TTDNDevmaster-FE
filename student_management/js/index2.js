/// nháp
var studentInfo = [
    { studentId: "SD01", fullName: "Nguyễn Thành Hưng", className: 0, faculty: 0, adrress: "Hà Nội", phoneNumber: "0989898222", email: "thanh.hung.st302@gmail.com", dateOfBirth: "01/01/2000", gender: 0 },
    { studentId: "SD02", fullName: "Trần Hữu Hoàng", className: 2, faculty: 1, adrress: "Hà Nội", phoneNumber: "0123456789", email: "hoang@gmail.com", dateOfBirth: "14-07-2003", gender: 0 },
]
var stt = studentInfo.length + 1;
// var arrnum = [1, 2]
const handleClickAdd = () => {
    // var stt = studentInfo.length + 1;
    // for (let j = 0; j < arrnum.length; j++) {
    //     for (let i = 1; i < Math.max(arrnum); i++) {
    //         if(i == arr[j]) {

    //         }
    //     }
    // }




    // khai báo 


    var objectInfo = {
        studentId: "SD0",
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
    objectInfo.studentId += stt;
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
        <td>${objectInfo.studentId}</td>
        <td>${objectInfo.fullName}</td>
        <td>${objectInfo.className == 0 ? "IT1" : (objectInfo.className == 1 ? "IT2" : (objectInfo.className == 2 ? "IT3" : ""))}</td>
        <td>${objectInfo.faculty == 0 ? "Công nghệ thông tin" : (objectInfo.faculty == 1 ? "Cơ khí" : (objectInfo.faculty == 2 ? "Ô tô" : (objectInfo.faculty == 3 ? "Điện tử" : "")))}</td>
        <td>${objectInfo.address}</td>
        <td>${objectInfo.phoneNumber}</td>
        <td>${objectInfo.email}</td>
        <td class="d-flex justify-content-evenly">
            <button type="button" class="btn btn-outline-primary js-btn-details">
                <i class="bi bi-eye"></i>
                Details
            </button>
            <button type="button" class="btn btn-outline-info js-btn-update"
                style="margin:0 0.5rem 0 0.5rem;">
                <i class="bi bi-arrow-repeat"></i>
                Update
            </button>
            <button type="button" class="btn btn-outline-danger js-btn-delete"
                data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="">
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
    document.getElementById("Faculty").value = "-1";
    document.getElementById("Class").value = "-1";
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

$(".add-new").click(function () {
    $(".student-details").addClass("student-details-show");
    $(".js-btn-reset").css('display', 'block');
    $(".js-btn-add").css('display', 'block');
}
)

$(".js-btn-cancel").click(function () {
    $(".student-details").removeClass("student-details-show")
})

$(".js-btn-details").click(function () {
    $(".student-details").addClass("student-details-show");
    $(".js-btn-reset").css('display', 'none');
    $(".js-btn-add").css('display', 'none');
    var a = parseInt($(this).parents('tr').attr('id')) - 1;
    document.getElementById("Name").value = studentInfo[a].fullName;
    document.getElementById("DateBirth").value = studentInfo[a].dateOfBirth;
    document.getElementById("Gender").value = studentInfo[a].gender;
    document.getElementById("PhoneNumber").value = studentInfo[a].phoneNumber;
    document.getElementById("Email").value = studentInfo[a].email;
    document.getElementById("Address").value = studentInfo[a].adrress;
    document.getElementById("Faculty").value = studentInfo[a].faculty;
    document.getElementById("Class").value = studentInfo[a].className;
})
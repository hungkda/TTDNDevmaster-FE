var stt = 3;

const handleClickAdd = () => {
    // khai báo 
    var objectInfo = {
        fullName: "",
        birthday: "",
        genderOption: "",
        phone: "",
        email: "",
        address: "",
        facultyOption: "",
        classIdOption: ""
    }

    // gán giá trị
    objectInfo.fullName = document.getElementById("Name").value;
    objectInfo.birthday = document.getElementById("DateBirth").value;
    objectInfo.genderOption = document.getElementById("Gender").value;
    objectInfo.phone = document.getElementById("PhoneNumber").value;
    objectInfo.email = document.getElementById("Email").value;
    objectInfo.address = document.getElementById("Address").value;
    objectInfo.facultyOption = document.getElementById("Faculty").value;
    objectInfo.classIdOption = document.getElementById("Class").value;

    var gender = "";
    var classId = "";
    var faculty = "";
    if (objectInfo.facultyOption == "0") {
        faculty = "Công nghệ thông tin";
    } else if (objectInfo.facultyOption == "1") {
        faculty = "Cơ khí";
    } else if (objectInfo.facultyOption == "2") {
        faculty = "Ô tô";
    } else if (objectInfo.facultyOption == "3") {
        faculty = "Điện tử";
    } else {
        faculty = "";
    }

    if (objectInfo.classIdOption == "0") {
        classId = "IT1";
    } else if (objectInfo.classIdOption == "1") {
        classId = "IT2";
    } else if (objectInfo.classIdOption == "2") {
        classId = "IT3";
    } else {
        classId = "";
    }

    // thêm html
    var htmlTbody = `<tr class="align-middle">
        <th scope="row">${stt}</th>
        <td>SD02</td>
        <td>${objectInfo.fullName}</td>
        <td>${classId}</td>
        <td>${faculty}</td>
        <td>${objectInfo.address}</td>
        <td>${objectInfo.phone}</td>
        <td>${objectInfo.email}</td>
        <td class="d-flex justify-content-evenly">
            <button type="button" class="btn btn-outline-primary">
                <i class="bi bi-eye"></i>
                Details
            </button>
            <button type="button" class="btn btn-outline-info"
                style="margin:0 0.5rem 0 0.5rem;">
                <i class="bi bi-arrow-repeat"></i>
                Update
            </button>
            <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal"
                data-bs-target="#exampleModal">
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
        console.log($(this).parents('tr').addClass('red'));
    })
})


var studentInfo = [
    { studentId: "SD01", fullName: "Nguyễn Thành Hưng", className: 0, faculty: 0, address: "Hà Nội", phoneNumber: "0989898222", email: "thanh.hung.st302@gmail.com", dateOfBirth: "2000-01-01", gender: 0 },
    { studentId: "SD02", fullName: "Nguyễn Mạnh Hùng", className: 1, faculty: 0, address: "Hà Nội", phoneNumber: "0123456789", email: "332@gmail.com", dateOfBirth: "2003-07-08", gender: 1 },
]

// hiển thị
const render = (studentInfo) => {
    tbody = ""
    for (let i = 0; i < studentInfo.length; i++) {
        tbody += `<tr class="align-middle">
        <th scope="row">${i + 1}</th>
        <td>${studentInfo[i].studentId}</td>
        <td>${studentInfo[i].fullName}</td>
        <td>${studentInfo[i].className == 0 ? "IT1" : (studentInfo[i].className == 1 ? "IT2" : (studentInfo[i].className == 2 ? "IT3" : ""))}</td>
        <td>${studentInfo[i].faculty == 0 ? "Công nghệ thông tin" : (studentInfo[i].faculty == 1 ? "Cơ khí" : (studentInfo[i].faculty == 2 ? "Ô tô" : (studentInfo[i].faculty == 3 ? "Điện tử" : "")))}</td>
        <td>${studentInfo[i].address}</td>
        <td>${studentInfo[i].phoneNumber}</td>
        <td>${studentInfo[i].email}</td>
        <td class="d-flex justify-content-evenly">
            <button type="button" class="btn btn-outline-primary"
                onclick="handleClickDetails(${i})">
                <i class="bi bi-eye"></i>
                Details
            </button>
            <button type="button" class="btn btn-outline-info"
                onclick="handleClickUpdate(${i})" style="margin:0 0.5rem 0 0.5rem;">
                <i class="bi bi-arrow-repeat"></i>
                Update
            </button>
            <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal"
                data-bs-target="#exampleModal" onclick="handleClickDelete(${i})">
                <i class="bi bi-trash3"></i>
                Delete
            </button>
        </td>
    </tr>`
    }

    document.querySelector('tbody').innerHTML = tbody;

}

render(studentInfo);


// thêm mới sinh viên
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
    objectInfo.studentId = document.getElementById("Id").value;
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
    Clear();
    document.querySelector(".student-details").classList.remove("student-details-show");
    // console.log(fullName, birthday, gender, phone, email, address, faculty, classId);
    render(studentInfo)
}

const Clear = () => {
    document.getElementById("Id").value = "";
    document.getElementById("Name").value = "";
    document.getElementById("DateBirth").value = "";
    document.getElementById("Gender").value = "-1";
    document.getElementById("PhoneNumber").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Address").value = "";
    document.getElementById("Faculty").value = "-1";
    document.getElementById("Class").value = "-1";
}

// nút add
$(".add-new").click(() => {
    $(".student-details").addClass("student-details-show");
    $(".js-btn-reset").css('display', 'block');
    $(".js-btn-add").css('display', 'block');
    $(".js-btn-update").css('display', 'none');
}
)

// nút cancel
$(".js-btn-cancel").click(() => {
    $(".student-details").removeClass("student-details-show");
    // not readonly
    document.querySelector('#Id').readOnly = false
    document.querySelector('#Name').readOnly = false
    document.querySelector('#Class').disabled = false
    document.querySelector('#Faculty').disabled = false
    document.querySelector('#Address').readOnly = false
    document.querySelector('#PhoneNumber').readOnly = false
    document.querySelector('#Email').readOnly = false
    document.querySelector('#DateBirth').readOnly = false
    document.querySelector('#Gender').disabled = false
    Clear();
})

// nút details
handleClickDetails = (i) => {
    $(".student-details").addClass("student-details-show");
    $(".js-btn-reset").css('display', 'none');
    $(".js-btn-add").css('display', 'none');
    $(".js-btn-update").css('display', 'none');
    document.getElementById("Id").value = studentInfo[i].studentId;
    document.getElementById("Name").value = studentInfo[i].fullName;
    document.getElementById("DateBirth").value = studentInfo[i].dateOfBirth;
    document.getElementById("Gender").value = studentInfo[i].gender;
    document.getElementById("PhoneNumber").value = studentInfo[i].phoneNumber;
    document.getElementById("Email").value = studentInfo[i].email;
    document.getElementById("Address").value = studentInfo[i].address;
    document.getElementById("Faculty").value = studentInfo[i].faculty;
    document.getElementById("Class").value = studentInfo[i].className;

    //readonly
    document.querySelector('#Id').readOnly = true
    document.querySelector('#Name').readOnly = true
    document.querySelector('#Class').disabled = true
    document.querySelector('#Faculty').disabled = true
    document.querySelector('#Address').readOnly = true
    document.querySelector('#PhoneNumber').readOnly = true
    document.querySelector('#Email').readOnly = true
    document.querySelector('#DateBirth').readOnly = true
    document.querySelector('#Gender').disabled = true
}

//nút update
var checkUpdate;
handleClickUpdate = (i) => {
    $(".student-details").addClass("student-details-show");
    $(".js-btn-reset").css('display', 'none');
    $(".js-btn-add").css('display', 'none');
    $(".js-btn-update").css('display', 'block');
    document.getElementById("Id").value = studentInfo[i].studentId;
    document.getElementById("Name").value = studentInfo[i].fullName;
    document.getElementById("DateBirth").value = studentInfo[i].dateOfBirth;
    document.getElementById("Gender").value = studentInfo[i].gender;
    document.getElementById("PhoneNumber").value = studentInfo[i].phoneNumber;
    document.getElementById("Email").value = studentInfo[i].email;
    document.getElementById("Address").value = studentInfo[i].address;
    document.getElementById("Faculty").value = studentInfo[i].faculty;
    document.getElementById("Class").value = studentInfo[i].className;
    checkUpdate = i;
}

$(".js-btn-update").click(() => {
    studentInfo[checkUpdate].studentId = document.getElementById("Id").value;
    studentInfo[checkUpdate].fullName = document.getElementById("Name").value;
    studentInfo[checkUpdate].dateOfBirth = document.getElementById("DateBirth").value;
    studentInfo[checkUpdate].gender = document.getElementById("Gender").value;
    studentInfo[checkUpdate].phoneNumber = document.getElementById("PhoneNumber").value;
    studentInfo[checkUpdate].email = document.getElementById("Email").value;
    studentInfo[checkUpdate].address = document.getElementById("Address").value;
    studentInfo[checkUpdate].faculty = document.getElementById("Faculty").value;
    studentInfo[checkUpdate].className = document.getElementById("Class").value;
    $(".student-details").removeClass("student-details-show")
    render(studentInfo)
})
// nút delete
handleClickDelete = (id) => {
    check = confirm("Bạn có chắc chắn muốn xóa ko");
    if (check) {
        studentInfo.splice(id, 1);
        render(studentInfo);
    }
}

// search
$(".btn-search").click(function () {
    var studentInfoSearch = [];
    var stringSearch = document.querySelector(".search input").value
    if (document.querySelector(".search select").value == "0") {
        for (let i = 0; i < studentInfo.length; i++) {
            if (studentInfo[i].fullName.toLowerCase().includes(stringSearch.toLowerCase())) {
                studentInfoSearch.push(studentInfo[i])
            }
        }
    } else if (document.querySelector(".search select").value == "1") {
        for (let i = 0; i < studentInfo.length; i++) {
            if (studentInfo[i].studentId.toLowerCase().includes(stringSearch.toLowerCase())) {
                studentInfoSearch.push(studentInfo[i])
            }
        }
    } else {
        for (let i = 0; i < studentInfo.length; i++) {
            var stringClass = studentInfo[i].className == 0 ? "IT1" : (studentInfo[i].className == 1 ? "IT2" : (studentInfo[i].className == 2 ? "IT3" : ""))
            if (stringClass.toLowerCase().includes(stringSearch.toLowerCase())) {
                studentInfoSearch.push(studentInfo[i])
            }
        }
    }
    render(studentInfoSearch)
})
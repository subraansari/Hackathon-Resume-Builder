var Name = localStorage.getItem("myname");
window.addEventListener('load', function () {
    var designation = localStorage.getItem("designation");
    var phone = localStorage.getItem("phone");
    var email = localStorage.getItem("email");
    var address = localStorage.getItem("address");
    var linkedin = localStorage.getItem("linkedin");
    var university = localStorage.getItem("university");
    var degree = localStorage.getItem("degree");
    var startyear = localStorage.getItem("startyear");
    var college = localStorage.getItem("college");
    var degree1 = localStorage.getItem("degree1");
    var startyear1 = localStorage.getItem("startyear1");
    var company = localStorage.getItem("company");
    var startyear2 = localStorage.getItem("startyear2");
    var description = localStorage.getItem("description");
    var profile = localStorage.getItem("profile");
    var skill1 = localStorage.getItem("skill1");
    var skill2 = localStorage.getItem("skill2");
    var skill3 = localStorage.getItem("skill3");
    var skill4 = localStorage.getItem("skill4");
    var institute = localStorage.getItem("institute");
    var course = localStorage.getItem("course");
    var institute2 = localStorage.getItem("institute2");
    var course2 = localStorage.getItem("course2");
    var language1 = localStorage.getItem("lang1");
    var language2 = localStorage.getItem("lang2");
    var picture = localStorage.getItem("profile-picture");
    var resName = document.getElementById("res-name");
    resName.textContent = Name;
    resName.style.textTransform = "uppercase";
    var resDesignation = document.getElementById("res-designation");
    resDesignation.textContent = designation;
    resDesignation.style.textTransform = "uppercase";
    var resphone = document.getElementById("res-phone");
    resphone.textContent = phone;
    var resemail = document.getElementById("res-email");
    resemail.textContent = email;
    var resAddress = document.getElementById("res-address");
    resAddress.textContent = address;
    var reslinkedin = document.getElementById("res-linkedin");
    reslinkedin.textContent = linkedin;
    var resprofile = document.getElementById("res-profile");
    resprofile.textContent = profile;
    var resCollege = document.getElementById("res-college");
    resCollege.textContent = university;
    resCollege.style.textTransform = "uppercase";
    var resdegree = document.getElementById("res-degree");
    resdegree.textContent = degree;
    resdegree.style.textTransform = "uppercase";
    var resstart = document.getElementById("res-start");
    resstart.textContent = startyear;
    var resCollege2 = document.getElementById("res-college2");
    resCollege2.textContent = college;
    resCollege2.style.textTransform = "uppercase";
    var resdegree2 = document.getElementById("res-degree2");
    resdegree2.textContent = degree1;
    resdegree2.style.textTransform = "uppercase";
    var resstart2 = document.getElementById("res-start2");
    resstart2.textContent = startyear1;
    var rescompany = document.getElementById("res-experience");
    rescompany.textContent = company;
    rescompany.style.textTransform = "uppercase";
    var resExpTime = document.getElementById("res-exp-time");
    resExpTime.textContent = startyear2;
    var jobDetail = document.getElementById("job-detail");
    jobDetail.textContent = description;
    var resSkill1 = document.getElementById("res-skill1");
    resSkill1.textContent = skill1;
    resSkill1.style.textTransform = "uppercase";
    var resSkill2 = document.getElementById("res-skill2");
    resSkill2.textContent = skill2;
    resSkill2.style.textTransform = "uppercase";
    var resSkill3 = document.getElementById("res-skill3");
    resSkill3.textContent = skill3;
    resSkill3.style.textTransform = "uppercase";
    var resSkill4 = document.getElementById("res-skill4");
    resSkill4.textContent = skill4;
    resSkill4.style.textTransform = "uppercase";
    var resInstitute1 = document.getElementById("res-institute1");
    resInstitute1.textContent = institute;
    resInstitute1.style.textTransform = "uppercase";
    var rescourse1 = document.getElementById("res-course1");
    rescourse1.textContent = course;
    var resInstitute2 = document.getElementById("res-institute2");
    resInstitute2.textContent = institute2;
    resInstitute2.style.textTransform = "uppercase";
    var rescourse2 = document.getElementById("res-course2");
    rescourse2.textContent = course2;
    var langu1 = document.getElementById("language1");
    langu1.textContent = language1;
    var langu2 = document.getElementById("language2");
    langu2.textContent = language2;
    var resImage = document.getElementById("res-img");
    resImage.src = picture;
});
var printButton = document.getElementById("print-btn");
printButton.addEventListener('click', function () {
    window.print();
});
var editButton = document.getElementById("edit-btn");
editButton === null || editButton === void 0 ? void 0 : editButton.addEventListener('click', function () {
    window.history.back();
});
var anchorTag = document.getElementById("anchor-tag");
var shareButton = document.getElementById("share-btn");
var userName;
if (Name) {
    userName = Name.toLowerCase().replace(/\s + /g, "-");
}
else {
    userName = "user";
}
var baseurl = "http://127.0.0.1:5502/resume.html";
var uniqueurl = "".concat(baseurl, "?/").concat(Name);
shareButton.addEventListener('click', function () {
    anchorTag.setAttribute("href", uniqueurl);
});
var copyButton = document.getElementById("copy-btn");
copyButton === null || copyButton === void 0 ? void 0 : copyButton.addEventListener('click', function () {
    navigator.clipboard.writeText(uniqueurl).then(function () {
        alert("Copy Successfully");
    });
});

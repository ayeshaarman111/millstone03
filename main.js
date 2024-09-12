var _a;
//listing element
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    //const profilepictureinput= document.getElementById('profilepictureinput') as HTMLInputElement;
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //picture elements
        //creat resume outpu const profilepicturefile= profilepictureinput.files?.[0]
        //const profilepictureURL = profilepicturefile? URL.createObjectURL (profilepicturefile):'';
        var resumeoutput = "\n\n\n<h2>resume</h2>\n<p><strong>name: </strong> ".concat(name_1, "<p>\n<p><strong>email: </strong> ").concat(email, "<p>\n<p><strong>phone: </strong> ").concat(phone, "<p>\n\n<h3>education</h3>\n<p>").concat(education, "</p>\n\n<h3>experience</p>\n<p>").concat(experience, "</p>\n\n<h3>skills</h3>\n<p>").concat(skills, "</p>\n");
        var resumeoutputElement = document.getElementById('resumeoutput');
        if (resumeoutputElement) {
            resumeoutputElement.innerHTML = resumeoutput;
        }
        else {
            console.error('the resume out put elements are missing');
        }
    }
    else {
        console.error('one or more out put elements are missing');
    }
});

//listing element
document.getElementById('resumeform')?.addEventListener('submit' , function(event){
    event.preventDefault();


//const profilepictureinput= document.getElementById('profilepictureinput') as HTMLInputElement;


const nameElement = document.getElementById('name')as HTMLInputElement;
const emailElement = document.getElementById('email')as HTMLInputElement;
const phoneElement = document.getElementById('phone')as HTMLInputElement;
const educationElement = document.getElementById('education')as HTMLInputElement;
const experienceElement = document.getElementById('experience')as HTMLInputElement;
const skillsElement = document.getElementById('skills')as HTMLInputElement;

if (  nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement ){
  

    const name = nameElement.value;
    const email = emailElement.value ;
    const phone = phoneElement.value ;
    const education = educationElement.value ;
    const experience = experienceElement.value ;
    const skills = skillsElement.value ;
//picture elements

//creat resume outpu const profilepicturefile= profilepictureinput.files?.[0]
//const profilepictureURL = profilepicturefile? URL.createObjectURL (profilepicturefile):'';


const resumeoutput =`


<h2>resume</h2>
<p><strong>name: </strong> ${name}<p>
<p><strong>email: </strong> ${email}<p>
<p><strong>phone: </strong> ${phone}<p>

<h3>education</h3>
<p>${education}</p>

<h3>experience</p>
<p>${experience}</p>

<h3>skills</h3>
<p>${skills}</p>
`;

const resumeoutputElement = document.getElementById('resumeoutput')
if(resumeoutputElement){
    resumeoutputElement.innerHTML=resumeoutput
}else {
    console.error('the resume out put elements are missing')
}

}else {
    console.error('one or more out put elements are missing')
} 


})
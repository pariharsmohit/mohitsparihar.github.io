let content = document.getElementById("content");

const headerTemplate = `<section>
                <h1 class="name">${resume.name}</h1>
                <div id="contact">
                    <div><img src="./img/phoneLogo.png"></img><a href="tel:${resume.phoneNumber}" target="_blank">${resume.phoneNumber}</a></div>
                    <div><img src="./img/mailLogo.png"></img><a href="mailto:${resume.email}" target="_blank">${resume.email}</a></div>
                    <div><img src="./img/gitlogo.png"><a href="https://github.com/mohitsparihar/" target="_blank">${resume.github}</a></div>
                    <div><img src="./img/linkedinLogo.png"></img><a href="https://linkedin.com/in/mohitsparihar" target="_blank">${resume.linkedin}</a></div>
                </div>
                </section>`;

const skillTemplate = `<h2><strong>Skills:</strong></h2>
                        <ul class="double">
                        ${resume.skills.reduce((a, c) => a + '<li class="double">' + c + '</li>', '')}
                    </ul>`;

// const socialTemplate = `<section class="social">
//                             <a href="${resume.social.twitter.link}"><img src="./img/tweetLogo.png"></a>
//                             <a href="${resume.social.facebook.link}"><img src="./img/fblogo.png"></a>
//                             <a href="${resume.social.linkedin.link}"><img src="./img/linkedinLogo.png"></a>
//                             <a href="${resume.social.github.link}"><img src="./img/gitlogo.png"></a>
//                         </section>`;

const eduTemplate = `<section id="education">
                    <h2>Education</h2>
                    <ul>
                     ${resume.education.reduce((a, eduObj) => a + `
                            <li>
                                <section>
                                    <ul>
                                        <li>
                                            <div class="label">School:</div>
                                            <div class="content">${eduObj.school}</div>
                                        </li>
                                        <li>
                                            <div class="label">Program:</div>
                                            <div class="content">${eduObj.program}</div>
                                        </li>
                                        <li>
                                            <div class="label">Dates Attended:</div>
                                            <div class="content">${eduObj.startDate} - ${eduObj.endDate}</div>
                                        </li>
                                        <li>
                                            <div class="label">Achievements:</div>
                                            <div class="content">${eduObj.achievements}</div>
                                        </li>
                                    </ul>
                                </section>
                            </li>`, '')}
                        </ul>
                        </section>
                     `;

const traningTemplate = `<section id="training">
                        <h2>Training</h2>
                        <ul>
                        ${resume.trainings.reduce((a, trainingObj) => a + `
                                <li>
                                    <section>
                                        <ul>
                                            <li>
                                                <div class="label">Company:</div>
                                                <div class="content">${trainingObj.company}</div>
                                            </li>
                                            <li>
                                                <div class="label">Topic:</div>
                                                <div class="content">${trainingObj.topic}</div>
                                            </li>
                                            <li>
                                                <div class="label">Description:</div>
                                                <div class="content">${trainingObj.description}</div>
                                            </li>
                                        </ul>
                                    </section>
                                </li>`, '')}
                            </ul>
                            </section>
                        `;

const academicProjectTemplate = `<section id="acadProject">
                        <h2>Academic Projects</h2>
                        <ul>
                        ${resume.academicProjects.reduce((a, acadProjectObj) => a + `
                                <li>
                                    <section>
                                        <ul>
                                            <li>
                                                <div class="label">Title:</div>
                                                <div class="content">${acadProjectObj.title}</div>
                                            </li>
                                            <li>
                                                <div class="label">Description:</div>
                                                <div class="content">${acadProjectObj.description}</div>
                                            </li>
                                            <li class="${isThere(acadProjectObj.url)}">
                                                <div class="label">Url:</div>
                                                <div class="content"><a href="${acadProjectObj.url}" target="_blank">${acadProjectObj.url}</a></div>
                                            </li>
                                        </ul>
                                    </section>
                                </li>`, '')}
                            </ul>
                            </section>
                        `;
const projectTemplate = `<section id="project">
                        <h2>Projects</h2>
                        <ul>
                        ${resume.projects.reduce((a, projectObj) => a + `
                                <li>
                                    <section>
                                        <ul>
                                            <li>
                                                <div class="label">Title:</div>
                                                <div class="content">${projectObj.title}</div>
                                            </li>
                                            <li>
                                                <div class="label">Technologies:</div>
                                                <div class="content">${projectObj.technologies}</div>
                                            </li>
                                            <li>
                                                <div class="label">Description:</div>
                                                <div class="content">${projectObj.description}</div>
                                            </li>
                                        </ul>
                                    </section>
                                </li>`, '')}
                            </ul>
                            </section>
                        `;

const personalProjectTemplate = `<section id="personalProject">
                                    <h2>Personal Projects</h2>
                                    <ul>
                                    ${resume.personalProjects.reduce((a, personalProjectObj) => a + `
                                            <li>
                                                <section>
                                                    <ul>
                                                        <li>
                                                            <div class="label">Name:</div>
                                                            <div class="content">${personalProjectObj.name}</div>
                                                        </li>
                                                        <li>
                                                            <div class="label">Url:</div>
                                                            <div class="content"><a href="${personalProjectObj.url}" target="_blank">${personalProjectObj.url}</a></div>
                                                        </li>
                                                        <li>
                                                            <div class="label">Description:</div>
                                                            <div class="content">${personalProjectObj.description}</div>
                                                        </li> 
                                                    </ul>
                                                </section>
                                            </li>`, '')}
                                        </ul>
                                        </section>`;


const personalProfileTemplate = `<section class="profile">
                                    <h2>Personal Profile:</h2>
                                        <ul>
                                            <li>
                                             <section>
                                                <ul>
                                                    <li>
                                                        <div class="label">Date of Birth:</div>
                                                        <div class="content">${resume.personalProfile.dob}</div>
                                                    </li>
                                                    <li>
                                                        <div class="label">Mother's Name:</div>
                                                        <div class="content">${resume.personalProfile.mothersName}</div>
                                                    </li>
                                                    <li>
                                                        <div class="label">Father's Name:</div>
                                                        <div class="content">${resume.personalProfile.fathersName}</div>
                                                    </li>
                                                    <li>
                                                        <div class="label">Nationality:</div>
                                                        <div class="content">${resume.personalProfile.nationality}</div>
                                                    </li>
                                                    <li>
                                                        <div class="label">Language:</div>
                                                        <div class="content">${resume.personalProfile.language}</div>
                                                    </li>
                                                    <li>
                                                        <div class="label">Hobbies:</div>
                                                        <div class="content">${resume.personalProfile.hobbies}</div>
                                                    </li>
                                                </ul>
                                             </section> 
                                            </li>
                                        </ul>
                                </section>`;

const experienceTemplate = `<section id="experience">
                                <h2>Experience</h2>
                                <ul>
                                 ${resume.experience.reduce((a, expObj) => a + `
                                        <li>
                                            <section>
                                                <ul>
                                                    <li>
                                                        <div class="label">Company Name:</div>
                                                        <div class="content">${expObj.name}</div>
                                                    </li>
                                                    <li>
                                                        <div class="label">Title:</div>
                                                        <div class="content">${expObj.title}</div>
                                                    </li>
                                                    <li>
                                                        <div class="label">Tenure:</div>
                                                        <div class="content">${expObj.startDate} - ${expObj.endDate}</div>
                                                    </li>
                                                    <li>
                                                        <div class="label">Location:</div>
                                                        <div class="content">${expObj.location}</div>
                                                    </li>
                                                    <li>
                                                        <div class="label">URL:</div>
                                                        <div class="content">${expObj.url}</div>
                                                    </li>
                                                </ul>
                                            </section>
                                        </li>`, '')}
                                    </ul>
                                    </section>
                                 `;


function isThere(property) {
    return property === undefined ? 'hide' : '';
}



content.innerHTML = [
    headerTemplate,
    skillTemplate,
    projectTemplate,
    experienceTemplate,
    personalProjectTemplate,
    eduTemplate
].join('');

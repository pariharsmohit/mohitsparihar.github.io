let content = document.getElementById("content");

const headerTemplate = `<h1>${resume.name}</h1>
                <h2>${resume.email}</h2>`;
            
const hobbyTemplate = `<ul>
                        ${resume.personalProfile[2].reduce((a,c) => a + '<li>' + c + '</li>', '')}
                    </ul>;
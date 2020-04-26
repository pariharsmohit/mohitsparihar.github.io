const resumeData = document.querySelector("#resumeJSON");
const saveBtn = document.querySelector("#save");

$.ajax({
    url: "https://api.jsonbin.io/b/5ea02151435f5604bb45f156/latest"
})
.done(data => {
    resumeData.value = JSON.stringify(data);
})
.fail(error => {
    console.log(error);
})

saveBtn.addEventListener("click", saveResumeData);

function saveResumeData() {
    $.ajax({
        url: "https://api.jsonbin.io/b/5ea02151435f5604bb45f156",
        method: "PUT",
        contentType: 'application/json',
        data: resumeData.value
    })
    .done(data => {
        alert(JSON.stringify(data));
    })
    .fail(error => {
        console.log(error);
    })
}
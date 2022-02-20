// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
function upload() {

    console.log("start uploading")
    const config = {
        headers: {"content-type": "multipart/form-data"},
        onUploadProgress: function (progressEvent) {
            var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            var progressbar=document.getElementById("progressbar");   
            var progressbarText=document.getElementById("progressbarText");
            progressbar.style.width=`${percentCompleted}%`;
            progressbarText.innerText=`${percentCompleted}%`;
        }
    }

    let data = new FormData();

    debugger;
    data.append('Name', $("#Name").val())
    data.append('Description', $("#Description").val())
    data.append('CategoryId', $("#CategoryId").val())
    var image = document.getElementById("ImageFile")
    var video = document.getElementById("file-input")

    data.append('Image', image.files[0])
    data.append('Video', video.files[0])

    axios.post(window.location.pathname, data, config)
        .then(res => {
            console.log(res)
            alert("uploaded");
        })
        .catch(err => console.log(err))
}

function uploadPodcast() {

    console.log("start uploading");
    const config = {
        headers: {"content-type": "multipart/form-data"},
        onUploadProgress: function (progressEvent) {
            var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            var progressbar=document.getElementById("progressbar");   
            var progressbarText=document.getElementById("progressbarText");
            progressbar.style.width=`${percentCompleted}%`;
            progressbarText.innerText=`${percentCompleted}%`;
        }
    }

    let data = new FormData();

    debugger;
    data.append('Title', $("#Title").val())
    data.append('Description', $("#Description").val());
    data.append('PodCastCategoryId', $("#PodCastCategoryId").val());
    var image = document.getElementById("ImageFile");
    var video = document.getElementById("file-input");

    data.append('Image', image.files[0]);
    data.append('File', video.files[0]);

    axios.post(window.location.pathname, data, config)
        .then(res => {
            console.log(res);
            alert("uploaded");
        })
        .catch(err => console.log(err));
}

function editPodcast() {

    console.log("start uploading");
    const config = {
        headers: {"content-type": "multipart/form-data"},
        onUploadProgress: function (progressEvent) {
            var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            var progressbar=document.getElementById("progressbar");   
            var progressbarText=document.getElementById("progressbarText");
            progressbar.style.width=`${percentCompleted}%`;
            progressbarText.innerText=`${percentCompleted}%`;
        }
    }

    let data = new FormData();

    debugger;
    data.append('Title', $("#Title").val());
    data.append('Id', $("#Id").val());
    data.append('FileSrc', $("#FileSrc").val());
    data.append('ImageSrc', $("#ImageSrc").val());

    data.append('Description', $("#Description").val());
    data.append('PodCastCategoryId', $("#PodCastCategoryId").val());
    var image = document.getElementById("ImageFile");
    var video = document.getElementById("file-input");

    var imgFile = image.files[0];
    var videoFile = video.files[0];
    data.append('Image', imgFile?imgFile:null);
    data.append('File', videoFile?videoFile:null);

    axios.post(window.location.pathname, data, config)
        .then(res => {
            console.log(res);
            alert("uploaded");
        })
        .catch(err => console.log(err));
}



function uploadVideoTv() {

    console.log("start uploading");
    const config = {
        headers: {"content-type": "multipart/form-data"},
        onUploadProgress: function (progressEvent) {
            var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            var progressbar=document.getElementById("progressbar");   
            var progressbarText=document.getElementById("progressbarText");
            progressbar.style.width=`${percentCompleted}%`;
            progressbarText.innerText=`${percentCompleted}%`;
        }
    }

    let data = new FormData();

    debugger;
    data.append('Title', $("#Title").val())
    data.append('Description', $("#Description").val());
    data.append('VideoCategoryId', $("#VideoCategoryId").val());
    var image = document.getElementById("ImageFile");
    var video = document.getElementById("file-input");

    data.append('Image', image.files[0]);
    data.append('File', video.files[0]);

    axios.post(window.location.pathname, data, config)
        .then(res => {
            console.log(res);
            alert("uploaded");
        })
        .catch(err => console.log(err));
}

function editVideoTv() {

    console.log("start uploading");
    const config = {
        headers: {"content-type": "multipart/form-data"},
        onUploadProgress: function (progressEvent) {
            var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            var progressbar=document.getElementById("progressbar");   
            var progressbarText=document.getElementById("progressbarText");
            progressbar.style.width=`${percentCompleted}%`;
            progressbarText.innerText=`${percentCompleted}%`;
        }
    }

    let data = new FormData();

    debugger;
    data.append('Title', $("#Title").val());
    data.append('Id', $("#Id").val());
    data.append('FileSrc', $("#FileSrc").val());
    data.append('ImageSrc', $("#ImageSrc").val());

    data.append('Description', $("#Description").val());
    data.append('VideoCategoryId', $("#VideoCategoryId").val());
    var image = document.getElementById("ImageFile");
    var video = document.getElementById("file-input");

    var imgFile = image.files[0];
    var videoFile = video.files[0];
    data.append('Image', imgFile?imgFile:null);
    data.append('File', videoFile?videoFile:null);

    axios.post(window.location.pathname, data, config)
        .then(res => {
            console.log(res);
            alert("uploaded");
        })
        .catch(err => console.log(err));
}


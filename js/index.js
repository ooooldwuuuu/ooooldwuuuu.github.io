window.onload = () => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "./pic", true);
    xhr.responseType = 'document';
    xhr.onload = () => {
    if (xhr.status === 200) {
        let elements = xhr.response.getElementsByTagName("a");
        let count = 0;
        for (x of elements) {
            if ( x.href.match(/\.(jpe?g|png|gif)$/) ) { 
                let carousel = document.getElementById("carousel-box");
                let imgdiv = carousel.appendChild("div");
                imgdiv.setAttribute("class", "carousel-item");
                imgdiv.setAttribute("data-bs-interval", "2000");
                if (count == 0) {
                    imgdiv.classList.add("active");
                }
                let img = document.createElement("img");
                img.src = x.href;
                imgdiv.setAttribute("class", "d-block w-100");
                imgdiv.appendChild("img")
            } 
        };
    } 
    else {
        alert('Request failed. Returned status of ' + xhr.status);
    }
    }
    xhr.send()
};
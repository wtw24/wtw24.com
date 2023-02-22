//Get the button
let mybutton = document.getElementById("fixed-buttons");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", function(evt) {
    evt.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});





function initHeaderLink() {
    for (let num = 1; num <= 6; num++) {
        const headers = document.querySelectorAll('.single .content > h' + num);

        for (i = 0; i < headers.length; ++i) {
            headers[i].classList.add('headerLink');
            headers[i].insertAdjacentHTML('afterbegin', "<a href=\"#".concat(headers[i].id, "\" class=\"header-mark\"></a>"));
        }
    }
}

initHeaderLink();

window.addEventListener('DOMContentLoaded', (event) => {
    const links = document.querySelectorAll( '.content a' );

    for (let i = 0, length = links.length; i < length; i++) {
        if (links[i].hostname !== window.location.hostname) {
            links[i].target = '_blank';
        }
    }


    const items = document.querySelectorAll('.bb-text');

    for (let i = 0; i < items.length; ++i) {
        items[i].innerHTML = items[i].innerHTML.replace(/(\$?\d+)/g, '<span class="bb-num">$1</span>');
    }

    new PagefindUI({
        element: "#search",
        showImages: false
    });
});




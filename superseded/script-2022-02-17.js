var url_string = window.location.href
var url = new URL(url_string);
var editorEnabled = url.searchParams.get("editor");

if (editorEnabled == "true") {
    AOS.init({
        disable: true
    });
} else {
    AOS.init();
}

$(".laptop-hitbox").on("click", function () {
    $(".laptop-like").toggle();
    $(".laptop-like-pressed").toggle();
    setTimeout(function () {
        $(".laptop-like").toggle();
        $(".laptop-like-pressed").toggle();
    }, 100);
});

$(".burger-menu-wrapper").on("click", function () {
    $(".mobile-nav-links").toggle();
});


function getSHA() {
    $.get('https://jsonblob.com/api/937308595356450816', function (data) {
        console.log(data);
    });

    var settings = {
        "url": "https://api.github.com/repos/POLYAPSS/apss-visitor-count/contents/visitor-count.txt",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": "Basic UE9MWUFQU1M6c29jaWFsd29yazIwMjE="
        },
    };
    $.ajax(settings).done(function (response) {
        console.log("SHA Collected!", response.sha);
        console.log("SHA Text", atob(response.content));
        //        viewerCount = parseInt(atob(response.content));
        //        viewerCount++;
        //        renderViwerCount(viewerCount);
        //        renderViwerCount("20|100");
        generateNewViewerCount(response.sha);
    });
}

function generateNewViewerCount(SHA) {
    //    var newContent = btoa(viewerCount).toString();
    var newContent = btoa("20|100").toString();
    var settings = {
        "url": "https://api.github.com/repos/POLYAPSS/apss-visitor-count/contents/visitor-count.txt",
        "method": "PUT",
        "timeout": 0,
        "headers": {
            "Authorization": "Bearer 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",
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "message": "message",
            "content": newContent,
            "sha": SHA
        }),
    };

    $.ajax(settings).done(function (response) {
        console.log("Viewer count updated!", response);
        $(".visitor-count").fadeIn("fast");
    });
}

function renderViwerCount(viewerCount) {
    $(".visitor-count").text(viewerCount);
}

var viewerCount = 0;
$(document).ready(function () {
    $(".profile-image-wrapper").css("height", $(".profile-image-wrapper").width() + "px");
    $("footer").load("footer.html");
    getSHA();
    $.getJSON("https://api.ipify.org?format=json", function (data) {
        console.log(data.ip, hash(data.ip));
        
    })
    //    $.get('https://raw.githubusercontent.com/POLYAPSS/apss-visitor-count/main/visitor-count.txt', function (data) {
    ////        renderViwerCount(data);
    ////        viewerCount = parseInt(data);
    ////        viewerCount++;
    //        getSHA();
    //    });
});

$(window).resize(function () {
    $(".profile-image-wrapper").css("height", $(".profile-image-wrapper").width() + "px");
});

$(document).on("click", ".list-link", function () {
    $(this).parent().find(".list-link-content").slideToggle();
    $(this).parent().find(".down-arrow-wrapper").toggleClass("down-arrow-wrapper-turned");
});

function hash(string) {
    const utf8 = new TextEncoder().encode(string);
    return crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray
            .map((bytes) => bytes.toString(16).padStart(2, '0'))
            .join('');
        console.log("hash", hashHex)
        return hashHex;
    });
}
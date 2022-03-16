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

function viewCounterAction() {
    $.getJSON("https://api.ipify.org?format=json", function (data) {
        console.log("Client IP:", data.ip);
        hash(data.ip);
    })
}

function getSHA(ipHash) {
    var settings = {
        "url": "https://api.github.com/repos/POLYAPSS/apss-visitor-count/contents/visitor-count.txt",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": "Basic UE9MWUFQU1M6c29jaWFsd29yazIwMjE="
        },
    };
    
    $.ajax(settings).done(function (response) {
        var timeStampNow = parseInt(Math.floor(Date.now() / 1000));
        console.log("Time now: ", timeStampNow);
        console.log("SHA Collected:", response.sha);
        console.log("SHA Text: \"", atob(response.content), "\"");
        var retrievedDataRaw = atob(response.content);
        viewerCount = parseInt(retrievedDataRaw.split("|")[0]);
        var retrievedHash = retrievedDataRaw.split("|")[1];
        var retrievedTimeStamp = parseInt(retrievedDataRaw.split("|")[2]);
        if (retrievedHash == ipHash) {
            console.log("Same User.");
            console.log("Second Passed: ", (timeStampNow - retrievedTimeStamp));
            if ((timeStampNow - retrievedTimeStamp) > 300) {
//                viewerCount++;
                generateNewViewerCount(response.sha, ipHash, timeStampNow, viewerCount);
            }
        } else {
//            viewerCount++;
            generateNewViewerCount(response.sha, ipHash, timeStampNow, viewerCount);
        }
        renderViwerCount((viewerCount+1));
    });
}

function generateNewViewerCount(SHA, hash, timeStamp, viewNumber) {
    var newContent = btoa((viewNumber+1) + "|" + hash + "|" + timeStamp).toString();
//    var newContent = btoa("24|6a4b48e608d03727384d5ee6e266638abdeac5b425dc47c85b403937a8f8a9ef|0").toString();
    
    //    var newContent = btoa(viewerCount).toString();
//    var newContent = btoa("20|100").toString();
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
    }).fail(function (jqXHR, textStatus) {
        console.log(jqXHR);
    });
}

function renderViwerCount(viewerCount) {
    $(".visitor-count").css("display", "flex").hide().fadeIn();
    $(".visitor-count span").text(viewerCount);
}

var viewerCount = 0;
$(document).ready(function () {
    $(".profile-image-wrapper").css("height", $(".profile-image-wrapper").width() + "px");
    var currentUrlLink = window.location.href;
    var currentLang = "english";
    if (currentUrlLink.includes("zh")) {
        currentLang = "cantonese";
    } else {
        currentLang = "english";
    }
    if (currentLang == "cantonese") {
        $(".cantonese").css("font-family", "Poppins-Bold");
        $(".intro-nav").text("簡介").attr("href", "./index-zh.html");
        $(".video-nav").text("影片").attr("href", "./video_documentation-zh.html");
        $(".tips-nav").text("貼士").attr("href", "./tips-zh.html");
        $("footer").load("footer-zh.html");
    } else {
        $(".english").css("font-family", "Poppins-Bold");
        $("footer").load("footer.html");
//        $(".intro-nav").text("Introduction");
//        $(".video-nav").text("Videos");
//        $(".tips-nav").text("Tips");
    }
    var lastPart = window.location.href.split("/").pop();
    console.log("/!", lastPart);
    
    if (!lastPart) {
        $(".cantonese").attr("href", "./index-zh.html");
        $(".english").attr("href", "./");
    } else {
        if (currentLang == "cantonese") {
            $(".cantonese").attr("href", "./" + lastPart.split(".")[0] + ".html");
        } else {
            $(".cantonese").attr("href", "./" + lastPart.split(".")[0] + "-zh.html"); 
        } 
        $(".english").attr("href", "./" + lastPart.split(".")[0].replace("-zh", "") + ".html");
    }
//    getSHA();
    viewCounterAction();
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
        console.log("IP Hash:", hashHex);
        getSHA(hashHex);
    });
}
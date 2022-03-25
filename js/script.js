var url_string = window.location.href
var url = new URL(url_string);
var editorEnabled = url.searchParams.get("editor");
var byPassCounter = url.searchParams.get("stealth");
var authKey = url.searchParams.get("auth");
var components = ["title_and_paragraph.html", "two_lists.html", "simple_title.html", "resources_item.html", "line_divider.html", "line_divider_light.html", "list.html", "video_item.html", "video.html", "tip_item_left.html", "tip_item_right.html"];

console.log(editorEnabled);
if (editorEnabled == "true") {
//    AOS.init({
//        disable: true
//    });
} else {
    (function() { // Scoping function to avoid globals
        var src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
        var cssLink = "https://unpkg.com/aos@2.3.1/dist/aos.css";
        document.write('<script src="' + src + '"><\/script>');
        document.write('<link href="' + cssLink + '" rel="stylesheet">');
    })();
//    var head = document.getElementsByTagName('head')[0];
//    var js = document.createElement("script");
//    js.type = "text/javascript";
//    js.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
//    head.appendChild(js);
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
    var apikey = [];
    apikey[0] = "ghp_Jlrx6PDqT71V";
    apikey[1] = "z7JTidBM";
    apikey[2] = "KEepG0uV3S0ChUgZ";
    var fullStr = "Bearer " + apikey[0] + apikey[1] + apikey[2];
    var settings = {
        "url": "https://api.github.com/repos/POLYAPSS/apss-visitor-count/contents/visitor-count.txt",
        "method": "PUT",
        "timeout": 0,
        "headers": {
            "Authorization": fullStr,
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
var gitToken;
const nameWithOwner = 'POLYAPSS/media-bucket';
const uploadMediaToken;
const mediaFolder = "media";

$(document).ready(function () {
    if (editorEnabled == "true") {
        var decodedAuth = atob(authKey);
        var secondsNow = Math.floor(Date.now() / 1000);
        var baseUrl = window.location.href.split('?')[0];
        $("#main-html-content").css("position", "relative");
        $(".nav-bar").css("position", "absolute");
//        console.log(decodedAuth);
//        console.log("decodedAuth", decodedAuth);
//        console.log("time", secondsNow - parseInt(decodedAuth.split("|")[1]));
        gitToken = "Bearer " + decodedAuth.split("|")[0];
        uploadMediaToken = decodedAuth.split("|")[0];
        if (decodedAuth.split("|")[2] != "Lemonade") {
            alert("You don't have permission to edit this page, redirecting...");
            window.location.href = baseUrl;
        }
        if (secondsNow - parseInt(decodedAuth.split("|")[1]) > 1800) {
            alert("Token expired, please re-login to edit");
            window.location.href = "./admin.html";
        }
        
    } else {
        AOS.init();
    }
    $(".profile-image-wrapper").css("height", $(".profile-image-wrapper").width() + "px");
    var currentUrlLink = window.location.href;
    var currentLang = "english";
    $("footer").empty();
    if (currentUrlLink.includes("zh")) {
        currentLang = "cantonese";
    } else {
        currentLang = "english";
    }
    if (currentLang == "cantonese") {
        $(".cantonese").css("font-family", "Poppins-Bold");
        $(".intro-nav").text("簡介").attr("href", "./index-zh.html");
        $(".video-nav").text("示範影片").attr("href", "./video_documentation-zh.html");
        $(".tips-nav").text("小貼士").attr("href", "./tips-zh.html");
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
    if (byPassCounter != "true") {
        viewCounterAction();
    }
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

$(document).on("click", "#beagle-update-site-button", function () {
    getSiteSha();
});

function getSiteSha() {
    var pathName = location.pathname;
    console.log("Detecting Page: ", pathName);
//    console.log("Full Path: ", "https://api.github.com/repos/POLYAPSS/apss-site/contents" + pathName);
    var settings = {
        "url": "https://api.github.com/repos/POLYAPSS/apss-site/contents" + pathName,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": "Basic UE9MWUFQU1M6c29jaWFsd29yazIwMjE="
        },
    };
    $.ajax(settings).done(function (response) {
        console.log("retrieved SHA: ", response.sha);
        updateSite(response.sha);
    }).fail(function (jqXHR, textStatus) {
        console.log(jqXHR);
    });
}

function updateSite(SHA) {
//    console.log("updateSiteHTML", updateSiteHTML());
    var fullHTML = updateSiteHTML();
    var pathName = location.pathname;
    var settings = {
        "url": "https://api.github.com/repos/POLYAPSS/apss-site/contents" + pathName,
        "method": "PUT",
        "timeout": 0,
        "headers": {
            "Authorization": gitToken,
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "message": "Update Site",
            "content": fullHTML,
            "sha": SHA
        }),
     };

    $.ajax(settings).done(function (response) {
        console.log("Page Updated!", pathName);
        alert("Page " + pathName + " has been updated successfully! (It can take up to 5 minutes to see the changes)");
    }).fail(function (jqXHR, textStatus) {
        console.log(jqXHR);
    });
}

function updateSiteHTML(elementSelectorInput) {
    var elementSelector = elementSelectorInput || "html";
    var selectedBeagleEle = $(".beagle-selected");
    $(".beagle-selected").removeClass("beagle-selected");
    $(".beagle-hovering").removeClass("beagle-hovering");
    var cleansedHtml = $(elementSelector).clone();
    cleansedHtml.find(".nav-bar").css("position", "");
    cleansedHtml.find(".beagle-builder").remove();
    cleansedHtml.find(".beagle-translatable").removeClass("beagle-translatable");
    cleansedHtml.find(".temp-visible").removeClass("temp-visible");
    cleansedHtml.find("#main-html-content").removeClass("beagle-laptop-width beagle-mobile-width");
    cleansedHtml.find("#main-html-content").css("position", "");
    cleansedHtml.find(".beagle-temp-show").removeClass("beagle-temp-show");
    var mainContentHtml = cleansedHtml.find("#main-html-content").html();
    var mainContentHtmlClass = cleansedHtml.find("#main-html-content").attr("class");
    var mainContentHtmlStyles = cleansedHtml.find("#main-html-content").attr("style");
    cleansedHtml.find("#main-html-content").remove();
    cleansedHtml.find("body").prepend(mainContentHtml);
    cleansedHtml.find("body").attr("class", mainContentHtmlClass);
    cleansedHtml.find("body").attr("style", mainContentHtmlStyles);
    cleansedHtml.find("#main-html").remove();
    cleansedHtml.find("*[class='']").removeAttr('class');
    cleansedHtml.find("*[beagle-translatable='']").removeAttr('beagle-translatable');
    var elHtml = cleansedHtml.html();
    console.log("Preparing html file...");
    console.log(elHtml);
    return btoa(unescape(encodeURIComponent(elHtml)));
//    var link = document.createElement('a');
//    var mimeType = 'text/plain';
//    link.setAttribute('download', 'index.html');
//    link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(elHtml));
//    link.click();
//    link.remove();
//    selectedBeagleEle.addClass("beagle-selected");
}

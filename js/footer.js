var url_string = window.location.href
var url = new URL(url_string);
var editorEnabled = url.searchParams.get("editor");
var byPassCounter = url.searchParams.get("stealth");
var authKey = url.searchParams.get("auth");

$(document).ready(function () {
    if (editorEnabled == "true" && url_string.includes("footer")) {
        var decodedAuth = atob(authKey);
        var secondsNow = Math.floor(Date.now() / 1000);
        var baseUrl = window.location.href.split('?')[0];
        gitToken = "Bearer " + decodedAuth.split("|")[0];
        if (decodedAuth.split("|")[2] != "Lemonade") {
            alert("You don't have permission to edit this page, redirecting...");
            window.location.href = window.location.hostname;
        }
        if (secondsNow - parseInt(decodedAuth.split("|")[1]) > 1800) {
            alert("Token expired, please re-login to edit");
            window.location.href = "./admin.html";
        }
        
    }
});

if (url_string.includes("footer")) {
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
        cleansedHtml.find(".beagle-builder").remove();
        cleansedHtml.find(".beagle-translatable").removeClass("beagle-translatable");
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
    }
}
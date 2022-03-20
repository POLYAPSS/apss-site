var exclude = ["footer.html", "footer-zh.html", "header.html", "admin.html"];
var pages = ["index.html", "video_documentation.html", "tips.html", "footer.html"];
$(document).ready(function () {
    var secondsNow = Math.floor(Date.now() / 1000);
    var authStr = atob(localStorage.getItem("authForAssp"));
    if (authStr) {
        var savedTime = authStr.split("|")[1];
        var savedCode = authStr.split("|")[0];
        if ((secondsNow - savedTime) < 1800) {
            var decrypted = CryptoJS.AES.decrypt("U2FsdGVkX19Mf7Xwn8+thJ9tyiSb6qahUhPkXd/44LoDlH4lDsM6u+6AIaWhZH/97uzsrEae3wnlyJ6Mf6wHLCopRm3LiOOpqXmlCUTJTWE=", savedCode, {
                mode: CryptoJS.mode.ECB
            });
            //    console.log("Decrypted:\n" + decrypted.toString(CryptoJS.enc.Utf8)); // Plaintext
            var afterDecrypted = decrypted.toString(CryptoJS.enc.Utf8);
            console.log("afterDecrypted:\n" + decrypted.toString(CryptoJS.enc.Utf8)); // Plaintext
            if (afterDecrypted.split("|")[1] == "Lemonade") {
                var secondsNow = Math.floor(Date.now() / 1000);
                $(".login-loader").fadeIn();
                $(".login-loader").hide();
                $(".login-page").fadeOut();
                initBlocks(afterDecrypted.split("|")[0], afterDecrypted.split("|")[1]);
            } else {
                $(".login-loader").fadeIn();
                alert("Saved Username/Password is incorrect, please enter it again.");
                $(".login-loader").hide();
            }
        } else {
            console.log("Your session expired/token invalid, please login again.");
        }
    }
    //    var settings = {
    //        "url": "https://api.github.com/repos/POLYAPSS/apss-site/contents/",
    //        "method": "GET",
    //        "timeout": 0,
    //        "headers": {
    //            "Authorization": "Basic UE9MWUFQU1M6c29jaWFsd29yazIwMjE="
    //        },
    //    };


    //    $.ajax(settings).done(function (response) {
    //        console.log(response);
    //        var allGitFiles = response;
    //        var urlOrigin = window.location.origin;
    //        for (var i = 0; i < allGitFiles.length; i++) {
    //            if (allGitFiles[i].name.includes(".html") && !exclude.includes(allGitFiles[i].name)) {
    //                console.log(allGitFiles[i].name);
    //                var htmlPage = $('<div class="col-md-6"><iframe style="width: 100%;" src="' + urlOrigin + '/' + allGitFiles[i].name + '" height="800" title="Iframe Example"></iframe></div>');
    //                $(".admin-main").append(htmlPage);
    //            }
    //        }
    //    });

    //    var decrypted = CryptoJS.AES.decrypt("U2FsdGVkX19Mf7Xwn8+thJ9tyiSb6qahUhPkXd/44LoDlH4lDsM6u+6AIaWhZH/97uzsrEae3wnlyJ6Mf6wHLCopRm3LiOOpqXmlCUTJTWE=", 'poly_admin:#socialWork2021', { mode: CryptoJS.mode.ECB });
    //    console.log("Decrypted:\n" + decrypted.toString(CryptoJS.enc.Utf8)); // Plaintext

});

$(document).on('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        $(".login-button").trigger("click");
    }
});
$(".login-button").on("click", function () {
    var username = $("#username").val();
    var password = $("#password").val();
    var authStr = username + ":" + password;
    var decrypted = "";
    try {
        decrypted = CryptoJS.AES.decrypt("U2FsdGVkX19Mf7Xwn8+thJ9tyiSb6qahUhPkXd/44LoDlH4lDsM6u+6AIaWhZH/97uzsrEae3wnlyJ6Mf6wHLCopRm3LiOOpqXmlCUTJTWE=", authStr, {
            mode: CryptoJS.mode.ECB
        });
    } catch (error) {
        alert("Username/Password is incorrect, please try again.");
    }
    //    console.log("Decrypted:\n" + decrypted.toString(CryptoJS.enc.Utf8)); // Plaintext
    var afterDecrypted = "";
    try {
        afterDecrypted = decrypted.toString(CryptoJS.enc.Utf8);
        console.log("afterDecrypted:\n" + decrypted.toString(CryptoJS.enc.Utf8)); // Plaintext
    } catch (error) {
        alert("Username/Password is incorrect, please try again.");
    }
    
    if (afterDecrypted.split("|")[1] == "Lemonade") {
        var secondsNow = Math.floor(Date.now() / 1000);
        localStorage.setItem("authForAssp", btoa(authStr + "|" + secondsNow));
        $(".login-loader").fadeIn();
        setTimeout(function () {
            $(".login-loader").hide();
            $(".login-page").fadeOut();
            initBlocks(afterDecrypted.split("|")[0], afterDecrypted.split("|")[1]);
        }, 500);
    } else {
        $(".login-loader").fadeIn();
        setTimeout(function () {
            alert("Username/Password is incorrect, please try again.");
            $(".login-loader").hide();
        }, 500);
        
//        $(".login-page").fadeOut();
//        initBlocks(afterDecrypted.split("|")[0]);
    }
});

function initBlocks(key, secret) {
    var secondsNow = Math.floor(Date.now() / 1000);
    var encoded64 = btoa(key+ "|" + secondsNow + "|" + secret);
    var urlOrigin = window.location.origin;
    var params = "?stealth=true&editor=true&auth=" + encoded64;
    for (var i = 0; i < pages.length; i++) {
        console.log(pages[i]);
        var htmlPage = $('<div class="col-md-6 website-block"><div class="website-overlay"><div class="website-inner"><div class="page-header"><h3>' + pages[i].replace(".html", "") + '</h3></div><a target="_blank" href="' + urlOrigin + "/" + pages[i] + params + '">Edit English</a><a target="_blank" href="' + urlOrigin + "/" + pages[i].replace(".html", "") + "-zh.html" + params + '">編輯中文頁面</a></div></div><iframe style="width: 100%;" src="' + urlOrigin + '/' + pages[i] + '" height="500" title="Iframe Example"></iframe></div>');
        $(".admin-main").append(htmlPage);
    }
}
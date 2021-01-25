$(function () {
    pageInit()
});
function pageInit() {
    $('#slides').slidesjs({
        width: 1280,
        height: 500,
        play: {
            auto: true
        }
    });
    $("#prd_list").find(".prd-pic").mouseenter(function () {
        $(this).children(".prd-hover").stop().fadeIn();
    }).mouseleave(function () {
        $(this).children(".prd-hover").stop().fadeOut();
    })
    $("#login_tab .tab-btn").click(function () {
        $(this).parent("#login_tab").find(".active").removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        if (index == 0) {
            $(this).parents(".index-login").removeClass("gb2");
            $("#login_type").val(index)
        } else if (index == 1) {
            $(this).parents(".index-login").addClass("gb2");
            $("#login_type").val(index)
        }
    });
    $("#uname,#pwd").focus(function () {
        $(this).prev("span").hide()
    }).blur(function () {
        if ($(this).val() == "") {
            $(this).prev("span").show()
        }
    })
    $("#blueprint .tec-model").mouseenter(function () {
//        var that = $(this);
        $(this).find(".pic-dot").removeClass("twinkling");
        $(this).find(".pic-detail").fadeIn();
        /*that.find(".pic-dot").fadeIn(500, function () {
         that.find(".pic-detail").fadeIn();
         })*/
    })
}

function checksubmit() {
    if ($("#uname").val() == "") {
        alert("请输入用户名");
        return false
    }
    else if ($("#pwd").val() == "") {
        alert("请输入密码");
        return false
    }
    return true
}

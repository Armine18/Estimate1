$(document).ready(function () {
    var lastId,
            topMenu = $("#navbarNav"),
            topMenuHeight = topMenu.outerHeight() + 1,

            menuItems = topMenu.find("a"),

            scrollItems = menuItems.map(function () {
                var item = $($(this).attr("href"));
                if (item.length) { return item; }
            });


        menuItems.click(function (e) {
            var href = $(this).attr("href"),
                offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
            $('html, body').stop().animate({
                scrollTop: offsetTop
            }, 850);
            e.preventDefault();
        });


        $(window).scroll(function () {

            var fromTop = $(this).scrollTop() + topMenuHeight;


            var cur = scrollItems.map(function () {
                if ($(this).offset().top < fromTop)
                    return this;
            });

            cur = cur[cur.length - 1];
            var id = cur && cur.length ? cur[0].id : "";

            // if (lastId !== id) {
            //     lastId = id;

            //     menuItems
            //         .parent().removeClass("active")
            //         .end().filter("[href=#" + id + "]").parent().addClass("active");
            // }
        });
    $(".pulse").css("visibility", "hidden");
    $(".pulse").eq(0).css("visibility", "visible");
    $(".nopulse").eq(0).css("visibility", "hidden");
    $(".int").css("bottom", "0px");
    $(".int").eq(0).css({"right": "74px","top": "-41px"});
    $(".nav-item").on("click", function () {
        $(this).addClass("active");
        $(this).nextAll().removeClass("active");
        $(this).prevAll().removeClass("active");
    });
    $(".list_text").eq(0).css("color", "#000");
    data = $("#list>li").attr("data-toggle");
    clicked = $(".img_block>label").attr("data-toggle");
    $(".img_block>label").on("click", function () {
        if (clicked == 1) {
            $(this).parent().toggleClass("clicked");
            $(this).parent().nextAll().removeClass("clicked");
            $(this).parent().prevAll().removeClass("clicked");
        }
    });
    $("#list>li").on("click", function () {

        if (data == 1) {
            $(this).find(".pulse").css("visibility", "visible");
            $(this).find(".int").css("bottom", "50px");
            $(this).find(".int").css("bottom", "50px");
            $(this).prevAll().find(".pulse").css("visibility", "hidden");
            $(this).nextAll().find(".pulse").css("visibility", "hidden");
            $(this).prevAll().find(".int").css("bottom", "0px");
            $(this).nextAll().find(".int").css("bottom", "0px");
            $(this).find(".nopulse").css("visibility", "hidden");
            $(this).prevAll().find(".nopulse").css("visibility", "visible");
            $(this).nextAll().find(".nopulse").css("visibility", "visible");
            $(this).nextAll().find(".list_text").css("color", "#757d8f");
            $(this).prevAll().find(".list_text").css("color", "#757d8f");
            $(this).find(".list_text").css("color", "#000");
        }
    })





});
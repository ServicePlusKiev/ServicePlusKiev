(function ($) {
    'use strict'

    $(document).ready(function () {

        function blueasyMenu() {
            var $trigger = $('.trigger-nav'),
                $naklon = $("#nakl"),
                $menu = $('.trigger-victim');
            /*$menu.hide();*/
            $trigger.click(function () {
                $(this).next($menu).fadeToggle();
            });

            $(window).resize(function () {
                if ($(window).width() > 992) {
                    $menu.removeAttr('style');

                }
            });
        }
        blueasyMenu();

        function hideNaklon() {
            var $naklon = $("#nakl"),
                $video = $("#videoHide"),
                $menu = $('.trigger-victim'),
                $trigger = $(".trigger-nav");
            $(window).resize(function () {
                if (document.documentElement.clientWidth < 992) {
                    $menu.hide();
                    $video.attr({
                        preload: "none"
                    });
                    $video.css("display", "none");

                    $('article').readmore({ //вызов плагина
                        speed: 250, //скорость раскрытия скрытого текста (в миллисекундах)
                        maxHeight: 100, //высота раскрытой области текста (в пикселях)
                        heightMargin: 16, //избегание ломания блоков, которые больше maxHeight (в пикселях)
                        moreLink: '<a href="#" class="btn-readmore">Читать далее</a>', //ссылка "Читать дbtалее", можно переименовать
                        lessLink: '<a href="#" class="btn-readmore">Скрыть</a>' //ссылка "Скрыть", можно переименовать
                    });
                    $trigger.click(function () {
                        $naklon.toggle();

                    });


                }
            });
        }
        hideNaklon();


    }); //end ready

}(jQuery));



window.onload = function () {
    function phone() {

        var oToday = new Date(); // текущая дата
        var sTime = "April 1, 2015 " + oToday.getHours() + ":" + oToday.getMinutes() + ":" + oToday.getSeconds(); // задаём время начала счета с точностью до секунды — это не педантизм, а важная деталь, избавляющая от багов при вычислении разницы между датами
        var oStartLineDate = new Date(sTime); // собственно устанавливаем «час Икс»
        var nDaysPass = oStartLineDate < oToday ? Math.ceil((oToday - oStartLineDate) / (1000 * 60 * 60 * 24)) : null; // Считаем сколько дней прошло с даты начала счета 
        var weeks = Math.ceil(nDaysPass / 7); // Считаем количество полных недель
        var sumPhone = (nDaysPass - weeks) * 2; // Узнаем количество рабочих дней, при условии что их шесть в неделю и умнажаем на среднее количество выполненной работы в день
        var npPhone = Math.ceil((nDaysPass - weeks) / 3); // Считаем количество ремонтов присланых по НП при условии что 2 тел. в неделю
        document.getElementById('novap').innerHTML = npPhone;
        document.getElementById('fixedPhone').innerHTML = sumPhone; // Выводим количество выполненой работы за все рабочие дни в ID
        document.getElementById('day').innerHTML = nDaysPass;
        jQuery(document).onload(function ($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });
        return;
    }
    phone()

};

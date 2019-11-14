(function($) {
    $.getNav = function(name, path) {
        console.log(name, path)
        name.replace("//", "/")
        var parent = document.getElementById("nav")
        var nav = document.createElement("nav")
        nav.id = "nav_bar"
        nav.className = "navbar-style navbar-default-style navbar navbar-default sticky-menu "
            //nav.style = "margin-top: 30px; margin-bottom: 60px; font-size: 16px; background-color:  #828282; border-color: #cacaca; position: -webkit-sticky; position: sticky; top: 0;"
        nav.style = "font-size: 16px; background-color:  #828282; border-color: #cacaca;"
        nav.innerHTML = "<div class=\"container\">\n" +
            "            <div class=\"navbar-header\">\n" +
            "                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#top-menu\">\n" +
            "                <span class=\"sr-only\">Toggle navigation</span>\n" +
            "                <span class=\"icon-bar\"></span>\n" +
            "                <span class=\"icon-bar\"></span>\n" +
            "                <span class=\"icon-bar\"></span>\n" +
            "            </button>\n" +
            "            </div>\n" +
            "            <div class=\"collapse navbar-collapse\" id=\"top-menu\">\n" +
            "                <div class=\"nav-center\">\n" +
            "                    <ul class=\"nav navbar-nav\">\n" +
            "                        <li id=\"mainNav\">\n" +
            "                            <a class=\"nav-item-style\" href=\":" + path + "/\" title=\"#\" data-toggle=\"dropdown\" onclick=\"location.href = this.href\">\n" +
            "                                <i class=\"fa fa-home fa-fw\"></i>\n" +
            "                            </a>\n" +
            "                        </li>\n" +
            "                        <li class=\"first dropdown\">\n" +
            "                            <a class=\"nav-item-style dropdown-toggle\" href=\"" + path + "окомпании/\" title=\"О компании\" onclick=\"location.href = this.href\" data-toggle=\"dropdown\">О компании</a>\n" +
            "                            <ul class=\"dropdown-menu\">\n" +
            "                                <li>\n" +
            "                                    <a href=\"" + path + "окомпании/\" title=\"О компании\" data-toggle=\"dropdown\" class=\"dropdown-toggle dropdown-style\" onclick=\"location.href = this.href\">О компании</a>\n" +
            "                                </li>\n" +
            "                                <li>\n" +
            "                                    <a href=\"" + path + "/окомпании/коллектив/\" title=\"Коллектив\" data-toggle=\"dropdown\" class=\"dropdown-toggle dropdown-style\" onclick=\"location.href = this.href\">Коллектив</a>\n" +
            "                                </li>\n" +
            "                                <li>\n" +
            "                                    <a href=\"" + path + "окомпании/вакансии/\" title=\"Вакансии\" data-toggle=\"dropdown\" class=\"dropdown-toggle dropdown-style\" onclick=\"location.href = this.href\">Вакансии</a>\n" +
            "                                </li>\n" +
            "                                <li>\n" +
            "                                    <a href=\"" + path + "окомпании/партнеры/\" title=\"Партнеры\" data-toggle=\"dropdown\" class=\"dropdown-toggle dropdown-style\" onclick=\"location.href = this.href\">Партнеры</a>\n" +
            "                                </li>\n" +
            "                            </ul>\n" +
            "                        </li>\n" +
            "                        <li class=\"dropdown\">\n" +
            "                            <a href=\"" + path + "услуги/\" title=\"Услуги\" onclick=\"location.href = this.href\" class=\"nav-item-style dropdown-toggle\">Услуги</a>\n" +
            "                            <ul class=\"dropdown-menu\">\n" +
            "                                <li>\n" +
            "                                    <a href=\"" + path + "услуги/дома/\" title=\"Строительство домов\" data-toggle=\"dropdown\" class=\"dropdown-toggle dropdown-style\" onclick=\"location.href = this.href\">Строительство домов</a>\n" +
            "                                </li>\n" +
            "                                <li>\n" +
            "                                    <a href=\"" + path + "услуги/бани/\" title=\"Строительство бань\" data-toggle=\"dropdown\" class=\"dropdown-toggle dropdown-style\" onclick=\"location.href = this.href\">Строительство бань</a>\n" +
            "                                </li>\n" +
            "                                <li>\n" +
            "                                    <a href=\"" + path + "услуги/отделочныеработы/\" title=\"Отделочные работы\" data-toggle=\"dropdown\" class=\"dropdown-toggle dropdown-style\" onclick=\"location.href = this.href\">Отделочные работы</a>\n" +
            "                                </li>\n" +
            "                                <li>\n" +
            "                                    <a href=\"" + path + "услуги/cантехническиеработы/\" title=\"Сантехнические работы\" data-toggle=\"dropdown\" class=\"dropdown-toggle dropdown-style\" onclick=\"location.href = this.href\">Сантехнические работы</a>\n" +
            "                                </li>\n" +
            "                                <li>\n" +
            "                                    <a href=\"" + path + "услуги/благоустройство/\" title=\"Благоустройство\" data-toggle=\"dropdown\" class=\"dropdown-toggle dropdown-style\" onclick=\"location.href = this.href\">Благоустройство</a>\n" +
            "                                </li>\n" +
            "                                <li>\n" +
            "                                    <a href=\"" + path + "услуги/установкаколодцев/\" title=\"Установка колодцев\" data-toggle=\"dropdown\" class=\"dropdown-toggle dropdown-style\" onclick=\"location.href = this.href\">Установка колодцев</a>\n" +
            "                                </li>\n" +
            "                            </ul>\n" +
            "                        </li>\n" +
            "                        <li class=\"dropdown\">\n" +
            "                            <a href=\"" + path + "портфолио/\" title=\"Портфолио\" onclick=\"location.href = this.href\" class=\"nav-item-style dropdown-toggle\">Портфолио</a>\n" +
            "                            <ul class=\"dropdown-menu\">\n" +
            "                                <li>\n" +
            "                                    <a href=" + path + "портфолио/дома/\" title=\"дома/\" data-toggle=\"dropdown\" class=\"dropdown-toggle dropdown-style\" onclick=\"location.href = this.href\">Дома</a>\n" +
            "                                </li>\n" +
            "                                <li>\n" +
            "                                    <a href=\"" + path + "портфолио/бани/\" title=\"бани\" data-toggle=\"dropdown\" class=\"dropdown-toggle dropdown-style\" onclick=\"location.href = this.href\">Бани</a>\n" +
            "                                </li>\n" +
            "                                <li>\n" +
            "                                    <a href=\"" + path + "портфолио/благоустройство/\" title=\"благоустройство\" data-toggle=\"dropdown\" class=\"dropdown-toggle dropdown-style\" onclick=\"location.href = this.href\">Благоустройство</a>\n" +
            "                                </li>\n" +
            "                                <li>\n" +
            "                                    <a href=\"" + path + "портфолио/заборы/\" title=\"заборы\" data-toggle=\"dropdown\" class=\"dropdown-toggle dropdown-style\" onclick=\"location.href = this.href\">Заборы</a>\n" +
            "                                </li>\n" +
            "                                <li>\n" +
            "                                    <a href=\"" + path + "портфолио/сантехническиеработы/\" title=\"Сантехнические работы\" data-toggle=\"dropdown\" class=\"dropdown-toggle dropdown-style\" onclick=\"location.href = this.href\">Сантехнические работы</a>\n" +
            "                                </li>\n" +
            "                                <li>\n" +
            "                                    <a href=\"" + path + "портфолио/септики/\" title=\"септики\" data-toggle=\"dropdown\" class=\"dropdown-toggle dropdown-style\" onclick=\"location.href = this.href\">Септики</a>\n" +
            "                                </li>\n" +
            "                            </ul>\n" +
            "                        </li>\n" +
            "                        <li class=\"dropdown\">\n" +
            "                            <a href=\"" + path + "отзывы/\" title=\"Отзывы\" onclick=\"location.href = this.href\" class=\"nav-item-style dropdown-toggle\">Отзывы</a>\n" +
            "                        </li>\n" +
            "                        <li class=\"dropdown\">\n" +
            "                            <a href=\"" + path + "интернет-магазин/\" title=\"Интернет-магазин\" onclick=\"location.href = this.href\" class=\"nav-item-style dropdown-toggle\">Интернет-магазин</a>\n" +
            "                            <ul class=\"dropdown-menu\">\n" +
            "                                <li>\n" +
            "                                    <a href=\"" + path + "интернет-магазин/\" title=\"Каталог товаров\" data-toggle=\"dropdown\" class=\"dropdown-toggle dropdown-style\" onclick=\"location.href = this.href\">Каталог товаров</a>\n" +
            "                                </li>\n" +
            "                                <li>\n" +
            "                                    <a href=\"" + path + "интернет-магазин/\" title=\"Корзина\" data-toggle=\"dropdown\" class=\"dropdown-toggle dropdown-style\" onclick=\"location.href = this.href\">Корзина</a>\n" +
            "                                </li>\n" +
            "                                <li>\n" +
            "                                    <a href=\"" + path + "интернет-магазин/\" title=\"Оплата\" data-toggle=\"dropdown\" class=\"dropdown-toggle dropdown-style\" onclick=\"location.href = this.href\">Оплата</a>\n" +
            "                                </li>\n" +
            "                                <li>\n" +
            "                                    <a href=\"" + path + "интернет-магазин/\" title=\"Доставка\" data-toggle=\"dropdown\" class=\"dropdown-toggle dropdown-style\" onclick=\"location.href = this.href\">Доставка</a>\n" +
            "                                </li>\n" +
            "                            </ul>\n" +
            "                        </li>\n" +
            "                        <li id=\"lastNav\" class=\"last\">\n" +
            "                            <a href=\"" + path + "контакты/\" title=\"Контакты\" onclick=\"location.href = this.href\" class=\"nav-item-style dropdown-toggle\">Контакты</a>\n" +
            "                        </li>\n" +
            "                    </ul>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>";
        parent.appendChild(nav);
        var dropdownElements = nav.getElementsByClassName("dropdown");
        //for (var item in dropdownElements) {
        for (var i = 0; i < dropdownElements.length; i++) {
            var text = dropdownElements.item(i).innerHTML;
            if (name.indexOf("#") !== -1) {
                var mainEl = document.getElementById("mainNav");
                mainEl.className += " current";
                console.log(mainEl.getElementsByClassName("li"));
                break;
            }
            if (text.indexOf(name) !== -1) {
                dropdownElements.item(i).className += " current";
                break;
            }
            if (name.indexOf("Контакты") !== -1) {
                var lastEl = document.getElementById("lastNav");
                lastEl.className += " current";
                break
            }
        }
        pos = document.getElementsByClassName("header")[0].getBoundingClientRect().bottom + 180
        $(window).scroll(function() {
            //if you hard code, then use console
            //.log to determine when you want the
            //nav bar to stick.
            //pos = document.getElementsByClassName("header")[0].getBoundingClientRect().bottom + (document.documentElement.clientHeight / 8);
            pos = document.getElementsByClassName("header")[0].getBoundingClientRect().bottom + 180
            if ($(window).scrollTop() > pos) {

                nav.style = "position: fixed; top: 0; width:100%; font-size: 16px; background-color:  #828282; border-color: #cacaca;"
            }
            if ($(window).scrollTop() < pos) {
                nav.style = "font-size: 16px; background-color:  #828282; border-color: #cacaca;"
            }
        });
    };
})(jQuery);



(function($) {
    $.getImg = function(name, count) {
        console.log(name, count);
        var parent = document.getElementById("parent");
        for (var i = 1; i < count + 1; i++) {
            var div = document.createElement("div");
            div.className = "col-md-3 col-sm-6 col-xs-12 thumb";
            div.innerHTML = "<a data-fancybox=\"gallery\" href=\"../../image/portfolio/" + name + "/" + i + ".JPG\">" +
                "<img class=\"img-responsive\" data-src=\"../../image/portfolio/" + name + "/" + i + ".JPG\" alt=\"\">" +
                "</a>";
            parent.appendChild(div)
        }
    };
})(jQuery);

(function($) {
    $.getTitle = function() {
        console.log("TITLE");
        var mainContent = document.getElementById("mainContent");
        var h2List = mainContent.getElementsByTagName("h2")

        var ol = document.createElement("ol")
        ol.id = "menu";
        ol.className = "rectangle";
        ol.style = "list-style: outside none;";

        var liRascenci = document.createElement("li")
        var aRascenci = document.createElement("a")

        var attrRascenci = document.createAttribute("name");
        var atrDatat = document.createAttribute("data-toggle");
        atrDatat.value = "modal";
        var atrData_target = document.createAttribute("data-target");
        atrData_target.value = "#exampleModalCenter";
        attrRascenci.value = h2List.length + 1;
        aRascenci.setAttributeNode(attrRascenci);
        aRascenci.setAttributeNode(atrDatat);
        aRascenci.setAttributeNode(atrData_target);
        aRascenci.innerHTML = "<b style=\"font-size: 1.5em\">Расценки</b>";

        liRascenci.appendChild(aRascenci);

        ol.appendChild(liRascenci);
        for (var i = 0; i < h2List.length; i++) {
            var li = document.createElement("li");

            var a = document.createElement("a");
            var attr = document.createAttribute("href");
            attr.value = "#" + (i + 1);
            a.setAttributeNode(attr);
            a.innerHTML = h2List[i].innerText;
            li.appendChild(a);
            ol.appendChild(li);
            var aName = document.createElement("a");
            var attrName = document.createAttribute("name");
            attrName.value = i + 1;
            aName.setAttributeNode(attrName);
            h2List[i].appendChild(aName);
        }
        var parent = document.getElementById("title_a");
        parent.appendChild(ol);
    };
})(jQuery);

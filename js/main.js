$(document).ready(function() {

    if (window.location.href.indexOf("index.html") > -1 || window.location.pathname == "/") { //Aquí se comprueba si el usuario se encuentra en el "index.html" (Se comprueba en la URL).
        $(".bxslider").bxSlider({
            mode: "fade",
            captions: true,
            pager: true,
            slideWidth: 1250
        });
    
        moment.locale("es"); //Aquí se le indica a momentJS que las fechas estarán en español.
        var posts = [ //Array con objetos JSON.
            {
                title: "Prueba de titulo 1",
                date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis dolor libero, vel feugiat tellus tincidunt id. Maecenas malesuada justo dui, ut feugiat quam interdum nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus felis odio, ornare id nulla quis, sagittis malesuada felis. Sed ultrices diam convallis neque pulvinar suscipit. Integer rhoncus sit amet libero ac laoreet. Donec suscipit neque ut sapien porttitor dignissim.     Integer magna neque, venenatis vitae mollis eu, mattis eget magna. Aliquam erat volutpat. Curabitur sit amet fermentum justo. Suspendisse eget ligula fermentum neque pretium iaculis. Etiam imperdiet aliquet dictum. Sed sit amet porta turpis, molestie molestie lectus. Nullam interdum gravida quam, a aliquam urna blandit in."
            },
            {
                title: "Prueba de titulo 2",
                date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis dolor libero, vel feugiat tellus tincidunt id. Maecenas malesuada justo dui, ut feugiat quam interdum nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus felis odio, ornare id nulla quis, sagittis malesuada felis. Sed ultrices diam convallis neque pulvinar suscipit. Integer rhoncus sit amet libero ac laoreet. Donec suscipit neque ut sapien porttitor dignissim.     Integer magna neque, venenatis vitae mollis eu, mattis eget magna. Aliquam erat volutpat. Curabitur sit amet fermentum justo. Suspendisse eget ligula fermentum neque pretium iaculis. Etiam imperdiet aliquet dictum. Sed sit amet porta turpis, molestie molestie lectus. Nullam interdum gravida quam, a aliquam urna blandit in."
            },
            {
                title: "Prueba de titulo 3",
                date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis dolor libero, vel feugiat tellus tincidunt id. Maecenas malesuada justo dui, ut feugiat quam interdum nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus felis odio, ornare id nulla quis, sagittis malesuada felis. Sed ultrices diam convallis neque pulvinar suscipit. Integer rhoncus sit amet libero ac laoreet. Donec suscipit neque ut sapien porttitor dignissim.     Integer magna neque, venenatis vitae mollis eu, mattis eget magna. Aliquam erat volutpat. Curabitur sit amet fermentum justo. Suspendisse eget ligula fermentum neque pretium iaculis. Etiam imperdiet aliquet dictum. Sed sit amet porta turpis, molestie molestie lectus. Nullam interdum gravida quam, a aliquam urna blandit in."
            },
            {
                title: "Prueba de titulo 4",
                date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis dolor libero, vel feugiat tellus tincidunt id. Maecenas malesuada justo dui, ut feugiat quam interdum nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus felis odio, ornare id nulla quis, sagittis malesuada felis. Sed ultrices diam convallis neque pulvinar suscipit. Integer rhoncus sit amet libero ac laoreet. Donec suscipit neque ut sapien porttitor dignissim.     Integer magna neque, venenatis vitae mollis eu, mattis eget magna. Aliquam erat volutpat. Curabitur sit amet fermentum justo. Suspendisse eget ligula fermentum neque pretium iaculis. Etiam imperdiet aliquet dictum. Sed sit amet porta turpis, molestie molestie lectus. Nullam interdum gravida quam, a aliquam urna blandit in."
            },
            {
                title: "Prueba de titulo 5",
                date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis dolor libero, vel feugiat tellus tincidunt id. Maecenas malesuada justo dui, ut feugiat quam interdum nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus felis odio, ornare id nulla quis, sagittis malesuada felis. Sed ultrices diam convallis neque pulvinar suscipit. Integer rhoncus sit amet libero ac laoreet. Donec suscipit neque ut sapien porttitor dignissim.     Integer magna neque, venenatis vitae mollis eu, mattis eget magna. Aliquam erat volutpat. Curabitur sit amet fermentum justo. Suspendisse eget ligula fermentum neque pretium iaculis. Etiam imperdiet aliquet dictum. Sed sit amet porta turpis, molestie molestie lectus. Nullam interdum gravida quam, a aliquam urna blandit in."
            }
        ];

        posts.forEach((objeto, i) => { //Recorriendo objetos y generando plantillas de texto.
            var post = `
                <article class="post">
                    <h2>${objeto.title}</h2>
                    <span class="date">${objeto.date}</span>
                    <p>
                        ${objeto.content}
                    </p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
            `;
            $("#posts").append(post); //Añadiendo los articulos a su respectivo <div>.
        });
    }

    if (window.location.href.indexOf("reloj.html") > -1) { //Aquí se comprueba si el usuario se encuentra en el "reloj.html" (Se comprueba en la URL).
        setInterval(function() {
            var reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj);
        }, 1000);
    }

    if (window.location.href.indexOf("sobre_mi.html") > -1) { //Aquí se comprueba si el usuario se encuentra en el "sobre_mi.html" (Se comprueba en la URL).
        $("#acordeon").accordion();
    }

    if (window.location.href.indexOf("contacto.html") > -1) { //Aquí se comprueba si el usuario se encuentra en el "contacto.html" (Se comprueba en la URL).
        $("form input[name='fecha']").datepicker({
            dateFormat: "dd-mm-yy"
        });

        $.validate({ //Este método inicia el plugin "jquery.form-validator".
            lang: "es" //El valor de este objeto JSON indica el idioma de los mensajes mostrados.
        });
    }

    var tema = $("#tema");
    console.log(localStorage.getItem("tema"))
    if (localStorage.getItem("tema") != null) {
        tema.attr("href", localStorage.getItem("tema"));
    }

    $("#verde").click(function() {
        localStorage.setItem("tema", "css/green.css");
        tema.attr("href", localStorage.getItem("tema"));
    });
    $("#rojo").click(function() {
        localStorage.setItem("tema", "css/red.css");
        tema.attr("href", localStorage.getItem("tema"));
    });
    $("#azul").click(function() {
        localStorage.setItem("tema", "css/blue.css");
        tema.attr("href", localStorage.getItem("tema"));
    });

    $(".subir").click(function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0 //Aquí se indica que el scroll debe subir hasta el px 0.
        }, 500); //Aquí se indica que la animación dura 500ms.
        return false;
    });

    $("#login form").submit(function() {
        var nombre = $("#nombre").val();
        localStorage.setItem("nombre", nombre);
    });

    var nombre = localStorage.getItem("nombre");
    if (nombre != null && nombre != "undefined") {
        var parrafo = $("#sobreMi p");
        parrafo.html("<br><strong>Bienvenido: " + nombre + "</strong>");
        parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>")
        $("#login").hide();

        $("#logout").click(function() {
            localStorage.clear();
            location.reload(); //Esta instrucción recarga la página.
        });
    }

});

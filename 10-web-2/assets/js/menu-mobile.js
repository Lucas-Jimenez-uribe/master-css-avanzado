document.addEventListener("DOMContentLoaded", (event) => {
  //! Seleccionar los elementos principales (LOS BOTONES)
  let mobile__btn = document.querySelector(".navbar__mobile-btn");
  let mobile__menu = document.querySelector(".menu-mobile");
  //!Funcion de mostrar y ocultar menu

  const showHiddenMenu = () => {
    let isMenuVisible = mobile__menu.classList.contains("menu-mobile--show");

    if (isMenuVisible) {
      mobile__menu.classList.remove("menu-mobile--show");
    } else {
      mobile__menu.classList.add("menu-mobile--show");
    }
  };

  //! Al dar click al boton del menu muestra el menu de navegacion resposive
  mobile__btn.addEventListener("click", showHiddenMenu);

  //!Al redimensionar la pantalla oculatr el menu si es nescesario
  window.addEventListener("resize", () => {
    let window_width = window.innerWidth;

    if (window_width >= 1000) {
      mobile__menu.classList.remove("menu-mobile--show");
    }
  });

  //! poder cerrar el menu con el boton de X
  let btn_close = document.querySelector(".menu-mobile__close");

  btn_close.addEventListener("click", showHiddenMenu);

  //! desplegar submenus

  let menu_item = document.querySelectorAll(".menu-mobile__item");

  menu_item.forEach(item => {
    item.addEventListener("click", (event) => {
        let submenu = item.lastElementChild;

        if(submenu.className === "menu-mobile__submenu-mobile"){
            if(submenu.style.display === "block"){
                submenu.style.display = "none";
            }else{
                submenu.style.display = "block";
            }
        }
    });
  });


});

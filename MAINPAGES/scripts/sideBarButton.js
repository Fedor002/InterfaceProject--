const sideMenu = document.getElementById("sideMenu");
const sidebarTsech = document.querySelector('.sidebar');

sideMenu.addEventListener('click', openMenu);

function openMenu(sidebarTsech){

    const sidebarTexts = sidebar.querySelectorAll(".sidebar-text"); // Получаем все элементы с классом "sidebar-text"

    if (sidebar.style.width === "250px") {
      sidebar.style.width = "80px"; // Изменяем ширину сайдбара обратно на 80 пикселей
      // Скрываем текст у иконок при сворачивании сайдбара
      sidebarTexts.forEach((text) => {
        text.style.display = "none";
      });
    } else {
      sidebar.style.width = "250px"; // Изменяем ширину сайдбара на 250 пикселей
      // Показываем текст у иконок при раскрытии сайдбара
      sidebarTexts.forEach((text) => {
        text.style.display = "flex";
      });
    }

}
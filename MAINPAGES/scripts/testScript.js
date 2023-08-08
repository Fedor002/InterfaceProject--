const vidgetLine = document.querySelector('.vidgetLine');
const vidgetContext = document.querySelector('.vidgetContext')

vidgetLine.addEventListener("click", function(event){
    // for (var i = vidgetLine.children.length - 1; i >= 0; i--) {
    //     vidgetLine.children[i].classList.remove('activeButton');
    // }

    for (var i = vidgetContext.children.length - 1; i >= 0; i--) {
        vidgetContext.children[i].classList.remove('activeBlock');
    }

    if (event.target.closest('button')){
        // event.target.closest('button').classList.add('activeButton');
        event.target.closest('button').classList.toggle('activeButton');

        document.getElementById(event.target.closest('button').getAttribute('data-target')).classList.add('activeBlock');
    }
})

var sortDirection = "asc"; // По умолчанию сортировка по возрастанию


// Ежедневник
function sortTable(columnIndex) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;

  while (switching) {
    switching = false;
    rows = table.rows;
    
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[columnIndex];
      y = rows[i + 1].getElementsByTagName("td")[columnIndex];

      // Для сортировки даты рождения предварительно преобразуем строку в объект Date
      if (columnIndex === 3) {
        x = new Date(x.innerHTML);
        y = new Date(y.innerHTML);
      } else {
        x = x.innerHTML;
        y = y.innerHTML;
      }
      
      // Сравниваем значения в зависимости от направления сортировки
      if (sortDirection === "asc" && x > y) {
        shouldSwitch = true;
        break;
      } else if (sortDirection === "desc" && x < y) {
        shouldSwitch = true;
        break;
      }
    }
    
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }

  // Изменяем направление сортировки после каждого клика
  if(sortDirection === "asc"){
    sortDirection = "desc";
  }
  else{
    sortDirection = "asc";
  }
}

function sortTableWorker(columnIndex) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTableWorker");
  switching = true;

  while (switching) {
    switching = false;
    rows = table.rows;
    
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[columnIndex];
      y = rows[i + 1].getElementsByTagName("td")[columnIndex];

      // Для сортировки даты рождения предварительно преобразуем строку в объект Date
      
      x = x.innerHTML;
      y = y.innerHTML;    
      
      // Сравниваем значения в зависимости от направления сортировки
      if (sortDirection === "asc" && x > y) {
        shouldSwitch = true;
        break;
      } else if (sortDirection === "desc" && x < y) {
        shouldSwitch = true;
        break;
      }
    }
    
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }

  // Изменяем направление сортировки после каждого клика
  if(sortDirection === "asc"){
    sortDirection = "desc";
  }
  else{
    sortDirection = "asc";
  }
}

const ezhednevnik = document.querySelector('.firstBlock');
var lastClickedRow = null;

ezhednevnik.addEventListener("click", function(event){
  var clickedRow = event.target.closest('tbody tr');

  for (var i = document.querySelector('.secondBlock').children.length - 1; i >= 0; i--) {
    document.querySelector('.secondBlock').children[i].classList.remove('activeDiscription');
}

  if (clickedRow) {
    if (clickedRow === lastClickedRow) {
      // Повторное нажатие на строку
      document.querySelector('.firstBlock').style.width = "100%";
      document.querySelector('.secondBlock').style.display = "none";
      lastClickedRow = null;
      } 
    else {
      // event.target.closest('button').classList.add('activeButton');
      document.querySelector('.firstBlock').style.width = "70%";
      document.querySelector('.secondBlock').style.display = "block";
      document.getElementById(event.target.closest('tbody tr').getAttribute('data-target')).classList.add('activeDiscription');
      lastClickedRow = clickedRow;
    }
  }
})
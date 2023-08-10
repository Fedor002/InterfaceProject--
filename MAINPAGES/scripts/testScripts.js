const vidgetLineHelper = document.querySelector('.vidgetLine');


vidgetLineHelper.addEventListener("click", function(event){
    // for (var i = vidgetLine.children.length - 1; i >= 0; i--) {
    //     vidgetLine.children[i].classList.remove('activeButton');
    // }

    // for (var i = vidgetContext.children.length - 1; i >= 0; i--) {
    //     vidgetContext.children[i].classList.remove('activeBlock');
    // }

    if (event.target.closest('button')){
        // event.target.closest('button').classList.add('activeButton');
        event.target.closest('button').classList.toggle('activeButton');

        // // document.getElementById(event.target.closest('button').getAttribute('data-target')).classList.add('activeBlock');
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

// План выполнения


const projects = document.querySelectorAll('.project');

projects.forEach((project) => {
  const subProjects = project.querySelectorAll('.sub-projects');
  subProjects.forEach((subProject)=>{
    var sum = 0;
    var count = 0;
    var tbodyTest = subProject.querySelector('tbody');
    var tbodyTr = tbodyTest.querySelectorAll('tr');
    tbodyTr.forEach((indivTr) =>{
      var progressBar = indivTr.querySelector("#progressBar");
      var progressValue = indivTr.querySelector("#progressValue");
      // Получаем заданное значение прогресса из span
      var value = parseInt(progressValue.innerText, 10);
      sum += value;
      count++;
    
      // Устанавливаем значение атрибута value элемента progress
      progressBar.value = value;

    })

    var progressWhole = project.querySelector('#progressWhole');

    // Вычисляем среднее значение
    var average = Math.round(sum / count,0);

    // Устанавливаем среднее значение в атрибут value элемента progress
    progressWhole.value = average;

    project.addEventListener('click', () => {
      subProject.classList.toggle('active');
    });
  })

});

// Финансы

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Год', 'В теории', 'По факту'],
    ['2020', 2000, 2143],
    ['2021', 2150, 2087],
    ['2022', 2100, 2108]
   ]);
   var options = {
    title: 'Статистика выполнения поланов',
    hAxis: {title: 'Год'},
    vAxis: {title: 'Кол-во выполненых планов'}
   };
   var chart = new google.visualization.ColumnChart(document.getElementById('moneyGain'));
   chart.draw(data, options);
   var n = document.querySelector('#moneyGain');
   var n1 = n.querySelector('div');
   var n2 = n1.querySelector('div');
   var n3 = n2.querySelector('div');
   var n4 = n3.querySelector('svg');
   n4.style.overflow = 'visible';
   n4.style.scale = '0.8';

   var data = google.visualization.arrayToDataTable([
    ['Год', 'В теории', 'По факту'],
    ['2020', 300, 313],
    ['2021', 400, 378],
    ['2022', 450, 449]
   ]);
   var options = {
    title: 'Посещяемость',
    hAxis: {title: 'Год'},
    vAxis: {title: 'Зафиксированно в целом'}
   };
   var chart = new google.visualization.ColumnChart(document.getElementById('attendance'));
   chart.draw(data, options);
   var n = document.querySelector('#attendance');
   var n1 = n.querySelector('div');
   var n2 = n1.querySelector('div');
   var n3 = n2.querySelector('div');
   var n4 = n3.querySelector('svg');
   n4.style.scale = '0.8';
   n4.style.overflow = 'visible';

  var data = google.visualization.arrayToDataTable([
    ['Пол', 'Процент'],
    ['М',     78.05],
    ['Ж', 21.95]
  ]);
  var options = {
    title: 'Соотношение М к М',
    is3D: true,
    pieResidueSliceLabel: 'Нету данных'
  };
  var chart = new google.visualization.PieChart(document.getElementById('MtoW'));
  chart.draw(data, options);

  var n = document.querySelector('#MtoW');
   var n1 = n.querySelector('div');
   var n2 = n1.querySelector('div');
   var n3 = n2.querySelector('div');
   var n4 = n3.querySelector('svg');
   n4.style.overflow = 'visible';
   n4.style.scale = '0.8';

}
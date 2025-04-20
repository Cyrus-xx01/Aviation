/*const csvUrl = 'https://raw.githubusercontent.com/amit-12k/analytics-dashboard-assessment/main/data-to-visualize/Electric_Vehicle_Population_Data.csv';
let allVehicles = [];
let selectedYear = "all";
async function loadData() {
  const res = await fetch(csvUrl);
  const csvText = await res.text();
  const rows = csvText.split('\n').map(row => row.split(','));
  const headers = rows[0];
  const data = rows.slice(1).filter(row => row.length === headers.length);

  const vehicles = data.map(row => {
    const obj = {};
    headers.forEach((h, i) => obj[h.trim()] = row[i].trim());
    return obj;
  });

  return vehicles;
}

function displayWidgets(vehicles) {
  const makes = new Set(vehicles.map(v => v.Make));
  const models = new Set(vehicles.map(v => v.Model));

  const widgetHTML = `
    <div class="widget"><h3>Total Vehicles</h3><p>${vehicles.length}</p></div>
    <div class="widget"><h3>Unique Makes</h3><p>${makes.size}</p></div>
    <div class="widget"><h3>Unique Models</h3><p>${models.size}</p></div>
  `;

  document.getElementById('widgets').innerHTML = widgetHTML;
}

function displayTopModels(vehicles) {
  const countMap = {};
  vehicles.forEach(v => {
    countMap[v.Model] = (countMap[v.Model] || 0) + 1;
  });

  const topModels = Object.entries(countMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  const tbody = document.getElementById('modelTable').querySelector('tbody');
  tbody.innerHTML = topModels.map(([model, count]) => `
    <tr><td>${model}</td><td>${count}</td></tr>
  `).join('');
}

function drawMakeChart(vehicles) {
    const makeCount = {};
    vehicles.forEach(v => {
      makeCount[v.Make] = (makeCount[v.Make] || 0) + 1;
    });
  
    const topMakes = Object.entries(makeCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);
  
    const labels = topMakes.map(([make]) => make);
    const data = topMakes.map(([, count]) => count);
  
    new Chart(document.getElementById('makeChart'), {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Number of Vehicles',
          data: data,
          backgroundColor: '#3498db',
          borderRadius: 5,
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: { stepSize: 1 }
          }
        }
      }
    });
  }

  function drawTypeChart(vehicles) {
    const typeCount = {};
    vehicles.forEach(v => {
      const type = v["Electric Vehicle Type"];
      typeCount[type] = (typeCount[type] || 0) + 1;
    });
  
    const labels = Object.keys(typeCount);
    const data = Object.values(typeCount);
  
    const colors = ['#1abc9c', '#e67e22', '#9b59b6', '#f39c12', '#2ecc71'];
  
    new Chart(document.getElementById('typeChart'), {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: colors,
          borderColor: '#fff',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }

  function renderDashboard(vehicles) {
    displayWidgets(vehicles);
    displayTopModels(vehicles);
    drawMakeChart(vehicles);
    drawTypeChart(vehicles);
  }

  function populateYearFilter(vehicles) {
    const yearSet = new Set(vehicles.map(v => v["Model Year"]));
    const years = Array.from(yearSet).sort((a, b) => b - a);
    const select = document.getElementById("yearFilter");
  
    years.forEach(year => {
      const option = document.createElement("option");
      option.value = year;
      option.textContent = year;
      select.appendChild(option);
    });
  
    select.addEventListener("change", () => {
        selectedYear = select.value; // use global variable
        applyFilters(); // this will consider both year & city
      });
      
  }
  function applyFilters() {
    let filtered = allVehicles;
  
    if (selectedYear !== "all") {
      filtered = filtered.filter(v => v["Model Year"] == selectedYear);
    }
    if (selectedCity !== "all") {
      filtered = filtered.filter(v => v["City"] === selectedCity);
    }
  
    renderDashboard(filtered);
  }
  
  
    
  
  
  
(async function initDashboard(vehicles) {
  const vehicles = await loadData();
  
  allVehicles = vehicles;
  populateYearFilter(allVehicles);
renderDashboard(allVehicles);
  displayWidgets(vehicles);
  displayTopModels(vehicles);
  drawMakeChart(vehicles);
  drawTypeChart(vehicles);
})();
*/


const csvUrl = 'https://raw.githubusercontent.com/amit-12k/analytics-dashboard-assessment/main/data-to-visualize/Electric_Vehicle_Population_Data.csv';
let allVehicles = [];
let selectedYear = "all";
let selectedCity = "all"; // ✅ added missing variable

async function loadData() {
  const res = await fetch(csvUrl);
  const csvText = await res.text();
  const rows = csvText.split('\n').map(row => row.split(','));
  const headers = rows[0];
  const data = rows.slice(1).filter(row => row.length === headers.length);

  const vehicles = data.map(row => {
    const obj = {};
    headers.forEach((h, i) => obj[h.trim()] = row[i].trim());
    return obj;
  });

  return vehicles;
}

function displayWidgets(vehicles) {
  const makes = new Set(vehicles.map(v => v.Make));
  const models = new Set(vehicles.map(v => v.Model));

  const widgetHTML = `
    <div class="widget"><h3>Total Vehicles</h3><p>${vehicles.length}</p></div>
    <div class="widget"><h3>Unique Makes</h3><p>${makes.size}</p></div>
    <div class="widget"><h3>Unique Models</h3><p>${models.size}</p></div>
  `;

  document.getElementById('widgets').innerHTML = widgetHTML;
}

function displayTopModels(vehicles) {
  const countMap = {};
  vehicles.forEach(v => {
    countMap[v.Model] = (countMap[v.Model] || 0) + 1;
  });

  const topModels = Object.entries(countMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  const tbody = document.getElementById('modelTable').querySelector('tbody');
  tbody.innerHTML = topModels.map(([model, count]) => `
    <tr><td>${model}</td><td>${count}</td></tr>
  `).join('');
}

function drawMakeChart(vehicles) {
  const makeCount = {};
  vehicles.forEach(v => {
    makeCount[v.Make] = (makeCount[v.Make] || 0) + 1;
  });

  const topMakes = Object.entries(makeCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  const labels = topMakes.map(([make]) => make);
  const data = topMakes.map(([, count]) => count);

  new Chart(document.getElementById('makeChart'), {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Number of Vehicles',
        data: data,
        backgroundColor: '#3498db',
        borderRadius: 5,
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1 }
        }
      }
    }
  });
}

function drawTypeChart(vehicles) {
  const typeCount = {};
  vehicles.forEach(v => {
    const type = v["Electric Vehicle Type"];
    typeCount[type] = (typeCount[type] || 0) + 1;
  });

  const labels = Object.keys(typeCount);
  const data = Object.values(typeCount);

  const colors = ['#1abc9c', '#e67e22', '#9b59b6', '#f39c12', '#2ecc71'];

  new Chart(document.getElementById('typeChart'), {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: colors,
        borderColor: '#fff',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

function renderDashboard(vehicles) {
  displayWidgets(vehicles);      // ✅ FIXED function names
  displayTopModels(vehicles);
  drawMakeChart(vehicles);
  drawTypeChart(vehicles);
}

function populateYearFilter(vehicles) {
  const yearSet = new Set(vehicles.map(v => v["Model Year"]));
  const years = Array.from(yearSet).sort((a, b) => b - a);
  const select = document.getElementById("yearFilter");

  years.forEach(year => {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    select.appendChild(option);
  });

  select.addEventListener("change", () => {
    selectedYear = select.value;
    applyFilters();
  });
}

// Optional if you want to also filter by city
function populateCityFilter(vehicles) {
  const citySet = new Set(vehicles.map(v => v.City));
  const cities = Array.from(citySet).sort();
  const select = document.getElementById("cityFilter");

  cities.forEach(city => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    select.appendChild(option);
  });

  select.addEventListener("change", () => {
    selectedCity = select.value;
    applyFilters();
  });
}

function applyFilters() {
  let filtered = allVehicles;

  if (selectedYear !== "all") {
    filtered = filtered.filter(v => v["Model Year"] == selectedYear);
  }

  if (selectedCity !== "all") {
    filtered = filtered.filter(v => v.City === selectedCity);
  }

  renderDashboard(filtered);
}

(async function initDashboard() {
  const vehicles = await loadData();

  allVehicles = vehicles;

  populateYearFilter(allVehicles);
  populateCityFilter(allVehicles); // optional: add this if you're using city filter
  renderDashboard(allVehicles);
})();

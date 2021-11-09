var options1 = {
    chart: {
        type: 'area',
        height: 250,
        toolbar: {
            show: false
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [0, 5],
        curve: 'smooth'
    },
    series: [{
      data: [
        [1327359600000,30.95],
        [1327446000000,31.34],
        [1327532400000,31.18],
        [1327618800000,31.05],
        [1327878000000,31.00],
        [1327964400000,30.95],
        [1328050800000,31.24],
        [1328137200000,31.29],
        [1328223600000,31.85],
        [1328482800000,31.86],
        [1328569200000,32.28],
        [1328655600000,32.10],
        [1328742000000,32.65],
        [1328828400000,32.21],
        [1329087600000,32.35],
        [1329174000000,32.44],
        [1329260400000,32.46],
        [1329346800000,32.86],
        [1329433200000,32.75],
        [1329778800000,32.54],
        [1329865200000,32.33],
        [1329951600000,32.97]
      ]
    }],
    xaxis: {
        type: "datetime",
        tooltip: {
          enabled: false
        }
    },
    yaxis: {
        tickAmount: 2,
        opposite: true
    },
    tooltip: {
        x: {
        format: "dd.MM.yyyy HH:mm"
        }
    }
  }
  
  var chart1 = new ApexCharts(document.querySelector(".chart_1"), options1);
  
  chart1.render();

var options2 = {
    chart: {
        type: 'area',
        height: 250,
        toolbar: {
            show: false
        },
    },
    colors: ["#00C90D"],
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [0, 5],
        curve: 'smooth'
    },
    series: [{
      data: [
        [1327359600000,30.95],
        [1327446000000,31.34],
        [1327532400000,31.18],
        [1327618800000,31.05],
        [1327878000000,31.00],
        [1327964400000,30.95],
        [1328050800000,31.24],
        [1328137200000,31.29],
        [1328223600000,31.85],
        [1328482800000,31.86],
        [1328569200000,32.28],
        [1328655600000,32.10],
        [1328742000000,32.65],
        [1328828400000,32.21],
        [1329087600000,32.35],
        [1329174000000,32.44],
        [1329260400000,32.46],
        [1329346800000,32.86],
        [1329433200000,32.75],
        [1329778800000,32.54],
        [1329865200000,32.33],
        [1329951600000,32.97]
      ]
    }],
    xaxis: {
        type: "datetime",
        tooltip: {
          enabled: false
        }
    },
    yaxis: {
        tickAmount: 2,
        opposite: true
    },
    tooltip: {
        x: {
        format: "dd.MM.yyyy HH:mm"
        }
    }
  }
  
  var chart2 = new ApexCharts(document.querySelector(".chart_2"), options2);
  
  chart2.render();
$(function () {
  // Exeter acadmic
  $('#perceptions .exeter.self-perception-academic').highcharts({
    colors: ['#580306', '#870309', '#C70A14', '#E73035', '#FC6567', '#FDAEAF'],
    // colors: ['#580306', '#C70A14', '#FC6567', '#FDAEAF'],
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: [
        'Very<br />academically-oriented',
        'Somewhat<br />academically-oriented',
        'Not very<br />academically-oriented'
      ],
    },
    yAxis: {
      max: 100
    },
    plotOptions: {
      series: {
        colorByPoint: true
      }
    },
    title: {
      text: 'Perception of students at Exeter is that they are...'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      data: [76.43, 22.92, 0.64],
      showInLegend: false
      // data: [120, 36, 1]
    }]
  });
});

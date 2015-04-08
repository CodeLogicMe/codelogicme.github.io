var donutGraph = {
  init: function() {
    this.diagram();
  },
  diagram: function() {
    var chartWidth   = 440,
        chartHeight  = 344,
        chartRadius  = 115,
        chartCenterW = chartWidth / 2,
        chartCenterH = chartHeight / 2,
        startAngle   = 0;

    var graphLanguages = [
      {
        "language": "HTML/CSS",
        "value": 20,
        "color": "#e44d26"
      }, {
        "language": "Ruby",
        "value": 20,
        "color": "#a6120d"
      }, {
        "language": "Android",
        "value": 20,
        "color": "#7fbd02"
      }, {
        "language": "Javascript",
        "value": 20,
        "color": "#d6d6d6"
      }, {
        "language": "NodeJS",
        "value": 20,
        "color": "#8bc84b"
      }
    ];

    var r = Raphael("holder", chartWidth, chartHeight),
        rad = chartRadius,
        defaultText = '',
        speed = 250;

    var title = r.text(chartCenterW, chartCenterH, defaultText).attr({
      font: '16px Roboto',
      fill: '#323237'
    }).toFront();

    r.customAttributes.arc = function(value, color, rad) {
      var v     = 3.6 * value,
          alpha = v == 360 ? 359.99 : v,
          a     = startAngle * Math.PI/180,
          b     = (startAngle + alpha) * Math.PI/180,
          sx    = chartCenterW + rad * Math.cos(a),
          sy    = chartCenterH - rad * Math.sin(a),
          x     = chartCenterW + rad * Math.cos(b),
          y     = chartCenterH - rad * Math.sin(b),
          path  = [
          ['M', sx, sy],
          ['A', rad, rad, 0, 0, 0, x, y]
          ];
      return { path: path, stroke: color };
    };

    graphLanguages.forEach(function(entry) {
      var color = entry.color,
          value = entry.value,
          text = entry.language;

      var z = r.path().attr({
        arc: [value, color, rad],
        'stroke-width': 60
      });

      startAngle += (3.6 * value);

      z.mouseover(function(){
        this.animate({ 'stroke-width': 80, opacity: .75 }, 1000, 'elastic');
        if (Raphael.type != 'VML') { //solves IE problem
          this.toFront();
        }
        title.stop().animate({ opacity: 0 }, 0, '>', function(){
          this.attr({ text: text}).animate({ opacity: 1 }, 100, '<');
        });
      }).mouseout(function(){
        this.stop().animate({ 'stroke-width': 60, opacity: 1 }, speed*4, 'elastic');
        title.stop().animate({ opacity: 0 }, speed, '>', function(){
          title.attr({ text: defaultText }).animate({ opacity: 1 }, speed, '<');
        });
      });
    });
  }
}

$(function() {
  var today = new Date();
  var beginningCL = new Date(2012, 7, 10);
  var daysCount = Math.floor((today - beginningCL) / (1000 * 60 * 60 * 24));
  $(".working-days").text(daysCount + " days of work");

  $(".nav-list li a").click(function(event) {
    event.preventDefault();
  });

  $(".nav-container").onePageNav({
    changeHash: true,
    currentClass: 'active'
  });

  $(document).on("scroll", function() {
    if($(window).scrollTop() <= 1) {
      $("header").removeClass("scrolled");
      $(".logo-container .logo-text").removeClass("scrollDisplay");
    } else {
      $("header").addClass("scrolled");
      $(".logo-container .logo-text").addClass("scrollDisplay");
    }
  });
  donutGraph.init();
});

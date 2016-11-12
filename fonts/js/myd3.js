// <rect x="50" y="20" rx="20" ry="20" width="150" height="150"
//   style="fill:red;stroke:black;stroke-width:5;opacity:0.5" />

//   <circle cx="89" cy="75" r="10" stroke="gray" stroke-width="2" fill="red" />
//    <circle cx="159" cy="75" r="10" stroke="gray" stroke-width="2" fill="red" />
// <rect x="108" y="110" width="30" height="30" style="fill:rgb(159,159,159);stroke-width:3;stroke:gray">
var svgctrl = d3.select('svg');

var cx=250;
var c1 = svgctrl.append('circle');
c1.attr('cx',cx-35).attr('cy',75).attr( 'r',10).attr('stroke','gray').attr('stroke-width',2).attr('fill','red');

var c2 = svgctrl.append('circle');
c2.attr('cx',cx+35).attr('cy',75).attr( 'r',10).attr('stroke','gray').attr('stroke-width',2).attr('fill','red');


var r1 = svgctrl.append('rect');
r1.attr('x',cx).attr('y',108).attr( 'r',30).attr('stroke','gray').attr('stroke-width',3).attr('fill','red');


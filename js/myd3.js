// <rect x="50" y="20" rx="20" ry="20" width="150" height="150"
//   style="fill:red;stroke:black;stroke-width:5;opacity:0.5" />
//   <circle cx="89" cy="75" r="10" stroke="gray" stroke-width="2" fill="red" />

// var svgctrl = d3.select('svg');
// var cx=250;
//  var cy=150;

// var r=110;
// var s1=70;

// var c1 = svgctrl.append('circle');
// c1.attr('cx',cx).attr('cy',cy).attr( 'r',r).attr('stroke','#AE092B').attr('stroke-width',18).attr('fill','#FFFFFF');
 
// var l1 = svgctrl.append('line');
// l1.attr('x1',cx+1).attr('y1',cy-r).attr('x2',cx).attr('y2',cy+r).attr('stroke','#AE092B').attr('stroke-width',18);
 
//  var r1 = svgctrl.append('rect');
// r1.attr('x',cx-s1/2).attr('y',cy-31).attr('rx',5).attr('ry',5).attr('width',s1).attr('height',s1).attr('stroke','#AE092B').attr('stroke-width',18).attr('fill','#FFFFFF');


function move() {
var svgctrl = d3.select('svg');

 var cx = $('#cx1').val();
 var cy= $('#cy1').val();
 var s=70;
  
var c1 = svgctrl.append('circle');
c1.attr('cx',cx).attr('cy',cy).attr( 'r',100).attr('stroke','#AE092B').attr('stroke-width',18).attr('fill','#FFFFFF');
  var r1 = svgctrl.append('rect');
r1.attr('x',cx-35).attr('y',cy-36).attr('rx',5).attr('ry',5).attr('width',s).attr('height',s).attr('stroke','#AE092B').attr('stroke-width',18).attr('fill','#FFFFFF');



}

$('#yidon').bind('click', move);
 





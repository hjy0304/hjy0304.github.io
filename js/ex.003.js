function BMI(){
    var h=$('#height').val();
    
    var w=$('#weight').val();
    h=h / 100.0;
    var bmi=w / ( h * h );
    $('#output').text(bmi);
}
$('#test').bind('click',BMI);
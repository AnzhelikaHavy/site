$(function(){   //+++++++++++++++++++++++++++

/*СЛАЙДШОВ ГАЛЕРЕЯ
var flag = true;
$('#svitchGal').click(function(){
	if(flag){
		$('#gallery').slideDown(2000);
		flag = false;
	}
	else{
		$('#gallery').slideUp(2000);
		 flag = true;
	}
});
*/


$('#small a').click(function(eventObject){
eventObject.preventDefault();
if($('#big img').attr('src') !=$(this).attr('href')){
$('#big img').hide().attr('src',$(this).attr('href')).fadeIn(7000)

}
});
$('#small a img').click(function(){
	$('#small a img').fadeTo(500,1).css('border','0px');
	$(this).fadeTo(500,0.6).css('border','1px dotted #cccccc');
});

//7-5
var regV = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
var myEmail = $('#email');

myEmail.focus(function(){
	if($(this).val() == $(this).attr('value')){
	$(this).val('');
	}
});
myEmail.blur(function(){
	var userEmail = $(this).val();
	
	if(userEmail == ''){
		$(this).val($(this).attr('value')).css('border','4px solid #cccccc');
	}
	else if(userEmail.search(regV) == -1){
	$(this).css('border','4px solid #cc0000');
	alert("++++++++++++++");
	}
	else{
		$(this).css('border','4px solid #00cc00');
	}
});
/*
$('#my_button').click(function(){
	$(this).attr('value','Отправляю....');
	$(this).attr('disabled','disabled');
});*/
}) //++++++++++++++++++++++++++++++++++++++++++++++++
 
 

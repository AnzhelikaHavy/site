$(function(){   //++++++++++++++++++++++++++++++++++++++

	 //alert("проба+++++");
	 
/*
	 $('p')
	 $('#forheader')
	 $('#forfooter')
	 
	 $('body')
	 $('.maindiv')
	 $('#main_div')
	 $('#forbody')
	 
	 $('p strong')
	 
	 $('#div_for_img')
	 $('#div_for_img img')
	 $('#div_for_img > img')
	 
	 $('#main_h1') 
	 $('#main_h1 + p')
	 
	 $('#my_button, select')
	 
	 $('img[width="200"]')
	 $('a[href^="http"]')
	 
	 $('img[src$=".jpg"]')
	 $('img[src*="moto"]')
	 
	 
	 --------------  Задание 1 (по 3 варианта) ------------
	 $('#my_links a[href^="documents"]')
	 $('#forfooter img[title="Производители"]')
	 $('img[height*="5"]')
	 
	 $('img[alt="Хедер"]')
	 $('img[height*="67"]')
	 $('img[width*="900"]')
	 
	 $('table[title="Таблица цен на мотоциклы"]')
	 $('input[type=checkbox]')
	 $('select[name=moto]')
	 
	 $('#moto_models + h3')
	 $('#bigform div')
	 $('#moto_table tbody tr')
	 
	 ---------- Задание 2 (придумать по 4 способа) ---------	
	 //	1.	Все ссылки, внешние/внутринние ссылки:
	 $('a')
	 $('a[href*=documents]')
	 $('a[href*=http]')
	 $('#superlink')
	 $('#my_links a')
	 
	 //	2.	Картинку в футере по атрибутам: 
	 $('img[title="Производители"]')
	 $('img[scr*="footer.jpg"]')
	 $('img[scr$="footer.jpg"]')
	 $('img[alt="Футер"]')
	 $('img[height="67"]')
	 
	 //	3.	Картинки, у которых значение атрибута height начинается на "1"; заканчивается на "5" или на "7" 
	 $('img[height^=1], img[height$=5], img[height$=7]')

     //	4.	Выборка по значению атрибута альтернативный текст		
	 $('img[alt=Хедер]')
	 $('img[alt=Футер]')
	 $('img[alt*="Мотоцикл"]')
	 $('img[alt*="Мотоцикл 3"]')
	 
	 //	5.	Выбери из формы radio-переключатели, checkbox-флажки, submit-кнопки, раскрывающиеся списки select
	 $('input[type=radio]')
	 $('input[type=checkbox]')
	 $('input[type=submit]')
	 $('select')
	 
	 $('input[type=radio], input[type=checkbox], input[type=submit], select ')
	 
	 //****************************** 01-4 	Фильтры	*********************************
	 $('#moto_table tr')
	 $('#moto_table tr:even')
	 $('#moto_table tr:odd') 
	 $('img:not(#div_for_img img)')
	 $('form:has(fieldset)')	
	 
	 
	 $('p:contains("Мотоцикл")') 
     $('#div_for_img img:first')     	
     $('#div_for_img img:last') 

	 $('div:hidden')               	
     $('div:visibility')
	
	//-----------------------------  З А Д А Н И Е ---------------------------- 
	 
	 $('.mototable thead th:even') 
	 $('table tbody td:odd')
	 $('#moto_models li:even')
	 
	 $('img:not(img[src*="logo"])')
	 $('#format label:not(label[for="shlem"])')
	 $('#moto_models li:contains("мотоцикл")')
	 
	 $('li:has(a)')
	 $('tr:has(th)')
	 $('p:has(span), h3:has(span)').hide(2000);
	 
//Д Е Й С Т В И Я 

//Задание 1

var myTextH1 = $('#main_h1').text("Текст измененный, с помощью jquery");	 
//alert(myTextH1);	 

var myLogo = $('img[src*="logo.jpg"]');
var myLogo = $('img[alt="Хедер"]');
var myLogo = $('#forheader img');
var myLogo = $('img[height="108"]');
//myLogo.hide(3000).show(3000);

//Задание 2

var myFooter = $('img[alt="Футер"]');
var myFooter = $('#forfooter img');
var myFooter = $('img[height="67"]');
//myFooter.hide(3000).show(3000);

//Задание 1+

var myLink = $('a[href*=".PDF"]');
myLink.hide(3000).text("Спецификация Спецификация Спецификация").show(3000);

//Задание 2+

var mySale = $('#sale');
var myTextSale = mySale.text();
mySale.text(myTextSale + "бывшие в употреблении");

//02-2
var myMoto = $('#div_for_img img');                                 
//myMoto.hide(2000).show(2000);

//Задание 1.

//$('img:not([src*="logo.jpg"])').hide(5000).show(2000);

//Задание 2.
var myList = $('li');
myList.text("Элемент списка: ");

//Задание 3.
//$('#my_form p, label').hide(3000).show(2000);

//02-3
var divWidth = $('#div_for_img').width();
var divHeight = $('#div_for_img').height();
//alert("Ширина блока: "+divWidth+",   Высота:"+divHeight );

var myDiv = $('#div_for_img');
var divWidth =myDiv.width();
var divHeight =myDiv.height();

$('#forresults').text("Ширина блока: "+divWidth+",   Высота:"+divHeight);
 

//$('#div_for_img').width(815).height(130);  

var myDiv = $('#div_for_img');
var divWidth =myDiv.width();
var divHeight =myDiv.height();
alert("Ширина блока: "+divWidth+",   Высота:"+divHeight );


myDiv.width(815);
myDiv.height(130);

var divWidth1 =myDiv.width();
var divHeight1 =myDiv.height();
$('#forresults').text("НОВАЯ ШИРИНА : "+divWidth1+",   Высота:"+divHeight1);

//02-4*********************************  Ф У Н К Ц И И :  **********************************

//----------------------------------   Функция 1 ---------------------------------------

function WidthHeight(element){
	var idFull = "#" + element;
	var elWidth = $(idFull).width();
    var elHeight = $(idFull).height();
	$('#forresults').text("Ширина: "+elWidth+" Высота:"+elHeight);
}
WidthHeight('div_for_img');

WidthHeight('div_form_2');

//----------------------------------   Функция 2 ---------------------------------------

function addToHeight(element){
	var idFull = "#" + element + " img";
	$(idFull).height('190');
}
//addToHeight('forheader');
//addToHeight('div_for_img');
addToHeight('forfooter');

//03-1 ------ Метод html():  узнать/изменить html код элемента: --------
//1
var myKod = $('#moto_models').html();
//alert(myKod);
	
//2
$('#moto_models').html('<li><strong>Харлей</strong>Дэвидсон</li><li><strong>Кроссовый</strong>мотоцикл</li><li><strong>Гоночный</strong>мотоцикл</li><li><strong>Концептуальный</strong>мотоцикл</li>');	

//3
 var myLink = $('#my_links').html();
 $('#forresults').html('<ol>'+myLink+'</ol>');
 
//03-2   --- Методы fadeOut, fadeIn :  плавное исчезновение/появление элемента: ---

var myLogo = $('img[src*=logo]');
$(myLogo).fadeOut(2000).fadeIn(2000);


//3.Написать функцию ElementOut

function ElementOut(idElement, myTime){
	if(myTime<500 || myTime>10000 ){
		alert("+++++++");
		return false;
		
	}
	else{	
	   var idFull = "#" + idElement;
	   $(idFull).fadeOut(myTime);
	}
}
ElementOut('my_form', 2000);

//1 100%

$('img[src*=logo]').fadeTo(3000,0.3).fadeTo(3000,1);

//03-3  -- slideUp() и slideDown():  еще два метода исчезать/появляться ---
//$('#forheader').slideUp(3000).slideDown(3000);

//attr
//1
var footerHeight = $('img[src*=footer]').attr('height');
$('#forresults').text("Высота футера: " + footerHeight);
//2
$('#motoSelect').attr('size',4);
//3
$('#moto_table').removeAttr('title');

//4
$('#moto_table').removeAttr('title').attr('title', 'Новое значение++++++');

//f4
function cangeAttr(element,myattr, myvalue){
	var idFull = "#" + element;
	$(idFull).attr(myattr,myvalue);
}
cangeAttr('img_1','title','Харлей Дэвидсон');
cangeAttr('img_2','title','Кроссовый мотоцикл');
cangeAttr('img_3','title','Гоночный мотоцикл');
cangeAttr('img_4','title','Концептуальный мотоцикл');

//03-4

$('#div_for_img + p').addClass('new');

$('#moto_table').removeClass('mototable').addClass('new');

//03-5
//1
 var textSize = $('#main_h1').css('font-size');
//alert(textSize);
 $('#forresults').text(textSize); 
 //2
var textMargin = $('#main_h1').css('margin-bottom'); 
 $('#forresults').text(textMargin);
 //3
var textColor = $('#main_h1').css('color');  
  $('#forresults').text(textColor);
 //4 
  $('#main_h1').css('color','#cc0000').css('font-size','24px'); 
  
 //Литерал:
   $('#main_h1').css({
	'color': '#3F4078', 
	 'font-size':'19px'  
}); 

//5*

$('#my_h3').removeClass('pq').css({
    'border':      '1px solid #cc0000',
	'padding': '5px',
	'background-color': '#f6f6f6'
});

//Метод animate похожий на css:	
//1
$('#div_for_img').css({
	'border': '2px solid #cc0000'
}).animate({
	'width':'450px'
},4000)

//3

$('#div_for_img').css({'border': '2px solid #cc0000'}).animate({
	'width':'450px'
},6000,function(){
	alert('Готово++');
});

//4
$('#main_h1').css({
    'border': '2px solid #cc0000'	
}).animate({
	'paddingTop': '70px'
},5000,function(){
	alert('Готово++');
});

//Задание
$('img[src*="moto2.jpg"]')
    .css({'border':'1px solid #333333'})
	.animate({'boredWidth':'5px'},5000)
	.fadeOut(5000);
	
//03-7
//0
var myDiv = $('#div_for_img').css({'border': '2px solid #cc0000'});
//1
myDiv.before('<p>Абзац вставлен с помощью метода before() (до элемента)</p>');
myDiv.after('<p>Абзац вставлен с помощью метода after() (после  элемента)</p>');

//3,4
myDiv.prepend('<p>Абзац вставлен с помощью метода prepend() (внутрь, до контента)</p>');
myDiv.append('<p>Абзац вставлен с помощью метода append() (внутрь, после контента) </p>');

//----Задание----

$('body').append('<p id="newparagraph">Добавляем контент методом append()</p>')

$('#newparagraph').css({
	'background-color':'#000000',
	'color':'#ffffff'
});
//--20
//1
$('img').each(function(){
	if($(this).width()>450){
		$(this).fadeOut(3000)
	}
});

//to20
$('img[title*="т"]').each(function(){
	if($(this).height()>50 && $(this).height()<100){
		$(this).css({
			'border': '5px solid #cc0000'
		})
    }	
});	

//03-9
//1
var myDiv = $('#div_for_img').clone();
$('#my_form').after(myDiv);

//2
var myForm = $('#my_form').remove();
$('#moto_table').after(myForm);

//1++
$('img[width=200], a[href*=documents]').fadeOut(4000);

//2++
$('img[alt]').fadeOut(2000);

//3+
var myForm = $('#my_links + h3, #my_form').clone();
$('#div_for_img').before(myForm);

//4+
var myTable = $('#sale, #moto_table').remove();
$('#moto_models').after(myTable);

//***************** С О Б Ы Т И Я ************************

//---------- Основы выборки элементов в jQuery:--------------

var myMoto = document.getElementById('img_1');

function motoClick() { 
  alert("Ширина данной картинки: " + myMoto.width);
}

myMoto.onclick = motoClick;

//---------------  В JQuery  -----------------------
$('#forheader img').click(function(){ 
      alert("Вы кликнули по шапке");
})
//2
$(window).scroll(function(){
	alert("Произошло событие прокрутки страницы");
})
//3
$('#div_for_img img').click(function(){
	 var moto = $(this).clone();
	 $('#forresults').append(moto);
}) 
//-----------------  Задание-1 ---------------------
$('#moto_models li').click(function(){
    var myText = $(this).text(); 
    $('#moto_table tbody').append('<tr><td>' + myText + '</td><td>25000</td></tr>');
}) 

//----------------  Задание-2 ---------------------
 var myStr = $('#moto_table tbody tr');
 myStr.mouseover(function(){
    $(this).addClass('svet');
})
 myStr.mouseout(function(){
   $(this).removeClass('svet');
})	

//4-2--------- Cобытие hover() и переключатель  --------
//1
  $('#moto_table tbody tr').hover(function(){
 $(this).addClass('svet1');
 },function(){
	 $(this).removeClass('svet1');
})
	 
//2
$('#formHide').click(function(){
	if($(this).text()=='Свернуть форму'){
		$('#my_form').slideUp(2000);
		$(this).text('Развернуть форму');
	}
	else{
	$('#my_form').slideDown(2000);
	$(this).text('Свернуть форму');
	}
	//Задание1 ---------------------
	$('#my_button').hover(function(){
		$(this).css({
			'background-color':'#32375D',
			'color':'#ffffff'
    });
	},(function(){
		$(this).css({
			'background-color':'#f6f6f6',
			'color':'#2c2c2c'
		});
	//Задание2 ---------------------
$('#moto_table tbody tr').click(function(){
	$(this).addClass('svet')
}).dblclick(function(){
	$(this).removeClass('svet')
});
//Задание3 ---------------------

var toggle = false;
$('moto_table tbody tr').click(function(){
	if(!toggle){
	$(this).addClass('svet1')
	}
else{
	  $(this).removeClass('svet1')
}
toggle=!toogle;
});
//05_1
//1
$('#div_for_img').click(function(eventObject){
	alert('Координата от края монитора по Х:' + eventObject.screenX);
	alert('Координата от края монитора по Y:' + eventObject.screenY);
	alert('Координата от края браузера по Х:' + eventObject.pageX);
	alert('Координата от края браузера по Y:' + eventObject.pageY);
	alert('Была ли нажата клавиша alt ? :' + eventObject.altKey);
	alert('Была ли нажата клавиша ctrl ?:'+ eventObject.ctrlKey);
	alert('Была ли нажата клавиша shift ?:'+ eventObject.shiftKey);
	
	var myObject = eventObject.target;
	alert('Объект отреагировавший на клик:' +myObject.id);
});
//2
var toggle = false;
$('#div_for_img img').click(function (eventObject){
	if(!toggle){
		if(eventObject.shiftKey){
			$(this).css('border','4px solid #cc0000');
		}
		else{
			$(this).css('border','4px solid #333333');
		}
		else{
			$(this).css('border','0px');
		}
		toggle=!toogle;
});
//06_1

$('#small a').click(function(eventObject){
eventObject.preventDefault();
$('#big img').hide().attr('src',$(this).attr('href')).fadeIn(7000);
});

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

//1
$(':checkbox')
$(':radio')
$(':submit')
$(':text')
$(':input')
//2
$('#my_form :checked')
$('#my_form :radio:checked')
$('#my_form :checkbox:checked')
$('#my_form :motoSelect :selected').fadeOut(20000);

//03
//1.Добавить кнопку...
//2.Узнаем значение текстового поля
$('#checkButton').click(function(){
	alert($('#mytextarea').val());
})
//3.Изменить значение текстового поля
$('#checkButton').click(function(){
	alert($('#mytextarea').val());
	$('#mytextarea').val('Наше новое значение!!!!!!!!!!!!');
})
//4.Узнать/Изменить email
$('#checkButton').click(function(){
	alert($('#email').val());
	$('#email').val('Новое значение email!!!!!!!!!!!!');
})

//5.select
$('#checkButton').click(function(){
	alert($('#motoSelect :selected').val());
})
//6-1radio
$('#checkButton').click(function(){
	alert($('#radio :checked').val());
})
//6-2
$('#checkButton').click(function(){
	alert($('#my_form :radio:checked').val());
})
//7
$('#checkButton').click(function(){
	$(':checkbox:checked').each(function(){
	alert($(this).val());
	})
}) 
//7-2
//1
$('#my_form').submit(function(eventObject){
if($('#email').val()==""){
	eventObject.preventDefault;
	alert('Вы не заполнили поле email!');
}
	})
//2
$('#email').focus(function(){
	$(this).css({
		'border':'6px solid green',
		'background-color':'#6c6c6'
	})
})

//3
$('#email').focus(function(){
	$(this).addClass('onFocus');
}).blur(function(){
	$(this).removeClass('onFocus');
})

//7-3 
$('#motoSelect').change(function(){
	var myChoice = $('#motoSelect :selected').val();
	if(myChoice==1){
		$('#daysSelect').html('<option value="1">1</option><option value="2">2</option>');
	}
	else if(myChoice==2){
		$('#daysSelect').html('<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option>');
	}
	else if(myChoice==3){
		$('#daysSelect').html('<option value="1">1</option>');
	}
	else if(myChoice==4){
		$('#daysSelect').html('<option value="1">1</option><option value="2">2</option><option value="3">3</option>');
	}
})
//1
var myEmail = $('#email');
myEmail.focus(function(){
	if($(this).val()==$(this).attr('value')){
	$(this).val('');
	}
})

myEmail.blur(function(){
	if($(this).val()==''){
		$(this).val($(this).attr('value'));
    }
})
//7-4
$('#motoSelect').change(function(){
	var myChoice = $('#motoSelect :selected').val();
	if(myChoice==4){
		$('#bag').attr('disabled','disabled');
		$('label[for=bag]').css('color','#cc0000');
	}
	else{
		$('#bag').attr('disabled',false);
		$('label[for=bag]').css('color','#646464');
	}
})
//7-5
var myEmail = $('#email');
myEmail.focus(function(){
	if($(this).val()==$(this).attr('value')){
	$(this).val('');
	}
})

myEmail.blur(function(){
	if($(this).val() ==''){
		$(this).val($(this).attr('value'));
    }
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
//Блокировка кнопки отправки формы при повторной попытке.Не работает
$('#my_button').click(function(){
	$(this).attr('value','Отправляю....');
	$(this).attr('disabled','disabled');
});
*/	
		
}) //++++++++++++++++++++++++++++++++++++++++++++++++
 
 

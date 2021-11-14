$(function() { //----------

$("#date").datepicker({
	changeMonth: true,
	changeYear: true
});
jQuery(function($){			
	$.datepicker.regional['ukr'] = {
		closeText: 'Закрити',
		prevText: '&#x3C;Попер',
		nextText: 'Наступ&#x3E;',
		currentText: 'Сьогодні',
		monthNames: ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'],
		monthNamesShort: ['Січ','Лют','Бер','Кві','Тра','Чер','Лип','Сер','Вер','Жов','Лис','Гру'],
		dayNames: ['неділя','понеділок','вівторок','среда','четвер','пятниця','субота'],
		dayNamesShort: ['нд','пнд','втр','срд','чтв','птн','сбт'],
		dayNamesMin: ['Нд','Пн','Вт','Ср','Чт','Пт','Сб'],
		weekHeader: 'Тиж',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ukr']);
});	

//slider
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 2000,
      values: [ 500, 1000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "грн" + ui.values[ 0 ] + " - " + ui.values[ 1 ] +  "днів");
      }
    });
    $( "#amount" ).val($( "#slider-range" ).slider( "values", 0 ) +
      " - " + $( "#slider-range" ).slider( "values", 1 ) +  " днів"  );
	  
	  
	  
	  
 $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#help" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    }); 
	  
//вкладки	  
$("#tabs").tabs();


//accordion
$("#accordion").accordion();

//progressbar-1
$("#progressbar").progressbar({
	value: 0
});

$('#opros :radio').change(function(){
	var questCount = $('#opros div[id*=radio]').size();
	var chRadio = $('#opros :radio:checked').size();
	$('#progressbar').progressbar({
	value: chRadio * 100/questCount
	});
	$('#answerCount').text('Дано ответов '+ chRadio +' из '+questCount);
})

//Autocomplete 
 var availableTags = [
	"Київська",
	"Житомирська",
	"Вінницька",
	"Черкаська",
	"Полтавська",
	"Чернігівська",
	"Волинська",
	"Тернопільська",
	"Львівська"
	 ];
  
 $( "#tags" ).autocomplete({
      source: availableTags
    });
	
/*Draggable - перетаскивание элементов
$('#gallery').draggable({
	axis: "x"
});

$( "#forheader" ).draggable({
	axis: "y"
});
*/	  
$( "#gallery" ).draggable();  
	  
//Р А С П Р О Д А Ж А   Ш Л Е М О В	  
$('div[id*=helmet]').draggable({
 containment: "#bound",
 revert: "invalid",
 helper: "clone",
 cursor: "move"
});


var helmetCount = 0;
var summa = 0;

//	К О Р З И Н А - приемник 22

$("#mycart").droppable({
	accept: '#forHelmets div[id*=helmet]',
	activeClass: 'highlight',
	drop: function(event, ui){
		helmetCount++;
			if (helmetCount > 0) {			
			$('#myclear').show();	
			}
		$('#helmetsCount strong').text(helmetCount);
		
		var helmet = $(ui.draggable);
		
		//summa += helmet.attr('title');
		summa += +helmet.attr('title');
		//summa += parseInt(helmet.attr('title'));
		$('#helmetsSumm strong').text(summa);
		
		helmet.fadeOut(200,function(){
			$(this).appendTo("#mycart").fadeIn(1000).find('img').animate({
				width: '90',
				height: '80',
			},2000);
		});
	}
});

//П О Л К А - приемник 23-4

$("#forHelmets").droppable({
	accept: '#mycart div[id*=helmet]',
	activeClass: 'highlight',
	drop: function(event, ui){
		helmetCount--;
			if (helmetCount == 0) {			
			$('#myclear').hide();		
			}	
		$('#helmetsCount strong').text(helmetCount);
		
		var helmet2 = $(ui.draggable);
		summa -= +helmet2.attr('title');
		$('#helmetsSumm strong').text(summa);
		
		helmet2.fadeOut(200,function(){
			$(this).appendTo('#forHelmets').fadeIn(1000).fadeIn(1000).find('img').animate({
				width: '180',
				height: '160',
			},2000);
		
		});
	}
});

//Сортируемые элементы 
    $( "#sortable" ).sortable({
      placeholder: "ui-state-highlight"
    });
    $( "#sortable" ).disableSelection();
	
/*Селект цвета мотоцикла */
$( "#selectable" ).selectable();

/*Изменение размеров элементов */

$( "#mytextarea" ).resizable({
      maxHeight: 360,
      maxWidth: 380,
      minHeight: 100,
      minWidth: 380
    });
	/*  Еффекты к методам hide() и show()
$( "#formHide" ).click(function() {
  $( "div" ).hide( "drop", { direction: "down" }, "slow" );
});	


$( "#formHide" ).click(function() {
$( "#my_form" ).hide( "explode", 1000 );
});*/
/* -------------------- 33 bounce ------------------------- */

$( "#svitchGal" ).click(function() {
$( "#gallery" ).show( "bounce", 1000 );
});
/* --------------------33-1. Метод toggle - переключатель с эффектом------------------------- */
$( "#formHide" ).click(function() {
$( "#my_form" ).toggle( "explode", 1000 );
});





//33-2. Метод эффект 
$('#my_button').click(function(eventObject){
	var myDate = $('#date');
	if(myDate.val()==''){
		myDate.css('background-color','#cc0000')
		.effect( "pulsate",2000, function(){
			myDate.css('background-color','#f6f6f6')
		});
		
	$(this).attr('value','Отправляю....');
	$(this).attr('disabled','disabled');
	eventObject.preventDefault();
	}
	
});


    var state = true;
    $( "#formColor" ).on( "click", function() {
      if ( state ) {
        $( "#bigform>fieldset" ).animate({
          backgroundColor: "#e9f0e7"
         
        }, 1000 );
      } else {
        $( "#bigform>fieldset" ).animate({
          backgroundColor: "#e7e7f0"
          
        }, 1000 );
      }
      state = !state;
    });

/* -------------------- 34. Работа c классами ------------------------- 
$("#zoom").on( "click",	function(){
$("#tabs p").addClass( "forP", 2000, callback);
});	

function callback(){
	setTimeout(function(){
		$("#zoom").hide("explode");
	}, 1500 );
}




$("#zoom").on( "click",	function(){
$("#tabs p").removeClass( "forP", 1000, callback);
});	

function callback(){
	setTimeout(function(){
		$("#zoom").hide("explode");
	}, 1500 );
}


$("#zoom").on( "click",	function(){
$("#tabs p").toggleClass( "forP", 1000);
});	
*/
$("#zoom").on( "click",	function(){
	$(".forP1").switchClass("forP1", "forP2", 1000);
	$(".forP2").switchClass("forP2", "forP1", 1000);
});	
}); //---------
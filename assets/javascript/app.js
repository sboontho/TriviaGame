
//set up the correct number

var win = 0;
$(document).ready(function () {
  $('.btn-group1').on('click', function () {
    var value1 = $("[name=btn1]:checked").val();
    
    if (value1 == "Ice hockey") {
      win = win + 1;
      console.log(win);
    }
  });

  $('.btn-group2').on('click', function () {
    var value2 = $("[name=btn2]:checked").val();
    
    if (value2 == "Ukrane") {
      win = win + 1;
      console.log(win);
    }
  });

  $('.btn-group3').on('click', function () {
    var value3 = $("[name=btn3]:checked").val();
  
    if (value3 == "Garfield") {
      win = win + 1;
      console.log(win);
    }
  });
  
  $('.btn-group4').on('click', function () {
    var value4 = $("[name=btn4]:checked").val();
    
    if (value4 == "Michigan") {
      win = win + 1;
      console.log(win);
    }
 

   if (win == 4) {
     alert("You win the game");
   } else {
     alert("You losse");
   }
  });
});
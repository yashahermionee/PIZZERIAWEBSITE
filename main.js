menu_list_array =["Chicken tandoori pizza",
"Veg supreme pizze",
"Panner tikka pizza",
"Deluxe veggie pizza",
"Veg extravaganza pizza"];
function getmenu(){
   // alert("chec");
   var menudata;
   menudata="<ol class='menu_list'>" 
   menu_list_array.sort(); 
   var menulength=menu_list_array.length;
   for(var i=0; i<menulength; i++){
       menudata=menudata+"<li>"+menu_list_array[i]+"</li>";
   }
   menudata =menudata+"</ol>";
   document.getElementById("display_menu").innerHTML=menudata;
}
function add_item(){
    var htmldata;
    var item= document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    var menulength=menu_list_array.length;
    htmldata="<section class='cards'>"
    for(var j=0; j<menulength; j++){
        htmldata=htmldata+"<div class='card'>"+'<img src="images/pizza.png"/>'+ menu_list_array[j]+ 
        "</div>";  
    }
    htmldata=htmldata+"</section>";
document.getElementById("display_addedmenu").innerHTML = htmldata;
    }

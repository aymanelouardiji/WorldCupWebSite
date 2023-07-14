// Display under menu by clicking on the groupes button ///
var select = document.getElementById("select");
var selected = document.getElementById("selected");
var opt = document.getElementsByClassName("opt");
var grp = document.getElementById("grp");
var arrow = document.getElementById("arrow");

for( opt of opt){
    opt.onclick = function(){
        selected.innerHTML = this.textContent;
        grp.classList.toggle("hide");
        arrow.classList.toggle("rotate");
    }
}


select.onclick = function(){
    grp.classList.toggle("hide");
    arrow.classList.toggle("rotate");
    
}

// Display group by selecting wich group//
function hide1(){
    document.querySelector('.group1').style.display ='block';
    document.querySelector('.group2').style.display ='none';
    document.querySelector('.group3').style.display ='none';
    document.querySelector('.group4').style.display ='none';
    document.querySelector('.group5').style.display ='none';
    document.querySelector('.group6').style.display ='none';
    document.querySelector('.group7').style.display ='none';
    document.querySelector('.group8').style.display ='none';
}
function hide2(){
    document.querySelector('.group1').style.display ='none';
    document.querySelector('.group2').style.display ='block';
    document.querySelector('.group3').style.display ='none';
    document.querySelector('.group4').style.display ='none';
    document.querySelector('.group5').style.display ='none';
    document.querySelector('.group6').style.display ='none';
    document.querySelector('.group7').style.display ='none';
    document.querySelector('.group8').style.display ='none';
}
function hide3(){
    document.querySelector('.group3').style.display ='block';
    document.querySelector('.group2').style.display ='none';
    document.querySelector('.group1').style.display ='none';
    document.querySelector('.group4').style.display ='none';
    document.querySelector('.group5').style.display ='none';
    document.querySelector('.group6').style.display ='none';
    document.querySelector('.group7').style.display ='none';
    document.querySelector('.group8').style.display ='none';
}
function hide4(){
    document.querySelector('.group4').style.display ='block';
    document.querySelector('.group2').style.display ='none';
    document.querySelector('.group1').style.display ='none';
    document.querySelector('.group3').style.display ='none';
    document.querySelector('.group5').style.display ='none';
    document.querySelector('.group6').style.display ='none';
    document.querySelector('.group7').style.display ='none';
    document.querySelector('.group8').style.display ='none';
}
function hide5(){
    document.querySelector('.group5').style.display ='block';
    document.querySelector('.group2').style.display ='none';
    document.querySelector('.group1').style.display ='none';
    document.querySelector('.group3').style.display ='none';
    document.querySelector('.group4').style.display ='none';
    document.querySelector('.group6').style.display ='none';
    document.querySelector('.group7').style.display ='none';
    document.querySelector('.group8').style.display ='none';
}
function hide6(){
    document.querySelector('.group6').style.display ='block';
    document.querySelector('.group2').style.display ='none';
    document.querySelector('.group1').style.display ='none';
    document.querySelector('.group3').style.display ='none';
    document.querySelector('.group4').style.display ='none';
    document.querySelector('.group5').style.display ='none';
    document.querySelector('.group7').style.display ='none';
    document.querySelector('.group8').style.display ='none';
}
function hide7(){
    document.querySelector('.group7').style.display ='block';
    document.querySelector('.group2').style.display ='none';
    document.querySelector('.group1').style.display ='none';
    document.querySelector('.group3').style.display ='none';
    document.querySelector('.group4').style.display ='none';
    document.querySelector('.group5').style.display ='none';
    document.querySelector('.group6').style.display ='none';
    document.querySelector('.group8').style.display ='none';
}
function hide8(){
    document.querySelector('.group8').style.display ='block';
    document.querySelector('.group2').style.display ='none';
    document.querySelector('.group1').style.display ='none';
    document.querySelector('.group3').style.display ='none';
    document.querySelector('.group4').style.display ='none';
    document.querySelector('.group5').style.display ='none';
    document.querySelector('.group6').style.display ='none';
    document.querySelector('.group7').style.display ='none';
    
}
// Display pleyers by clicking on the team name //
function show1(){
    var x = document.getElementById('mor');
      x.style.display = 'block';
    var x = document.getElementById('sene');
    x.style.display='none';
    var x = document.getElementById('nether');
    x.style.display='none';
    var x = document.getElementById('bel');
    x.style.display='none';
}
function show2(){
    var x = document.getElementById('bel');
    
      x.style.display = 'block';

    var x = document.getElementById('sene');
    x.style.display='none';
    var x = document.getElementById('nether');
    x.style.display='none';
    var x = document.getElementById('mor');
    x.style.display='none';
}
    
function show3() {
    var x = document.getElementById('nether');
   
      x.style.display = 'block';

    var x = document.getElementById('sene');
    x.style.display='none';
    var x = document.getElementById('mor');
    x.style.display='none';
    var x = document.getElementById('bel');
    x.style.display='none';
    
} 
function show4() {
    var x = document.getElementById('sene');
   
      x.style.display = 'block';

    var x = document.getElementById('nether');
    x.style.display='none';
    var x = document.getElementById('mor');
    x.style.display='none';
    var x = document.getElementById('bel');
    x.style.display='none';
} 

// DISPLAY TABLE OF PLAYERS morocco /////
/// add a new row in table morocco///
function but1(){
    var tab1 = document.getElementById('tab1');
    var row = tab1.insertRow(1);
    var x1 = row.insertCell(0);
    var y1 = row.insertCell(1);
    var z1 = row.insertCell(2);
    
    x1.innerHTML = document.getElementById('name').value;
    y1.innerHTML = document.getElementById('carriere').value;
    z1.innerHTML = '<input type="button"  value="del" onclick="del(this) " class="del"><input type="button"  value="edit" onclick="edit()" class="edit">'
}


// delete a row table team morocco
function del(r){
    var i=r.parentNode.parentNode.rowIndex;
    document.getElementById('tab1').deleteRow(i);
  }

// DISPLAY TABLE OF PLAYERS morocco /////


  function showtable() {
    var x = document.getElementById('vol4');
      x.style.display = 'block';

      var x = document.getElementById('vol4-1');
      x.style.display = 'none';
      var x = document.getElementById('vol4-2');
      x.style.display = 'none';

      
      
}

// table of belgium team ////
function but2(){
    var tab1 = document.getElementById('tab2');
    var row = tab1.insertRow(1);
    var x1 = row.insertCell(0);
    var y1 = row.insertCell(1);
    var z1 = row.insertCell(2);
    
    x1.innerHTML = document.getElementById('name1').value;
    y1.innerHTML = document.getElementById('carriere1').value;
    z1.innerHTML = '<input type="button"  value="del" onclick="del1(this) " class="dell"><input type="button"  value="edit" onclick="edit()" class="editt">'
}


function showtable1() {
    var x = document.getElementById('vol4-1');
      x.style.display = 'block';

      var x = document.getElementById('vol4');
      x.style.display = 'none';
      var x = document.getElementById('vol4');
      x.style.display = 'none';

      
      
}
// delete tqble belgium ///
function del1(r){
    var i=r.parentNode.parentNode.rowIndex;
    document.getElementById('tab2').deleteRow(i);
  }




// display netherland table //
// add a new row //
function but3(){
    var tab1 = document.getElementById('tab3');
    var row = tab1.insertRow(1);
    var x1 = row.insertCell(0);
    var y1 = row.insertCell(1);
    var z1 = row.insertCell(2);
    
    x1.innerHTML = document.getElementById('name2').value;
    y1.innerHTML = document.getElementById('carriere2').value;
    z1.innerHTML = '<input type="button"  value="del" onclick="del2(this) " class="delll"><input type="button"  value="edit" onclick="edit()" class="edittt">'
}
// delete a row //

function del2(r){
    var i=r.parentNode.parentNode.rowIndex;
    document.getElementById('tab3').deleteRow(i);
  }
// display netherland table //
function showtable2() {
    var x = document.getElementById('vol4-2');
      x.style.display = 'block';

      var x = document.getElementById('vol4');
      x.style.display = 'none';

      var x = document.getElementById('vol4-1');
      x.style.display = 'none'; 
}

// display news$

/* display news by clicking on lire plus*/
function shownews() {
    var x = document.getElementById('mar');
      x.style.display = 'block';

    var x = document.getElementById('groups');
    x.style.display='none';
    var x = document.getElementById('qat');
    x.style.display='none';
    var x = document.getElementById('vol3');
    x.style.display='none';
    var x = document.getElementById('vol4');
    x.style.display='none';
    var x = document.getElementById('vol4-1');
    x.style.display='none';
    var x = document.getElementById('vol4-2');
    x.style.display='none';
    var x = document.getElementById('spa');
    x.style.display='none';
}
/* news display qatar*/

function shownews1() {
    var x = document.getElementById('qat');
      x.style.display = 'block';

    var x = document.getElementById('groups');
    x.style.display='none';
    var x = document.getElementById('mar');
    x.style.display='none';
    var x = document.getElementById('spa');
    x.style.display='none';
    var x = document.getElementById('vol3');
    x.style.display='none';
    var x = document.getElementById('vol4');
    x.style.display='none';
    var x = document.getElementById('vol4-1');
    x.style.display='none';
    var x = document.getElementById('vol4-2');
    x.style.display='none';
   var x = document.getElementById('classement');
   x.style.display='none';
}
/* display news spain */ 

function shownews2() {
    var x = document.getElementById('spa');
      x.style.display = 'block';

    var x = document.getElementById('groups');
    x.style.display='none';
    var x = document.getElementById('mar');
    x.style.display='none';
    var x = document.getElementById('qat');
    x.style.display='none';
    var x = document.getElementById('vol3');
    x.style.display='none';
    var x = document.getElementById('vol4');
    x.style.display='none';
    var x = document.getElementById('vol4-1');
    x.style.display='none';
    var x = document.getElementById('vol4-2');
    x.style.display='none';
    var x = document.getElementById('classement');
    x.style.display='none';
}

// display classement ///

function showclasse() {
  var x = document.getElementById('classement');
    x.style.display = 'block';
  var x = document.getElementById('mar');
  x.style.display='none';
  var x = document.getElementById('qat');
  x.style.display='none';
  var x = document.getElementById('spa');
  x.style.display='none';
  var x = document.getElementById('vol3');
  x.style.display='none';
  var x = document.getElementById('vol4');
  x.style.display='none';
  var x = document.getElementById('vol4-1');
    x.style.display='none';
    var x = document.getElementById('vol4-2');
    x.style.display='none';

}



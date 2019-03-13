//function clickh() {
//    var a = document.getElementById('child1').innerHTML = 'parent1 <ul class="innerul"><li id="childname" class="float-left">name : value</li><li><button onclick="innerclick()" class=" ml-3 float-left">+</button></li></ul>'; document.getElementById('childname').contentEditable = "true";
//    console.log(a);
//}
//
//function innerclick() {
//    b = document.getElementById('childname');
//    //        var person = {
//    //            name = b;
//    //            ans = function () {
//    //                return this.name;
//    //            }
//    //        };
//    var c = b.innerHTML = 'name : value<ul><li id="childname">name : value</li></ul><button onclick="innerclick()" class="ml-3">+</button>';
//    //    var c = document.getElementById('child1').innerHTML = ans();
//} 



var i = 0;

function parent1() {
    console.log(i);
    var parent = document.getElementsByClassName('parentli')[0];
    //    if (i == 0) {} else {
    //        var parent = document.getElementsByClassName('parentli')[i];
    //    }
    //    i = i + 1;
    //    parent.setAttribute('class', 'node mt-4');
    var childul = document.createElement('ul');
    var childli = document.createElement('li');
    childul.appendChild(childli);
    parent.appendChild(childul);
    childli.innerHTML = "<p contenteditable='true' class='parentli mt-4 ml-3 node'><span class='bg'>Name : Value </span><span class='ml-1 bg-warning p-3 d-inline-block' onclick='parent2()'>+</span></p>";
}


function parent2() {
    var parent = document.getElementsByClassName('parentli')[1];
    //    if (i == 0) {} else {
    //        var parent = document.getElementsByClassName('parentli')[i];
    //    }
    //    i = i + 1;
    //    parent.setAttribute('class', 'node mt-4');
    var childul = document.createElement('ul');
    var childli = document.createElement('li');
    childul.appendChild(childli);
    parent.appendChild(childul);
    childli.innerHTML = "<p contenteditable='true' class='parentli mt-4 ml-3 node'><span class='bg'>Name : Value </span></p>";
}

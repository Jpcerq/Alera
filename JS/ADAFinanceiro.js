document.getElementById('bsalvar').onclick = function() {
    document.getElementById('fnome').readOnly = true;
    document.getElementById('femail').readOnly = true;
    document.getElementById('fcpf').readOnly = true;
    document.getElementById('fcartao').readOnly = true;
};

//-----------------------------------------------------------------------------------------------

document.getElementById('bedit').onclick = function() {
    document.getElementById('fnome').readOnly = false;
    document.getElementById('femail').readOnly = false;
    document.getElementById('fcpf').readOnly = false;
    document.getElementById('fcartao').readOnly = false;
};

//-----------------------------------------------------------------------------------------------

function cpfs(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ 
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
 
 }

 function carts(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ 
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "19");
    if (v.length == 4 || v.length == 9 || v.length == 14) i.value += "-";
 }

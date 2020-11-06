function selectDevice(){
    arrl1 = 'Dell~Samsung~Hp~Lenovo~Acer~Apple~Razor';
    ltemp = arrl1.split('~').join(" <br> ");
    arrt2 = 'Samsung~Sony~LG~Lenovo~Onida~Videocon~Mi';
    ttemp = arrt2.split('~').join(" <br> ");
    arrm3 = 'Redmi~Motorola~Samsung~Realme~Oppo~Iphone~Vivo~Nokia';
    mtemp = arrm3.split('~').join(" <br> ");
    var sel = document.getElementById("mydevice");
    
    if(sel.value == 'Laptop'){
    document.getElementById("mydiv").innerHTML=ltemp;
    }else if(sel.value == 'TV'){
    document.getElementById("mydiv").innerHTML=ttemp;
    }else if(sel.value == 'Mobile'){
    document.getElementById("mydiv").innerHTML=mtemp;
    }else{
    document.getElementById("mydiv").innerHTML="";
    }
    }
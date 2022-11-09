var red = 'red';
var yellow = 'yellow';

colorarray = [];
column1 = ["b1", "b8", "b15", "b22", "b29", "b36"]
column2 = ["b2", "b9", "b16", "b23", "b30", "b37"]
column3=  ["b3", "b10", "b17", "b24", "b31","b38"]
column4=  ["b4", "b11", "b18", "b25", "b32", "b39"]
column5=  ["b5", "b12", "b19", "b26", "b33", "b40"]
column6=  ["b6", "b13", "b20", "b27", "b34", "b41"]
column7=  ["b7", "b14", "b21", "b28", "b35", "b42"]

////ID
        var b1 = document.getElementById("b1")
        var b8 = document.getElementById("b8")
        var b15 = document.getElementById("b15")
        var b22 = document.getElementById("b22")
        var b29 = document.getElementById("b29")
        var b36 = document.getElementById("b36")

//array2
        var b2 = document.getElementById("b2")
        var b9 = document.getElementById("b9")
        var b16 = document.getElementById("b16")
        var b23 = document.getElementById("b23")
        var b30 = document.getElementById("b30")
        var b37 = document.getElementById("b37")


///array 3 id
        var b3 = document.getElementById("b3")
        var b10 = document.getElementById("b10")
        var b17 = document.getElementById("b17")
        var b24 = document.getElementById("b24")
        var b31 = document.getElementById("b31")
        var b38 = document.getElementById("b38")

//array 4 id
        var b4 = document.getElementById("b4")
        var b11 = document.getElementById("b11")
        var b18 = document.getElementById("b18")
        var b25 = document.getElementById("b25")
        var b32 = document.getElementById("b32")
        var b39 = document.getElementById("b39")


        //array 5 id
        var b5 = document.getElementById("b5")
        var b12 = document.getElementById("b12")
        var b19 = document.getElementById("b19")
        var b26 = document.getElementById("b26")
        var b33 = document.getElementById("b33")
        var b40 = document.getElementById("b40")

///array 6 id
        var b6 = document.getElementById("b6")
        var b13 = document.getElementById("b13")
        var b20 = document.getElementById("b20")
        var b27 = document.getElementById("b27")
        var b34 = document.getElementById("b34")
        var b41 = document.getElementById("b41")

//array 7 id
        var b7 = document.getElementById("b7")
        var b14 = document.getElementById("b14")
        var b21 = document.getElementById("b21")
        var b28 = document.getElementById("b28")
        var b35 = document.getElementById("b35")
        var b42 = document.getElementById("b42")



function selectSeat(id) {
    var clickId = id.id
 
    if (colorarray.length == 0) {
        colorarray.push(red)
    }
    var last = colorarray[colorarray.length - 1]
    if (last == red) {
        var color = yellow;
        colorarray.push(yellow)
    }
    else {
        var color = red;
        colorarray.push(red)
    }
    var nextclr=document.getElementById('nextclr')
    if(color==red){
        var nextcllr=yellow
    }
    else{
        var nextcllr=red
    }
    nextclr.style.backgroundColor=nextcllr;
    // id.style.background = color;

 

    if (column1.find(e => e == clickId)) {
        

    //   column1.unshift(e.style.background=color)

        if(b36.style.backgroundColor==""){
            var b36color=true;
        }
        else{
            var b36color=false;
        }





        if (b36.style.backgroundColor == "") {
            id.style.background = "";
            b36.style.backgroundColor = color;
        }
        else if (b29.style.backgroundColor == "") {
            id.style.background = "";
            b29.style.backgroundColor = color;
        }
        else if (b22.style.backgroundColor == "") {
            id.style.background = "";
            b22.style.backgroundColor = color;
        }
        else if (b15.style.backgroundColor == ""){
            id.style.backgroundColor = "";
            b15.style.backgroundColor = color;
        }
        else if(b8.style.backgroundColor==""){
            id.style.backgroundColor="";
            b8.style.backgroundColor=color;
        }
        else if(b1.style.backgroundColor==""){
            id.style.backgroundColor="";
            b1.style.backgroundColor=color;
        }

    }
    winCheck()
    if (column2.find(e => e == clickId)) {
       

        if (b37.style.backgroundColor == "") {
            id.style.background = "";
            b37.style.backgroundColor = color;
        }
        else if (b30.style.backgroundColor == "") {
            id.style.background = "";
            b30.style.backgroundColor = color;
        }
        else if (b23.style.backgroundColor == "") {
            id.style.background = "";
            b23.style.backgroundColor = color;
        }
        else if (b16.style.backgroundColor == ""){
            id.style.backgroundColor = "";
            b16.style.backgroundColor = color;
        }
        else if(b9.style.backgroundColor==""){
            id.style.backgroundColor="";
            b9.style.backgroundColor=color;
        }
        else if(b2.style.backgroundColor==""){
            id.style.backgroundColor="";
            b2.style.backgroundColor=color;
        }
    }
    winCheck()
    if(column3.find(e=>e==clickId)){
        


        if (b38.style.backgroundColor == "") {
            id.style.background = "";
            b38.style.backgroundColor = color;
        }
        else if (b31.style.backgroundColor == "") {
            id.style.background = "";
            b31.style.backgroundColor = color;
        }
        else if (b24.style.backgroundColor == "") {
            id.style.background = "";
            b24.style.backgroundColor = color;
        }
        else if (b17.style.backgroundColor == ""){
            id.style.backgroundColor = "";
            b17.style.backgroundColor = color;
        }
        else if(b10.style.backgroundColor==""){
            id.style.backgroundColor="";
            b10.style.backgroundColor=color;
        }
        else if(b3.style.backgroundColor==""){
            id.style.backgroundColor="";
            b3.style.backgroundColor=color;
        }
    }
    winCheck()
    // ["b4", "b11", "b18", "b25", "b32", "b39"]
    if(column4.find(e=>e==clickId)){
        


        if (b39.style.backgroundColor == "") {
            id.style.background = "";
            b39.style.backgroundColor = color;
        }
        else if (b32.style.backgroundColor == "") {
            id.style.background = "";
            b32.style.backgroundColor = color;
        }
        else if (b25.style.backgroundColor == "") {
            id.style.background = "";
            b25.style.backgroundColor = color;
        }
        else if (b18.style.backgroundColor == ""){
            id.style.backgroundColor = "";
            b18.style.backgroundColor = color;
        }
        else if(b11.style.backgroundColor==""){
            id.style.backgroundColor="";
            b11.style.backgroundColor=color;
        }
        else if(b4.style.backgroundColor==""){
            id.style.backgroundColor="";
            b4.style.backgroundColor=color;
        }
    }
    winCheck()
    // column5=  ["b5", "b12", "b19", "b26", "b33", "b40"]
    if(column5.find(e=>e==clickId)){
        


        if (b40.style.backgroundColor == "") {
            id.style.background = "";
            b40.style.backgroundColor = color;
        }
        else if (b33.style.backgroundColor == "") {
            id.style.background = "";
            b33.style.backgroundColor = color;
        }
        else if (b26.style.backgroundColor == "") {
            id.style.background = "";
            b26.style.backgroundColor = color;
        }
        else if (b19.style.backgroundColor == ""){
            id.style.backgroundColor = "";
            b19.style.backgroundColor = color;
        }
        else if(b12.style.backgroundColor==""){
            id.style.backgroundColor="";
            b12.style.backgroundColor=color;
        }
        else if(b5.style.backgroundColor==""){
            id.style.backgroundColor="";
            b5.style.backgroundColor=color;
        }
    }
    winCheck()
    // ["b6", "b13", "b20", "b27", "b34", "b41"]
    if(column6.find(e=>e==clickId)){
       

        if (b41.style.backgroundColor == "") {
            id.style.background = "";
            b41.style.backgroundColor = color;
        }
        else if (b34.style.backgroundColor == "") {
            id.style.background = "";
            b34.style.backgroundColor = color;
        }
        else if (b27.style.backgroundColor == "") {
            id.style.background = "";
            b27.style.backgroundColor = color;
        }
        else if (b20.style.backgroundColor == ""){
            id.style.backgroundColor = "";
            b20.style.backgroundColor = color;
        }
        else if(b13.style.backgroundColor==""){
            id.style.backgroundColor="";
            b13.style.backgroundColor=color;
        }
        else if(b6.style.backgroundColor==""){
            id.style.backgroundColor="";
            b6.style.backgroundColor=color;
        }
    }
    winCheck()
    // ["b7", "b14", "b21", "b28", "b35", "b42"]

    if(column7.find(e=>e==clickId)){

        if (b42.style.backgroundColor == "") {
            id.style.background = "";
            b42.style.backgroundColor = color;
        }
        else if (b35.style.backgroundColor == "") {
            id.style.background = "";
            b35.style.backgroundColor = color;
        }
        else if (b28.style.backgroundColor == "") {
            id.style.background = "";
            b28.style.backgroundColor = color;
        }
        else if (b21.style.backgroundColor == ""){
            id.style.backgroundColor = "";
            b21.style.backgroundColor = color;
        }
        else if(b14.style.backgroundColor==""){
            id.style.backgroundColor="";
            b14.style.backgroundColor=color;
        }
        else if(b7.style.backgroundColor==""){
            id.style.backgroundColor="";
            b7.style.backgroundColor=color;
        }
    }
    winCheck()
   


}


function winCheck(){
    if((b36.style.backgroundColor==b29.style.backgroundColor)&&(b36.style.backgroundColor!=""&&b29.style.backgroundColor!='')){
        var b36b29=true;
    
        if((b22.style.backgroundColor==b15.style.backgroundColor)&&(b15.style.backgroundColor!=""&&b15.style.backgroundColor!='')){
            var b22b25=true;
        }
         if(b36b29==b22b25){
        var temp=document.getElementsByClassName('content')
        var temp2=temp[0]
        temp2.style. opacity= 1;
       temp2.style.visibility='visible';
        }
    }
    if((b36.style.backgroundColor==b37.style.backgroundColor)&&(b36.style.backgroundColor!=""&&b37.style.backgroundColor!="")){
        if((b38.style.backgroundColor==b39.style.backgroundColor)&&b38.style.backgroundColor!=""&&b39.style.backgroundColor!=""){
            if(b36.style.backgroundColor&&b37.style.backgroundColor==b38.style.backgroundColor==b39.style.backgroundColor){
            var temp=document.getElementsByClassName('content')
        var temp2=temp[0]
        temp2.style. opacity= 1;
       temp2.style.visibility='visible';
        }
    }
    }
    if((b36.style.backgroundColor==b30.style.backgroundColor)&&(b36.style.backgroundColor!=""&&b30.style.backgroundColor!="")){
        if((b24.style.backgroundColor==b18.style.backgroundColor)&&b24.style.backgroundColor!=""&&b18.style.backgroundColor!=""){
            var temp=document.getElementsByClassName('content')
        var temp2=temp[0]
        temp2.style. opacity= 1;
       temp2.style.visibility='visible';
        }
    }

    ///b37 if
    if((b37.style.backgroundColor==b38.style.backgroundColor)&&(b37.style.backgroundColor!=""&&b38.style.backgroundColor!="")){
        if((b39.style.backgroundColor==b40.style.backgroundColor)&&b39.style.backgroundColor!=""&&b40.style.backgroundColor!=""){
            var temp=document.getElementsByClassName('content')
        var temp2=temp[0]
        temp2.style. opacity= 1;
       temp2.style.visibility='visible';
        }
    }

    if((b37.style.backgroundColor==b31.style.backgroundColor)&&(b37.style.backgroundColor!=""&&b31.style.backgroundColor!="")){
        if((b25.style.backgroundColor==b19.style.backgroundColor)&&b25.style.backgroundColor!=""&&b19.style.backgroundColor!=""){
            var temp=document.getElementsByClassName('content')
        var temp2=temp[0]
        temp2.style. opacity= 1;
       temp2.style.visibility='visible';
        }
    }
    if((b37.style.backgroundColor==b30.style.backgroundColor)&&(b37.style.backgroundColor!=""&&b30.style.backgroundColor!="")){
        if((b23.style.backgroundColor==b16.style.backgroundColor)&&b23.style.backgroundColor!=""&&b16.style.backgroundColor!=""){
            var temp=document.getElementsByClassName('content')
        var temp2=temp[0]
        temp2.style. opacity= 1;
       temp2.style.visibility='visible';
        }
    }

    //b38  if
    if((b38.style.backgroundColor==b39.style.backgroundColor)&&(b38.style.backgroundColor!=""&&b39.style.backgroundColor!="")){
        if((b40.style.backgroundColor==b41.style.backgroundColor)&&b40.style.backgroundColor!=""&&b41.style.backgroundColor!=""){
            var temp=document.getElementsByClassName('content')
        var temp2=temp[0]
        temp2.style. opacity= 1;
       temp2.style.visibility='visible';
        }
    }

    if((b38.style.backgroundColor==b31.style.backgroundColor)&&(b38.style.backgroundColor!=""&&b31.style.backgroundColor!="")){
        if((b24.style.backgroundColor==b17.style.backgroundColor)&&b24.style.backgroundColor!=""&&b17.style.backgroundColor!=""){
            var temp=document.getElementsByClassName('content')
        var temp2=temp[0]
        temp2.style. opacity= 1;
       temp2.style.visibility='visible';
        }
    }
    if((b38.style.backgroundColor==b32.style.backgroundColor)&&(b38.style.backgroundColor!=""&&b32.style.backgroundColor!="")){
        if((b26.style.backgroundColor==b20.style.backgroundColor)&&b26.style.backgroundColor!=""&&b20.style.backgroundColor!=""){
            var temp=document.getElementsByClassName('content')
        var temp2=temp[0]
        temp2.style. opacity= 1;
       temp2.style.visibility='visible';
        }
    }


        //39 if
        if((b39.style.backgroundColor==b32.style.backgroundColor)&&(b39.style.backgroundColor!=""&&b32.style.backgroundColor!="")){
            if((b25.style.backgroundColor==b18.style.backgroundColor)&&b25.style.backgroundColor!=""&&b18.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }
        if((b39.style.backgroundColor==b38.style.backgroundColor)&&(b39.style.backgroundColor!=""&&b38.style.backgroundColor!="")){
            if((b37.style.backgroundColor==b36.style.backgroundColor)&&b37.style.backgroundColor!=""&&b36.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }
        if((b39.style.backgroundColor==b40.style.backgroundColor)&&(b39.style.backgroundColor!=""&&b40.style.backgroundColor!="")){
            if((b41.style.backgroundColor==b42.style.backgroundColor)&&b41.style.backgroundColor!=""&&b42.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b39.style.backgroundColor==b31.style.backgroundColor)&&(b39.style.backgroundColor!=""&&b31.style.backgroundColor!="")){
            if((b23.style.backgroundColor==b15.style.backgroundColor)&&b23.style.backgroundColor!=""&&b15.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }
        if((b39.style.backgroundColor==b33.style.backgroundColor)&&(b39.style.backgroundColor!=""&&b33.style.backgroundColor!="")){
            if((b21.style.backgroundColor==b27.style.backgroundColor)&&b21.style.backgroundColor!=""&&b27.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        //40if
        if((b40.style.backgroundColor==b39.style.backgroundColor)&&(b40.style.backgroundColor!=""&&b39.style.backgroundColor!="")){
            if((b38.style.backgroundColor==b37.style.backgroundColor)&&b38.style.backgroundColor!=""&&b37.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b40.style.backgroundColor==b32.style.backgroundColor)&&(b40.style.backgroundColor!=""&&b32.style.backgroundColor!="")){
            if((b24.style.backgroundColor==b16.style.backgroundColor)&&b24.style.backgroundColor!=""&&b16.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b40.style.backgroundColor==b33.style.backgroundColor)&&(b40.style.backgroundColor!=""&&b33.style.backgroundColor!="")){
            if((b26.style.backgroundColor==b19.style.backgroundColor)&&b26.style.backgroundColor!=""&&b19.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }
   
        // 41 if
        if((b41.style.backgroundColor==b34.style.backgroundColor)&&(b41.style.backgroundColor!=""&&b34.style.backgroundColor!="")){
            if((b27.style.backgroundColor==b20.style.backgroundColor)&&b27.style.backgroundColor!=""&&b20.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b41.style.backgroundColor==b40.style.backgroundColor)&&(b41.style.backgroundColor!=""&&b40.style.backgroundColor!="")){
            if((b39.style.backgroundColor==b38.style.backgroundColor)&&b39.style.backgroundColor!=""&&b38.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b41.style.backgroundColor==b33.style.backgroundColor)&&(b41.style.backgroundColor!=""&&b33.style.backgroundColor!="")){
            if((b25.style.backgroundColor==b17.style.backgroundColor)&&b25.style.backgroundColor!=""&&b17.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        // 42 if
        if((b42.style.backgroundColor==b41.style.backgroundColor)&&(b42.style.backgroundColor!=""&&b41.style.backgroundColor!="")){
            if((b40.style.backgroundColor==b39.style.backgroundColor)&&b40.style.backgroundColor!=""&&b39.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b42.style.backgroundColor==b35.style.backgroundColor)&&(b42.style.backgroundColor!=""&&b35.style.backgroundColor!="")){
            if((b28.style.backgroundColor==b21.style.backgroundColor)&&b28.style.backgroundColor!=""&&b21.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }
        if((b42.style.backgroundColor==b34.style.backgroundColor)&&(b42.style.backgroundColor!=""&&b34.style.backgroundColor!="")){
            if((b26.style.backgroundColor==b18.style.backgroundColor)&&b26.style.backgroundColor!=""&&b18.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        ////////////////////////////////////Second Array 

        // b29 if 
        if((b29.style.backgroundColor==b22.style.backgroundColor)&&(b29.style.backgroundColor!=""&&b22.style.backgroundColor!="")){
            if((b15.style.backgroundColor==b8.style.backgroundColor)&&b15.style.backgroundColor!=""&&b8.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }
        if((b29.style.backgroundColor==b30.style.backgroundColor)&&(b29.style.backgroundColor!=""&&b30.style.backgroundColor!="")){
            if((b31.style.backgroundColor==b32.style.backgroundColor)&&b31.style.backgroundColor!=""&&b32.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }
        if((b29.style.backgroundColor==b23.style.backgroundColor)&&(b29.style.backgroundColor!=""&&b23.style.backgroundColor!="")){
            if((b17.style.backgroundColor==b11.style.backgroundColor)&&b17.style.backgroundColor!=""&&b11.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        // b30 if
        if((b30.style.backgroundColor==b31.style.backgroundColor)&&(b30.style.backgroundColor!=""&&b31.style.backgroundColor!="")){
            if((b32.style.backgroundColor==b33.style.backgroundColor)&&b32.style.backgroundColor!=""&&b33.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }
        if((b30.style.backgroundColor==b23.style.backgroundColor)&&(b30.style.backgroundColor!=""&&b23.style.backgroundColor!="")){
            if((b16.style.backgroundColor==b9.style.backgroundColor)&&b16.style.backgroundColor!=""&&b9.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }
        if((b30.style.backgroundColor==b24.style.backgroundColor)&&(b30.style.backgroundColor!=""&&b24.style.backgroundColor!="")){
            if((b18.style.backgroundColor==b12.style.backgroundColor)&&b18.style.backgroundColor!=""&&b12.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        //31 if

        if((b31.style.backgroundColor==b32.style.backgroundColor)&&(b31.style.backgroundColor!=""&&b32.style.backgroundColor!="")){
            if((b33.style.backgroundColor==b34.style.backgroundColor)&&b33.style.backgroundColor!=""&&b34.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b31.style.backgroundColor==b24.style.backgroundColor)&&(b31.style.backgroundColor!=""&&b24.style.backgroundColor!="")){
            if((b17.style.backgroundColor==b10.style.backgroundColor)&&b17.style.backgroundColor!=""&&b10.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }
        if((b31.style.backgroundColor==b25.style.backgroundColor)&&(b31.style.backgroundColor!=""&&b25.style.backgroundColor!="")){
            if((b19.style.backgroundColor==b13.style.backgroundColor)&&b19.style.backgroundColor!=""&&b13.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        // b32 if
        if((b32.style.backgroundColor==b33.style.backgroundColor)&&(b32.style.backgroundColor!=""&&b33.style.backgroundColor!="")){
            if((b34.style.backgroundColor==b35.style.backgroundColor)&&b34.style.backgroundColor!=""&&b35.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b32.style.backgroundColor==b33.style.backgroundColor)&&(b32.style.backgroundColor!=""&&b33.style.backgroundColor!="")){
            if((b34.style.backgroundColor==b35.style.backgroundColor)&&b34.style.backgroundColor!=""&&b35.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b32.style.backgroundColor==b25.style.backgroundColor)&&(b32.style.backgroundColor!=""&&b25.style.backgroundColor!="")){
            if((b18.style.backgroundColor==b11.style.backgroundColor)&&b18.style.backgroundColor!=""&&b11.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }
        if((b32.style.backgroundColor==b24.style.backgroundColor)&&(b32.style.backgroundColor!=""&&b24.style.backgroundColor!="")){
            if((b16.style.backgroundColor==b8.style.backgroundColor)&&b16.style.backgroundColor!=""&&b8.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b32.style.backgroundColor==b26.style.backgroundColor)&&(b32.style.backgroundColor!=""&&b26.style.backgroundColor!="")){
            if((b20.style.backgroundColor==b14.style.backgroundColor)&&b20.style.backgroundColor!=""&&b14.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        // b33 if

        if((b33.style.backgroundColor==b32.style.backgroundColor)&&(b33.style.backgroundColor!=""&&b32.style.backgroundColor!="")){
            if((b31.style.backgroundColor==b30.style.backgroundColor)&&b31.style.backgroundColor!=""&&b14.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b33.style.backgroundColor==b26.style.backgroundColor)&&(b33.style.backgroundColor!=""&&b26.style.backgroundColor!="")){
            if((b19.style.backgroundColor==b12.style.backgroundColor)&&b19.style.backgroundColor!=""&&b12.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b33.style.backgroundColor==b25.style.backgroundColor)&&(b33.style.backgroundColor!=""&&b25.style.backgroundColor!="")){
            if((b17.style.backgroundColor==b9.style.backgroundColor)&&b17.style.backgroundColor!=""&&b9.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        // b34 if

        if((b34.style.backgroundColor==b27.style.backgroundColor)&&(b34.style.backgroundColor!=""&&b27.style.backgroundColor!="")){
            if((b20.style.backgroundColor==b13.style.backgroundColor)&&b20.style.backgroundColor!=""&&b13.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b34.style.backgroundColor==b33.style.backgroundColor)&&(b34.style.backgroundColor!=""&&b33.style.backgroundColor!="")){
            if((b32.style.backgroundColor==b31.style.backgroundColor)&&b32.style.backgroundColor!=""&&b31.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b34.style.backgroundColor==b26.style.backgroundColor)&&(b34.style.backgroundColor!=""&&b26.style.backgroundColor!="")){
            if((b18.style.backgroundColor==b10.style.backgroundColor)&&b18.style.backgroundColor!=""&&b10.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        // b35 if
        if((b35.style.backgroundColor==b28.style.backgroundColor)&&(b35.style.backgroundColor!=""&&b28.style.backgroundColor!="")){
            if((b21.style.backgroundColor==b14.style.backgroundColor)&&b21.style.backgroundColor!=""&&b14.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b35.style.backgroundColor==b34.style.backgroundColor)&&(b35.style.backgroundColor!=""&&b34.style.backgroundColor!="")){
            if((b33.style.backgroundColor==b32.style.backgroundColor)&&b33.style.backgroundColor!=""&&b32.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b35.style.backgroundColor==b27.style.backgroundColor)&&(b35.style.backgroundColor!=""&&b27.style.backgroundColor!="")){
            if((b19.style.backgroundColor==b11.style.backgroundColor)&&b19.style.backgroundColor!=""&&b11.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }


        //Third Row 
        // b22 if
        if((b22.style.backgroundColor==b15.style.backgroundColor)&&(b22.style.backgroundColor!=""&&b15.style.backgroundColor!="")){
            if((b8.style.backgroundColor==b1.style.backgroundColor)&&b8.style.backgroundColor!=""&&b1.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b22.style.backgroundColor==b23.style.backgroundColor)&&(b22.style.backgroundColor!=""&&b23.style.backgroundColor!="")){
            if((b24.style.backgroundColor==b25.style.backgroundColor)&&b24.style.backgroundColor!=""&&b25.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b22.style.backgroundColor==b16.style.backgroundColor)&&(b22.style.backgroundColor!=""&&b16.style.backgroundColor!="")){
            if((b10.style.backgroundColor==b4.style.backgroundColor)&&b10.style.backgroundColor!=""&&b4.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        // b23 if
        if((b23.style.backgroundColor==b24.style.backgroundColor)&&(b23.style.backgroundColor!=""&&b24.style.backgroundColor!="")){
            if((b25.style.backgroundColor==b26.style.backgroundColor)&&b25.style.backgroundColor!=""&&b26.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }


        if((b23.style.backgroundColor==b16.style.backgroundColor)&&(b23.style.backgroundColor!=""&&b16.style.backgroundColor!="")){
            if((b9.style.backgroundColor==b2.style.backgroundColor)&&b9.style.backgroundColor!=""&&b2.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }
        if((b23.style.backgroundColor==b17.style.backgroundColor)&&(b23.style.backgroundColor!=""&&b17.style.backgroundColor!="")){
            if((b11.style.backgroundColor==b5.style.backgroundColor)&&b11.style.backgroundColor!=""&&b5.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        // b24 if
        if((b24.style.backgroundColor==b25.style.backgroundColor)&&(b24.style.backgroundColor!=""&&b25.style.backgroundColor!="")){
            if((b26.style.backgroundColor==b27.style.backgroundColor)&&b26.style.backgroundColor!=""&&b27.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b24.style.backgroundColor==b17.style.backgroundColor)&&(b24.style.backgroundColor!=""&&b17.style.backgroundColor!="")){
            if((b10.style.backgroundColor==b3.style.backgroundColor)&&b10.style.backgroundColor!=""&&b3.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b24.style.backgroundColor==b18.style.backgroundColor)&&(b24.style.backgroundColor!=""&&b18.style.backgroundColor!="")){
            if((b12.style.backgroundColor==b6.style.backgroundColor)&&b12.style.backgroundColor!=""&&b6.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        // b25 if
        if((b25.style.backgroundColor==b26.style.backgroundColor)&&(b25.style.backgroundColor!=""&&b26.style.backgroundColor!="")){
            if((b27.style.backgroundColor==b28.style.backgroundColor)&&b27.style.backgroundColor!=""&&b28.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b25.style.backgroundColor==b18.style.backgroundColor)&&(b25.style.backgroundColor!=""&&b18.style.backgroundColor!="")){
            if((b11.style.backgroundColor==b4.style.backgroundColor)&&b11.style.backgroundColor!=""&&b4.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b25.style.backgroundColor==b24.style.backgroundColor)&&(b25.style.backgroundColor!=""&&b24.style.backgroundColor!="")){
            if((b23.style.backgroundColor==b22.style.backgroundColor)&&b23.style.backgroundColor!=""&&b22.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b25.style.backgroundColor==b17.style.backgroundColor)&&(b25.style.backgroundColor!=""&&b17.style.backgroundColor!="")){
            if((b9.style.backgroundColor==b1.style.backgroundColor)&&b9.style.backgroundColor!=""&&b1.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b25.style.backgroundColor==b19.style.backgroundColor)&&(b25.style.backgroundColor!=""&&b19.style.backgroundColor!="")){
            if((b13.style.backgroundColor==b7.style.backgroundColor)&&b13.style.backgroundColor!=""&&b7.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        // b26 if
        if((b26.style.backgroundColor==b25.style.backgroundColor)&&(b26.style.backgroundColor!=""&&b25.style.backgroundColor!="")){
            if((b24.style.backgroundColor==b23.style.backgroundColor)&&b24.style.backgroundColor!=""&&b23.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b26.style.backgroundColor==b19.style.backgroundColor)&&(b26.style.backgroundColor!=""&&b19.style.backgroundColor!="")){
            if((b12.style.backgroundColor==b5.style.backgroundColor)&&b12.style.backgroundColor!=""&&b5.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b26.style.backgroundColor==b18.style.backgroundColor)&&(b26.style.backgroundColor!=""&&b18.style.backgroundColor!="")){
            if((b10.style.backgroundColor==b2.style.backgroundColor)&&b10.style.backgroundColor!=""&&b2.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        // b27 if
        if((b27.style.backgroundColor==b20.style.backgroundColor)&&(b27.style.backgroundColor!=""&&b20.style.backgroundColor!="")){
            if((b13.style.backgroundColor==b6.style.backgroundColor)&&b13.style.backgroundColor!=""&&b6.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b27.style.backgroundColor==b26.style.backgroundColor)&&(b27.style.backgroundColor!=""&&b26.style.backgroundColor!="")){
            if((b25.style.backgroundColor==b24.style.backgroundColor)&&b25.style.backgroundColor!=""&&b24.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }
        if((b27.style.backgroundColor==b19.style.backgroundColor)&&(b27.style.backgroundColor!=""&&b19.style.backgroundColor!="")){
            if((b11.style.backgroundColor==b3.style.backgroundColor)&&b11.style.backgroundColor!=""&&b3.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        // b28 if

        if((b28.style.backgroundColor==b21.style.backgroundColor)&&(b28.style.backgroundColor!=""&&b21.style.backgroundColor!="")){
            if((b14.style.backgroundColor==b7.style.backgroundColor)&&b14.style.backgroundColor!=""&&b7.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b28.style.backgroundColor==b27.style.backgroundColor)&&(b28.style.backgroundColor!=""&&b27.style.backgroundColor!="")){
            if((b26.style.backgroundColor==b25.style.backgroundColor)&&b26.style.backgroundColor!=""&&b25.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }
        if((b28.style.backgroundColor==b20.style.backgroundColor)&&(b28.style.backgroundColor!=""&&b20.style.backgroundColor!="")){
            if((b12.style.backgroundColor==b4.style.backgroundColor)&&b12.style.backgroundColor!=""&&b4.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }


        // col 4 
        // b15 if
        if((b15.style.backgroundColor==b16.style.backgroundColor)&&(b15.style.backgroundColor!=""&&b16.style.backgroundColor!="")){
            if((b17.style.backgroundColor==b18.style.backgroundColor)&&b17.style.backgroundColor!=""&&b18.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }
        if((b15.style.backgroundColor==b22.style.backgroundColor)&&(b15.style.backgroundColor!=""&&b22.style.backgroundColor!="")){
            if((b29.style.backgroundColor==b36.style.backgroundColor)&&b29.style.backgroundColor!=""&&b36.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }
        if((b15.style.backgroundColor==b23.style.backgroundColor)&&(b15.style.backgroundColor!=""&&b23.style.backgroundColor!="")){
            if((b31.style.backgroundColor==b39.style.backgroundColor)&&b31.style.backgroundColor!=""&&b39.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        // b16 if 

        if((b16.style.backgroundColor==b17.style.backgroundColor)&&(b16.style.backgroundColor!=""&&b17.style.backgroundColor!="")){
            if((b18.style.backgroundColor==b19.style.backgroundColor)&&b18.style.backgroundColor!=""&&b19.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        // b17 if
        if((b17.style.backgroundColor==b18.style.backgroundColor)&&(b17.style.backgroundColor!=""&&b18.style.backgroundColor!="")){
            if((b19.style.backgroundColor==b20.style.backgroundColor)&&b19.style.backgroundColor!=""&&b20.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        // b18 if
        if((b18.style.backgroundColor==b19.style.backgroundColor)&&(b18.style.backgroundColor!=""&&b19.style.backgroundColor!="")){
            if((b20.style.backgroundColor==b21.style.backgroundColor)&&b20.style.backgroundColor!=""&&b21.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b18.style.backgroundColor==b17.style.backgroundColor)&&(b18.style.backgroundColor!=""&&b17.style.backgroundColor!="")){
            if((b16.style.backgroundColor==b15.style.backgroundColor)&&b16.style.backgroundColor!=""&&b15.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }
        if((b18.style.backgroundColor==b25.style.backgroundColor)&&(b18.style.backgroundColor!=""&&b25.style.backgroundColor!="")){
            if((b32.style.backgroundColor==b39.style.backgroundColor)&&b32.style.backgroundColor!=""&&b39.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        // b19 if
        if((b19.style.backgroundColor==b26.style.backgroundColor)&&(b19.style.backgroundColor!=""&&b26.style.backgroundColor!="")){
            if((b33.style.backgroundColor==b40.style.backgroundColor)&&b33.style.backgroundColor!=""&&b40.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b19.style.backgroundColor==b18.style.backgroundColor)&&(b19.style.backgroundColor!=""&&b18.style.backgroundColor!="")){
            if((b17.style.backgroundColor==b16.style.backgroundColor)&&b17.style.backgroundColor!=""&&b16.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        // b20 if
        if((b20.style.backgroundColor==b19.style.backgroundColor)&&(b20.style.backgroundColor!=""&&b19.style.backgroundColor!="")){
            if((b18.style.backgroundColor==b17.style.backgroundColor)&&b18.style.backgroundColor!=""&&b17.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        // b21 if

        if((b21.style.backgroundColor==b20.style.backgroundColor)&&(b21.style.backgroundColor!=""&&b20.style.backgroundColor!="")){
            if((b19.style.backgroundColor==b18.style.backgroundColor)&&b19.style.backgroundColor!=""&&b18.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }


        // col 3
        // b8 if

        if((b8.style.backgroundColor==b15.style.backgroundColor)&&(b8.style.backgroundColor!=""&&b15.style.backgroundColor!="")){
            if((b22.style.backgroundColor==b29.style.backgroundColor)&&b22.style.backgroundColor!=""&&b29.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b8.style.backgroundColor==b9.style.backgroundColor)&&(b8.style.backgroundColor!=""&&b9.style.backgroundColor!="")){
            if((b10.style.backgroundColor==b11.style.backgroundColor)&&b10.style.backgroundColor!=""&&b11.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }
        if((b8.style.backgroundColor==b16.style.backgroundColor)&&(b8.style.backgroundColor!=""&&b16.style.backgroundColor!="")){
            if((b24.style.backgroundColor==b32.style.backgroundColor)&&b24.style.backgroundColor!=""&&b32.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        // b9 if
        if((b9.style.backgroundColor==b10.style.backgroundColor)&&(b9.style.backgroundColor!=""&&b10.style.backgroundColor!="")){
            if((b11.style.backgroundColor==b12.style.backgroundColor)&&b11.style.backgroundColor!=""&&b12.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b9.style.backgroundColor==b16.style.backgroundColor)&&(b9.style.backgroundColor!=""&&b16.style.backgroundColor!="")){
            if((b23.style.backgroundColor==b30.style.backgroundColor)&&b23.style.backgroundColor!=""&&b30.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        // b10 if 
        if((b10.style.backgroundColor==b11.style.backgroundColor)&&(b10.style.backgroundColor!=""&&b11.style.backgroundColor!="")){
            if((b12.style.backgroundColor==b13.style.backgroundColor)&&b12.style.backgroundColor!=""&&b13.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }
        if((b10.style.backgroundColor==b17.style.backgroundColor)&&(b10.style.backgroundColor!=""&&b17.style.backgroundColor!="")){
            if((b24.style.backgroundColor==b31.style.backgroundColor)&&b24.style.backgroundColor!=""&&b31.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }
        if((b10.style.backgroundColor==b18.style.backgroundColor)&&(b10.style.backgroundColor!=""&&b18.style.backgroundColor!="")){
            if((b26.style.backgroundColor==b34.style.backgroundColor)&&b26.style.backgroundColor!=""&&b34.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        // b11 if
        if((b11.style.backgroundColor==b12.style.backgroundColor)&&(b11.style.backgroundColor!=""&&b12.style.backgroundColor!="")){
            if((b13.style.backgroundColor==b14.style.backgroundColor)&&b13.style.backgroundColor!=""&&b14.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b11.style.backgroundColor==b10.style.backgroundColor)&&(b11.style.backgroundColor!=""&&b10.style.backgroundColor!="")){
            if((b9.style.backgroundColor==b8.style.backgroundColor)&&b9.style.backgroundColor!=""&&b8.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }
        if((b11.style.backgroundColor==b18.style.backgroundColor)&&(b11.style.backgroundColor!=""&&b18.style.backgroundColor!="")){
            if((b25.style.backgroundColor==b32.style.backgroundColor)&&b25.style.backgroundColor!=""&&b32.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b11.style.backgroundColor==b19.style.backgroundColor)&&(b11.style.backgroundColor!=""&&b19.style.backgroundColor!="")){
            if((b27.style.backgroundColor==b35.style.backgroundColor)&&b27.style.backgroundColor!=""&&b35.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }
        if((b11.style.backgroundColor==b17.style.backgroundColor)&&(b11.style.backgroundColor!=""&&b17.style.backgroundColor!="")){
            if((b23.style.backgroundColor==b29.style.backgroundColor)&&b23.style.backgroundColor!=""&&b29.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        // b12 if
        if((b12.style.backgroundColor==b19.style.backgroundColor)&&(b12.style.backgroundColor!=""&&b19.style.backgroundColor!="")){
            if((b26.style.backgroundColor==b33.style.backgroundColor)&&b26.style.backgroundColor!=""&&b33.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b12.style.backgroundColor==b11.style.backgroundColor)&&(b12.style.backgroundColor!=""&&b11.style.backgroundColor!="")){
            if((b10.style.backgroundColor==b9.style.backgroundColor)&&b10.style.backgroundColor!=""&&b9.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b12.style.backgroundColor==b18.style.backgroundColor)&&(b12.style.backgroundColor!=""&&b18.style.backgroundColor!="")){
            if((b24.style.backgroundColor==b30.style.backgroundColor)&&b24.style.backgroundColor!=""&&b30.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }


        // b13if
        if((b13.style.backgroundColor==b20.style.backgroundColor)&&(b13.style.backgroundColor!=""&&b20.style.backgroundColor!="")){
            if((b27.style.backgroundColor==b34.style.backgroundColor)&&b27.style.backgroundColor!=""&&b34.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b13.style.backgroundColor==b12.style.backgroundColor)&&(b13.style.backgroundColor!=""&&b12.style.backgroundColor!="")){
            if((b11.style.backgroundColor==b10.style.backgroundColor)&&b11.style.backgroundColor!=""&&b10.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b13.style.backgroundColor==b19.style.backgroundColor)&&(b13.style.backgroundColor!=""&&b19.style.backgroundColor!="")){
            if((b25.style.backgroundColor==b31.style.backgroundColor)&&b25.style.backgroundColor!=""&&b31.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }
        
        // b14 if
        if((b14.style.backgroundColor==b21.style.backgroundColor)&&(b14.style.backgroundColor!=""&&b21.style.backgroundColor!="")){
            if((b28.style.backgroundColor==b35.style.backgroundColor)&&b28.style.backgroundColor!=""&&b35.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b14.style.backgroundColor==b13.style.backgroundColor)&&(b14.style.backgroundColor!=""&&b13.style.backgroundColor!="")){
            if((b12.style.backgroundColor==b11.style.backgroundColor)&&b12.style.backgroundColor!=""&&b11.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b14.style.backgroundColor==b20.style.backgroundColor)&&(b14.style.backgroundColor!=""&&b20.style.backgroundColor!="")){
            if((b26.style.backgroundColor==b32.style.backgroundColor)&&b26.style.backgroundColor!=""&&b32.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }


        // column1
        // b1 if


        if((b1.style.backgroundColor==b2.style.backgroundColor)&&(b1.style.backgroundColor!=""&&b2.style.backgroundColor!="")){
            if((b3.style.backgroundColor==b4.style.backgroundColor)&&b3.style.backgroundColor!=""&&b4.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b1.style.backgroundColor==b8.style.backgroundColor)&&(b1.style.backgroundColor!=""&&b8.style.backgroundColor!="")){
            if((b15.style.backgroundColor==b22.style.backgroundColor)&&b15.style.backgroundColor!=""&&b22.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b1.style.backgroundColor==b9.style.backgroundColor)&&(b1.style.backgroundColor!=""&&b9.style.backgroundColor!="")){
            if((b17.style.backgroundColor==b25.style.backgroundColor)&&b17.style.backgroundColor!=""&&b25.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }


        // b2 if
        if((b2.style.backgroundColor==b3.style.backgroundColor)&&(b2.style.backgroundColor!=""&&b3.style.backgroundColor!="")){
            if((b4.style.backgroundColor==b5.style.backgroundColor)&&b4.style.backgroundColor!=""&&b5.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b2.style.backgroundColor==b9.style.backgroundColor)&&(b2.style.backgroundColor!=""&&b9.style.backgroundColor!="")){
            if((b16.style.backgroundColor==b23.style.backgroundColor)&&b16.style.backgroundColor!=""&&b23.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }
        if((b2.style.backgroundColor==b10.style.backgroundColor)&&(b2.style.backgroundColor!=""&&b10.style.backgroundColor!="")){
            if((b18.style.backgroundColor==b26.style.backgroundColor)&&b18.style.backgroundColor!=""&&b26.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }


        // b3 if

        if((b3.style.backgroundColor==b4.style.backgroundColor)&&(b3.style.backgroundColor!=""&&b4.style.backgroundColor!="")){
            if((b5.style.backgroundColor==b6.style.backgroundColor)&&b5.style.backgroundColor!=""&&b6.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b3.style.backgroundColor==b10.style.backgroundColor)&&(b3.style.backgroundColor!=""&&b10.style.backgroundColor!="")){
            if((b17.style.backgroundColor==b24.style.backgroundColor)&&b17.style.backgroundColor!=""&&b24.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }

        if((b3.style.backgroundColor==b11.style.backgroundColor)&&(b3.style.backgroundColor!=""&&b11.style.backgroundColor!="")){
            if((b19.style.backgroundColor==b27.style.backgroundColor)&&b19.style.backgroundColor!=""&&b27.style.backgroundColor!=""){
                var temp=document.getElementsByClassName('content')
            var temp2=temp[0]
            temp2.style. opacity= 1;
           temp2.style.visibility='visible';
            }
        }


            // b4 if
            if((b4.style.backgroundColor==b5.style.backgroundColor)&&(b4.style.backgroundColor!=""&&b5.style.backgroundColor!="")){
                if((b6.style.backgroundColor==b7.style.backgroundColor)&&b6.style.backgroundColor!=""&&b7.style.backgroundColor!=""){
                    var temp=document.getElementsByClassName('content')
                var temp2=temp[0]
                temp2.style. opacity= 1;
               temp2.style.visibility='visible';
                }
            }

            if((b4.style.backgroundColor==b3.style.backgroundColor)&&(b4.style.backgroundColor!=""&&b3.style.backgroundColor!="")){
                if((b2.style.backgroundColor==b1.style.backgroundColor)&&b2.style.backgroundColor!=""&&b1.style.backgroundColor!=""){
                    var temp=document.getElementsByClassName('content')
                var temp2=temp[0]
                temp2.style. opacity= 1;
               temp2.style.visibility='visible';
                }
            }

            if((b4.style.backgroundColor==b11.style.backgroundColor)&&(b4.style.backgroundColor!=""&&b11.style.backgroundColor!="")){
                if((b18.style.backgroundColor==b25.style.backgroundColor)&&b18.style.backgroundColor!=""&&b25.style.backgroundColor!=""){
                    var temp=document.getElementsByClassName('content')
                var temp2=temp[0]
                temp2.style. opacity= 1;
               temp2.style.visibility='visible';
                }
            }

            if((b4.style.backgroundColor==b12.style.backgroundColor)&&(b4.style.backgroundColor!=""&&b12.style.backgroundColor!="")){
                if((b20.style.backgroundColor==b28.style.backgroundColor)&&b20.style.backgroundColor!=""&&b28.style.backgroundColor!=""){
                    var temp=document.getElementsByClassName('content')
                var temp2=temp[0]
                temp2.style. opacity= 1;
               temp2.style.visibility='visible';
                }
            }


            if((b4.style.backgroundColor==b10.style.backgroundColor)&&(b4.style.backgroundColor!=""&&b10.style.backgroundColor!="")){
                if((b16.style.backgroundColor==b22.style.backgroundColor)&&b16.style.backgroundColor!=""&&b22.style.backgroundColor!=""){
                    var temp=document.getElementsByClassName('content')
                var temp2=temp[0]
                temp2.style. opacity= 1;
               temp2.style.visibility='visible';
                }
            }

            // b5 if

            if((b5.style.backgroundColor==b4.style.backgroundColor)&&(b5.style.backgroundColor!=""&&b4.style.backgroundColor!="")){
                if((b3.style.backgroundColor==b2.style.backgroundColor)&&b3.style.backgroundColor!=""&&b2.style.backgroundColor!=""){
                    var temp=document.getElementsByClassName('content')
                var temp2=temp[0]
                temp2.style. opacity= 1;
               temp2.style.visibility='visible';
                }
            }

            if((b5.style.backgroundColor==b12.style.backgroundColor)&&(b5.style.backgroundColor!=""&&b12.style.backgroundColor!="")){
                if((b19.style.backgroundColor==b26.style.backgroundColor)&&b19.style.backgroundColor!=""&&b26.style.backgroundColor!=""){
                    var temp=document.getElementsByClassName('content')
                var temp2=temp[0]
                temp2.style. opacity= 1;
               temp2.style.visibility='visible';
                }
            }

            if((b5.style.backgroundColor==b11.style.backgroundColor)&&(b5.style.backgroundColor!=""&&b11.style.backgroundColor!="")){
                if((b17.style.backgroundColor==b23.style.backgroundColor)&&b17.style.backgroundColor!=""&&b23.style.backgroundColor!=""){
                    var temp=document.getElementsByClassName('content')
                var temp2=temp[0]
                temp2.style. opacity= 1;
               temp2.style.visibility='visible';
                }
            }

            // b6 if
            if((b6.style.backgroundColor==b5.style.backgroundColor)&&(b6.style.backgroundColor!=""&&b5.style.backgroundColor!="")){
                if((b4.style.backgroundColor==b3.style.backgroundColor)&&b4.style.backgroundColor!=""&&b3.style.backgroundColor!=""){
                    var temp=document.getElementsByClassName('content')
                var temp2=temp[0]
                temp2.style. opacity= 1;
               temp2.style.visibility='visible';
                }
            }

            if((b6.style.backgroundColor==b13.style.backgroundColor)&&(b6.style.backgroundColor!=""&&b13.style.backgroundColor!="")){
                if((b20.style.backgroundColor==b27.style.backgroundColor)&&b20.style.backgroundColor!=""&&b27.style.backgroundColor!=""){
                    var temp=document.getElementsByClassName('content')
                var temp2=temp[0]
                temp2.style. opacity= 1;
               temp2.style.visibility='visible';
                }
            }

            if((b6.style.backgroundColor==b12.style.backgroundColor)&&(b6.style.backgroundColor!=""&&b12.style.backgroundColor!="")){
                if((b18.style.backgroundColor==b24.style.backgroundColor)&&b18.style.backgroundColor!=""&&b24.style.backgroundColor!=""){
                    var temp=document.getElementsByClassName('content')
                var temp2=temp[0]
                temp2.style. opacity= 1;
               temp2.style.visibility='visible';
                }
            }

            // b7 if

            if((b7.style.backgroundColor==b6.style.backgroundColor)&&(b7.style.backgroundColor!=""&&b6.style.backgroundColor!="")){
                if((b5.style.backgroundColor==b4.style.backgroundColor)&&b5.style.backgroundColor!=""&&b4.style.backgroundColor!=""){
                    var temp=document.getElementsByClassName('content')
                var temp2=temp[0]
                temp2.style. opacity= 1;
               temp2.style.visibility='visible';
                }
            }

            if((b7.style.backgroundColor==b14.style.backgroundColor)&&(b7.style.backgroundColor!=""&&b14.style.backgroundColor!="")){
                if((b21.style.backgroundColor==b28.style.backgroundColor)&&b21.style.backgroundColor!=""&&b28.style.backgroundColor!=""){
                    var temp=document.getElementsByClassName('content')
                var temp2=temp[0]
                temp2.style. opacity= 1;
               temp2.style.visibility='visible';
                }
            }

            if((b7.style.backgroundColor==b13.style.backgroundColor)&&(b7.style.backgroundColor!=""&&b13.style.backgroundColor!="")){
                if((b19.style.backgroundColor==b25.style.backgroundColor)&&b19.style.backgroundColor!=""&&b25.style.backgroundColor!=""){
                    var temp=document.getElementsByClassName('content')
                var temp2=temp[0]
                temp2.style. opacity= 1;
               temp2.style.visibility='visible';
                }
            }








}

function popupHide(){
    var temp=document.getElementsByClassName('content')
    var temp2=temp[0]
    temp2.style. opacity= 0;
   temp2.style.visibility='hidden';
}





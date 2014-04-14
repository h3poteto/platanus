var rdmimg=[];
rdmimg[0]='./back_piano_1.jpg';
rdmimg[1]='./back_violin_2.jpg';
rdmimg[2]='./back_fl_1.jpg';
rdmimg[3]='./back_fl_2.jpg';
rdmimg[4]='./back_guitar_1.jpg';
rdmimg[5]='./back_piano_2.jpg';
rdmimg[6]='./back_violin_1.jpg';
var rdmhead=Math.floor( rdmimg.length*Math.random());
var elem=document.getElementById('mainbox');
elem.style.backgroundImage='url('+rdmimg[rdmhead]+')';



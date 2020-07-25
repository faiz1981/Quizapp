function Question(quiz,opt1,opt2,opt3,opt4,cort){
    this.quiz= quiz;
    this.o1=opt1;
    this.o2=opt2;
    this.o3=opt3;
    this.o4=opt4;
    this.o5=cort;
}


var Q1= new Question("WWW STANDS FOR ______?","World Whole Web",'Wide World Web','Web World Wide','World Wide Web',4);
var Q2= new Question("A light sensitive device that converts drawing, printed text or other images into digital form is___________?","  Keyboard ",'Scanner','OMR','None of these',2);
var Q3 = new Question("What type of operating system MS-DOS is? ","Command Line Interface",'Graphical User Interface','Multitasking','Menu Driven Interface',1);
var Q4 = new Question("When kargil war happend ","1984",'1947','1998','1965',3);
var Q5 = new Question("Independence day of Pakistna ","1984",'1947','1998','1965',2);
var Q6 = new Question("When kargil war happend ","1984",'1947','1998','1965',3);




var Q =[Q1,Q2,Q3,Q4,Q5,Q6];  
var c = 0;
var a = 0;
askQuiz();


function askQuiz(){
    document.getElementById("Quiz").innerHTML=Q[c].quiz;
    document.getElementById("1").innerHTML=Q[c].o1;
    document.getElementById("2").innerHTML=Q[c].o2;
    document.getElementById("3").innerHTML=Q[c].o3;
    document.getElementById("4").innerHTML=Q[c].o4;
    document.getElementById("Qno").innerHTML=c+1;
    a=Q[c].o5;
    c++;
    document.getElementById("1").setAttribute("class","btn")
    document.getElementById("2").setAttribute("class","btn")
    document.getElementById("3").setAttribute("class","btn")
    document.getElementById("4").setAttribute("class","btn")
  }



function check(e){
    
 var ans =document.getElementById(e);
 var correct=document.getElementById(a);
   
    if (a!=e){
    ans.setAttribute('class','red');
      }

      correct.setAttribute('class','green');
   
//  document.getElementById('1').setAttribute("disabled","");
//  document.getElementById('2').setAttribute("disabled","");
//  document.getElementById('3').setAttribute("disabled","");
//  document.getElementById('4').setAttribute("disabled","");

 

}






///////Self code/////


 const container=document.querySelector(".app");
 const myApp  =[
     { 
         type :"Javascript",
         msg:"Select The Appropriate Answer",
    path:"images/javascript",
    structure:[
        {question:"Choose the correct server side js object" ,options:['fileupload.jpg','pic_1.jpg','file.jpg','date.jpg'],key:1},
        {question:"Which of the following is not considered a JavaScript operator" ,options:['new.jpg','this.jpg','typeof.jpg','delete.jpg'],key:1},
        {question:"Using _______ statement is how you test for a specific condition." ,options:['select.jpg','if.jpg','switch.jpg','for.jpg'],key:1},
        {question:"Which of the following is not a reserved word in JavaScript" ,options:['interface.jpg','throw.jpg','short.jpg','program.jpg'],key:3},
        {question:"The _______ method of an Array object adds and/or removes elements from an array",options:['reverse.jpg','slice.jpg','splice.jpg','shift.jpg'],key:1},
//{question:" _________ is a wrapped Java array, accessed from within JavaScript code." ,options:['.jpg','.jpg','.jpg','.jpg'],key:0},
     //   {question:"Cost for Using JavaScript in your HTML is _________ ." ,options:['.jpg','.jpg','.jpg','.jpg'],key:2}
        
    ]
    },

    {
        type:"CSS",
    msg:"Pick The Appropriate Option",
    path:"images/CSS",
    structure:[
        {question:"Which of the following selector matches a element based on its id?" ,options:['idselector.jpg','Universal.jpg','Descendent.jpg','Class.jpg'],key:0},
        {question:"Which of the following uses 1vw or 1vh, whichever is smaller?" ,options:['vh.jpg','vmin.jpg','vw.jpg','px.jpg'],key:1},
        {question:"How can we write comment along with CSS code" ,options:['c1.jpg','c2.jpg','c2.jpg','c4.jpg'],key:2},
        {question:"the default value of Position Attribute is" ,options:['static.jpg','fixed.jpg','absolute.jpg','inherit.jpg'],key:0}
        
        
    ]
    },
    {
        type:"HTML",
    msg: "Pick The Appropriate Option",
    path:"images/HTML",
    structure:[
        {question:"From which tag descriptive list starts" ,options:['ll.jpg','dl.jpg','dd.jpg','ds.jpg'],key:1},
        {question:"www is based on which model?" ,options:['clientserver.jgp','localserver.jpg','3tier.jpg','NoA.jpg'],key:0},
        {question:"Web pages starts with which ofthe following tag",options:['body.jpg','titile.jpg','html.jpg','form.jpg'],key:2},
        {question:"Which of the following is a container" ,options:['heah.jpg','titile.jpg','body.jpg','form.jpg'],key:3},
        {question:"<Base> tag is designed to appear only between" ,options:['body.jpg','heah.jpg','titile.jpg','form.jpg'],key:1}
        
        
        
    ]
    }
 ]

//for(let i=0;i<myApp.length;i++)
//{
  //  console.log(myApp[i].path)
//}
 //create select element

 const select=document.createElement("select");
 select.setAttribute("onchange","load(this)")
 for(let j=0;j<myApp.length;j++)
 {
     const option=document.createElement("option");
     option.value=j;
     option.innerHTML=myApp[j].type;
     select.appendChild(option)
 }
  document.querySelector(".quiz-box").appendChild(select)

 //create class
class App {
constructor(myApp,container){
this.app=myApp;
this.container=container;
this.index=0;
this.score=0;
this.quizSize=this.app.structure.length
this.optionSize=this.app.structure[0].options.length;
this.msgEle=this.container.querySelector(".msg");
this.quizeEle=this.container.querySelector(".quiz");
this.optionELe=this.container.querySelector(".option-box");
this.questionNumber=this.container.querySelector(".question-number");
this.scoreEle=this.container.querySelector(".score-board");

this.setQuestion();
this.setOptions();
this.scoreBoard();

}
setQuestion()
{
    this.msgEle.innerHTML=this.app.msg;
    this.quizeEle.innerHTML=this.app.structure[this.index].question;
    this.questionNumber.innerHTML=(this.index+1)+"/"+this.quizSize;
}
////// logic referred from youtube quizz apps/// 
setOptions(){
this.optionELe.innerHTML="";
for(let i=0;i<this.optionSize;i++){
const button=document.createElement("button")
button.type="button";
button.id=i;
const img=document.createElement("img");
img.src=this.app.path+"/"+this.app.structure[this.index].options[i];
button.appendChild(img)
this.optionELe.appendChild(button)
}
this.optionClick();
}
scoreBoard()
{
  this.scoreEle.innerHTML=this.score; 
}
optionClick(){
    const that=this;
const options=this.optionELe.children;
for(let i=0;i<options.length;i++){
    options[i].addEventListener("click",function(){
        const span=document.createElement("span");
        if(this.id==that.app.structure[that.index].key){
            span.innerHTML="Correct";
           this.classList.add("Correct");
that.score++;
that.scoreBoard();
        }
        else{
            span.innerHTML="Wrong";
          this.classList.add("Wrong");

        }
        this.appendChild(span);
        for(let j=0; j<that.optionELe.children.length;j++)
    {
        if(this.id==that.optionELe.children[j].id)
        {

        }
        else{
            that.optionELe.children[j].classList.add("hide"); 
        }
       
    }
    that.index++;
    if(that.index>that.quizSize-1)
    {
        that.quizOver();
//console.log("quiz Over")
    }
    else{
setTimeout(function(){
        
        that.setQuestion()
        that.setOptions()
    },2000)
}
    })
    
  //  console.log(this.optionEle.children)
}
}
quizOver(){
    this.msgEle.innerHTML="";
    this.quizeEle.innerHTML="";
   // const h1=document.createElement("h1");
    if(this.score > this.quizSize/2){
        
        this.optionELe.innerHTML="<h1>Ouiz Over <br> Good </h1>" 
    }
    else{
        this.optionELe.innerHTML=" <h1>Ouiz Over <br> You Need More Practice</h1>"
    }
   // this.optionELe.innerHTML=h1;

}
}

const app1=new App(myApp[0],container)

function load(ele)
{
  const app1=new App(myApp[ele.value],container)  
}

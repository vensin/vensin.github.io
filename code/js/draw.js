var canvas = document.getElementById("background").getElementsByTagName("canvas")[0];          //最底层画布
var ensure = document.getElementsByClassName("window")[0].getElementsByTagName("button")[0];   //确定按钮
var cancel = document.getElementsByClassName("window")[0].getElementsByTagName("button")[1];   //取消按钮
var palette = document.getElementsByClassName("palette")[0];      //调色盘
var bg = document.getElementById("background").getElementsByTagName("div")[0];  //canvas的父级div                           



 /**************************
 *函数名:drawPen()
 *函数参数 ：无
 *功能：画笔工具
 *返回值：无
 *************************/
var drawPen = function(){

    this.color;
    this.penSize;

    var f = this;

    this.beClick = function(){

        showDrawDiv("newPen");//显示div
        canvas.onclick = null;

        ensure.onclick = function(){

              f.color = palette.style.backgroundColor;//获取调色盘颜色
              f.penSize = document.getElementById("penSize").value;

              if(isNumber(f.penSize)){
                showObject("window","none");


                canvas.onmousedown = function(){

                      getMousePos(canvas, event);
                      context.beginPath();
                      context.moveTo(x,y);
                      context.lineWidth = f.penSize;
                      context.strokeStyle = f.color;
                      canvas.onmousemove = function(){
                            
                            getMousePos(canvas, event);
                            context.lineTo(x,y);
                            context.stroke();
                            context.moveTo(x,y);
                        }
                      canvas.onmouseup=new Function('this.onmousemove=null');
                    }

              }else{
                alert("输入有误，请重新输入");
              }
        }
    }

   canvas.onclick = null;
   f.beClick();
   merge();
}

 /**************************
 *函数名:eraser()
 *函数参数 ：无
 *功能：橡皮檫
 *返回值：无
 *************************/
var eraser = function(){
  
    this.size = 10; 

    var f = this;
    this.beClick =function(){
        showDrawDiv("newEraser");

        ensure.onclick = function(){

          f.size = document.getElementById("eraserSize").value;

          if(isNumber(f.size)){

              canvas.onmousedown = function(){
                    getMousePos(canvas,event);
                    f.erasure(x,y);
                    canvas.onmousemove = function(){ 
                    getMousePos(canvas,event);
                    f.erasure(x,y);            
                    }
                    this.onmouseup = new Function("this.onmousemove = null;");
               }

               showObject("window","none");

          }else{  alert("无效输入，请重新输入");  }


        }
    }

    this.erasure = function(x,y){

          context.save()
          context.beginPath()
          context.arc(x,y,f.size,0,Math.PI * 2,true);
          context.clip()
          context.clearRect(0,0,canvas.width,canvas.height);
          context.restore();
    }

  
    
    canvas.onclick = null;
    this.beClick();  
    merge();
}

/**************************
 *函数名:shape()
 *函数参数 ：无
 *功能：绘制图形
 *返回值：无
 *************************/
 var shape= function(){

    this.startX = 0;
    this.startY = 0;
    this.endX = 0;
    this.endY = 0;
    this.s = null;
    this.flag = null;
    this.color = "black";
    this.size = 1;

    var shapeDiv;//在页面上预览的图形

    var f =this;
    this.beClick = function(){
      showDrawDiv("newShape");

      ensure.onclick = function(){

            /*获取页面信息*/
            var shape = document.getElementsByName("shape");
            for (var i = shape.length - 1; i >= 0; i--) {
                if(shape[i].checked){
                    f.s = shape[i].value;
                    break;
                }
            }
            if(f.s == null){
                alert("请选择图形");
            }

            f.color = palette.style.backgroundColor;
            f.size = document.getElementById("shapeSize").value;
            if(!isNumber(f.size)){
                alert("请输入线条大小");
            }
            var isFull = document.getElementsByName("isFull");

            if(isFull[2].checked || isFull[3].checked){
                f.flag = isFull[2].checked ? isFull[2].value : isFull[3].value;
                showObject("window","none");
                canvas.onmousedown = function(){
          
                  getMousePos(canvas,event);
                  f.startX = x;
                  f.startY = y;       

                  shapeDiv = document.createElement("div");//生成div并添加到页面
                  shapeDiv.className = "drawShape";
                  shapeDiv.style.border = f.size + 'px ' + f.color + " solid";
                  if(f.flag == yes){
                    shapeDiv.style.backgroundColor = f.color;
                  }
                  bg.appendChild(shapeDiv);
                

                  canvas.onmousemove = function(){
                      getMousePos(canvas,event);
                      f.endX = x;
                      f.endY = y;
                      /*三种形状的预览*/ 
                        if(f.s == 'rectangle'){
                            shapeDiv.style.left =  startX -f.size/2 +"px";//设置起点
                            shapeDiv.style.top =  startY -f.size/2 +"px";//canvas.offsetTop +
                            shapeDiv.style.width =  Math.abs(f.endX - f.startX) -f.size +"px";
                            shapeDiv.style.height = Math.abs(f.endY - f.startY) -f.size +"px";
                        }
                        else if(f.s == "circle"){
                            var diameter = Math.sqrt(Math.pow(endX - startX,2) + Math.pow(endY - startY,2));
                            shapeDiv.style.left = startX + (endX - startX)/2 - diameter/2 - f.size + 'px';
                            shapeDiv.style.top = startY + (endY - startY)/2 - diameter/2 - f.size + 'px';
                            shapeDiv.style.width = diameter + 'px';
                            shapeDiv.style.height = diameter + 'px';
                            shapeDiv.style.borderRadius =   diameter/2 +f.size*2 + 'px';

                        }else{
                            var line = Math.sqrt(Math.pow(endX - startX,2) + Math.pow(endY - startY,2));
                            var angle = Math.atan((endY - startY)/(endX - startX))*180/Math.PI;
                    
                            shapeDiv.style.top = startY + (endY - startY)/2 - f.size/2 + "px";
                            shapeDiv.style.left = startX + (endX - startX)/2 - line/2 + "px";
                            shapeDiv.style.width = line + "px";
                            shapeDiv.style.height = f.size + "px";
                            shapeDiv.style.border = "";
                            shapeDiv.style.backgroundColor = f.color;

                            /*适应不同浏览器*/
                            shapeDiv.style.webkitTransform = 'rotate('+ angle +'deg)';
                            shapeDiv.style.mozTransform = 'rotate('+ angle +'deg)';
                            shapeDiv.style.msTransform = 'rotate('+ angle +'deg)';
                            shapeDiv.style.oTransform = 'rotate('+ angle +'deg)';
                            shapeDiv.style.transform = 'rotate('+ angle +'deg)';

                        }
                  } 


                  shapeDiv.onmouseup = function(){

                    context.beginPath(); 
                    context.strokeStyle = f.color;
                    context.lineWidth = f.size;
                    

                    if(f.s == "circle"){
                       f.drawCircle();
                    }else if(f.s == "rectangle"){
                      f.drawSquare();
                    }else{
                      f.drawLine();
                    }
                    canvas.onmousemove = null;
                    bg.removeChild(shapeDiv);
                  }
                  canvas.onmouseup = function(){
                    shapeDiv.onmouseup();
                  }
              }
            }
            else{
              alert("请选择是否填充");
            }
            /*设置信息完成*/
        }
    }

    this.drawSquare  = function() {
      if(f.flag == "Yes"){
            context.fillStyle = f.color;
            context.fillRect(f.startX,f.startY,f.endX - f.startX,f.endY - f.startY);
      }else{
            context.rect(f.startX,f.startY,f.endX - f.startX,f.endY - f.startY);
            context.stroke();
      }
      
      
    }

    this.drawLine = function(){

      context.moveTo(startX,startY);
      context.lineTo(endX,endY);
      context.stroke();
    }

    this.drawCircle = function(){
      var a = endX - startX;
      var b = endY - startY;
      context.arc(a/2 + startX,b/2 +startY, Math.sqrt(Math.pow(a,2) + Math.pow(b,2)) /2 , 0 ,Math.PI *2);
      if(f.flag == "Yes"){
        context.stroke();
        context.fillStyle = f.color;
        context.fill();
      }else{
        context.stroke();
      }
      
    }

    canvas.onclick = null;
    this.beClick();
    merge();
 }


/**************************
 *函数名:drawText()
 *函数参数 ：无
 *功能：绘画文字
 *返回值：无
 *************************/
 var drawText = function(){
 console.log("text");

    this.text = "null";
    this.fontSize = 14;
    this.fullFlag = "yes";
    this.color = "white";

    var f = this;
    canvas.onmousedown = null;
    canvas.onclick = function(){

      showDrawDiv("newText");
      getMousePos(canvas,event);
      var nowx = x;
      var nowy = y;

      ensure.onclick = function(){

        /*获取输入框信息*/
        f.text = document.getElementById("text").value;
        f.fontSize  = document.getElementById("fontSize").value;
        f.color = palette.style.backgroundColor;

        if(text != ""){
            if(isNumber(f.fontSize)){

                var isFull = document.getElementsByName("isFull");
                
                if(isFull[0].checked ? isFull[0].checked : isFull[1].checked){

                  f.fullFlag = isFull[0].checked ? isFull[0].value : isFull[1].value;
                  f.write(f.text,f.fontSize,f.color,f.fullFlag,nowx,nowy);
                  showObject("window","none");
                  clearInput("window");
                }
                else{ alert("请选择是否填充"); }
            }else{ alert("请输入文字大小"); }
        }else{alert("请输入文字"); }
        

      }
    }
    this.write = function(text,fontSize,color,isFull,nowx,nowy){

      var textCanvas = document.createElement("canvas");
      textCanvas.className = "textCanvas";
      textCanvas.style.left =  nowx + 'px';
      textCanvas.style.top =  nowy + 'px';
      textCanvas.height = fontSize;
      var sum = 0;
      for (var i = text.length - 1; i >= 0; i--) {
        
        if(/^[a-zA-Z0-9]$/.test(text[i])){
            sum++;
        }
      }
      textCanvas.width = Math.ceil(text.length - sum/2) * fontSize;//计算所需宽度
 

      document.getElementById("background").getElementsByTagName("div")[0].appendChild(textCanvas);
      textContext = textCanvas.getContext("2d");//建立全局变量

        /*绘制文字*/
        textContext.beginPath();
        textContext.font = "bold " + fontSize +"px 宋体";
        textContext.textBaseline = 'top';
        if(isFull){
            textContext.fillStyle = color;
            
            textContext.fillText(text,0,0);
        }
        else{
          textContext.strokeStyle = color;
          textContext.strokeText(text,0,0);
        }
      
      textCanvas.onmousedown = function(){
          var x1,y1;
          this.style.boxShadow = "0 0 1px 1px rgba(255,255,255,0.5)";
          getMousePos(canvas,event);
          x1 = x;
          y1 = y;

          this.onmousemove = function(){

                getMousePos(canvas,event);
                this.style.left = this.style.left.slice(0,-2) - (x1 - x) +"px";
                this.style.top = this.style.top.slice(0,-2) - (y1 - y) + "px";
                x1 = x;
                y1 = y;

              var g = this;
                bg.onmousemove = function(){
                  g.onmousemove();
                }
              
          }
          this.onmouseup = function(){
            this.onmousemove = null;
            bg.onmousemove = null;
            this.style.boxShadow= "";
          }
      }

    }

 } 

/**************************
 *函数名:save()
 *函数参数 ：无
 *功能：保存图片到本地
 *返回值：image
 *************************/
function save(){
    var image = new Image();
    image.src = canvas.toDataURL("image/png");
    return image;
}
/**************************
 *函数名:merge()
 *函数参数 ：无
 *功能：将文字canvas与底层canvas合并
 *返回值：无
 *************************/
function merge(){
    var textCanvas = document.getElementsByClassName("textCanvas");

    for (var i = textCanvas.length - 1; i >= 0; i--) {
      context.drawImage(textCanvas[i],textCanvas[i].style.left.slice(0,-2),textCanvas[i].style.top.slice(0,-2),textCanvas[i].width,textCanvas[i].height);
      bg.removeChild(textCanvas[i]);
    }
}
# DOM文档对象模型

## DOM就是描述整个HTML页面中节点关系的图谱。

获取页面中元素的方法

1. document.getElementById("id名") ;

   获取文档中的一个元素，如果没有获取到，值为null

   //这个的上下文只能是document

   //我们可以直接用id名来代表当前元素（不推荐）

   //若id名重复，只获取最前面的一个。

   //在IE6IE7中，会把表单元素input的name值当做id来使用

   //在IE6IE7中，不区分大小写

   //注意不要让表单的name和id值重复，不要用大小写来区分不同id

2. context.getElementsByTagName("元素标签名")；

   通过标签名获取整个文档中的一组元素。获取的是一个对象数据模型，也是一个类数组（元素从0开始计数）

   //context称之为上下文,可以限定获取元素的范围

   //document是从整个文档

   //var div=document.getElementById("tab");

      var oli=div.getElementsByTagName("li");

   //oli.length(oli["length"])可以获取元素的个数

   //获取第一个元素

     oli[0] 或者  oli.item(0)

   3.context.getElementsByName()

   通过name值获取一组元素

   //在IE浏览器下，只对表单起作用

   //应用于获取具有同样name的表单元素

   4.context.getElementsByClass("")

   通过类名获取整个文档中的一组元素。

   //项目中多用class，所以这个方法用的多，但是不兼容

   //IE6，7，8会报错

   //自己写一个兼容的

   5.document.documentElement//获取html

      document.body//获取body

      应用：获取当前屏幕的宽度

      var curWidth=document.documentElement.clientWidth//兼容所有浏览器

   6.移动端获取元素常用的方法（IE678不兼容）

   ​    document.querySelector()//获取一个

   ​    document.querySelectorAll()//获取多个

   querySelector,jQuery中的选择器是参考css中的选择器的规则

   例子： var odiv =document.querySelector("#tab") // "#id" ".class"  "li"  "#tab li"

   ​            var oinput=document.querySelectorAll("input[type='radio']")

   ## 动态创建一个元素

   var odiv=document.createElement("div");

   添加到页面中

   ducument.body(添加到该元素).appendChild(odiv);
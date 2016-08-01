/*
	getClass(className,[range])
	获取指定class的对象的集合
	className 指定的类名
	range     指定的范围
	如果传入范围，就是指定的范围，如果不传范围，就是document 
*/
function getClass(className,range){
	//设置获取元素的范围
	var range=range?range:document;
	//var range=range||document;
	//判断浏览器
	if(document.getElementsByClassName){
		//w3c
		return range.getElementsByClassName(className);
	}
	else{
		//ie6~8
		//arr 保存指定的className对象
		var arr=[];
		//获取所有的元素
		var all=range.getElementsByTagName('*');
	    //挑选指定的元素
	    for(var i=0;i<all.length;i++){
	    	//all[i].className==className
	    	//函数：判断当前元素的className是否包含指定的className.
	    	if(checkClass(all[i].className,className)){
	    		arr.push(all[i]);
	    	}

	    }
	    //挑选完毕，将数组输出；
	    return arr;
		
	}
}
/*
checkClass(obj,className)
检查obj里面是否包含className
obj "one two"
className  "one"
*/
function checkClass(obj,className){
	var arr=obj.split("");
	for(i=0;i<arr.length;i++){
		if (arr[i]==className){
			return true;
		}
	}
	return false;
}




//**********************************************************************************************************************************


/*getContent(obj,[val])获取或设置对象的文本
obj  指定的对象
val  要设置的内容*/

function getContent (obj,val) {
	if(obj.innerText){
		if(val===undefined){
			return obj.innerText;
		}
		else{
			obj.innerText=val;
		}
	}
	else{
		if(val===undefined){
			return obj.textContent;
		}
		else{
			obj.textContent=val;
		}
	}
}




//**************************************************************************************************************************************

/*
getStyle(obj,attr)
获取指定元素指定的样式;
obj   指定的元素；
attr  指定的样式
*/
function getStyle(obj,attr){
	//"height"  height
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	else{
		return getComputedStyle(obj,null)[attr];
	}
}




//***************************************************************************************************************************************

/*
$("")
.one  获取类名
#one  获取id
div	  获取标签
<div>   创建一个div元素
*/
/*function $(selecter,ranges){
	var ranges=ranges?ranges:document;
	if(selecter.charAt(0)=="."){
		return getClass(selecter.slice(1),ranges);
	}
	else if(selecter.charAt(0)=="#"){
		return document.getElementById(selecter.slice(1));
	}
	else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){
		return ranges.getElementsByTagName(selecter);
	}
	else if(/^<[a-z][a-z1-6]{0,10}>$/.test(selecter)){
		return document.createElement(selecter.slice(1,-1));
	}
}
*/



//**************************************************************************************************************************************
/*
getChilds(obj,[type]);
获取obj的元素节点
type true  元素节点和有意义的文本
     false  元素节点
1.获取obj的所有子元素；
2.遍历nodeType==1;
*/
function getChilds(obj,type){
	var childs=obj.childNodes;
	var type=type?type:false;
	var arr=[];
	if(type==true){
		for(var i=0;i<childs.length;i++){
			if(childs[i].nodeType==1||(childs[i].nodeType==3&&!(/^\s+$/.test(childs[i].nodeValue)))){
				arr.push(childs[i]);
			}
		}
	}else if(type==false){
	    for(var i=0;i<childs.length;i++){
			if(childs[i].nodeType==1){
				arr.push(childs[i]);
			}
	    }
    }
	return arr;
}



function firstChild(obj){
	return getChilds(obj)[0];
}


function lastChild(obj){
	var length=getChilds(obj).length;
	return getChilds(obj)[length-1];
}


function randomChild(obj,num){
	var length=getChilds(obj).length;
	if(length<=num){
		return "error";
	}
	return getChilds(obj)[num];
}




//***********************************************************************************************************************************
/*
getNext(obj)
obj  当前节点；
*/


//只获取元素节点
function getNext1(obj){
	var next=obj.nextSibling;
	if(next==null){
		return false;
	}
	while(next.nodeType!==1){
		next=next.nextSibling;
		if(next==null){
		return false;
	    }
	}
	return next;
}

//不仅获取元素节点，还获取有意义的文本
function getNext2(obj){
	var next=obj.nextSibling;
	if(next==null){
		return false;
	}
	while((next.nodeType==3&&/^\s+$/.test(next.nodeValue))||next.nodeType==8){
		next=next.nextSibling;
		if(next==null){
		return false;
	    }
	}
	return next;
}



//综合
function getNext(obj,type){
	var type=type?type:false;
	if(type==false){
		return getNext1(obj);
	}
	else if(type==true){
		return getNext2(obj);
	}
}

//综合起来    type=true    
/*function getNext(obj,type){
	var next=obj.nextSibling;
	if(next==null){
		return false;
	}
	var type=type?type:false;
	if(type){
		while(next.nodeType!==1){
			next=next.nextSibling;
			if(next==null){
			return false;
		    }
	    }
	}
	else{
		while((next.nodeType==3&&/^\s+$/.test(next.nodeValue))||next.nodeType==8){
			next=next.nextSibling;
			if(next==null){
			return false;
		    }
	    }
	}
	return text;
}*/




//************************************************************************************************************************

/*
insertAfter(newobj,obj,type)
*/
function insertAfter(newobj,obj,type){
	//获取obj的父元素
	var parent=obj.parentNode;
	//pos=getNext(obj)
	var type=type?type:false;
	var pos=getNext(obj,type);
	//pos    false      appendChild
	if(!pos){
		parent.appendChild(newobj);
	}
	//pos     next      insertBefore
    else{
    	parent.insertBefore(newobj,pos);
    }
}





//************************************************************************************************************************************
//自己写的，要总结一下。
//insertAfert(obj,obj1,obj2);
/*obj  父对象
obj1 要插入的对象
obj2 当前对象
在当前对象obj2之后插入obj1
获得下一个有意义的兄弟元素，如果当前元素后面没有元素，
插到最后*/
/*function  insertAfter(obj,obj1,obj2){
	var arr=getChilds(obj,true);
	for(var i=0;i<arr.length;i++){
		if(arr[i]==obj2){
			var a=arr[i-1];
			obj.insertBefore(obj1,a)
		}else{
            obj.appendChild(obj1);
		}

	}
}*/

//***********************************************************************************************************************************



/*同一个事件绑定多个事件处理程序，考虑兼容性问题
addEvent(对象，事件类型，事件处理程序)
给obj对象添加一个事件
obj对象
type事件类型
fn事件处理函数
*/
function addEvent(obj,type,fn)
{
	// click   onclick
	if (obj.attachEvent)
	{
		obj.attachEvent("on"+type,fn);
	}
	else{
		obj.addEventListener(type,fn,false);
	}
}
function removeEvent(obj,type,fn)
{
	// click   onclick
	if (obj.attachEvent)
	{
		obj.detachEvent("on"+type,fn);
	}
	else{
		obj.removeEventListener(type,fn,false);
	}
}





/***********************************************************************************************/
/*
$("")
.one  获取类名
#one  获取id
div	  获取标签
<div>   创建一个div元素
function 为window.onload中事件中绑定事件
*/




function $(selecter,ranges)
{
	if (typeof selecter=="string")
	{
		var ranges=ranges?ranges:document;
		if(selecter.charAt(0)=="."){
			return getClass(selecter.slice(1),ranges);
		}
		else if(selecter.charAt(0)=="#"){
			return document.getElementById(selecter.slice(1));
		}
		else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){
			return ranges.getElementsByTagName(selecter);
		}
		else if(/^<[a-z][a-z1-6]{0,10}>$/.test(selecter)){
			return document.createElement(selecter.slice(1,-1));
		}
	}
	else if(typeof selecter=="function")
	{
		addEvent(window,"load",selecter);
	}
}



/*****************************************************************************************/


/*
	offset(obj) result={left:xx,top:xx}
	获取元素到body的一个实际的位置
	第一步:获取具有定位属性的父元素和本身
	第二步：left=所有父元素的offsetLeft和左边框的宽度+自身的offsetLeft
	第三部：
*/
function offset(obj)
{
	var result={left:0,top:0}
	var arr=[];
	arr.push(obj);

	//获取具有定位属性的父元素
	var parent=obj.parentNode;
	while(parent.nodeName!="BODY")
	{
		if (getStyle(parent,"position")=="relative"||getStyle(parent,"position")=="absolute")
		{
			arr.push(parent);
		}
		parent=parent.parentNode;
	}

	//left=所有父元素的offsetLeft和左边框的宽度+自身的offsetLeft
	for(var i=0;i<arr.length;i++)
	{
		
		var leftw=parseInt(getStyle(arr[i],"borderLeftWidth"));
		leftw=leftw?leftw:0;
		var toph=parseInt(getStyle(arr[i],"borderTopWidth"));
		toph=toph?toph:0;
		if (i==0)
		{
			leftw=0;
			toph=0;
		}
		result.left+=arr[i].offsetLeft+leftw;
		result.top+=arr[i].offsetTop+toph;
	}

	return result;
}



/**************************************************************************/
/*滚轮事件兼容*/
/*
	mouseWheel(obj,downFn,upFn)
	给obj添加一个滚轮事件
	向下是执行 downFn
	向上是 执行 upFn
	scrollFn事件处理程序
*/
function mouseWheel(obj,downFn,upFn)
{
		if(obj.attachEvent)
		{
			obj.attachEvent("onmousewheel",scrollFn); 
		}else if(obj.addEventListener)
		{
			obj.addEventListener("mousewheel",scrollFn,false);
		
			obj.addEventListener("DOMMouseScroll",scrollFn,false);
	
		}



		function scrollFn(e){
 		var ev=e||window.event;
 		var direct=ev.detail||ev.wheelDelta;
 		if(direct==-120||direct==3){
 			downFn();
 		}
 		if(direct==120||direct==-3){
 			upFn();
 		}
	 }

}

/*******************************************************************************/

/*-----------------------------------------------------------*/
/*一楼层跳转*/
// window.onload=function()
// {
	
// 	var ch=document.documentElement.clientHeight;
// 	//获取各个楼层距离页面顶端的高度
// 	var floor=$('.yt_floor_item');
// 	var floorArr=[];

// 	for(var i=0;i<floor.length;i++){
// 		floorArr.push(floor[i].offsetTop);

// 	}
// 	//楼层跳转
// 	var flag=true;
	
// 	var item=$('.itembox');

// 	for(var i=0;i<item.length;i++){
// 		item[i].index=i;
// 		var arr=[];
// 		for (var j = 0; j < item.length; j++) {
// 			var a=$("a",item[j])[0];
// 			arr.push(a);
// 		}
// 		item[i].onclick=function(){
// 			a=$("a",item[this.index])[0];
// 			flag=false;
// 			for (var j = 0; j < arr.length; j++)
// 			{
// 				arr[j].id="";
// 			}
// 			a.id="item";
// 			animate(document.documentElement,{scrollTop:floorArr[this.index]},function(){
// 				flag=true;
// 			});
// 			animate(document.body,{scrollTop:floorArr[this.index]},function(){
// 				flag=true;
// 			});

			
// 		}
// 	}

// 	/*滚轮事件*/
// 	window.onscroll=function()
// 	{
// 		/*
// 		楼层块在大于等于第一个楼层时显示
// 		小于第一个楼层是隐藏
// 		*/
// 		if(!flag){return;}
// 		var obj=document.body.scrollTop?document.body:document.documentElement;
// 		var scrollTop=obj.scrollTop;

// 		if (scrollTop>=floorArr[0])
// 		{	
			
// 			storey.style.display="block";
			
// 		}
// 		else{
		
// 			storey.style.display="none";
	
// 		}
	
		
// 		// 色块随着楼层变色
// 		for(var i=0;i<item.length;i++)
// 		{
			
// 			if(scrollTop>=floorArr[i])
// 			{
// 				for (var j = 0; j < arr.length; j++)
// 				{
// 					arr[j].id="";
// 				}
			
// 				arr[i].id="item";

// 			}
// 		}
		


// 	}
// }
/*—————————————tab选项卡———————————————————*/

$(function(){
	var toplog=$(".top-ytlog");
	var seller=$(".seller");
	toplog.hover(function(){
		$(this).addClass("yt-wechat");
		$(this).find(".blank").css("display","block");
		$(this).children(".seller").css("display","block");
	},function(){
		$(this).removeClass("yt-wechat");
		$(this).find(".blank").css("display","none");
		$(this).children(".seller").css("display","none");
	})
})
/*搜索框*/
$(function(){
	$(".place-holder").on("focus",function(){
		if ($(this).val()=="男装品牌促购物赢大奖")
		{
			$(this).val("");
			$(this).css("color","#000");
		}
	})
	$(".place-holder").on("blur",function(){
		if ($(this).val()=="")
		{
			$(this).val("男装品牌促购物赢大奖");
			$(this).css("color","#999");
		}
	})
})
/*tab选项卡*/
$(function(){
	var dls=$(".menu-cate-all-out > dl");
	dls.hover(function(){
		$(this).addClass("menucate");
		$(this).children("dd").css("display","block");
},function(){
		$(this).removeClass("menucate");
		$(this).children("dd").css("display","none");
		
	})
})
/*banner轮播*/
$(function(){
	var as=$(".tab_pannel");
	var lis=$(".nav_trriger > li");
	var prev=$(".eva-switchable-prev");
	var next=$(".eva-switchable-next");
	var len=as.length;
	var arrColor=['url(./img/banner/bg1.jpg)','url(./img/banner/bg2.jpg)','url(./img/banner/bg3.jpg)','url(./img/banner/bg4.jpg)','url(./img/banner/bg5.jpg)'];
	var num=0;
	var t;
	t=setInterval(move,2000)
	function move()
	{
		num++;
		if (num>=len)
		{
			num=0;
		}
		as.css("opacity","0").eq(num).animate({"opacity":"1"});
		as.eq(num).animate({backgroundColor:arrColor[num]});
		lis.removeClass("eva-switchable-active").eq(num).addClass("eva-switchable-active");
	}
	function movel()
	{
		num--;
		if (num<=0)
		{
			num=len;
		}
		as.css("opacity","0").eq(num).animate({"opacity":"1"});
		as.eq(num).animate({backgroundColor:arrColor[num]});
		lis.removeClass("eva-switchable-active").eq(num).addClass("eva-switchable-active");

	}
	lis.on("click",function(){
		var that=this;
		clearTimeout(t);
		t=setTimeout(function(){
			var index=$(that).index();
			as.css("opacity","0").eq(index).animate({"opacity":"1"});
			$(that).siblings().removeClass("eva-switchable-active").end().addClass("eva-switchable-active");
		})
	})
	prev.on("click",movel);
	next.on("click",move);
})
// 超值特卖，爆款好货，手机专享 
$(function(){
	var lis=$(".cntal");
	var list=$(".pr_list_t");
	lis.hover(function(){
		var index=$(this).index();
		lis.removeClass("eva-switchable-active").eq(index).addClass("eva-switchable-active");
		list.css("display","none").eq(index).css("display","block");
	},function(){
		
	})
})
// 银泰百货专柜同款 
$(function(){
	var lis=$(".trgger");
	var list=$(".proll");
	lis.hover(function(){
		var index=$(this).index();
		lis.removeClass("eva-switchable-active").eq(index).addClass("eva-switchable-active");
		list.css("display","none").eq(index).css("display","block");
	},function(){
		
	})
	
})
//线条
$(function(){
	var borderAnimation=$(".border_animation");
	// var borderTop=borderAnimation.children(".border_top");
	// var bordeRight=borderAnimation.children(".border_right");
	// var borderBottom=borderAnimation.children(".border_bottom");
	// var borderLeft=borderAnimation.children(".border_left");
	borderAnimation.hover(function(){
		var borderTop=$(this).children(".border_top");
	    var bordeRight=$(this).children(".border_right");
		var borderBottom=$(this).children(".border_bottom");
		var borderLeft=$(this).children(".border_left");
		var widths=$(this).width();
		var heights=$(this).height();
		borderTop.animate({width:widths});
		borderLeft.animate({height:heights});
		borderBottom.animate({width:widths});
		bordeRight.animate({height:heights});
	},function(){

		var borderTop=$(this).children(".border_top");
	    var bordeRight=$(this).children(".border_right");
		var borderBottom=$(this).children(".border_bottom");
		var borderLeft=$(this).children(".border_left");
		borderTop.animate({width:0});
		borderLeft.animate({height:0});
		borderBottom.animate({width:0});
		bordeRight.animate({height:0});
	})

})
/*小轮播*/
$(function(){
	var box=$(".floor_banner_slide");
	box.mouseover(function(){
		var num=0;
		var as=$(this).find(".eva-switchable-panels").children("a");
		var lis=$(this).find(".floor_slide_trigger").children("li");
		var prev=$(this).find(".eva-switchable-prev");
		var next=$(this).find(".eva-switchable-next");
		var len=as.length;
		var t;
		t=setInterval(move,2000);
		function move()
		{
			num++;
			if (num>=len)
			{
				num=0;
			}
			as.css("zIndex",1).eq(num).animate({"zIndex":2});
			lis.removeClass("eva-switchable-active").eq(num).addClass("eva-switchable-active");
		}
		function movel()
		{
			num--;
			if (num<=0)
			{
				num=len;
			}
			as.css("zIndex",1).eq(num).animate({"zIndex":2});
			as.eq(num).animate({backgroundColor:arrColor[num]});
			lis.removeClass("eva-switchable-active").eq(num).addClass("eva-switchable-active");

		}
		lis.on("click",function(){
			var that=this;
			clearTimeout(t);
			t=setTimeout(function(){
				var index=$(that).index();
				as.css("zIndex",1).eq(index).animate({"zIndex":2});
				$(that).siblings().removeClass("eva-switchable-active").end().addClass("eva-switchable-active");
			})
		})
		prev.on("click",movel);
		next.on("click",move);

	})

})

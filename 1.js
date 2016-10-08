//可视区高度
		var iH = $(window).height()+300;
		console.log(iH)
		//第一屏的时候不需要滚动就执行动画
		$(window).load(fn1);
		//监视滚轮
		$(window).scroll(fn1);
		function fn1(){
			//滚动条的滚动距离
			var scrollT = $(window).scrollTop();
			//console.log(scrollT)
			//获取到每一屏幕
			var scale = Math.round(scrollT/iH);
			console.log(scale)
			
			
			
			
			if(scale==0){
				$('.one_box1').addClass('active')
				$('.one_box2').addClass('active')
				//socll_top()
				//下面代码是为了让元素随着鼠标滚动而动
				$('#box').animate({
					top:-scrollT/10
				},300)
				$('.one_box2').animate({
					top:40+scrollT/3*2,
					opacity:1
				},100)
				$('.one_box1').animate({
					top:40+scrollT/3*2,
					opacity:1
				},100)
				
			}else{
				$('.one_box1').removeClass('active')
				$('.one_box2').removeClass('active')
				
				
				$('.one_box2').animate({
					opacity:0
					
				},300)
				$('.one_box1').animate({
					opacity:0
					
				},300)
			}

			console.log(iH+scrollT,$('.two_box1').offset().top+300)
			if(scale==1){
				var ys_top=iH+scrollT
				var ys_top1=$('.two_box1').offset().top+300
				if(ys_top>=ys_top1){
					$('.two_box1').addClass('active')
					$('.two_box2').addClass('active')
				}
				
			}else{
				$('.two_box1').removeClass('active')
				$('.two_box2').removeClass('active')
			}

			
		}
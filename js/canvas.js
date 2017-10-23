var dom = document.getElementById('clock');
//获取canvas上下文；
var ctx = dom.getContext('2d');
var width = ctx.canvas.width;
var height = ctx.canvas.height;
var r = width/2;
console.log(width,height,r);

function drawBackground(){
	//保存最开始的环境，这会原点还在左上角。
	ctx.save();
	//重置圆心位置
	ctx.translate(r,r);
	//开始一条新路径
	ctx.beginPath();
	//定义线条宽度
	ctx.lineWidth = 10;
	//画圆
	ctx.arc(0,0,r-5,0,2*Math.PI,false);
	//绘制这条路径
	ctx.stroke();

	var hourNumber=[3,4,5,6,7,8,9,10,11,12,1,2];
	//设置字体大小样式，对齐方式；
	ctx.font = '18px Arial';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	hourNumber.forEach(function(number,i){
		//每个小时的弧长
		var rad = 2*Math.PI/12*i;
		var x = Math.cos(rad)*(r-30);
		var y = Math.sin(rad)*(r-30);
		//填充字符
		ctx.fillText(number,x,y);
	})


	for(var i=0;i<60;i++){
		var rad=2*Math.PI/60*i;
		var x = Math.cos(rad)*(r-18);
		var y = Math.sin(rad)*(r-18);
		//开始新路径
		ctx.beginPath();
		if(i%5==0){
			//填充的颜色
			ctx.fillStyle = '#000';
			ctx.arc(x,y,1,0,2*Math.PI,false)
		}else{
			ctx.fillStyle = '#383a31';
			ctx.arc(x,y,1,0,2*Math.PI,false)
		}
		//填充定义的路径
		ctx.fill()
	}
	// ctx.restore();
}

function drawhour(hour,minute){
	//保存当前环境的状态
	ctx.save();
	var rad = 2*Math.PI/12*hour;
	//分针引起的弧度
	var minrad = 2*Math.PI/12/60*minute;
	//线条旋转
	ctx.rotate(rad+minrad);
	//线条宽度
	ctx.lineWidth=6;
	ctx.beginPath();
	//线条两端变圆
	ctx.lineCap='round';
	//线条起点
	ctx.moveTo(0,10);
	//线条终点
	ctx.lineTo(0,-r/2);
	ctx.stroke();
	//返回保存过的状态
	ctx.restore();
}

function drawMinute(minute){
	ctx.save();
	var rad = 2*Math.PI/60*minute;
	ctx.rotate(rad);
	ctx.lineWidth=3;
	ctx.beginPath();
	ctx.lineCap='round';
	ctx.moveTo(0,10);
	ctx.lineTo(0,-r+30);
	ctx.stroke();
	ctx.restore()
}

function drawSecond(second){
	ctx.save();
	var rad = 2*Math.PI/60*second;
	ctx.rotate(rad);
	ctx.beginPath();
	ctx.fillStyle = 'red';
	//路径起点
	ctx.moveTo(-2,20);
	//路径一个角
	ctx.lineTo(2,20);
	//路径另一个角，会自动与上一个角连起来
	ctx.lineTo(1,-r+18);
	ctx.lineTo(-1,-r+18);
	//路径填充
	ctx.fill();
	ctx.restore()
}

function drawDot(){
	ctx.beginPath();
	ctx.fillStyle = '#fff';
	ctx.arc(0,0,3,0,2*Math.PI,false);
	ctx.fill()
}


function draw(){
	//清除整个canvas
	ctx.clearRect(0,0,width,height);
	//获取时间
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	drawBackground();
	drawhour(hour,minute);
	drawMinute(minute);
	drawSecond(second);	
	drawDot();
	//用来还原原点到左上角的；
	ctx.restore();
}
 setInterval(draw,1000)
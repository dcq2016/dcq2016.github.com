/**
 * Created by dcq on 2017/9/5.
 */
window.onload = function() {
	var aLi = document.querySelectorAll('.Home_product ul li');
	var aClass = [];
	var bOk = false;
	for (var i = 0; i < aLi.length; i++) {
		aLi[i].className = 'li0' + (i + 1);
		aClass[i] = aLi[i].className
	}
	function prev(more) {
		if (bOk) return;
		bOk = true;
		aClass.push(aClass.shift());
		if (more) {
			aClass.push(aClass.shift())
		}
		change()
	}
	function next(more) {
		if (bOk) return;
		bOk = true;
		aClass.unshift(aClass.pop());
		if (more) {
			aClass.unshift(aClass.pop())
		}
		change()
	}
	for (var i = 0; i < aLi.length; i++) {
		aLi[i].onclick = function() {
			if (this.className == 'li01') {
				prev(true)
			} else if (this.className == 'li02') {
				prev()
			} else if (this.className == 'li04') {
				next()
			} else if (this.className == 'li05') {
				next(true)
			}
		}
	}
	function change() {
		for (var i = 0; i < aLi.length; i++) {
			aLi[i].style.WebkitTransition = '.5s all ease';
			aLi[i].className = aClass[i]
		}
		var oCur = document.querySelector('.li03');

		function tranEnd() {
			oCur.removeEventListener('transitionend', tranEnd, false);
			bOk = false
		}
		oCur.addEventListener('transitionend', tranEnd, false)
	}
	//视频弹出特效
	/*var oBtn = document.querySelector('.log_btn');
	var oBox = document.querySelector('.login_box');
	var oClose = document.querySelector('.close_btn');
	oBtn.onclick = function(){
		oBox.style.display = 'block';
		
		oBox.style.WebkitTransition = '.5s all ease';
		
		setTimeout(function(){
			oBox.style.opacity = 1;
			oBox.style.WebkitTransform = 'scale(1,1)';
		},5);
	};
	oClose.onclick = function(){
		oBox.style.opacity = 0;
		oBox.style.WebkitTransform = 'scale(4,4)';
		
		function tranEnd(){
			oBox.removeEventListener('transitionend',tranEnd,false);
			oBox.style.display='none';
		}
		oBox.addEventListener('transitionend',tranEnd,false);
	};*/

};
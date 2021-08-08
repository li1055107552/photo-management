var i = 0;
console.log("test")
var getImageDir = api_getImageDir
var util = api_util
var fn = api_functional

new Vue({
	el: "#all",
	data: {
		detailBlock: [
			// 第一列
			[{
				label: "路径",
				attribute: "path"
			}, {
				label: "名称",
				attribute: "filename"
			}, {
				label: "标签",
				attribute: "tag"
			}],
			// 第二列
			[{
				label: "时间",
				attribute: "time"
			}],
			// 第三列
			[{
				label: "大小",
				attribute: "size"
			}, {
				label: "宽",
				attribute: "width"
			}, {
				label: "高",
				attribute: "height"
			}, {
				label: "分辨率",
				attribute: "resolution"
			}]
		],
		imgArr: [
			// url		完整路径
			// path		路径
			// filename	文件名
			// time		修改时间
			// size		大小
			// tag		标签数组
			// height	高度
			// width	宽度
			// resolution	分辨率
		],
		showimage: {
			url: "",
			// path		路径
			// filename	文件名
			// time		修改时间
			// size		大小
			// tag		标签数组
			height: "",
			width: ""
			// resolution	分辨率
		},
		tag:[
			"ACG","动漫","2020","小名","小红","学校","宿舍","小A","大笔","晓东","不知道了啦"
		],
		dirWidth:15
	},
	created() {
		// 监听按键
		addEventListener('keydown', this.handleKeyPress, true)
		// 获取图片资源目录
		this.$data.imgArr = getImageDir.start(false)
		// 设置第一张显示的图片
		var that = this
		setTimeout(()=>{
			that.$data.showimage = that.$data.imgArr[0]
		},this.$data.imgArr.length * 2)	//this.$data.imgArr.length
	},
	methods: {
		// 上一张
		before() {
			if (i) {
				this.set(this.$data.imgArr[--i]);
			} else {
				alert("已经是第一张啦！")
			}

			console.log(this.$data.showimage.url)
		},
		// 下一张
		next() {
			if (i < this.$data.imgArr.length - 1) {
				this.set(this.$data.imgArr[++i]);
			} else {
				alert("已经是最后一张啦！")
			}

			console.log(this.$data.showimage.url)
			console.log(new Date(this.$data.showimage.time).getTime())
		},
		// 直接跳转至对应的图片
		goto(img,index) {
			i = index;
			this.set(img)
		},
		setTag(tag){
			var tagArr = this.$data.showimage.tag
			var index = tagArr.indexOf(tag)
			if( index != -1){
				tagArr.remove(index)
				// alert("已存在该标签")
			} else{
				tagArr.push(tag)
			}
		},
		// 设置显示的图片
		set(img) {
			this.$data.showimage = img		

		},
		// 头部栏 动态设置样式
		setCSS(e){
			console.log(e.target.value)
			this.$data.dirWidth = e.target.value
		},
		// '资源管理器'打开对应的文件目录
		openFile(){
			util.openDir(this.$data.showimage.url)
		},
		// 文件重命名
		rename(){
			var tag = this.$data.showimage.tag
			var filename = this.$data.showimage.filename
			var name = util.splicTagFilename(tag, filename)
			console.log(name)
			var oldpath = this.$data.showimage.url
			var newpath = this.$data.showimage.path + name
			util.rename(oldpath, newpath)
			this.$data.imgArr = getImageDir.start(false)
		},
		changeName(e){
			console.log(e)
			if(e == 1){
				fn.changeFilename.toString(this.$data.imgArr[i])
			} else if (e == 2) {
				fn.changeAllFilename.toString(this.$data.imgArr)
			}
			this.$data.imgArr = getImageDir.start(false)
		},
		// 监听当前页面按键
		handleKeyPress(event) {
			// 你可以把处理按键按下事件的代码放在这里。
			console.log(`你按下了 ${event.key},${event.keyCode}`);
			if (event.key == "ArrowLeft")
				this.before()
			else if (event.key == "ArrowRight")
				this.next()
			else if(event.ctrlKey&&event.key==='c'){
				console.log('Ctrl+c');
			}
			else if(event.ctrlKey&&event.key==='s'){
				console.log('Ctrl+s');
				this.rename()
			}
			else if(event.ctrlKey&&event.shiftKey&&event.keyCode===83){
				console.log('Ctrl+Alt+s')
			}

		}
	}
})

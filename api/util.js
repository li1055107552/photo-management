var fs = require('fs'); //引用文件系统模块
var moment = require('moment');
var exec = require('child_process').exec;

var api_util = {
	// 获取图片的Base64值
	getBase64Image(img) {
		var canvas = document.createElement('canvas')
		canvas.width = img.width
		canvas.height = img.height
		var ctx = canvas.getContext('2d')
		ctx.drawImage(img, 0, 0, img.width, img.height)
		var ext = img.src.substring(img.src.lastIndexOf('.') + 1).toLowerCase()
		var dataURL = canvas.toDataURL('image/' + ext)
		return dataURL;
	},
	// 获取图片的 宽、高、分辨率
	getImageHW(imgObj){
		const image = new Image()
		image.src = imgObj.path + imgObj.filename
		image.onload = () => {
			imgObj.height = image.height
			imgObj.width = image.width
			imgObj.resolution = image.height + "×" + image.width
		}
		// return imgObj;
	},
	// 为文件大小加单位
	getSize(s){
		var size = (s / 1024).toFixed(1)
		if(size){
			size = size + "KB"
		}
		if(size >= 1024){
			size = (size / 1024).toFixed(2) + "MB"
		}
		return size
	},
	// 格式化时间
	moment: {
		show: function(date){
			var date = new Date(date);
			return moment(date).format("YYYY/MM/DD hh:mm:ss")
		},
		file: function(date){
			var date = new Date(date);
			return moment(date).format("YYYY-MM-DD hh'mm'ss")
		}
	},
	splicTagFilename: function splicTagFilename(tag,filename){
		var name = ""
		for(let i = 0; i < tag.length; i++){
			name += tag[i]
			if(i < tag.length-1)
				name += ","
			else
				name += " "
			console.log(name)
		}
		name += filename
		return name
	},
	// 打开'资源管理器'对应的文件目录，并选中当前文件
	openDir: function openDir(path){
		var str = path.replaceAll("\/","\\");
		exec('explorer.exe /select,"'+ str +'"')
	},
	// 文件重命名
	rename: function rename(oldpath, newpath){
		fs.renameSync(oldpath, newpath)
	}
}

// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

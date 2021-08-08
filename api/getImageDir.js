//获取项目工程里的图片
var fs = require('fs'); //引用文件系统模块
var image = require("imageinfo"); //引用imageinfo模块

/********* 全局定义 *********/
const root_path = "D:/照片/动漫图/";

/********* 定义函数 *********/

// 递归扫描所有文件
function readAllFileList(path, filesList) {
	var files = fs.readdirSync(path);
	files.forEach(function(itm, index) {
		var stat = fs.statSync(path + itm);
		if (stat.isDirectory()) {
			//递归读取文件
			readFileList(path + itm + "/", filesList)
		} else {
			var obj = {}; //定义一个对象存放文件的路径和名字
			obj.path = path; //路径
			obj.filename = itm //名字
			filesList.push(obj);
		}
	})
}
// 仅扫描当前文件
function readOnlyFileList(path, filesList) {
	var files = fs.readdirSync(path);
	files.forEach(function(itm, index) {
		var stat = fs.statSync(path + itm);
		if ( !stat.isDirectory() ) {
			var obj = {}; //定义一个对象存放文件的路径和名字
			obj.path = path; //路径
			obj.filename = itm //名字
			obj.time = stat.mtime
			obj.size = stat.size
			filesList.push(obj);
		}
	})
}

// 获取文件夹下的文件
function getFileList(path, child) {
	var filesList = [];
	child ? readAllFileList(path, filesList) : readOnlyFileList(path, filesList);
	return filesList;
}
// 获取文件夹下的所有图片
function getImageFiles(filesList) {
	var imageList = []
	// 选择出图片类型的
	for (let i = 0; i < filesList.length; i++) {
		var path = filesList[i].path + filesList[i].filename;
		if (!fs.statSync(path).isDirectory()) {
			// 获取该文件的信息
			var ms = image(fs.readFileSync(path))
			if (ms.type == 'image') {
				// 若为图片类型，则添加
				imageList.push(filesList[i])
			}
		}
	}
	return imageList;
}

function getFilenameTag(image){
	var fn = image.filename
		// 既包含"," 也包含" " 
	if( (fn.indexOf(" ") != -1) && ( fn.indexOf(",") != -1 ) ){
		
		var tagFilename = fn.split(" ")
		fn = ""
		
		for(let i = 1; i < tagFilename.length; i++) {
			fn += tagFilename[i]
			if (i < tagFilename.length -1) {
				fn += " "
			}
		}
		image.filename = fn
		image.tag = [].concat(tagFilename[0].split(","));
		
	} else {
		image.tag = []
	}
}

/********* 程序开始 *********/
var api_getImageDir = {
	start: function(child) {
		// 获取所有文件
		var filesList = getFileList(root_path, child);
		// 过滤出图片文件
		var imageList = getImageFiles(filesList);
		
		for(let i = 0; i < imageList.length; i++) {
			// 处理url，做渲染
			imageList[i].url = imageList[i].path + imageList[i].filename
			// 处理'文件大小'
			imageList[i].size = api_util.getSize(imageList[i].size)			
			// 批量处理时间
			imageList[i].time = api_util.moment.show(imageList[i].time)
			// 批量处理文件的宽、高、分辨率
			api_util.getImageHW(imageList[i])
			// 分离文件名 = 标签 + 真正的文件名
			getFilenameTag(imageList[i])
			
		}
		
		imageList.sort( function(a,b){
			// console.log(a.filename,b.filename)
			return a.filename - b.filename
			return new Date(a.time).getTime() - new Date(b.time).getTime()
		})
		// imageList.sort( function(){ return -1 })
		
		// console.log(imageList)
		return imageList;
	}
}

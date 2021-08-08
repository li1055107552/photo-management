
function getNewPath(img, date){
	var filename = img.filename
	var postfix = "." + filename.substring(filename.lastIndexOf('.') + 1);
	var name = api_util.splicTagFilename(img.tag, date + postfix)
	var newpath = img.path + name
	return newpath
}
		
var api_functional = {

	changeFilename: {
		
		// 将文件名改为时间戳
		toTimestamp: function(img) {
			var date = new Date(img.time).getTime()
			var newpath = getNewPath(img, date)
			api_util.rename(img.url, newpath)
		},
		toString: function(img){
			var date = api_util.moment.file(img.time)
			var newpath = getNewPath(img, date)
			api_util.rename(img.url, newpath)
		}
	},
	changeAllFilename: {
		toTimestamp: function(imgList) {
			for (let i = 0; i < imgList.length; i++) {
				var img = imgList[i]
				var date = new Date(img.time).getTime()
				var newpath = getNewPath(img, date)
				api_util.rename(img.url, newpath)
				
			}
		},
		toString: function(imgList){
			for (let i = 0; i < imgList.length; i++) {
				var img = imgList[i]
				var date = api_util.moment.file(img.time)
				var newpath = getNewPath(img, date)
				api_util.rename(img.url, newpath)
			}
		}
	}

}

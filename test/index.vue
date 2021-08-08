<template>
	<div class="all" id="all">
		<!-- 头部 -->
		<div class="top">
			
		</div>
		<!-- 内容容器 -->
		<div class="contain">
			<!-- 左边目录 -->
			<div class="dir">
				<!-- 当前路径下的所有图片 -->
				<div class="dir_now">
					
				</div>
				<!-- 保存路径下的所有图片 -->
				<div class="dir_save">
					
				</div>
			</div>
			<!-- 主干部分 -->
			<div class="trunk">
				<!-- 图片展示区域 -->
				<div class="image" id="img">
					<div class="image_icon">
						<img src="../image/左.png" @click="before()">
					</div>
					<div class="image_img">
						<!-- <img v-bind:src="showimage.url" v-bind:width="showimage.width" v-bind:height="showimage.height" mode="aspectFit"> -->
						<img v-bind:src="showimage.url">
					</div>
					<div class="image_icon">
						<img src="../image/右.png" @click="next()">
					</div>
				</div>
				<!-- 图片的详细信息 -->
				<div class="detail">
					<div class="detailBlock detail_src">
						<label>路径:</label>
					</div>
					<div class="detailBlock detail_time">
						<label>时间:</label>
					</div>
					<div class="detailBlock detail_width">
						<label>宽:</label>{{showimage.width}}
					</div>
					<div class="detailBlock detail_name">
						<label>名称:</label>
					</div>
					<div class="detailBlock detail_size">
						<label>大小:</label>
					</div>
					<div class="detailBlock detail_height">
						<label>高:</label>{{showimage.height}}
					</div>
					<div class="detailBlock detail_tag">
						<label>标签:</label>
					</div>
					<div class="detailBlock detail_resolution">
						<label>分辨率:</label>{{showimage.width}}×{{showimage.height}}
					</div>
				</div>
				
			</div>
			
		</div>
	
	</div>
	
</template>

<script src="./index2.js">
</script>

<style>
	@import url("index.css");
</style>

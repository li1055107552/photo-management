export default {
	data() {
		return {
			imgArr: [
				"D:/照片/动漫图/%(~$)TJ0$([_U7%M3QZYIJB.jpg",
				"D:/照片/动漫图/)OJC]6YC7S}RS{[THPZ_~9L.jpg",
				"D:/照片/动漫图/)_5_LU@XN84P4P9]`79QB42.jpg",
				"D:/照片/动漫图/)}F[WZ}@(YYLCV@VHLVAR[7.jpg",
				"D:/照片/动漫图/0ATBI~85]GJG[TR5A$1Q10I.jpg",
				"D:/照片/动漫图/30)ZX5I5BRJQB1Z)CT)@YLC.jpg",
				"D:/照片/动漫图/31%7TW663AJNJ{]2PYZQ4HJ.jpg",
				"D:/照片/动漫图/31PP30WP82WHDOF]A_[9X{X.jpg",
				"D:/照片/动漫图/3G2~M62$8@9I70J9]JKJF1B.jpg",
				"D:/照片/动漫图/3J{I9M8V~P{GGVP}1ETUUEE.bmp",
				"D:/照片/动漫图/636[OU0P%EX3{8`M9$)KLID.jpg",
				"D:/照片/动漫图/6LRDF]XC3{)1U1U7_`ZNCV5.jpg",
				"D:/照片/动漫图/71WDW(13P{AXZ`_~W25[SE4.jpg",
				"D:/照片/动漫图/75AC2NMR61LQN3RUFZO3[UQ.jpg",
				"D:/照片/动漫图/7CW$6)IU{}355F~AG9~DU9K.jpg",
				"D:/照片/动漫图/8_GA9V]U${4`DVRS$GS[38H.jpg",
				"D:/照片/动漫图/@$_GGTLM@4CYB8R)ZVE{B$0.jpg",
				"D:/照片/动漫图/929]VO3(3[$5{CZ]]IFQJ08.bmp",
				"D:/照片/动漫图/BQ7EPQGA8GM8APV59N$PFPB.jpg",
				"D:/照片/动漫图/CY8{$N@SKTH3%D)11R)@J%M.bmp",
				"D:/照片/动漫图/IAMF_EQSC48{IV@}I`3RVO7.jpg",
				"D:/照片/动漫图/JGG%J4WYOMIN%LO9FP26AJV.jpg",
				"D:/照片/动漫图/J{S0MAI45NN_O3K{M`$PT0P.jpg",
				"D:/照片/动漫图/KK{C0@Y3ZLH7(}IGHR1MJPS.png",
				"D:/照片/动漫图/KYQB)Y{B7]3HV{ORF)LC{WE.jpg",
				"D:/照片/动漫图/LX$[J7$OG359@U2VG[`V`JV.jpg",
				"D:/照片/动漫图/L_@S0MJGDG1}YC8KOQ@IY(L.jpg",
				"D:/照片/动漫图/M}O}3EZ`55A9ANB_DCU0S`S.jpg",
				"D:/照片/动漫图/OWLFNTL~L1D(L{S(ZBMW5PN.jpg",
				"D:/照片/动漫图/Q@EM7[5XIBJ__XYI38@W$AM.jpg",
				"D:/照片/动漫图/Q~L_P9]_WQNZP)A}6ZMNT03.jpg",
				"D:/照片/动漫图/SUC30G4[OXZPG13@Z)V3(6K.bmp",
				"D:/照片/动漫图/TM1Q7QMW57KUJ[T$CT32P(S.jpg",
				"D:/照片/动漫图/UY52N$%P%64FHZ01HB)6QIV.png",
				"D:/照片/动漫图/VZMZZXRSR]{EF[6Y~FTYXR5.jpg",
				"D:/照片/动漫图/V[RF@4S(O50XMVCAMKBJMHO.jpg",
				"D:/照片/动漫图/WF%]L]QB5QW7B)$0@@LI_`G.jpg",
				"D:/照片/动漫图/WV%@W74_B`5}IXIQL]2(0~9.jpg",
				"D:/照片/动漫图/Y_$D7V3GVTCEYKMXCN$O(T7.jpg",
				"D:/照片/动漫图/]`X0V$T5AH%B2756%SV{W{U.jpg",
				"D:/照片/动漫图/{IIK{I7]LU_FZK[XY8}D~EL.jpg",
				"D:/照片/动漫图/{PD{_RWD5Q2U[`LT_QW0N~A.jpg",
				"D:/照片/动漫图/~]VY1CM@]BM3V~(X21D0~L4.jpg"
			],
			showimage: {
				url: "",
				height: "",
				width: ""
			},
			viewImgArray: []
		}
	},
	onLoad() {
		var list = this.$data.imgArr;
		this.set(list[0]);
		this.getImageFiles();

	},
	methods: {
		before() {
			if (i) {
				i--;
			} else {
				alert("已经是第一张啦！")
			}
			this.set(this.$data.imgArr[i]);

			console.log(this.$data.showimage.url)
			console.log(this.$data.viewImgArray[i])
		},
		next() {
			if (i < this.$data.imgArr.length) {
				i++
			} else {
				alert("已经是最后一张啦！")
			}
			this.set(this.$data.imgArr[i]);

			console.log(this.$data.showimage.url)
			console.log(this.$data.viewImgArray[i])
		},
		getBase64Image1(img) {
			var canvas = document.createElement('canvas')
			canvas.width = img.width
			canvas.height = img.height
			var ctx = canvas.getContext('2d')
			ctx.drawImage(img, 0, 0, img.width, img.height)
			var ext = img.src.substring(img.src.lastIndexOf('.') + 1).toLowerCase()
			var dataURL = canvas.toDataURL('image/' + ext)
			return dataURL;
		},
		set(imgURL) {
			var that = this
			this.$data.showimage.url = imgURL
			const image = new Image()
			image.src = imgURL
			image.onload = () => {
				that.$data.showimage.height = image.height
				that.$data.showimage.width = image.width
			}
		},

	}
}

const uniGis = uni.requireNativePlugin("UniGisModule");

/**
 * 获取当前位置
 * @author 王国栋
 * @date 2019-04-09
 * @update [序号][日期YYYY-MM-DD] [更改人姓名][变更描述]
 * @return position{} coordinate坐标,address地址名
 */
function loadCoordinate(error = function() {
	showNoneToast('获取位置信息失败,请重新定位!');
}) {
	return new Promise((resolve, reject) => {
		
		uniGis.uniGis({}, obj => {
			let position = {
				coordinate: '',
				address: '',
				longitude: '',
				dimension: ''
			};
			position.coordinate = `${obj.longitude},${obj.latitude}`;
			//经度
			position.longitude = obj.longitude;
			//纬度
			position.dimension = obj.latitude;
			getAddressByCoordinate(position.longitude, position.dimension).then(r => {
				position.address = r.formatted_address;
				resolve(position);
			});
		});
		
	})
}

function getAddressByCoordinate(lon, lat) {
	var url =
		`http://172.20.21.214:51000/tiandituapi/geocoder?postStr={'lon':${lon},'lat':${lat},'ver':1}&type=geocode&tk=${constant.TIDITU_KEYS}`;
	return new Promise((resolve, reject) => {
		uni.request({
			url: url,
			success: (res) => {
				resolve(res.data.result);
			},
			fail: (err) => {
				reject(err)
			}
		});
	});

}
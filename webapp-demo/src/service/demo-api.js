import axios from '../utils/base-api'
import _ from 'lodash'

/**
 * 上传文件
 * @param url
 * @param params
 * @param file
 * @returns {AxiosPromise<any>}
 */
export function n_uploadFile(url,params,file) {
	//header-sign-params
	let param = new FormData()
	_.forEach(params,(value,key) => {
		param.append(key, value)
	})
	_.forEach(file,(value,key) => {
		param.append(key, value)
	})
	let config = {
		headers: {
			'Content-Type': 'multipart/form-data',
		}
	}
	return axios.post(url, param, config)
}

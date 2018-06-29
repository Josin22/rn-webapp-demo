import jsrsasign from "jsrsasign";

export function encryptData(params) {
	let keyArray = []
	for (let key in params) {
		keyArray.push(key);
	}
	keyArray.sort();
	let sb = "";
	for (let i = 0; i < keyArray.length; i++) {
		sb += keyArray[i] + "=" + params[keyArray[i]] + "&";
	}
	let pkcs8key = "your key";
	let rsaPrivateKey = new jsrsasign.RSAKey();
	/*由于java后台生成的key格式是pkcs8格式 而前端js插件是pkcs1格式解析，故使用KEYUTIL.getKey(pkcs8key)获取私钥*/
	rsaPrivateKey = jsrsasign.KEYUTIL.getKey(pkcs8key);
	let sigval = rsaPrivateKey.sign(sb.substring(0, sb.length - 1), "sha1");
	return sigval
}
export const mdPassword = (pw) =>{
	return md5(pw+'your salt')
}
export const getObjectURL = (file) =>{
	let url = null ;
	if (window.createObjectURL!=undefined) { // basic
		url = window.createObjectURL(file) ;
	} else if (window.URL!=undefined) { // mozilla(firefox)
		url = window.URL.createObjectURL(file) ;
	} else if (window.webkitURL!=undefined) { // webkit or chrome
		url = window.webkitURL.createObjectURL(file) ;
	}
	return url ;
}
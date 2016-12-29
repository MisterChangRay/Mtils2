;'use strict';

/**
 * @author Rui.Zhang
 * @class 前端开发辅助工具类
 * @date 2016-09-04 22:32:09
 * @description Mtils 是 My Utils 的简写, 本工具提供前台常用的文本处理、 表单处理、 数据校验、 数据安全等函数。<br />
 * @description 除了基本的函数封装外, 本工具对原生的对象进行扩展, 更方便使用。
 * @since version 2.0.0
 */
window.Mtils = {
	/**
	 * @author Rui.Zhang
	 * @class 定义一些常量
	 * @description 提供一些常量
	 */
	constant : {
		/**
		 * @description 性别常量女(0)
		 */
		WOMAN : 0,
		/**
		 * @description 性别常量男(1)
		 */
		MAN : 1,
		/**
		 * @description 进制转换基础数据
		 */
		BASE_DECIMAL : "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_@"

	},




	/**
	 * @author Rui.Zhang
	 * @class 数据校验类
	 * @description 提供一些数据校验函数
	 */
	validation : {

		/**
		 * @author Rui.Zhang
		 * @description 判断变量是否数组
		 * @param varname 待校验的变量名
		 * @returns {Boolean}, true:为数组
		 **/
		isArray : function (varname) {
			varname = varname || this;
			if(-1 != Object.prototype.toString.call(varname).indexOf("Array")){
				return true;
			} else {
				return false;
			}
		},

		/**
		 * @author Rui.Zhang
		 * @description 判断变量是否对象
		 * @param varname 待校验的变量名
		 * @returns {Boolean}, true:为对象
		 **/
		isObject : function (varname) {
			varname = varname || this;
			if(-1 != Object.prototype.toString.call(varname).indexOf("Object")){
				return true;
			} else {
				return false;
			}
		},

		/**
		 * @author Rui.Zhang
		 * @description 判断变量是否字符串
		 * @param varname 待校验的变量名
		 * @returns {Boolean}, true:为字符串
		 **/
		isString : function (varname) {
			varname = varname || this;
			if(-1 != Object.prototype.toString.call(varname).indexOf("String")){
				return true;
			} else {
				return false;
			}
		},


		/**
		 * @author Rui.Zhang
		 * @description 判断数据是否为小数
		 * @param {String} str_data 待校验的数据
		 * @returns {Boolean}, true:是小数
		 **/
		isDecimal : function (str_data) {
			str_data = str_data || String(this);

		    var reg =  /^[0-9]+\.[0-9]+$/;
		    return reg.test(str_data);
		},


		/**
		 * @author Rui.Zhang
		 * @description 判断数据是否为整数
		 * @param {String} str_data 待校验的数据
		 * @returns {Boolean}, true:是整数
		 **/
		isInteger : function (str_data) {
			str_data = str_data || String(this);
		    var reg =  /^[0-9]+$/;
		    return reg.test(str_data);
		},



		/**
		 * @author Rui.Zhang
		 * @description 判断数据是否为数字(包括小数)
		 * @param {String} str_data 待校验的数据
		 * @returns {Boolean}, true:是数字
		 **/
		isNumber : function (str_data) {
			str_data = str_data || String(this);
		    var reg =  /^[0-9]+(\.[0-9]+)?$/;
		    return reg.test(str_data);
		},



		/**
		 * @author Rui.Zhang
		 * @description 判断数据是否为QQ
		 * @param {String} str_data 待校验的数据
		 * @returns {Boolean}, true:是QQ
		 **/
		isQQ : function (str_data) {
			str_data = str_data || String(this);
		    var reg =  /^[1-9][0-9]{4,10}$/;
		    return reg.test(str_data);
		},



		/**
		 * @author Rui.Zhang
		 * @description 判断数据是否全为英文, 即全为字母
		 * @param {String} str_data 待校验的数据
		 * @returns {Boolean}, true:全为字母
		 **/
		isEnglish : function (str_data) {
			str_data = str_data || String(this);
		    var reg =  /^[a-zA-Z]+$/;
		    return reg.test(str_data);
		},



		/**
		 * @author Rui.Zhang
		 * @description 判断数据是否为IPV4地址
		 * @param {String} str_data 待校验的数据
		 * @returns {Boolean}, true:是IPV4地址
		 **/
		isIpV4 : function (str_data) {
			str_data = str_data || String(this);
		    var reg =  /^([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/;
		    return reg.test(str_data);
		},



		/**
		 * @author Rui.Zhang
		 * @description   判断数据是否为网址(URL)
		 * @param {String} str_data 待校验的数据
		 * @returns {Boolean}, true:是网址
		 **/
		isUrl : function (str_data) {
			str_data = str_data || String(this);
		    var regular = /^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\@&?=+,.!\/~%\$]*)?)$/i
		    if (regular.test(str_data)) {
		        return true;
		    } else {
		        return false;
		    }
		},


		/**
		 * @author Rui.Zhang
		 * @description 判断数据是否为邮箱
		 * @param {String} str_data 待校验的数据
		 * @returns {Boolean}, true:是邮箱
		 **/
		isEmail : function (str_data) {
			str_data = str_data || String(this);
		    return  /^([a-zA-Z0-9_-]{1,16})@([a-zA-Z0-9]{1,9})(\.[a-zA-Z0-9]{1,9}){0,3}(\.(?:com|net|org|edu|gov|mil|cn|us)){1,4}$/.test(str_data);
		},


		/**
		 * @author Rui.Zhang
		 * @description 判断数据是否包含特殊字符, 包含中文标点
		 * @param {String} str_data 待校验的数据
		 * @returns {Boolean}, true:包含特殊字符, null表示传入参数为null 或者传入参数为空串
		 **/
		isContainsSpecialChar : function (str_data) {
		    if (str_data) {
		        //英文符号
		        var containSpecialForEnglish = RegExp(/[(\s)(\`)(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\-)(\_)(\+)(\=)(\[)(\])(\{)(\})(\|)(\\)(\;)(\:)(\')(\")(\,)(\.)(\/)(\<)(\>)(\?)(\)]+/);
		        //中文符号
		        var containSpecialForChinese = RegExp(/[(\·)(\~)(\！)(\￥)(\%)(\……)(\&)(\*)(\（)(\）)(\——)(\【)(\】)(\；)(\：)(\”)(\“)(\’)(\，)(\《)(\。)(\》)(\？)(\、)(\‘)(\’)]+/);

		        str_data = str_data || String(this);
		        return (containSpecialForEnglish.test(str_data) || containSpecialForChinese.test(str_data));
		    }
		    return null;
		},


		/**
		 * @author Rui.Zhang
		 * @description 判断数据是否为手机号
		 * @param {String} str_data 待校验的数据
		 * @returns {Boolean}, true:是手机号
		 **/
		isMobile : function (str_data) {
			str_data = str_data || String(this);
		    var length = str_data.length;
		    return length == 11 && /^1\d{10}$/.test(str_data);
		},


		/**
		 * @author Rui.Zhang
		 * @description 判断数据是否为座机号(固定电话)
		 * @param {String} str_data 待校验的数据
		 * @returns {Boolean}, true:是座机号
		 **/
		isTelephone : function (str_data) {
			str_data = str_data || String(this);
		    if (str_data.match(/^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/) == null) {
		        return false;
		    } else {
		        return true;
		    }
		},


		/**
		 * @author Rui.Zhang
		 * @description 判断数据是否全为中文
		 * @param {String} str_data 待校验的数据
		 * @returns {Boolean}, true:全中文
		 **/
		isChinese : function (str_data) {
			str_data = str_data || String(this);
		    return /^[\u4E00-\u9FA5]*$/.test(str_data);
		},

		

		/**
		 * @author Rui.Zhang
		 * @description 判断是否为银行卡号
		 * @param {String} str_cardNo 待校验的数据
		 * @returns {Boolean}, true:是银行卡号
		 **/
		isBankCard : function (str_cardNo) {
			str_cardNo = str_cardNo || String(this);
		    if ("" == str_cardNo.trim() || undefined == str_cardNo) {
		        return false;
		    }
		    var lastNum = str_cardNo.substr(str_cardNo.length - 1, 1);//取出最后一位（与luhm进行比较）

		    var first15Num = str_cardNo.substr(0, str_cardNo.length - 1);//前15或18位
		    var newArr=new Array();
		    for(var i=first15Num.length-1;i>-1;i--){    //前15或18位倒序存进数组
		        newArr.push(first15Num.substr(i,1));
		    }
		    var arrJiShu=new Array();  //奇数位*2的积 <9
		    var arrJiShu2=new Array(); //奇数位*2的积 >9

		    var arrOuShu=new Array();  //偶数位数组
		    for(var j=0;j<newArr.length;j++){
		        if((j+1)%2==1){//奇数位
		            if(parseInt(newArr[j])*2<9)
		                arrJiShu.push(parseInt(newArr[j])*2);
		            else
		                arrJiShu2.push(parseInt(newArr[j])*2);
		        }
		        else //偶数位
		            arrOuShu.push(newArr[j]);
		    }

		    var jishu_child1=new Array();//奇数位*2 >9 的分割之后的数组个位数
		    var jishu_child2=new Array();//奇数位*2 >9 的分割之后的数组十位数
		    for(var h=0;h<arrJiShu2.length;h++){
		        jishu_child1.push(parseInt(arrJiShu2[h])%10);
		        jishu_child2.push(parseInt(arrJiShu2[h])/10);
		    }

		    var sumJiShu=0; //奇数位*2 < 9 的数组之和
		    var sumOuShu=0; //偶数位数组之和
		    var sumJiShuChild1=0; //奇数位*2 >9 的分割之后的数组个位数之和
		    var sumJiShuChild2=0; //奇数位*2 >9 的分割之后的数组十位数之和
		    var sumTotal=0;
		    for(var m=0;m<arrJiShu.length;m++){
		        sumJiShu=sumJiShu+parseInt(arrJiShu[m]);
		    }

		    for(var n=0;n<arrOuShu.length;n++){
		        sumOuShu=sumOuShu+parseInt(arrOuShu[n]);
		    }

		    for(var p=0;p<jishu_child1.length;p++){
		        sumJiShuChild1=sumJiShuChild1+parseInt(jishu_child1[p]);
		        sumJiShuChild2=sumJiShuChild2+parseInt(jishu_child2[p]);
		    }
		    //计算总和
		    sumTotal=parseInt(sumJiShu)+parseInt(sumOuShu)+parseInt(sumJiShuChild1)+parseInt(sumJiShuChild2);

		    //计算Luhm值
		    var k= parseInt(sumTotal)%10==0?10:parseInt(sumTotal)%10;
		    var luhm= 10-k;

		    if(lastNum==luhm){
		        return true;
		    }
		    else{
		        return false;
		    }
		},


		/**
		 * @author Rui.Zhang
		 * @description 判断是否为身份证号码
		 * @param {String} str_idCard 待校验的数据
		 * @param {String} sex 同时校验性别,不加则不校验性别,此值只可能 constant.WOMAN(0) 或者 constant.MAN(1)
		 * @returns {Boolean}, true:是身份证
		 **/
		isIdCard : function (str_idCard, sex) {
			str_idCard = str_idCard || String(this);
	        var check = function() {
	            var factorArr = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1);
	            var parityBit = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2");
	            var varArray = new Array();
	            var lngProduct = 0;
	            var intCheckDigit;
	            var intStrLen = str_idCard.length;
	            var idNumber = str_idCard;
	            // initialize
	            if ((intStrLen != 15) && (intStrLen != 18)) {
	                return false;
	            }
	            // check and set value
	            for (i = 0; i < intStrLen; i++) {
	                varArray[i] = idNumber.charAt(i);
	                if ((varArray[i] < '0' || varArray[i] > '9') && (i != 17)) {
	                    return false;
	                } else if (i < 17) {
	                    varArray[i] = varArray[i] * factorArr[i];
	                }
	            }

	            if (intStrLen == 18) {
	                //check date
	                var date8 = idNumber.substring(6, 14);

	                if (!/^[0-9]{8}$/.test(date8)) {
	                    return false;
	                }
	                var year, month, day;
	                year = date8.substring(0, 4);
	                month = date8.substring(4, 6);
	                day = date8.substring(6, 8);
	                var iaMonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	                if (year < 1700 || year > 2500) return false;
	                if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) iaMonthDays[1] = 29;
	                if (month < 1 || month > 12) return false;
	                if (day < 1 || day > iaMonthDays[month - 1]) return false;

	                // calculate the sum of the products
	                for (i = 0; i < 17; i++) {
	                    lngProduct = lngProduct + varArray[i];
	                }
	                // calculate the check digit
	                intCheckDigit = parityBit[lngProduct % 11];
	                // check last digit
	                if (varArray[17] != intCheckDigit) {
	                    return false;
	                }
	            }
	            //length is 15
	            else {
	                //check date
	                var date6 = idNumber.substring(6, 12);

	                if (!/^[0-9]{6}$/.test(date6)) {
	                    return false;
	                }
	                var  month, day, year;
	                year = date6.substring(0, 2);	
	                month = date6.substring(2, 4);
	                day = date6.substring(4, 6);
	                if (!/^\d{2}$/.test(year)) return false;
	                if (month < 1 || month > 12) return false;
	                if (day < 1 || day > 31) return false;
	            }
	            return true;
	        }
	        if(str_idCard && check(str_idCard)) {
	            if(undefined != sex) {
	                var sexStr = undefined, tmp = 0;
	                if (15 == str_idCard.length) {
	                    tmp = str_idCard.substring(str_idCard.length - 1, str_idCard.length);
	                } else if (18 == str_idCard.length) {
	                    tmp = str_idCard.substr(str_idCard.length - 2, 1);
	                }
	                if (0 == tmp % 2) {
	                    sexStr = 0;
	                } else {
	                    sexStr = 1;
	                }

	                if (sex != sexStr) return false;
	            }
	            return true;
	        }
	        return false;
	    }
	},


	/**
	 * @author Rui.Zhang
	 * @class 数据安全类
	 * @description 提供一些数据安全函数
	 */
	security : {


		/**
		 * @author Rui.Zhang
		 * @description  密码强度检测
		 * @param {String} str_psw  待签名数据
		 * @returns {Object}, 检测结果,对象应为{"level":"2", "desc" : "检测提示：您的密码强度较差！"}, level为密码强度等级, desc为默认提示信息
		 * @example 示例：Mtils.security.passwordStrengthMeter("asd##AS123")， 您可以通过如下方法来得到密码强度等级<br />
		 * @example Mtils.security.passwordStrengthMeter("asd##AS123").level;
		 * 也可以如下得到密码的检测信息：<br />
		 * @example Mtils.security.checkerPasswordStrength("asd##AS123").level;
		 **/
		checkerPasswordStrength : function (str_psw) {
		    var a = /[^ \f\n\r\t\v\da-zA-Z]/, b = /\d/, c = /[a-zA-Z]/;
		    var d = /^[^ \f\n\r\t\v\da-zA-Z]+$/, e = /^\d+$/, f = /^[a-zA-Z]+$/;
		    if (6 <= str_psw.length) {
		        if (a.test(str_psw) && b.test(str_psw) && c.test(str_psw)) {
		            if (8 > str_psw.length) {
		                return {"level": "2", "desc": "检测提示：您的密码强度较差！"};
		            }
		            if (12 > str_psw.length) {
		                return {"level": "3", "desc": "检测提示：您的密码强度良好！"};
		            }
		            if (15 > str_psw.length) {
		                return {"level": "4", "desc": "检测提示：您的密码强度很高！"};
		            }
		            if (15 <= str_psw.length) {
		                return {"level": "5", "desc": "检测提示：您的密码强度极高！"};
		            }
		        }
		        if (a.test(str_psw) && b.test(str_psw) || a.test(str_psw) && c.test(str_psw) || b.test(str_psw) && c.test(str_psw)) {
		            if (8 > str_psw.length) {
		                return {"level": "2", "desc": "检测提示：您的密码强度较差！"};
		            }
		            if (12 > str_psw.length) {
		                return {"level": "3", "desc": "检测提示：您的密码强度良好！"};
		            }
		            if (15 > str_psw.length) {
		                return {"level": "4", "desc": "检测提示：您的密码强度很高！"};
		            }
		            if (15 <= str_psw.length) {
		                return {"level": "4", "desc": "检测提示：您的密码强度很高！"};
		            }
		        }
		        if (d.test(str_psw) || e.test(str_psw) || f.test(str_psw)) {
		            if (8 <= str_psw.length) {
		                return {"level": "2", "desc": "检测提示：您的密码强度较差！"};
		            }
		        }
		        return {"level": "1", "desc": "检测提示：您的密码过于简单！"};
		    }
		    return {"level": "-1", "desc": "检测提示：通常您的密码应该在6位以上！"};
		},



		/**
		 * @author Rui.Zhang
		 * @description 生成一个制定长度的随机数
		 * @param {String} [length]   可选,生成随机数的长度, 默认为5位
		 * @returns {Integer}, 生成的随机数
		 **/
		random : function(length) {
		        var result, tmp, flag = true;
		        if(length) {
		            while(flag) {
		                tmp = Math.random();
		                if(tmp > 0.1) {
		                    result = Math.floor(tmp * Math.pow(10, length));
		                    flag = false;
		                    return result;
		                }
		            }
		        } else {
		            while(flag) {
		                tmp = Math.random();
		                if(tmp > 0.1) {
		                    result = Math.floor(tmp * Math.pow(10, 5));
		                    flag = false;
		                    return result;
		                }
		            }
		        }
		},



		/**
		 * @author Rui.Zhang
		 * @description 生成一个随机数,并介于最小值和最大值之间(包括最小值和最大值). 如果不传参数, 则返回一个大于0的随机数
		 * @param {String} [min]         可选,生成随机数的最小值
		 * @param {Array} [max]          可选,生成随机数的最大值
		 * @returns {Integer}, 生成的随机数
		 **/
		randomBetween : function(min, max) {
		    var length;
		    var result;
		    var tmp;
		    if(min && max) {
		        result = min + Math.floor( Math.random() * (max - min +1) ) ;
		        return result;
		    }
		    if(!min && !max) {
		        result =  Math.floor(Math.random() * 100000);
		        return result;
		    }

		    if(min) {
		        length = 100000;
		        result = min + Math.floor(Math.random() * length);
		        return result;
		    }
		},



		/**
		 * @author Rui.Zhang
		 * @description 对给定数据进行 hex_sha256 摘要计算
		 * @param {String} str_data  待计算的数据
		 * @returns {String}, hex_sha256 计算结果
		 **/
		hex_sha256 : function (str_data) {
		    /* SHA256 logical functions */
		    var rotateRight = function (n, x) {
		        return ((x >>> n) | (x << (32 - n)));
		    }
		    var choice = function (x, y, z) {
		        return ((x & y) ^ (~x & z));
		    }
		    var majority = function (x, y, z) {
		        return ((x & y) ^ (x & z) ^ (y & z));
		    }
		    var sha256_Sigma0 = function (x) {
		        return (rotateRight(2, x) ^ rotateRight(13, x) ^ rotateRight(22, x));
		    }
		    var sha256_Sigma1 = function (x) {
		        return (rotateRight(6, x) ^ rotateRight(11, x) ^ rotateRight(25, x));
		    }
		    var sha256_sigma0 = function (x) {
		        return (rotateRight(7, x) ^ rotateRight(18, x) ^ (x >>> 3));
		    }
		    var sha256_sigma1 = function (x) {
		        return (rotateRight(17, x) ^ rotateRight(19, x) ^ (x >>> 10));
		    }
		    var sha256_expand = function (W, j) {
		        return (W[j & 0x0f] += sha256_sigma1(W[(j + 14) & 0x0f]) + W[(j + 9) & 0x0f] +
		        sha256_sigma0(W[(j + 1) & 0x0f]));
		    }

		    /* Hash constant words K: */
		    var K256 = new Array(
		        0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5,
		        0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
		        0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,
		        0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
		        0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc,
		        0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
		        0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7,
		        0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
		        0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
		        0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
		        0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3,
		        0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
		        0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
		        0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
		        0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
		        0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
		    );

		    /* global arrays */
		    var ihash, count, buffer;
		    var sha256_hex_digits = "0123456789abcdef";

		    /* Add 32-bit integers with 16-bit operations (bug in some JS-interpreters:
		     overflow) */
		    var safe_add = function (x, y) {
		        var lsw = (x & 0xffff) + (y & 0xffff);
		        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		        return (msw << 16) | (lsw & 0xffff);
		    }

		    /* Initialise the SHA256 computation */
		    var sha256_init = function () {
		        ihash = new Array(8);
		        count = new Array(2);
		        buffer = new Array(64);
		        count[0] = count[1] = 0;
		        ihash[0] = 0x6a09e667;
		        ihash[1] = 0xbb67ae85;
		        ihash[2] = 0x3c6ef372;
		        ihash[3] = 0xa54ff53a;
		        ihash[4] = 0x510e527f;
		        ihash[5] = 0x9b05688c;
		        ihash[6] = 0x1f83d9ab;
		        ihash[7] = 0x5be0cd19;
		    }

		    /* Transform a 512-bit message block */
		    var sha256_transform = function () {
		        var a, b, c, d, e, f, g, h, T1, T2;
		        var W = new Array(16);

		        /* Initialize registers with the previous intermediate value */
		        a = ihash[0];
		        b = ihash[1];
		        c = ihash[2];
		        d = ihash[3];
		        e = ihash[4];
		        f = ihash[5];
		        g = ihash[6];
		        h = ihash[7];

		        /* make 32-bit words */
		        for (var i = 0; i < 16; i++)
		            W[i] = ((buffer[(i << 2) + 3]) | (buffer[(i << 2) + 2] << 8) | (buffer[(i << 2) + 1]
		            << 16) | (buffer[i << 2] << 24));

		        for (var j = 0; j < 64; j++) {
		            T1 = h + sha256_Sigma1(e) + choice(e, f, g) + K256[j];
		            if (j < 16) T1 += W[j];
		            else T1 += sha256_expand(W, j);
		            T2 = sha256_Sigma0(a) + majority(a, b, c);
		            h = g;
		            g = f;
		            f = e;
		            e = safe_add(d, T1);
		            d = c;
		            c = b;
		            b = a;
		            a = safe_add(T1, T2);
		        }

		        /* Compute the current intermediate hash value */
		        ihash[0] += a;
		        ihash[1] += b;
		        ihash[2] += c;
		        ihash[3] += d;
		        ihash[4] += e;
		        ihash[5] += f;
		        ihash[6] += g;
		        ihash[7] += h;
		    }

		    /* Read the next chunk of data and update the SHA256 computation */
		    var sha256_update = function (data, inputLen) {
		        var i, index, curpos = 0;
		        /* Compute number of bytes mod 64 */
		        index = ((count[0] >> 3) & 0x3f);
		        var remainder = (inputLen & 0x3f);

		        /* Update number of bits */
		        if ((count[0] += (inputLen << 3)) < (inputLen << 3)) count[1]++;
		        count[1] += (inputLen >> 29);

		        /* Transform as many times as possible */
		        for (i = 0; i + 63 < inputLen; i += 64) {
		            for (var j = index; j < 64; j++)
		                buffer[j] = data.charCodeAt(curpos++);
		            sha256_transform();
		            index = 0;
		        }

		        /* Buffer remaining input */
		        for (var j = 0; j < remainder; j++)
		            buffer[j] = data.charCodeAt(curpos++);
		    }

		    /* Finish the computation by operations such as padding */
		    var sha256_final = function () {
		        var index = ((count[0] >> 3) & 0x3f);
		        buffer[index++] = 0x80;
		        if (index <= 56) {
		            for (var i = index; i < 56; i++)
		                buffer[i] = 0;
		        } else {
		            for (var i = index; i < 64; i++)
		                buffer[i] = 0;
		            sha256_transform();
		            for (var i = 0; i < 56; i++)
		                buffer[i] = 0;
		        }
		        buffer[56] = (count[1] >>> 24) & 0xff;
		        buffer[57] = (count[1] >>> 16) & 0xff;
		        buffer[58] = (count[1] >>> 8) & 0xff;
		        buffer[59] = count[1] & 0xff;
		        buffer[60] = (count[0] >>> 24) & 0xff;
		        buffer[61] = (count[0] >>> 16) & 0xff;
		        buffer[62] = (count[0] >>> 8) & 0xff;
		        buffer[63] = count[0] & 0xff;
		        sha256_transform();
		    }

		    /* Get the internal hash as a hex string */
		    var sha256_encode_hex = function () {
		        var output = new String();
		        for (var i = 0; i < 8; i++) {
		            for (var j = 28; j >= 0; j -= 4)
		                output += sha256_hex_digits.charAt((ihash[i] >>> j) & 0x0f);
		        }
		        return output;
		    }

		    sha256_init();
		    sha256_update(str_data, str_data.length);
		    sha256_final();
		    return sha256_encode_hex();
		},



		/**
		 * @author Rui.Zhang
		 * @description 对给定数据进行 base64 解码
		 * @param {String} str_data  待解码的数据
		 * @returns {String}, base64 解码后的数据
		 **/
		base64_decode : function (str_data) {
		    var output = "";
		    var chr1, chr2, chr3;
		    var enc1, enc2, enc3, enc4;
		    var i = 0;
		    // private property
		    var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		    // private method for UTF-8 decoding
		    var _utf8_decode = function (utftext) {
		        var string = "";
		        var i = 0;
		        var c = c1 = c2 = 0;
		        while (i < utftext.length) {
		            c = utftext.charCodeAt(i);
		            if (c < 128) {
		                string += String.fromCharCode(c);
		                i++;
		            } else if ((c > 191) && (c < 224)) {
		                c2 = utftext.charCodeAt(i + 1);
		                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
		                i += 2;
		            } else {
		                c2 = utftext.charCodeAt(i + 1);
		                c3 = utftext.charCodeAt(i + 2);
		                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
		                i += 3;
		            }
		        }
		        return string;
		    }

		    str_data = str_data.replace(/[^A-Za-z0-9\+\/\=]/g, "");
		    while (i < str_data.length) {
		        enc1 = _keyStr.indexOf(str_data.charAt(i++));
		        enc2 = _keyStr.indexOf(str_data.charAt(i++));
		        enc3 = _keyStr.indexOf(str_data.charAt(i++));
		        enc4 = _keyStr.indexOf(str_data.charAt(i++));
		        chr1 = (enc1 << 2) | (enc2 >> 4);
		        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
		        chr3 = ((enc3 & 3) << 6) | enc4;
		        output = output + String.fromCharCode(chr1);
		        if (enc3 != 64) {
		            output = output + String.fromCharCode(chr2);
		        }
		        if (enc4 != 64) {
		            output = output + String.fromCharCode(chr3);
		        }
		    }
		    output = _utf8_decode(output);
		    return output;
		},



		/**
		 * @author Rui.Zhang
		 * @description 对给定数据进行 base64 编码
		 * @param {String} str_data  待编码的数据
		 * @returns {String}, base64 编码后的数据
		 **/
		base64_encode : function (str_data) {
		    // private property
		    var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		    // private method for UTF-8 encoding
		    var _utf8_encode = function (string) {
		        string = string.replace(/\r\n/g, "\n");
		        var utftext = "";
		        for (var n = 0; n < string.length; n++) {
		            var c = string.charCodeAt(n);
		            if (c < 128) {
		                utftext += String.fromCharCode(c);
		            } else if ((c > 127) && (c < 2048)) {
		                utftext += String.fromCharCode((c >> 6) | 192);
		                utftext += String.fromCharCode((c & 63) | 128);
		            } else {
		                utftext += String.fromCharCode((c >> 12) | 224);
		                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
		                utftext += String.fromCharCode((c & 63) | 128);
		            }

		        }
		        return utftext;
		    }


		    var output = "";
		    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		    var i = 0;
		    str_data = _utf8_encode(str_data);
		    while (i < str_data.length) {
		        chr1 = str_data.charCodeAt(i++);
		        chr2 = str_data.charCodeAt(i++);
		        chr3 = str_data.charCodeAt(i++);
		        enc1 = chr1 >> 2;
		        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
		        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
		        enc4 = chr3 & 63;
		        if (isNaN(chr2)) {
		            enc3 = enc4 = 64;
		        } else if (isNaN(chr3)) {
		            enc4 = 64;
		        }
		        output = output +
		        _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
		        _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
		    }
		    return output;

		},



		/**
		 * @author Rui.Zhang
		 * @description 对给定数据进行 sha1 摘要计算
		 * @param {String} str_data  待计算的数据
		 * @returns {String}, sha1 计算结果
		 **/
		hex_sha1 : function (str_data) {
		    var hexcase = 0;
		    /*   hex   output   format.   0   -   lowercase;   1   -   uppercase                 */
		    var chrsz = 8;
		    /*   bits   per   input   character.   8   -   ASCII;   16   -   Unicode             */

		    /*
		     *   Convert   an   array   of   big-endian   words   to   a   hex   string.
		     */
		    var binb2hex = function (binarray) {
		        var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
		        var str = "";
		        for (var i = 0; i < binarray.length * 4; i++) {
		            str += hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) + hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);
		        }
		        return str;
		    }

		    /*
		     *   Bitwise   rotate   a   32-bit   number   to   the   left.
		     */
		    var rol = function (num, cnt) {
		        return (num << cnt) | (num >>> (32 - cnt));
		    }

		    /*
		     *   Calculate   the   SHA-1   of   an   array   of   big-endian   words,   and   a   bit   length
		     */
		    var core_sha1 = function (x, len) {
		        /*   append   padding   */
		        x[len >> 5] |= 0x80 << (24 - len % 32);
		        x[((len + 64 >> 9) << 4) + 15] = len;

		        var w = Array(80);
		        var a = 1732584193;
		        var b = -271733879;
		        var c = -1732584194;
		        var d = 271733878;
		        var e = -1009589776;

		        for (var i = 0; i < x.length; i += 16) {
		            var olda = a;
		            var oldb = b;
		            var oldc = c;
		            var oldd = d;
		            var olde = e;

		            for (var j = 0; j < 80; j++) {
		                if (j < 16) w[j] = x[i + j];
		                else w[j] = rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
		                var t = safe_add(safe_add(rol(a, 5), sha1_ft(j, b, c, d)), safe_add(safe_add(e, w[j]), sha1_kt(j)));
		                e = d;
		                d = c;
		                c = rol(b, 30);
		                b = a;
		                a = t;
		            }

		            a = safe_add(a, olda);
		            b = safe_add(b, oldb);
		            c = safe_add(c, oldc);
		            d = safe_add(d, oldd);
		            e = safe_add(e, olde);
		        }
		        return Array(a, b, c, d, e);

		    }

		    /*
		     *   Convert   an   8-bit   or   16-bit   string   to   an   array   of   big-endian   words
		     *   In   8-bit   function,   characters   >255   have   their   hi-byte   silently   ignored.
		     */
		    var str2binb = function (str) {
		        var bin = Array();
		        var mask = (1 << chrsz) - 1;
		        for (var i = 0; i < str.length * chrsz; i += chrsz)
		            bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i % 32);
		        return bin;
		    }

		    /*
		     *   Add   integers,   wrapping   at   2^32.   This   uses   16-bit   operations   internally
		     *   to   work   around   bugs   in   some   JS   interpreters.
		     */
		    var safe_add = function (x, y) {
		        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
		        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		        return (msw << 16) | (lsw & 0xFFFF);
		    }

		    /*
		     *   Perform   the   appropriate   triplet   combination   function   for   the   current
		     *   iteration
		     */
		    var sha1_ft = function (t, b, c, d) {
		        if (t < 20) return (b & c) | ((~b) & d);
		        if (t < 40) return b ^ c ^ d;
		        if (t < 60) return (b & c) | (b & d) | (c & d);
		        return b ^ c ^ d;
		    }

		    /*
		     *   Determine   the   appropriate   additive   constant   for   the   current   iteration
		     */
		    var sha1_kt = function (t) {
		        return (t < 20) ? 1518500249 : (t < 40) ? 1859775393 : (t < 60) ? -1894007588 : -899497514;
		    }

		    return binb2hex(core_sha1(str2binb(str_data), str_data.length * chrsz));
		},



		/**
		 * @author Rui.Zhang
		 * @description 对给定数据进行 md5 摘要计算
		 * @param {String} str_data  待计算的数据
		 * @returns {String}, md5 计算结果
		 **/
		hex_md5 : function (str_data) {
		    var chrsz = 8;
		    /* bits per input character. 8 - ASCII; 16 - Unicode      */
		    var hexcase = 0;
		    /* hex output format. 0 - lowercase; 1 - uppercase        */

		    /*
		     * Convert an array of little-endian words to a base-64 string
		     */
		    var binl2b64 = function (binarray) {
		        var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
		        var str = "";
		        for (var i = 0; i < binarray.length * 4; i += 3) {
		            var triplet = (((binarray[i >> 2] >> 8 * ( i % 4)) & 0xFF) << 16)
		                | (((binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4)) & 0xFF) << 8 )
		                | ((binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4)) & 0xFF);
		            for (var j = 0; j < 4; j++) {
		                if (i * 8 + j * 6 > binarray.length * 32) str += b64pad;
		                else str += tab.charAt((triplet >> 6 * (3 - j)) & 0x3F);
		            }
		        }
		        return str;
		    }

		    /*
		     * These functions implement the four basic operations the algorithm uses.
		     */
		    var md5_cmn = function (q, a, b, x, s, t) {
		        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
		    }
		    var md5_ff = function (a, b, c, d, x, s, t) {
		        return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
		    }
		    var md5_gg = function (a, b, c, d, x, s, t) {
		        return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
		    }
		    var md5_hh = function (a, b, c, d, x, s, t) {
		        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
		    }
		    var md5_ii = function (a, b, c, d, x, s, t) {
		        return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
		    }

		    /*
		     * Convert an array of little-endian words to a base-64 string
		     */
		    var binl2b64 = function (binarray) {
		        var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
		        var str = "";
		        for (var i = 0; i < binarray.length * 4; i += 3) {
		            var triplet = (((binarray[i >> 2] >> 8 * ( i % 4)) & 0xFF) << 16)
		                | (((binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4)) & 0xFF) << 8 )
		                | ((binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4)) & 0xFF);
		            for (var j = 0; j < 4; j++) {
		                if (i * 8 + j * 6 > binarray.length * 32) str += b64pad;
		                else str += tab.charAt((triplet >> 6 * (3 - j)) & 0x3F);
		            }
		        }
		        return str;
		    }

		    /*
		     * Calculate the MD5 of an array of little-endian words, and a bit length
		     */
		    var core_md5 = function (x, len) {
		        /* append padding */
		        x[len >> 5] |= 0x80 << ((len) % 32);
		        x[(((len + 64) >>> 9) << 4) + 14] = len;

		        var a = 1732584193;
		        var b = -271733879;
		        var c = -1732584194;
		        var d = 271733878;

		        for (var i = 0; i < x.length; i += 16) {
		            var olda = a;
		            var oldb = b;
		            var oldc = c;
		            var oldd = d;

		            a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
		            d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
		            c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
		            b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
		            a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
		            d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
		            c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
		            b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
		            a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
		            d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
		            c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
		            b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
		            a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
		            d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
		            c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
		            b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

		            a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
		            d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
		            c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
		            b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
		            a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
		            d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
		            c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
		            b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
		            a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
		            d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
		            c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
		            b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
		            a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
		            d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
		            c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
		            b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

		            a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
		            d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
		            c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
		            b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
		            a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
		            d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
		            c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
		            b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
		            a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
		            d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
		            c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
		            b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
		            a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
		            d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
		            c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
		            b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

		            a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
		            d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
		            c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
		            b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
		            a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
		            d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
		            c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
		            b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
		            a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
		            d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
		            c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
		            b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
		            a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
		            d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
		            c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
		            b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

		            a = safe_add(a, olda);
		            b = safe_add(b, oldb);
		            c = safe_add(c, oldc);
		            d = safe_add(d, oldd);
		        }
		        return Array(a, b, c, d);
		    }


		    /*
		     * These functions implement the four basic operations the algorithm uses.
		     */
		    var md5_cmn = function (q, a, b, x, s, t) {
		        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
		    }

		    /*
		     * Convert an array of little-endian words to a hex string.
		     */
		    var binl2hex = function (binarray) {
		        var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
		        var str = "";
		        for (var i = 0; i < binarray.length * 4; i++) {
		            str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) +
		            hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8  )) & 0xF);
		        }
		        return str;
		    }

		    /*
		     * Convert a string to an array of little-endian words
		     * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
		     */
		    var str2binl = function (str) {
		        var bin = Array();
		        var mask = (1 << chrsz) - 1;
		        for (var i = 0; i < str.length * chrsz; i += chrsz)
		            bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (i % 32);
		        return bin;
		    }

		    /*
		     * Add integers, wrapping at 2^32. This uses 16-bit operations internally
		     * to work around bugs in some JS interpreters.
		     */
		    var safe_add = function (x, y) {
		        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
		        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		        return (msw << 16) | (lsw & 0xFFFF);
		    }

		    /*
		     * Bitwise rotate a 32-bit number to the left.
		     */
		    var bit_rol = function (num, cnt) {
		        return (num << cnt) | (num >>> (32 - cnt));
		    }

		    return binl2hex(core_md5(str2binl(str_data), str_data.length * chrsz));
		}

	},



	/**
	 * @author Rui.Zhang
	 * @class 工具类
	 * @description 提供一些辅助代码封装
	 */
	utils : {
		/**
		 * @author Rui.Zhang
		 * @description 提供进制转换,最大为64进制
		 * @param {String} number  待转换进制序列
		 * @param {number} from  待转换进制(2-64)
		 * @param {number} to  转换到进制(2-64)
		 * @returns {String}, 转换后的进制序列
		 * @example 把16进制0x7b转为2进制, Mtils.utils.decimalConversion("7b",16,2);
		 **/
		decimalConversion : function(number, from, to) {
			var origin = Mtils.constant.BASE_DECIMAL,  tmp, decimal = 0, result = "";
			if(undefined == number || !String(number).replace(/ /gi,"")) return "";
			if(!from) return "";

			try {
				if(from)
					from = Number(from);    
				if(to)
					to = Number(to);

				//先将其转换为10进制
				tmp = String(number);
				for(var i=0, j=1;i<tmp.length; i++, j++) {
					decimal +=  origin.indexOf(tmp.charAt(i)) * Math.pow(from, tmp.length - j);
				}
				if(to == '10' || !to) return decimal;

				//再转换为指定进制
				while(decimal != 0) {
					tmp = decimal % to;
					result = origin.charAt(tmp) + result;
					decimal = (decimal - tmp) / to;
				}
				return result;
			} catch(e) {
				console.log(e);
				return "";
			}
		},


		/**
		 * @author Rui.Zhang
		 * @description 时间格式化
		 * @param {String} timestamp  时间戳
		 * @param {String} pattern 格式化字符串,如 "yy-MM-dd hh:mm:ss"
		 * @returns {String}, 格式化后的时间
		 * @example Mtils.text.format(new Date().getTime(), "yy年MM月dd日  hh时mm分ss秒");
		 **/
		formatDate : function (timestamp, pattern) {
		    var tmp = new Date(timestamp);
		    var o = {
		        "M+": tmp.getMonth() + 1, //month
		        "d+": tmp.getDate(), //day
		        "h+": tmp.getHours(), //hour
		        "m+": tmp.getMinutes(), //minute
		        "s+": tmp.getSeconds(), //second
		        "q+": Math.floor((tmp.getMonth() + 3) / 3), //quarter
		        "S": tmp.getMilliseconds() //millisecond
		    }

		    if (/(y+)/.test(pattern)) {
		        pattern = pattern.replace(RegExp.$1, (tmp.getFullYear() + "").substr(4 - RegExp.$1.length));
		    }

		    for (var k in o) {
		        if (new RegExp("(" + k + ")").test(pattern)) {
		            pattern = pattern.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
		        }
		    }
		    return pattern;
		},

		/**
		 * @author Rui.Zhang
		 * @description 去除数组中的重复元素
		 * @param {Arr} array  待去重数组
		 * @returns {Arr}, 去重后的数组
		 **/
		uniqueArray : function(arr) {
            var _this = arr || this;
            _this.sort();
            var re=[_this[0]];
            for(var i = 1; i < _this.length; i++) {
                if( _this[i] !== re[re.length-1]) {
                    re.push(_this[i]);
                }
            }
            return re;
        },

		/**
		 * @author Rui.Zhang
		 * @description 获取URL中的请求参数
		 * @param {String} [Url]  可选,带参数的URL, 默认为当前访问的URL
		 * @returns {Object}, 序列化后的参数对象 array[param_Key] = param_value
		 **/
		getUrlParam : function (Url) {
		    var result = new Object();
		    if(Url) {
		        var tmp = Url.split("?")[1];
		        if(tmp) {
		            tmp = tmp.split("&");
		            for(var j=0;j<tmp.length;j++) {
		                result[tmp[j].split("=")[0]] = tmp[j].split("=")[1];
		            }
		        }
		    } else {
		        var tmp = location.search.substring(1);
		        if(tmp) {
		            tmp = tmp.split("&");
		            for(var j=0;j<tmp.length;j++) {
		                result[tmp[j].split("=")[0]] = tmp[j].split("=")[1];
		            }
		        }
		    }
		    return result;
		},



		/**
		 * @author Rui.Zhang
		 * @description 加法函数，用来得到精确的加法结果
		 * @param {Float/Int} arg1  数值1
		 * @param {Float/Int} arg2  数值2
		 * @returns {float/Int}
		 **/
		accAdd : function (arg1, arg2) {
		    var r1, r2, m, c;
		    try {
		        r1 = arg1.toString().split(".")[1].length;
		    }
		    catch (e) {
		        r1 = 0;
		    }
		    try {
		        r2 = arg2.toString().split(".")[1].length;
		    }
		    catch (e) {
		        r2 = 0;
		    }
		    c = Math.abs(r1 - r2);
		    m = Math.pow(10, Math.max(r1, r2));
		    if (c > 0) {
		        var cm = Math.pow(10, c);
		        if (r1 > r2) {
		            arg1 = Number(arg1.toString().replace(".", ""));
		            arg2 = Number(arg2.toString().replace(".", "")) * cm;
		        } else {
		            arg1 = Number(arg1.toString().replace(".", "")) * cm;
		            arg2 = Number(arg2.toString().replace(".", ""));
		        }
		    } else {
		        arg1 = Number(arg1.toString().replace(".", ""));
		        arg2 = Number(arg2.toString().replace(".", ""));
		    }
		    return (arg1 + arg2) / m;
		},



		/**
		 * @author Rui.Zhang
		 * @description 减法函数，用来得到精确的减法结果
		 * @param {Float/Int} arg1  数值1
		 * @param {Float/Int} arg2  数值2
		 * @returns {float/Int}
		 **/
		accSub : function (arg1, arg2) {
		    var r1, r2, m, n;
		    try {
		        r1 = arg1.toString().split(".")[1].length;
		    }
		    catch (e) {
		        r1 = 0;
		    }
		    try {
		        r2 = arg2.toString().split(".")[1].length;
		    }
		    catch (e) {
		        r2 = 0;
		    }
		    m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
		    n = (r1 >= r2) ? r1 : r2;
		    return ((arg1 * m - arg2 * m) / m).toFixed(n);
		},



		/**
		 * @author Rui.Zhang
		 * @description 减法乘法，用来得到精确的乘法结果
		 * @param {Float/Int} arg1  数值1
		 * @param {Float/Int} arg2  数值2
		 * @returns {float/Int}
		 **/
		accMul : function (arg1, arg2) {
		    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
		    try {
		        m += s1.split(".")[1].length;
		    }
		    catch (e) {
		    }
		    try {
		        m += s2.split(".")[1].length;
		    }
		    catch (e) {
		    }
		    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
		},



		/**
		 * @author Rui.Zhang
		 * @description 除法函数，用来得到精确的除法结果
		 * @param {Float/Int} arg1  数值1
		 * @param {Float/Int} arg2  数值2
		 * @returns {float/Int}
		 **/
		accDiv : function (arg1, arg2) {
		    var t1 = 0, t2 = 0, r1, r2;
		    try {
		        t1 = arg1.toString().split(".")[1].length;
		    }
		    catch (e) {
		    }
		    try {
		        t2 = arg2.toString().split(".")[1].length;
		    }
		    catch (e) {
		    }
		    with (Math) {
		        r1 = Number(arg1.toString().replace(".", ""));
		        r2 = Number(arg2.toString().replace(".", ""));
		        return (r1 / r2) * pow(10, t2 - t1);
		    }
		},



		/**
		 * @author Rui.Zhang
		 * @description  删除所有cookie
		 * @returns {boolean}, true: 删除成功
		 **/
		delAllCookie : function () {
		    try {
		        var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
		        if (keys) {
		            for (var i = 0; i < keys.length; i++) {
		                document.cookie = keys[i] + '=null;path=/;expires=' + new Date(0).toGMTString();
		            }
		        }
		    } catch (ae) {
		        return false;
		    }
		    return true;
		},



		/**
		 * @author Rui.Zhang
		 * @description  删除cookie
		 * @param {String} str_name    欲删除的cookie名称
		 * @returns {boolean}, true: 删除成功
		 **/
		delCookie : function (str_name) {
		    try {
		        var exp = new Date();
		        exp.setTime(exp.getTime() - 10000);
		        document.cookie = str_name + "=null;path=/;expires=" + exp.toGMTString() + ";";
		    } catch (ae) {
		        return false;
		    }
		    return true;
		},



		/**
		 * @author Rui.Zhang
		 * @description  设置cookie
		 * @param {String} str_name    欲设置的cookie名称
		 * @param {String} value       cookie值
		 * @param {String} [expires]   可选 , cookie过期时间，以分钟为单位
		 * @returns {boolean}, true: 设置成功
		 **/
		setCookie : function (str_name, value, expires) {
		    var exp = new Date();
		    try {
		        exp.setTime(exp.getTime() + expires * 60 * 1000);
		        if (expires) {
		            document.cookie = str_name + "=" + decodeURIComponent(value) + ";path=/;expires=" + exp.toGMTString() + ";";
		        } else {
		            document.cookie = str_name + "=" + decodeURIComponent(value) + ";path=/;";
		        }
		    } catch (ae) {
		        return false;
		    }
		    return true;
		},



		/**
		 * @author Rui.Zhang
		 * @description  获取cookie值
		 * @param {String} str_name    欲获取的cookie名称
		 * @returns {String}, cookie值, null表示未找到
		 **/
		getCookie : function (str_name) {
		    var arr = document.cookie.match(new RegExp("(^| )" + str_name + "=([^;]*)(;|$)"));
		    if (arr != null) return decodeURI(arr[2]);
		    return null;
		},



		/**
		 * @author Rui.Zhang
		 * @description 获取汉字首字母拼音
		 * @param {String} str 待获取拼音的字符串
		 * @returns {String} 拼音首字母字符串
		 **/
	    makePy : function (str) {
	        // 汉字拼音首字母列表 本列表包含了20902个汉字,用于配合 ToChineseSpell
	        //函数使用,本表收录的字符的Unicode编码范围为19968至40869, XDesigner 整理
	        var strChineseFirstPY = "YDYQSXMWZSSXJBYMGCCZQPSSQBYCDSCDQLDYLYBSSJGYZZJJFKCCLZDHWDWZJLJPFYYNWJJTMYHZWZHFLZPPQHGSCYYYNJQYXXGJHHSDSJNKKTMOMLCRXYPSNQSECCQZGGLLYJLMYZZSECYKYYHQWJSSGGYXYZYJWWKDJHYCHMYXJTLXJYQBYXZLDWRDJRWYSRLDZJPCBZJJBRCFTLECZSTZFXXZHTRQHYBDLYCZSSYMMRFMYQZPWWJJYFCRWFDFZQPYDDWYXKYJAWJFFXYPSFTZYHHYZYSWCJYXSCLCXXWZZXNBGNNXBXLZSZSBSGPYSYZDHMDZBQBZCWDZZYYTZHBTSYYBZGNTNXQYWQSKBPHHLXGYBFMJEBJHHGQTJCYSXSTKZHLYCKGLYSMZXYALMELDCCXGZYRJXSDLTYZCQKCNNJWHJTZZCQLJSTSTBNXBTYXCEQXGKWJYFLZQLYHYXSPSFXLMPBYSXXXYDJCZYLLLSJXFHJXPJBTFFYABYXBHZZBJYZLWLCZGGBTSSMDTJZXPTHYQTGLJSCQFZKJZJQNLZWLSLHDZBWJNCJZYZSQQYCQYRZCJJWYBRTWPYFTWEXCSKDZCTBZHYZZYYJXZCFFZZMJYXXSDZZOTTBZLQWFCKSZSXFYRLNYJMBDTHJXSQQCCSBXYYTSYFBXDZTGBCNSLCYZZPSAZYZZSCJCSHZQYDXLBPJLLMQXTYDZXSQJTZPXLCGLQTZWJBHCTSYJSFXYEJJTLBGXSXJMYJQQPFZASYJNTYDJXKJCDJSZCBARTDCLYJQMWNQNCLLLKBYBZZSYHQQLTWLCCXTXLLZNTYLNEWYZYXCZXXGRKRMTCNDNJTSYYSSDQDGHSDBJGHRWRQLYBGLXHLGTGXBQJDZPYJSJYJCTMRNYMGRZJCZGJMZMGXMPRYXKJNYMSGMZJYMKMFXMLDTGFBHCJHKYLPFMDXLQJJSMTQGZSJLQDLDGJYCALCMZCSDJLLNXDJFFFFJCZFMZFFPFKHKGDPSXKTACJDHHZDDCRRCFQYJKQCCWJDXHWJLYLLZGCFCQDSMLZPBJJPLSBCJGGDCKKDEZSQCCKJGCGKDJTJDLZYCXKLQSCGJCLTFPCQCZGWPJDQYZJJBYJHSJDZWGFSJGZKQCCZLLPSPKJGQJHZZLJPLGJGJJTHJJYJZCZMLZLYQBGJWMLJKXZDZNJQSYZMLJLLJKYWXMKJLHSKJGBMCLYYMKXJQLBMLLKMDXXKWYXYSLMLPSJQQJQXYXFJTJDXMXXLLCXQBSYJBGWYMBGGBCYXPJYGPEPFGDJGBHBNSQJYZJKJKHXQFGQZKFHYGKHDKLLSDJQXPQYKYBNQSXQNSZSWHBSXWHXWBZZXDMNSJBSBKBBZKLYLXGWXDRWYQZMYWSJQLCJXXJXKJEQXSCYETLZHLYYYSDZPAQYZCMTLSHTZCFYZYXYLJSDCJQAGYSLCQLYYYSHMRQQKLDXZSCSSSYDYCJYSFSJBFRSSZQSBXXPXJYSDRCKGJLGDKZJZBDKTCSYQPYHSTCLDJDHMXMCGXYZHJDDTMHLTXZXYLYMOHYJCLTYFBQQXPFBDFHHTKSQHZYYWCNXXCRWHOWGYJLEGWDQCWGFJYCSNTMYTOLBYGWQWESJPWNMLRYDZSZTXYQPZGCWXHNGPYXSHMYQJXZTDPPBFYHZHTJYFDZWKGKZBLDNTSXHQEEGZZYLZMMZYJZGXZXKHKSTXNXXWYLYAPSTHXDWHZYMPXAGKYDXBHNHXKDPJNMYHYLPMGOCSLNZHKXXLPZZLBMLSFBHHGYGYYGGBHSCYAQTYWLXTZQCEZYDQDQMMHTKLLSZHLSJZWFYHQSWSCWLQAZYNYTLSXTHAZNKZZSZZLAXXZWWCTGQQTDDYZTCCHYQZFLXPSLZYGPZSZNGLNDQTBDLXGTCTAJDKYWNSYZLJHHZZCWNYYZYWMHYCHHYXHJKZWSXHZYXLYSKQYSPSLYZWMYPPKBYGLKZHTYXAXQSYSHXASMCHKDSCRSWJPWXSGZJLWWSCHSJHSQNHCSEGNDAQTBAALZZMSSTDQJCJKTSCJAXPLGGXHHGXXZCXPDMMHLDGTYBYSJMXHMRCPXXJZCKZXSHMLQXXTTHXWZFKHCCZDYTCJYXQHLXDHYPJQXYLSYYDZOZJNYXQEZYSQYAYXWYPDGXDDXSPPYZNDLTWRHXYDXZZJHTCXMCZLHPYYYYMHZLLHNXMYLLLMDCPPXHMXDKYCYRDLTXJCHHZZXZLCCLYLNZSHZJZZLNNRLWHYQSNJHXYNTTTKYJPYCHHYEGKCTTWLGQRLGGTGTYGYHPYHYLQYQGCWYQKPYYYTTTTLHYHLLTYTTSPLKYZXGZWGPYDSSZZDQXSKCQNMJJZZBXYQMJRTFFBTKHZKBXLJJKDXJTLBWFZPPTKQTZTGPDGNTPJYFALQMKGXBDCLZFHZCLLLLADPMXDJHLCCLGYHDZFGYDDGCYYFGYDXKSSEBDHYKDKDKHNAXXYBPBYYHXZQGAFFQYJXDMLJCSQZLLPCHBSXGJYNDYBYQSPZWJLZKSDDTACTBXZDYZYPJZQSJNKKTKNJDJGYYPGTLFYQKASDNTCYHBLWDZHBBYDWJRYGKZYHEYYFJMSDTYFZJJHGCXPLXHLDWXXJKYTCYKSSSMTWCTTQZLPBSZDZWZXGZAGYKTYWXLHLSPBCLLOQMMZSSLCMBJCSZZKYDCZJGQQDSMCYTZQQLWZQZXSSFPTTFQMDDZDSHDTDWFHTDYZJYQJQKYPBDJYYXTLJHDRQXXXHAYDHRJLKLYTWHLLRLLRCXYLBWSRSZZSYMKZZHHKYHXKSMDSYDYCJPBZBSQLFCXXXNXKXWYWSDZYQOGGQMMYHCDZTTFJYYBGSTTTYBYKJDHKYXBELHTYPJQNFXFDYKZHQKZBYJTZBXHFDXKDASWTAWAJLDYJSFHBLDNNTNQJTJNCHXFJSRFWHZFMDRYJYJWZPDJKZYJYMPCYZNYNXFBYTFYFWYGDBNZZZDNYTXZEMMQBSQEHXFZMBMFLZZSRXYMJGSXWZJSPRYDJSJGXHJJGLJJYNZZJXHGXKYMLPYYYCXYTWQZSWHWLYRJLPXSLSXMFSWWKLCTNXNYNPSJSZHDZEPTXMYYWXYYSYWLXJQZQXZDCLEEELMCPJPCLWBXSQHFWWTFFJTNQJHJQDXHWLBYZNFJLALKYYJLDXHHYCSTYYWNRJYXYWTRMDRQHWQCMFJDYZMHMYYXJWMYZQZXTLMRSPWWCHAQBXYGZYPXYYRRCLMPYMGKSJSZYSRMYJSNXTPLNBAPPYPYLXYYZKYNLDZYJZCZNNLMZHHARQMPGWQTZMXXMLLHGDZXYHXKYXYCJMFFYYHJFSBSSQLXXNDYCANNMTCJCYPRRNYTYQNYYMBMSXNDLYLYSLJRLXYSXQMLLYZLZJJJKYZZCSFBZXXMSTBJGNXYZHLXNMCWSCYZYFZLXBRNNNYLBNRTGZQYSATSWRYHYJZMZDHZGZDWYBSSCSKXSYHYTXXGCQGXZZSHYXJSCRHMKKBXCZJYJYMKQHZJFNBHMQHYSNJNZYBKNQMCLGQHWLZNZSWXKHLJHYYBQLBFCDSXDLDSPFZPSKJYZWZXZDDXJSMMEGJSCSSMGCLXXKYYYLNYPWWWGYDKZJGGGZGGSYCKNJWNJPCXBJJTQTJWDSSPJXZXNZXUMELPXFSXTLLXCLJXJJLJZXCTPSWXLYDHLYQRWHSYCSQYYBYAYWJJJQFWQCQQCJQGXALDBZZYJGKGXPLTZYFXJLTPADKYQHPMATLCPDCKBMTXYBHKLENXDLEEGQDYMSAWHZMLJTWYGXLYQZLJEEYYBQQFFNLYXRDSCTGJGXYYNKLLYQKCCTLHJLQMKKZGCYYGLLLJDZGYDHZWXPYSJBZKDZGYZZHYWYFQYTYZSZYEZZLYMHJJHTSMQWYZLKYYWZCSRKQYTLTDXWCTYJKLWSQZWBDCQYNCJSRSZJLKCDCDTLZZZACQQZZDDXYPLXZBQJYLZLLLQDDZQJYJYJZYXNYYYNYJXKXDAZWYRDLJYYYRJLXLLDYXJCYWYWNQCCLDDNYYYNYCKCZHXXCCLGZQJGKWPPCQQJYSBZZXYJSQPXJPZBSBDSFNSFPZXHDWZTDWPPTFLZZBZDMYYPQJRSDZSQZSQXBDGCPZSWDWCSQZGMDHZXMWWFYBPDGPHTMJTHZSMMBGZMBZJCFZWFZBBZMQCFMBDMCJXLGPNJBBXGYHYYJGPTZGZMQBQTCGYXJXLWZKYDPDYMGCFTPFXYZTZXDZXTGKMTYBBCLBJASKYTSSQYYMSZXFJEWLXLLSZBQJJJAKLYLXLYCCTSXMCWFKKKBSXLLLLJYXTYLTJYYTDPJHNHNNKBYQNFQYYZBYYESSESSGDYHFHWTCJBSDZZTFDMXHCNJZYMQWSRYJDZJQPDQBBSTJGGFBKJBXTGQHNGWJXJGDLLTHZHHYYYYYYSXWTYYYCCBDBPYPZYCCZYJPZYWCBDLFWZCWJDXXHYHLHWZZXJTCZLCDPXUJCZZZLYXJJTXPHFXWPYWXZPTDZZBDZCYHJHMLXBQXSBYLRDTGJRRCTTTHYTCZWMXFYTWWZCWJWXJYWCSKYBZSCCTZQNHXNWXXKHKFHTSWOCCJYBCMPZZYKBNNZPBZHHZDLSYDDYTYFJPXYNGFXBYQXCBHXCPSXTYZDMKYSNXSXLHKMZXLYHDHKWHXXSSKQYHHCJYXGLHZXCSNHEKDTGZXQYPKDHEXTYKCNYMYYYPKQYYYKXZLTHJQTBYQHXBMYHSQCKWWYLLHCYYLNNEQXQWMCFBDCCMLJGGXDQKTLXKGNQCDGZJWYJJLYHHQTTTNWCHMXCXWHWSZJYDJCCDBQCDGDNYXZTHCQRXCBHZTQCBXWGQWYYBXHMBYMYQTYEXMQKYAQYRGYZSLFYKKQHYSSQYSHJGJCNXKZYCXSBXYXHYYLSTYCXQTHYSMGSCPMMGCCCCCMTZTASMGQZJHKLOSQYLSWTMXSYQKDZLJQQYPLSYCZTCQQPBBQJZCLPKHQZYYXXDTDDTSJCXFFLLCHQXMJLWCJCXTSPYCXNDTJSHJWXDQQJSKXYAMYLSJHMLALYKXCYYDMNMDQMXMCZNNCYBZKKYFLMCHCMLHXRCJJHSYLNMTJZGZGYWJXSRXCWJGJQHQZDQJDCJJZKJKGDZQGJJYJYLXZXXCDQHHHEYTMHLFSBDJSYYSHFYSTCZQLPBDRFRZTZYKYWHSZYQKWDQZRKMSYNBCRXQBJYFAZPZZEDZCJYWBCJWHYJBQSZYWRYSZPTDKZPFPBNZTKLQYHBBZPNPPTYZZYBQNYDCPJMMCYCQMCYFZZDCMNLFPBPLNGQJTBTTNJZPZBBZNJKLJQYLNBZQHKSJZNGGQSZZKYXSHPZSNBCGZKDDZQANZHJKDRTLZLSWJLJZLYWTJNDJZJHXYAYNCBGTZCSSQMNJPJYTYSWXZFKWJQTKHTZPLBHSNJZSYZBWZZZZLSYLSBJHDWWQPSLMMFBJDWAQYZTCJTBNNWZXQXCDSLQGDSDPDZHJTQQPSWLYYJZLGYXYZLCTCBJTKTYCZJTQKBSJLGMGZDMCSGPYNJZYQYYKNXRPWSZXMTNCSZZYXYBYHYZAXYWQCJTLLCKJJTJHGDXDXYQYZZBYWDLWQCGLZGJGQRQZCZSSBCRPCSKYDZNXJSQGXSSJMYDNSTZTPBDLTKZWXQWQTZEXNQCZGWEZKSSBYBRTSSSLCCGBPSZQSZLCCGLLLZXHZQTHCZMQGYZQZNMCOCSZJMMZSQPJYGQLJYJPPLDXRGZYXCCSXHSHGTZNLZWZKJCXTCFCJXLBMQBCZZWPQDNHXLJCTHYZLGYLNLSZZPCXDSCQQHJQKSXZPBAJYEMSMJTZDXLCJYRYYNWJBNGZZTMJXLTBSLYRZPYLSSCNXPHLLHYLLQQZQLXYMRSYCXZLMMCZLTZSDWTJJLLNZGGQXPFSKYGYGHBFZPDKMWGHCXMSGDXJMCJZDYCABXJDLNBCDQYGSKYDQTXDJJYXMSZQAZDZFSLQXYJSJZYLBTXXWXQQZBJZUFBBLYLWDSLJHXJYZJWTDJCZFQZQZZDZSXZZQLZCDZFJHYSPYMPQZMLPPLFFXJJNZZYLSJEYQZFPFZKSYWJJJHRDJZZXTXXGLGHYDXCSKYSWMMZCWYBAZBJKSHFHJCXMHFQHYXXYZFTSJYZFXYXPZLCHMZMBXHZZSXYFYMNCWDABAZLXKTCSHHXKXJJZJSTHYGXSXYYHHHJWXKZXSSBZZWHHHCWTZZZPJXSNXQQJGZYZYWLLCWXZFXXYXYHXMKYYSWSQMNLNAYCYSPMJKHWCQHYLAJJMZXHMMCNZHBHXCLXTJPLTXYJHDYYLTTXFSZHYXXSJBJYAYRSMXYPLCKDUYHLXRLNLLSTYZYYQYGYHHSCCSMZCTZQXKYQFPYYRPFFLKQUNTSZLLZMWWTCQQYZWTLLMLMPWMBZSSTZRBPDDTLQJJBXZCSRZQQYGWCSXFWZLXCCRSZDZMCYGGDZQSGTJSWLJMYMMZYHFBJDGYXCCPSHXNZCSBSJYJGJMPPWAFFYFNXHYZXZYLREMZGZCYZSSZDLLJCSQFNXZKPTXZGXJJGFMYYYSNBTYLBNLHPFZDCYFBMGQRRSSSZXYSGTZRNYDZZCDGPJAFJFZKNZBLCZSZPSGCYCJSZLMLRSZBZZLDLSLLYSXSQZQLYXZLSKKBRXBRBZCYCXZZZEEYFGKLZLYYHGZSGZLFJHGTGWKRAAJYZKZQTSSHJJXDCYZUYJLZYRZDQQHGJZXSSZBYKJPBFRTJXLLFQWJHYLQTYMBLPZDXTZYGBDHZZRBGXHWNJTJXLKSCFSMWLSDQYSJTXKZSCFWJLBXFTZLLJZLLQBLSQMQQCGCZFPBPHZCZJLPYYGGDTGWDCFCZQYYYQYSSCLXZSKLZZZGFFCQNWGLHQYZJJCZLQZZYJPJZZBPDCCMHJGXDQDGDLZQMFGPSYTSDYFWWDJZJYSXYYCZCYHZWPBYKXRYLYBHKJKSFXTZJMMCKHLLTNYYMSYXYZPYJQYCSYCWMTJJKQYRHLLQXPSGTLYYCLJSCPXJYZFNMLRGJJTYZBXYZMSJYJHHFZQMSYXRSZCWTLRTQZSSTKXGQKGSPTGCZNJSJCQCXHMXGGZTQYDJKZDLBZSXJLHYQGGGTHQSZPYHJHHGYYGKGGCWJZZYLCZLXQSFTGZSLLLMLJSKCTBLLZZSZMMNYTPZSXQHJCJYQXYZXZQZCPSHKZZYSXCDFGMWQRLLQXRFZTLYSTCTMJCXJJXHJNXTNRZTZFQYHQGLLGCXSZSJDJLJCYDSJTLNYXHSZXCGJZYQPYLFHDJSBPCCZHJJJQZJQDYBSSLLCMYTTMQTBHJQNNYGKYRQYQMZGCJKPDCGMYZHQLLSLLCLMHOLZGDYYFZSLJCQZLYLZQJESHNYLLJXGJXLYSYYYXNBZLJSSZCQQCJYLLZLTJYLLZLLBNYLGQCHXYYXOXCXQKYJXXXYKLXSXXYQXCYKQXQCSGYXXYQXYGYTQOHXHXPYXXXULCYEYCHZZCBWQBBWJQZSCSZSSLZYLKDESJZWMYMCYTSDSXXSCJPQQSQYLYYZYCMDJDZYWCBTJSYDJKCYDDJLBDJJSODZYSYXQQYXDHHGQQYQHDYXWGMMMAJDYBBBPPBCMUUPLJZSMTXERXJMHQNUTPJDCBSSMSSSTKJTSSMMTRCPLZSZMLQDSDMJMQPNQDXCFYNBFSDQXYXHYAYKQYDDLQYYYSSZBYDSLNTFQTZQPZMCHDHCZCWFDXTMYQSPHQYYXSRGJCWTJTZZQMGWJJTJHTQJBBHWZPXXHYQFXXQYWYYHYSCDYDHHQMNMTMWCPBSZPPZZGLMZFOLLCFWHMMSJZTTDHZZYFFYTZZGZYSKYJXQYJZQBHMBZZLYGHGFMSHPZFZSNCLPBQSNJXZSLXXFPMTYJYGBXLLDLXPZJYZJYHHZCYWHJYLSJEXFSZZYWXKZJLUYDTMLYMQJPWXYHXSKTQJEZRPXXZHHMHWQPWQLYJJQJJZSZCPHJLCHHNXJLQWZJHBMZYXBDHHYPZLHLHLGFWLCHYYTLHJXCJMSCPXSTKPNHQXSRTYXXTESYJCTLSSLSTDLLLWWYHDHRJZSFGXTSYCZYNYHTDHWJSLHTZDQDJZXXQHGYLTZPHCSQFCLNJTCLZPFSTPDYNYLGMJLLYCQHYSSHCHYLHQYQTMZYPBYWRFQYKQSYSLZDQJMPXYYSSRHZJNYWTQDFZBWWTWWRXCWHGYHXMKMYYYQMSMZHNGCEPMLQQMTCWCTMMPXJPJJHFXYYZSXZHTYBMSTSYJTTQQQYYLHYNPYQZLCYZHZWSMYLKFJXLWGXYPJYTYSYXYMZCKTTWLKSMZSYLMPWLZWXWQZSSAQSYXYRHSSNTSRAPXCPWCMGDXHXZDZYFJHGZTTSBJHGYZSZYSMYCLLLXBTYXHBBZJKSSDMALXHYCFYGMQYPJYCQXJLLLJGSLZGQLYCJCCZOTYXMTMTTLLWTGPXYMZMKLPSZZZXHKQYSXCTYJZYHXSHYXZKXLZWPSQPYHJWPJPWXQQYLXSDHMRSLZZYZWTTCYXYSZZSHBSCCSTPLWSSCJCHNLCGCHSSPHYLHFHHXJSXYLLNYLSZDHZXYLSXLWZYKCLDYAXZCMDDYSPJTQJZLNWQPSSSWCTSTSZLBLNXSMNYYMJQBQHRZWTYYDCHQLXKPZWBGQYBKFCMZWPZLLYYLSZYDWHXPSBCMLJBSCGBHXLQHYRLJXYSWXWXZSLDFHLSLYNJLZYFLYJYCDRJLFSYZFSLLCQYQFGJYHYXZLYLMSTDJCYHBZLLNWLXXYGYYHSMGDHXXHHLZZJZXCZZZCYQZFNGWPYLCPKPYYPMCLQKDGXZGGWQBDXZZKZFBXXLZXJTPJPTTBYTSZZDWSLCHZHSLTYXHQLHYXXXYYZYSWTXZKHLXZXZPYHGCHKCFSYHUTJRLXFJXPTZTWHPLYXFCRHXSHXKYXXYHZQDXQWULHYHMJTBFLKHTXCWHJFWJCFPQRYQXCYYYQYGRPYWSGSUNGWCHKZDXYFLXXHJJBYZWTSXXNCYJJYMSWZJQRMHXZWFQSYLZJZGBHYNSLBGTTCSYBYXXWXYHXYYXNSQYXMQYWRGYQLXBBZLJSYLPSYTJZYHYZAWLRORJMKSCZJXXXYXCHDYXRYXXJDTSQFXLYLTSFFYXLMTYJMJUYYYXLTZCSXQZQHZXLYYXZHDNBRXXXJCTYHLBRLMBRLLAXKYLLLJLYXXLYCRYLCJTGJCMTLZLLCYZZPZPCYAWHJJFYBDYYZSMPCKZDQYQPBPCJPDCYZMDPBCYYDYCNNPLMTMLRMFMMGWYZBSJGYGSMZQQQZTXMKQWGXLLPJGZBQCDJJJFPKJKCXBLJMSWMDTQJXLDLPPBXCWRCQFBFQJCZAHZGMYKPHYYHZYKNDKZMBPJYXPXYHLFPNYYGXJDBKXNXHJMZJXSTRSTLDXSKZYSYBZXJLXYSLBZYSLHXJPFXPQNBYLLJQKYGZMCYZZYMCCSLCLHZFWFWYXZMWSXTYNXJHPYYMCYSPMHYSMYDYSHQYZCHMJJMZCAAGCFJBBHPLYZYLXXSDJGXDHKXXTXXNBHRMLYJSLTXMRHNLXQJXYZLLYSWQGDLBJHDCGJYQYCMHWFMJYBMBYJYJWYMDPWHXQLDYGPDFXXBCGJSPCKRSSYZJMSLBZZJFLJJJLGXZGYXYXLSZQYXBEXYXHGCXBPLDYHWETTWWCJMBTXCHXYQXLLXFLYXLLJLSSFWDPZSMYJCLMWYTCZPCHQEKCQBWLCQYDPLQPPQZQFJQDJHYMMCXTXDRMJWRHXCJZYLQXDYYNHYYHRSLSRSYWWZJYMTLTLLGTQCJZYABTCKZCJYCCQLJZQXALMZYHYWLWDXZXQDLLQSHGPJFJLJHJABCQZDJGTKHSSTCYJLPSWZLXZXRWGLDLZRLZXTGSLLLLZLYXXWGDZYGBDPHZPBRLWSXQBPFDWOFMWHLYPCBJCCLDMBZPBZZLCYQXLDOMZBLZWPDWYYGDSTTHCSQSCCRSSSYSLFYBFNTYJSZDFNDPDHDZZMBBLSLCMYFFGTJJQWFTMTPJWFNLBZCMMJTGBDZLQLPYFHYYMJYLSDCHDZJWJCCTLJCLDTLJJCPDDSQDSSZYBNDBJLGGJZXSXNLYCYBJXQYCBYLZCFZPPGKCXZDZFZTJJFJSJXZBNZYJQTTYJYHTYCZHYMDJXTTMPXSPLZCDWSLSHXYPZGTFMLCJTYCBPMGDKWYCYZCDSZZYHFLYCTYGWHKJYYLSJCXGYWJCBLLCSNDDBTZBSCLYZCZZSSQDLLMQYYHFSLQLLXFTYHABXGWNYWYYPLLSDLDLLBJCYXJZMLHLJDXYYQYTDLLLBUGBFDFBBQJZZMDPJHGCLGMJJPGAEHHBWCQXAXHHHZCHXYPHJAXHLPHJPGPZJQCQZGJJZZUZDMQYYBZZPHYHYBWHAZYJHYKFGDPFQSDLZMLJXKXGALXZDAGLMDGXMWZQYXXDXXPFDMMSSYMPFMDMMKXKSYZYSHDZKXSYSMMZZZMSYDNZZCZXFPLSTMZDNMXCKJMZTYYMZMZZMSXHHDCZJEMXXKLJSTLWLSQLYJZLLZJSSDPPMHNLZJCZYHMXXHGZCJMDHXTKGRMXFWMCGMWKDTKSXQMMMFZZYDKMSCLCMPCGMHSPXQPZDSSLCXKYXTWLWJYAHZJGZQMCSNXYYMMPMLKJXMHLMLQMXCTKZMJQYSZJSYSZHSYJZJCDAJZYBSDQJZGWZQQXFKDMSDJLFWEHKZQKJPEYPZYSZCDWYJFFMZZYLTTDZZEFMZLBNPPLPLPEPSZALLTYLKCKQZKGENQLWAGYXYDPXLHSXQQWQCQXQCLHYXXMLYCCWLYMQYSKGCHLCJNSZKPYZKCQZQLJPDMDZHLASXLBYDWQLWDNBQCRYDDZTJYBKBWSZDXDTNPJDTCTQDFXQQMGNXECLTTBKPWSLCTYQLPWYZZKLPYGZCQQPLLKCCYLPQMZCZQCLJSLQZDJXLDDHPZQDLJJXZQDXYZQKZLJCYQDYJPPYPQYKJYRMPCBYMCXKLLZLLFQPYLLLMBSGLCYSSLRSYSQTMXYXZQZFDZUYSYZTFFMZZSMZQHZSSCCMLYXWTPZGXZJGZGSJSGKDDHTQGGZLLBJDZLCBCHYXYZHZFYWXYZYMSDBZZYJGTSMTFXQYXQSTDGSLNXDLRYZZLRYYLXQHTXSRTZNGZXBNQQZFMYKMZJBZYMKBPNLYZPBLMCNQYZZZSJZHJCTZKHYZZJRDYZHNPXGLFZTLKGJTCTSSYLLGZRZBBQZZKLPKLCZYSSUYXBJFPNJZZXCDWXZYJXZZDJJKGGRSRJKMSMZJLSJYWQSKYHQJSXPJZZZLSNSHRNYPZTWCHKLPSRZLZXYJQXQKYSJYCZTLQZYBBYBWZPQDWWYZCYTJCJXCKCWDKKZXSGKDZXWWYYJQYYTCYTDLLXWKCZKKLCCLZCQQDZLQLCSFQCHQHSFSMQZZLNBJJZBSJHTSZDYSJQJPDLZCDCWJKJZZLPYCGMZWDJJBSJQZSYZYHHXJPBJYDSSXDZNCGLQMBTSFSBPDZDLZNFGFJGFSMPXJQLMBLGQCYYXBQKDJJQYRFKZTJDHCZKLBSDZCFJTPLLJGXHYXZCSSZZXSTJYGKGCKGYOQXJPLZPBPGTGYJZGHZQZZLBJLSQFZGKQQJZGYCZBZQTLDXRJXBSXXPZXHYZYCLWDXJJHXMFDZPFZHQHQMQGKSLYHTYCGFRZGNQXCLPDLBZCSCZQLLJBLHBZCYPZZPPDYMZZSGYHCKCPZJGSLJLNSCDSLDLXBMSTLDDFJMKDJDHZLZXLSZQPQPGJLLYBDSZGQLBZLSLKYYHZTTNTJYQTZZPSZQZTLLJTYYLLQLLQYZQLBDZLSLYYZYMDFSZSNHLXZNCZQZPBWSKRFBSYZMTHBLGJPMCZZLSTLXSHTCSYZLZBLFEQHLXFLCJLYLJQCBZLZJHHSSTBRMHXZHJZCLXFNBGXGTQJCZTMSFZKJMSSNXLJKBHSJXNTNLZDNTLMSJXGZJYJCZXYJYJWRWWQNZTNFJSZPZSHZJFYRDJSFSZJZBJFZQZZHZLXFYSBZQLZSGYFTZDCSZXZJBQMSZKJRHYJZCKMJKHCHGTXKXQGLXPXFXTRTYLXJXHDTSJXHJZJXZWZLCQSBTXWXGXTXXHXFTSDKFJHZYJFJXRZSDLLLTQSQQZQWZXSYQTWGWBZCGZLLYZBCLMQQTZHZXZXLJFRMYZFLXYSQXXJKXRMQDZDMMYYBSQBHGZMWFWXGMXLZPYYTGZYCCDXYZXYWGSYJYZNBHPZJSQSYXSXRTFYZGRHZTXSZZTHCBFCLSYXZLZQMZLMPLMXZJXSFLBYZMYQHXJSXRXSQZZZSSLYFRCZJRCRXHHZXQYDYHXSJJHZCXZBTYNSYSXJBQLPXZQPYMLXZKYXLXCJLCYSXXZZLXDLLLJJYHZXGYJWKJRWYHCPSGNRZLFZWFZZNSXGXFLZSXZZZBFCSYJDBRJKRDHHGXJLJJTGXJXXSTJTJXLYXQFCSGSWMSBCTLQZZWLZZKXJMLTMJYHSDDBXGZHDLBMYJFRZFSGCLYJBPMLYSMSXLSZJQQHJZFXGFQFQBPXZGYYQXGZTCQWYLTLGWSGWHRLFSFGZJMGMGBGTJFSYZZGZYZAFLSSPMLPFLCWBJZCLJJMZLPJJLYMQDMYYYFBGYGYZMLYZDXQYXRQQQHSYYYQXYLJTYXFSFSLLGNQCYHYCWFHCCCFXPYLYPLLZYXXXXXKQHHXSHJZCFZSCZJXCPZWHHHHHAPYLQALPQAFYHXDYLUKMZQGGGDDESRNNZLTZGCHYPPYSQJJHCLLJTOLNJPZLJLHYMHEYDYDSQYCDDHGZUNDZCLZYZLLZNTNYZGSLHSLPJJBDGWXPCDUTJCKLKCLWKLLCASSTKZZDNQNTTLYYZSSYSSZZRYLJQKCQDHHCRXRZYDGRGCWCGZQFFFPPJFZYNAKRGYWYQPQXXFKJTSZZXSWZDDFBBXTBGTZKZNPZZPZXZPJSZBMQHKCYXYLDKLJNYPKYGHGDZJXXEAHPNZKZTZCMXCXMMJXNKSZQNMNLWBWWXJKYHCPSTMCSQTZJYXTPCTPDTNNPGLLLZSJLSPBLPLQHDTNJNLYYRSZFFJFQWDPHZDWMRZCCLODAXNSSNYZRESTYJWJYJDBCFXNMWTTBYLWSTSZGYBLJPXGLBOCLHPCBJLTMXZLJYLZXCLTPNCLCKXTPZJSWCYXSFYSZDKNTLBYJCYJLLSTGQCBXRYZXBXKLYLHZLQZLNZCXWJZLJZJNCJHXMNZZGJZZXTZJXYCYYCXXJYYXJJXSSSJSTSSTTPPGQTCSXWZDCSYFPTFBFHFBBLZJCLZZDBXGCXLQPXKFZFLSYLTUWBMQJHSZBMDDBCYSCCLDXYCDDQLYJJWMQLLCSGLJJSYFPYYCCYLTJANTJJPWYCMMGQYYSXDXQMZHSZXPFTWWZQSWQRFKJLZJQQYFBRXJHHFWJJZYQAZMYFRHCYYBYQWLPEXCCZSTYRLTTDMQLYKMBBGMYYJPRKZNPBSXYXBHYZDJDNGHPMFSGMWFZMFQMMBCMZZCJJLCNUXYQLMLRYGQZCYXZLWJGCJCGGMCJNFYZZJHYCPRRCMTZQZXHFQGTJXCCJEAQCRJYHPLQLSZDJRBCQHQDYRHYLYXJSYMHZYDWLDFRYHBPYDTSSCNWBXGLPZMLZZTQSSCPJMXXYCSJYTYCGHYCJWYRXXLFEMWJNMKLLSWTXHYYYNCMMCWJDQDJZGLLJWJRKHPZGGFLCCSCZMCBLTBHBQJXQDSPDJZZGKGLFQYWBZYZJLTSTDHQHCTCBCHFLQMPWDSHYYTQWCNZZJTLBYMBPDYYYXSQKXWYYFLXXNCWCXYPMAELYKKJMZZZBRXYYQJFLJPFHHHYTZZXSGQQMHSPGDZQWBWPJHZJDYSCQWZKTXXSQLZYYMYSDZGRXCKKUJLWPYSYSCSYZLRMLQSYLJXBCXTLWDQZPCYCYKPPPNSXFYZJJRCEMHSZMSXLXGLRWGCSTLRSXBZGBZGZTCPLUJLSLYLYMTXMTZPALZXPXJTJWTCYYZLBLXBZLQMYLXPGHDSLSSDMXMBDZZSXWHAMLCZCPJMCNHJYSNSYGCHSKQMZZQDLLKABLWJXSFMOCDXJRRLYQZKJMYBYQLYHETFJZFRFKSRYXFJTWDSXXSYSQJYSLYXWJHSNLXYYXHBHAWHHJZXWMYLJCSSLKYDZTXBZSYFDXGXZJKHSXXYBSSXDPYNZWRPTQZCZENYGCXQFJYKJBZMLJCMQQXUOXSLYXXLYLLJDZBTYMHPFSTTQQWLHOKYBLZZALZXQLHZWRRQHLSTMYPYXJJXMQSJFNBXYXYJXXYQYLTHYLQYFMLKLJTMLLHSZWKZHLJMLHLJKLJSTLQXYLMBHHLNLZXQJHXCFXXLHYHJJGBYZZKBXSCQDJQDSUJZYYHZHHMGSXCSYMXFEBCQWWRBPYYJQTYZCYQYQQZYHMWFFHGZFRJFCDPXNTQYZPDYKHJLFRZXPPXZDBBGZQSTLGDGYLCQMLCHHMFYWLZYXKJLYPQHSYWMQQGQZMLZJNSQXJQSYJYCBEHSXFSZPXZWFLLBCYYJDYTDTHWZSFJMQQYJLMQXXLLDTTKHHYBFPWTYYSQQWNQWLGWDEBZWCMYGCULKJXTMXMYJSXHYBRWFYMWFRXYQMXYSZTZZTFYKMLDHQDXWYYNLCRYJBLPSXCXYWLSPRRJWXHQYPHTYDNXHHMMYWYTZCSQMTSSCCDALWZTCPQPYJLLQZYJSWXMZZMMYLMXCLMXCZMXMZSQTZPPQQBLPGXQZHFLJJHYTJSRXWZXSCCDLXTYJDCQJXSLQYCLZXLZZXMXQRJMHRHZJBHMFLJLMLCLQNLDXZLLLPYPSYJYSXCQQDCMQJZZXHNPNXZMEKMXHYKYQLXSXTXJYYHWDCWDZHQYYBGYBCYSCFGPSJNZDYZZJZXRZRQJJYMCANYRJTLDPPYZBSTJKXXZYPFDWFGZZRPYMTNGXZQBYXNBUFNQKRJQZMJEGRZGYCLKXZDSKKNSXKCLJSPJYYZLQQJYBZSSQLLLKJXTBKTYLCCDDBLSPPFYLGYDTZJYQGGKQTTFZXBDKTYYHYBBFYTYYBCLPDYTGDHRYRNJSPTCSNYJQHKLLLZSLYDXXWBCJQSPXBPJZJCJDZFFXXBRMLAZHCSNDLBJDSZBLPRZTSWSBXBCLLXXLZDJZSJPYLYXXYFTFFFBHJJXGBYXJPMMMPSSJZJMTLYZJXSWXTYLEDQPJMYGQZJGDJLQJWJQLLSJGJGYGMSCLJJXDTYGJQJQJCJZCJGDZZSXQGSJGGCXHQXSNQLZZBXHSGZXCXYLJXYXYYDFQQJHJFXDHCTXJYRXYSQTJXYEFYYSSYYJXNCYZXFXMSYSZXYYSCHSHXZZZGZZZGFJDLTYLNPZGYJYZYYQZPBXQBDZTZCZYXXYHHSQXSHDHGQHJHGYWSZTMZMLHYXGEBTYLZKQWYTJZRCLEKYSTDBCYKQQSAYXCJXWWGSBHJYZYDHCSJKQCXSWXFLTYNYZPZCCZJQTZWJQDZZZQZLJJXLSBHPYXXPSXSHHEZTXFPTLQYZZXHYTXNCFZYYHXGNXMYWXTZSJPTHHGYMXMXQZXTSBCZYJYXXTYYZYPCQLMMSZMJZZLLZXGXZAAJZYXJMZXWDXZSXZDZXLEYJJZQBHZWZZZQTZPSXZTDSXJJJZNYAZPHXYYSRNQDTHZHYYKYJHDZXZLSWCLYBZYECWCYCRYLCXNHZYDZYDYJDFRJJHTRSQTXYXJRJHOJYNXELXSFSFJZGHPZSXZSZDZCQZBYYKLSGSJHCZSHDGQGXYZGXCHXZJWYQWGYHKSSEQZZNDZFKWYSSTCLZSTSYMCDHJXXYWEYXCZAYDMPXMDSXYBSQMJMZJMTZQLPJYQZCGQHXJHHLXXHLHDLDJQCLDWBSXFZZYYSCHTYTYYBHECXHYKGJPXHHYZJFXHWHBDZFYZBCAPNPGNYDMSXHMMMMAMYNBYJTMPXYYMCTHJBZYFCGTYHWPHFTWZZEZSBZEGPFMTSKFTYCMHFLLHGPZJXZJGZJYXZSBBQSCZZLZCCSTPGXMJSFTCCZJZDJXCYBZLFCJSYZFGSZLYBCWZZBYZDZYPSWYJZXZBDSYUXLZZBZFYGCZXBZHZFTPBGZGEJBSTGKDMFHYZZJHZLLZZGJQZLSFDJSSCBZGPDLFZFZSZYZYZSYGCXSNXXCHCZXTZZLJFZGQSQYXZJQDCCZTQCDXZJYQJQCHXZTDLGSCXZSYQJQTZWLQDQZTQCHQQJZYEZZZPBWKDJFCJPZTYPQYQTTYNLMBDKTJZPQZQZZFPZSBNJLGYJDXJDZZKZGQKXDLPZJTCJDQBXDJQJSTCKNXBXZMSLYJCQMTJQWWCJQNJNLLLHJCWQTBZQYDZCZPZZDZYDDCYZZZCCJTTJFZDPRRTZTJDCQTQZDTJNPLZBCLLCTZSXKJZQZPZLBZRBTJDCXFCZDBCCJJLTQQPLDCGZDBBZJCQDCJWYNLLZYZCCDWLLXWZLXRXNTQQCZXKQLSGDFQTDDGLRLAJJTKUYMKQLLTZYTDYYCZGJWYXDXFRSKSTQTENQMRKQZHHQKDLDAZFKYPBGGPZREBZZYKZZSPEGJXGYKQZZZSLYSYYYZWFQZYLZZLZHWCHKYPQGNPGBLPLRRJYXCCSYYHSFZFYBZYYTGZXYLXCZWXXZJZBLFFLGSKHYJZEYJHLPLLLLCZGXDRZELRHGKLZZYHZLYQSZZJZQLJZFLNBHGWLCZCFJYSPYXZLZLXGCCPZBLLCYBBBBUBBCBPCRNNZCZYRBFSRLDCGQYYQXYGMQZWTZYTYJXYFWTEHZZJYWLCCNTZYJJZDEDPZDZTSYQJHDYMBJNYJZLXTSSTPHNDJXXBYXQTZQDDTJTDYYTGWSCSZQFLSHLGLBCZPHDLYZJYCKWTYTYLBNYTSDSYCCTYSZYYEBHEXHQDTWNYGYCLXTSZYSTQMYGZAZCCSZZDSLZCLZRQXYYELJSBYMXSXZTEMBBLLYYLLYTDQYSHYMRQWKFKBFXNXSBYCHXBWJYHTQBPBSBWDZYLKGZSKYHXQZJXHXJXGNLJKZLYYCDXLFYFGHLJGJYBXQLYBXQPQGZTZPLNCYPXDJYQYDYMRBESJYYHKXXSTMXRCZZYWXYQYBMCLLYZHQYZWQXDBXBZWZMSLPDMYSKFMZKLZCYQYCZLQXFZZYDQZPZYGYJYZMZXDZFYFYTTQTZHGSPCZMLCCYTZXJCYTJMKSLPZHYSNZLLYTPZCTZZCKTXDHXXTQCYFKSMQCCYYAZHTJPCYLZLYJBJXTPNYLJYYNRXSYLMMNXJSMYBCSYSYLZYLXJJQYLDZLPQBFZZBLFNDXQKCZFYWHGQMRDSXYCYTXNQQJZYYPFZXDYZFPRXEJDGYQBXRCNFYYQPGHYJDYZXGRHTKYLNWDZNTSMPKLBTHBPYSZBZTJZSZZJTYYXZPHSSZZBZCZPTQFZMYFLYPYBBJQXZMXXDJMTSYSKKBJZXHJCKLPSMKYJZCXTMLJYXRZZQSLXXQPYZXMKYXXXJCLJPRMYYGADYSKQLSNDHYZKQXZYZTCGHZTLMLWZYBWSYCTBHJHJFCWZTXWYTKZLXQSHLYJZJXTMPLPYCGLTBZZTLZJCYJGDTCLKLPLLQPJMZPAPXYZLKKTKDZCZZBNZDYDYQZJYJGMCTXLTGXSZLMLHBGLKFWNWZHDXUHLFMKYSLGXDTWWFRJEJZTZHYDXYKSHWFZCQSHKTMQQHTZHYMJDJSKHXZJZBZZXYMPAGQMSTPXLSKLZYNWRTSQLSZBPSPSGZWYHTLKSSSWHZZLYYTNXJGMJSZSUFWNLSOZTXGXLSAMMLBWLDSZYLAKQCQCTMYCFJBSLXCLZZCLXXKSBZQCLHJPSQPLSXXCKSLNHPSFQQYTXYJZLQLDXZQJZDYYDJNZPTUZDSKJFSLJHYLZSQZLBTXYDGTQFDBYAZXDZHZJNHHQBYKNXJJQCZMLLJZKSPLDYCLBBLXKLELXJLBQYCXJXGCNLCQPLZLZYJTZLJGYZDZPLTQCSXFDMNYCXGBTJDCZNBGBQYQJWGKFHTNPYQZQGBKPBBYZMTJDYTBLSQMPSXTBNPDXKLEMYYCJYNZCTLDYKZZXDDXHQSHDGMZSJYCCTAYRZLPYLTLKXSLZCGGEXCLFXLKJRTLQJAQZNCMBYDKKCXGLCZJZXJHPTDJJMZQYKQSECQZDSHHADMLZFMMZBGNTJNNLGBYJBRBTMLBYJDZXLCJLPLDLPCQDHLXZLYCBLCXZZJADJLNZMMSSSMYBHBSQKBHRSXXJMXSDZNZPXLGBRHWGGFCXGMSKLLTSJYYCQLTSKYWYYHYWXBXQYWPYWYKQLSQPTNTKHQCWDQKTWPXXHCPTHTWUMSSYHBWCRWXHJMKMZNGWTMLKFGHKJYLSYYCXWHYECLQHKQHTTQKHFZLDXQWYZYYDESBPKYRZPJFYYZJCEQDZZDLATZBBFJLLCXDLMJSSXEGYGSJQXCWBXSSZPDYZCXDNYXPPZYDLYJCZPLTXLSXYZYRXCYYYDYLWWNZSAHJSYQYHGYWWAXTJZDAXYSRLTDPSSYYFNEJDXYZHLXLLLZQZSJNYQYQQXYJGHZGZCYJCHZLYCDSHWSHJZYJXCLLNXZJJYYXNFXMWFPYLCYLLABWDDHWDXJMCXZTZPMLQZHSFHZYNZTLLDYWLSLXHYMMYLMBWWKYXYADTXYLLDJPYBPWUXJMWMLLSAFDLLYFLBHHHBQQLTZJCQJLDJTFFKMMMBYTHYGDCQRDDWRQJXNBYSNWZDBYYTBJHPYBYTTJXAAHGQDQTMYSTQXKBTZPKJLZRBEQQSSMJJBDJOTGTBXPGBKTLHQXJJJCTHXQDWJLWRFWQGWSHCKRYSWGFTGYGBXSDWDWRFHWYTJJXXXJYZYSLPYYYPAYXHYDQKXSHXYXGSKQHYWFDDDPPLCJLQQEEWXKSYYKDYPLTJTHKJLTCYYHHJTTPLTZZCDLTHQKZXQYSTEEYWYYZYXXYYSTTJKLLPZMCYHQGXYHSRMBXPLLNQYDQHXSXXWGDQBSHYLLPJJJTHYJKYPPTHYYKTYEZYENMDSHLCRPQFDGFXZPSFTLJXXJBSWYYSKSFLXLPPLBBBLBSFXFYZBSJSSYLPBBFFFFSSCJDSTZSXZRYYSYFFSYZYZBJTBCTSBSDHRTJJBYTCXYJEYLXCBNEBJDSYXYKGSJZBXBYTFZWGENYHHTHZHHXFWGCSTBGXKLSXYWMTMBYXJSTZSCDYQRCYTWXZFHMYMCXLZNSDJTTTXRYCFYJSBSDYERXJLJXBBDEYNJGHXGCKGSCYMBLXJMSZNSKGXFBNBPTHFJAAFXYXFPXMYPQDTZCXZZPXRSYWZDLYBBKTYQPQJPZYPZJZNJPZJLZZFYSBTTSLMPTZRTDXQSJEHBZYLZDHLJSQMLHTXTJECXSLZZSPKTLZKQQYFSYGYWPCPQFHQHYTQXZKRSGTTSQCZLPTXCDYYZXSQZSLXLZMYCPCQBZYXHBSXLZDLTCDXTYLZJYYZPZYZLTXJSJXHLPMYTXCQRBLZSSFJZZTNJYTXMYJHLHPPLCYXQJQQKZZSCPZKSWALQSBLCCZJSXGWWWYGYKTJBBZTDKHXHKGTGPBKQYSLPXPJCKBMLLXDZSTBKLGGQKQLSBKKTFXRMDKBFTPZFRTBBRFERQGXYJPZSSTLBZTPSZQZSJDHLJQLZBPMSMMSXLQQNHKNBLRDDNXXDHDDJCYYGYLXGZLXSYGMQQGKHBPMXYXLYTQWLWGCPBMQXCYZYDRJBHTDJYHQSHTMJSBYPLWHLZFFNYPMHXXHPLTBQPFBJWQDBYGPNZTPFZJGSDDTQSHZEAWZZYLLTYYBWJKXXGHLFKXDJTMSZSQYNZGGSWQSPHTLSSKMCLZXYSZQZXNCJDQGZDLFNYKLJCJLLZLMZZNHYDSSHTHZZLZZBBHQZWWYCRZHLYQQJBEYFXXXWHSRXWQHWPSLMSSKZTTYGYQQWRSLALHMJTQJSMXQBJJZJXZYZKXBYQXBJXSHZTSFJLXMXZXFGHKZSZGGYLCLSARJYHSLLLMZXELGLXYDJYTLFBHBPNLYZFBBHPTGJKWETZHKJJXZXXGLLJLSTGSHJJYQLQZFKCGNNDJSSZFDBCTWWSEQFHQJBSAQTGYPQLBXBMMYWXGSLZHGLZGQYFLZBYFZJFRYSFMBYZHQGFWZSYFYJJPHZBYYZFFWODGRLMFTWLBZGYCQXCDJYGZYYYYTYTYDWEGAZYHXJLZYYHLRMGRXXZCLHNELJJTJTPWJYBJJBXJJTJTEEKHWSLJPLPSFYZPQQBDLQJJTYYQLYZKDKSQJYYQZLDQTGJQYZJSUCMRYQTHTEJMFCTYHYPKMHYZWJDQFHYYXWSHCTXRLJHQXHCCYYYJLTKTTYTMXGTCJTZAYYOCZLYLBSZYWJYTSJYHBYSHFJLYGJXXTMZYYLTXXYPZLXYJZYZYYPNHMYMDYYLBLHLSYYQQLLNJJYMSOYQBZGDLYXYLCQYXTSZEGXHZGLHWBLJHEYXTWQMAKBPQCGYSHHEGQCMWYYWLJYJHYYZLLJJYLHZYHMGSLJLJXCJJYCLYCJPCPZJZJMMYLCQLNQLJQJSXYJMLSZLJQLYCMMHCFMMFPQQMFYLQMCFFQMMMMHMZNFHHJGTTHHKHSLNCHHYQDXTMMQDCYZYXYQMYQYLTDCYYYZAZZCYMZYDLZFFFMMYCQZWZZMABTBYZTDMNZZGGDFTYPCGQYTTSSFFWFDTZQSSYSTWXJHXYTSXXYLBYQHWWKXHZXWZNNZZJZJJQJCCCHYYXBZXZCYZTLLCQXYNJYCYYCYNZZQYYYEWYCZDCJYCCHYJLBTZYYCQWMPWPYMLGKDLDLGKQQBGYCHJXY";
	        //此处收录了375个多音字,数据来自于http://www.51window.net/page/pinyin
	        var oMultiDiff = {"19969":"DZ","19975":"WM","19988":"QJ","20048":"YL","20056":"SC","20060":"NM","20094":"QG","20127":"QJ","20167":"QC","20193":"YG","20250":"KH","20256":"ZC","20282":"SC","20285":"QJG","20291":"TD","20314":"YD","20340":"NE","20375":"TD","20389":"YJ","20391":"CZ","20415":"PB","20446":"YS","20447":"SQ","20504":"TC","20608":"KG","20854":"QJ","20857":"ZC","20911":"PF","20504":"TC","20608":"KG","20854":"QJ","20857":"ZC","20911":"PF","20985":"AW","21032":"PB","21048":"XQ","21049":"SC","21089":"YS","21119":"JC","21242":"SB","21273":"SC","21305":"YP","21306":"QO","21330":"ZC","21333":"SDC","21345":"QK","21378":"CA","21397":"SC","21414":"XS","21442":"SC","21477":"JG","21480":"TD","21484":"ZS","21494":"YX","21505":"YX","21512":"HG","21523":"XH","21537":"PB","21542":"PF","21549":"KH","21571":"E","21574":"DA","21588":"TD","21589":"O","21618":"ZC","21621":"KHA","21632":"ZJ","21654":"KG","21679":"LKG","21683":"KH","21710":"A","21719":"YH","21734":"WOE","21769":"A","21780":"WN","21804":"XH","21834":"A","21899":"ZD","21903":"RN","21908":"WO","21939":"ZC","21956":"SA","21964":"YA","21970":"TD","22003":"A","22031":"JG","22040":"XS","22060":"ZC","22066":"ZC","22079":"MH","22129":"XJ","22179":"XA","22237":"NJ","22244":"TD","22280":"JQ","22300":"YH","22313":"XW","22331":"YQ","22343":"YJ","22351":"PH","22395":"DC","22412":"TD","22484":"PB","22500":"PB","22534":"ZD","22549":"DH","22561":"PB","22612":"TD","22771":"KQ","22831":"HB","22841":"JG","22855":"QJ","22865":"XQ","23013":"ML","23081":"WM","23487":"SX","23558":"QJ","23561":"YW","23586":"YW","23614":"YW","23615":"SN","23631":"PB","23646":"ZS","23663":"ZT","23673":"YG","23762":"TD","23769":"ZS","23780":"QJ","23884":"QK","24055":"XH","24113":"DC","24162":"ZC","24191":"GA","24273":"QJ","24324":"NL","24377":"TD","24378":"QJ","24439":"PF","24554":"ZS","24683":"TD","24694":"WE","24733":"LK","24925":"TN","25094":"ZG","25100":"XQ","25103":"XH","25153":"PB","25170":"PB","25179":"KG","25203":"PB","25240":"ZS","25282":"FB","25303":"NA","25324":"KG","25341":"ZY","25373":"WZ","25375":"XJ","25384":"A","25457":"A","25528":"SD","25530":"SC","25552":"TD","25774":"ZC","25874":"ZC","26044":"YW","26080":"WM","26292":"PB","26333":"PB","26355":"ZY","26366":"CZ","26397":"ZC","26399":"QJ","26415":"ZS","26451":"SB","26526":"ZC","26552":"JG","26561":"TD","26588":"JG","26597":"CZ","26629":"ZS","26638":"YL","26646":"XQ","26653":"KG","26657":"XJ","26727":"HG","26894":"ZC","26937":"ZS","26946":"ZC","26999":"KJ","27099":"KJ","27449":"YQ","27481":"XS","27542":"ZS","27663":"ZS","27748":"TS","27784":"SC","27788":"ZD","27795":"TD","27812":"O","27850":"PB","27852":"MB","27895":"SL","27898":"PL","27973":"QJ","27981":"KH","27986":"HX","27994":"XJ","28044":"YC","28065":"WG","28177":"SM","28267":"QJ","28291":"KH","28337":"ZQ","28463":"TL","28548":"DC","28601":"TD","28689":"PB","28805":"JG","28820":"QG","28846":"PB","28952":"TD","28975":"ZC","29100":"A","29325":"QJ","29575":"SL","29602":"FB","30010":"TD","30044":"CX","30058":"PF","30091":"YSP","30111":"YN","30229":"XJ","30427":"SC","30465":"SX","30631":"YQ","30655":"QJ","30684":"QJG","30707":"SD","30729":"XH","30796":"LG","30917":"PB","31074":"NM","31085":"JZ","31109":"SC","31181":"ZC","31192":"MLB","31293":"JQ","31400":"YX","31584":"YJ","31896":"ZN","31909":"ZY","31995":"XJ","32321":"PF","32327":"ZY","32418":"HG","32420":"XQ","32421":"HG","32438":"LG","32473":"GJ","32488":"TD","32521":"QJ","32527":"PB","32562":"ZSQ","32564":"JZ","32735":"ZD","32793":"PB","33071":"PF","33098":"XL","33100":"YA","33152":"PB","33261":"CX","33324":"BP","33333":"TD","33406":"YA","33426":"WM","33432":"PB","33445":"JG","33486":"ZN","33493":"TS","33507":"QJ","33540":"QJ","33544":"ZC","33564":"XQ","33617":"YT","33632":"QJ","33636":"XH","33637":"YX","33694":"WG","33705":"PF","33728":"YW","33882":"SR","34067":"WM","34074":"YW","34121":"QJ","34255":"ZC","34259":"XL","34425":"JH","34430":"XH","34485":"KH","34503":"YS","34532":"HG","34552":"XS","34558":"YE","34593":"ZL","34660":"YQ","34892":"XH","34928":"SC","34999":"QJ","35048":"PB","35059":"SC","35098":"ZC","35203":"TQ","35265":"JX","35299":"JX","35782":"SZ","35828":"YS","35830":"E","35843":"TD","35895":"YG","35977":"MH","36158":"JG","36228":"QJ","36426":"XQ","36466":"DC","36710":"JC","36711":"ZYG","36767":"PB","36866":"SK","36951":"YW","37034":"YX","37063":"XH","37218":"ZC","37325":"ZC","38063":"PB","38079":"TD","38085":"QY","38107":"DC","38116":"TD","38123":"YD","38224":"HG","38241":"XTC","38271":"ZC","38415":"YE","38426":"KH","38461":"YD","38463":"AE","38466":"PB","38477":"XJ","38518":"YT","38551":"WK","38585":"ZC","38704":"XS","38739":"LJ","38761":"GJ","38808":"SQ","39048":"JG","39049":"XJ","39052":"HG","39076":"CZ","39271":"XT","39534":"TD","39552":"TD","39584":"PB","39647":"SB","39730":"LG","39748":"TPB","40109":"ZQ","40479":"ND","40516":"HG","40536":"HG","40583":"QJ","40765":"YQ","40784":"QJ","40840":"YK","40863":"QJG"};
	        var checkCh = function(ch) {
	            var uni = ch.charCodeAt(0);
	            //如果不在汉字处理范围之内,返回原字符,也可以调用自己的处理函数
	            if (uni > 40869 || uni < 19968) return ch; //dealWithOthers(ch);
	            //检查是否是多音字,是按多音字处理,不是就直接在strChineseFirstPY字符串中找对应的首字母
	            return (oMultiDiff[uni] ? oMultiDiff[uni] : (strChineseFirstPY.charAt(uni - 19968)));
	        }
	        var mkRslt = function(arr) {
	            var arrRslt = [""];
	            for (var i = 0,
	                     len = arr.length; i < len; i++) {
	                var str = arr[i];
	                var strlen = str.length;
	                if (strlen == 1) {
	                    for (var k = 0; k < arrRslt.length; k++) {
	                        arrRslt[k] += str;
	                    }
	                } else {
	                    var tmpArr = arrRslt.slice(0);
	                    arrRslt = [];
	                    for (k = 0; k < strlen; k++) {
	                        //复制一个相同的arrRslt
	                        var tmp = tmpArr.slice(0);
	                        //把当前字符str[k]添加到每个元素末尾
	                        for (var j = 0; j < tmp.length; j++) {
	                            tmp[j] += str.charAt(k);
	                        }
	                        //把复制并修改后的数组连接到arrRslt上
	                        arrRslt = arrRslt.concat(tmp);
	                    }
	                }
	            }
	            return arrRslt[0] || arrRslt;
	        }

	        if(!str) return "";
	        if (typeof(str) != "string") throw new Error( - 1, "函数makePy需要字符串类型参数!");
	        var arrResult = new Array(); //保存中间结果的数组
	        for (var i = 0,
	                 len = str.length; i < len; i++) {
	            //获得unicode码
	            var ch = str.charAt(i);
	            //检查该unicode码是否在处理范围之内,在则返回该码对映汉字的拼音首字母,不在则调用其它函数处理
	            arrResult.push(checkCh(ch));
	        }
	        //处理arrResult,返回所有可能的拼音首字母串数组
	        return mkRslt(arrResult);
	    },



		/**
		 * @author Rui.Zhang
		 * @description 计算年龄
		 * @param {Date} birth 待设置的对象
		 * @param {Date} now 待设置属性名称
		 * @returns {Int} 计算出的年龄
		 **/
		 calcAge : function(birth, now) {
	         if(birth && now) {
	             try {
	                 var birth, now, age;
	                 if("string" === typeof (birth) || "number" === typeof (now)) {
	                     birth = new Date(birth);
	                 }
	                 if("string" === typeof (now) || "number" === typeof (now)) {
	                     now = new Date(now);
	                 }

	                 age = now.getFullYear() - birth.getFullYear();
	                 if(0 >= age) {
	                     age = 0;
	                 } else if(0 < age) {
	                     if(birth.getMonth() == now.getMonth()) {
	                         if(birth.getDate() > now.getDate()) {
	                             age --;
	                         }
	                     } else if(birth.getMonth() >= now.getMonth()) {
	                         age --;
	                     }
	                 }
	                 return age + "";
	             } catch(e) {
	                 return "";
	             }
	         }
	         return "";
     	},



	    /**
		 * @author Rui.Zhang
		 * @description 设置对象属性值
		 * @param {String} obj 待设置的对象
		 * @param {String} propName 待设置属性名称
		 * @param {String} defaultVal 待设置属性的值
		 * @param {String} isCreate 如没有该属性是否创建,默认不创建
		 * @returns {Void}
		 **/
	    setObjectPropertyVal : function (obj, propName, propVal, isCreate) {
	        if(obj && propName ) {
	            if(propName.length > 0 && "object" == typeof obj) {
	                var props = propName.split("."), varStr = "obj";
	                for(var i= 0, attr;i<props.length;i++) {
	                    attr = props[i];
	                    varStr += "." + attr ;

	                    if(isCreate) {
	                        try {
	                            with(obj) {
	                                if(undefined == eval(varStr)) {
	                                    eval(varStr + "={}");
	                                }
	                            }
	                        } catch(e) {
	                            console.log(e)
	                        }
	                    }
	                }
	                varStr += "=propVal";

	                try {
	                    with(obj) {
	                        eval(varStr);
	                    }
	                } catch(e) {
	                    console.log(e)
	                }
	            } else {
	                console.log("obj is not object or propName not value");
	            }
	        } else {
	            console.log("params error");
	        }
	    },



	    /**
		 * @author Rui.Zhang
		 * @description 获取对象属性值
		 * @param {String} obj 待获取长度的数据
		 * @param {String} propName 待获取属性名称
		 * @param {String} defaultVal 待获取属性未定义则返回此值
		 * @returns {Any}, 获取的属性值
		 **/
	    getObjectPropertyVal : function (obj, propName, defaultVal) {
	        if(obj && propName ) {
	            if(propName.length > 0 && "object" == typeof obj) {
	                var props = propName.split("."), varStr = "obj";
	                for(var i=0;i<props.length;i++) {
	                    varStr += "." + props[i];

	                    if(null != defaultVal || undefined != defaultVal) {
	                        try {
	                            with(obj) {
	                                if(undefined == eval(varStr)) {
	                                   return defaultVal;
	                                }
	                            }
	                        } catch(e) {
	                            console.log(e)
	                        }
	                    }
	                }

	                try {
	                    with(obj) {
	                        var tmp = eval(varStr);
	                        if(null == tmp || undefined == tmp) {
	                            return defaultVal;
	                        } else {
	                            return tmp;
	                        }
	                    }
	                } catch(e) {
	                    console.log(e)
	                }
	            } else {
	                console.log("obj is not object or propName not value");
	            }
	        } else {
	            console.log("params error");
	        }
	    },



		/**
		 * @author Rui.Zhang
		 * @description 获取字符串的字节长度
		 * @param {String} str_data 待获取长度的数据
		 * @returns {Long}, 字符串长度 
		 **/
		getByteLength : function(str_data) {
			str_data = str_data || String(this);
			if(Mtils.validate.isString(str_data)) {
				var Zhlength = 0;// 全角
		        var Enlength = 0;// 半角
		        if(str_data) {
		            for (var i = 0; i < str_data.length; i++) {
		                if (str_data.substring(i, i + 1).match(/[^\x00-\xff]/ig) != null)
		                    Zhlength += 1;
		                else
		                    Enlength += 1;
		            }
		        }
		        // 返回当前字符串字节长度
		        return  (Zhlength * 2) + Enlength; //所占字节数
			}
			return 0;
		},



		/**
		 * @author Rui.Zhang
		 * @description  格式化金额, 展示位银行金额格式
		 * @param {Long} long_data     待格式化数值
		 * @param {Integer} [length]     可选,格式化金额精度, 即小数点位数. 如: 3 标示保留小数点后三位, 默认为2位
		 * @returns {String}, 格式化后金额
		 **/
		formatMoney : function (long_data, length) {
		    length = length > 0 && length <= 20 ? length : 2;
		    long_data = parseFloat((long_data + "").replace(/[^\d\.-]/g, "")).toFixed(length) + "";
		    var l = long_data.split(".")[0].split("").reverse(),
		        r = long_data.split(".")[1];
		    t = "";
		    for(i = 0; i < l.length; i ++ )
		    {
		        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
		    }
		    return t.split("").reverse().join("") + "." + r;
		},



		/**
		 * @author Rui.Zhang
		 * @description  文本简介, 即截取字符串前几个字符
		 * @param {String} str_data    待截取文本
		 * @param {Integer} length     待截取长度
		 * @returns {String}, 文本简介
		 **/
		strIntro : function (str_data, length) {
		    if (str_data.length > length) {
		        return str_data.substr(0, length) + "...";
		    } else {
		        return str_data;
		    }
		},



		/**
		 * @author Rui.Zhang
		 * @description  清除文本右边的空白字符,包括空格/Tab/换行等
		 * @param {String} str_data    欲清除的文本
		 * @returns {String}, 清除空白字符后的文本
		 **/
		rtrim : function (str_data) {
			str_data = str_data || String(this);
		    return str_data.replace(/(\s*|　*)$/, "");
		},



		/**
		 * @author Rui.Zhang
		 * @description  清除文本左边的空白字符,包括空格/Tab/换行等
		 * @param {String} str_data    欲清除的文本
		 * @returns {String}, 清除空白字符后的文本
		 **/
		ltrim : function (str_data) {
			str_data = str_data || String(this);
		    return str_data.replace(/^(\s*|　*)/, "");
		},



		/**
		 * @author Rui.Zhang
		 * @description  清除文本中所有的空白字符,包括空格/Tab/换行等
		 * @param {String} str_data    欲清除的文本
		 * @returns {String}, 清除空白字符后的文本
		 **/
		trim : function (str_data) {
			str_data = str_data || String(this);
		    return str_data.replace(/\s+/g, "");
		},



		/**
		 * @author Rui.Zhang
		 * @description  替换源文本中的所有目标文本
		 * @param {String} str_origin    被替换的文本
		 * @param {String} str_target    欲替换的文本
		 * @param {String} str_replace   用作替换的文本
		 * @returns {String}, 替换后的文本
		 **/
		replaceAll : function (str_origin, str_target, str_replace) {
		    return str_origin.replace(new RegExp(str_target, "gm"), str_replace)
		}

	}
};

String.prototype.rtrim = Mtils.utils.rtrim;
String.prototype.ltrim = Mtils.utils.ltrim;
String.prototype.trim = Mtils.utils.trim;

Number.prototype.isNumber = String.prototype.isNumber = Mtils.validation.isNumber;
Number.prototype.isDecimal = String.prototype.isDecimal = Mtils.validation.isDecimal;
Number.prototype.isInteger = String.prototype.isInteger = Mtils.validation.isInteger;

String.prototype.getByteLength = Mtils.utils.getByteLength;

Object.prototype.isArray = Mtils.validation.isArray;
Object.prototype.isObject = Mtils.validation.isObject;

window.getUrlParam = Mtils.utils.getUrlParam;

Math.accAdd = Mtils.utils.accAdd;
Math.accSub = Mtils.utils.accSub;
Math.accMul = Mtils.utils.accMul;
Math.accDiv = Mtils.utils.accDiv;

Array.prototype.unique = Mtils.utils.unique;
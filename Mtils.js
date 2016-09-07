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
		WOMAN : 0,
		MAN : 1,
	},




	/**
	 * @author Rui.Zhang
	 * @class 数据校验类
	 * @description 提供一些数据校验函数
	 */
	validate : {

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

	},



	/**
	 * @author Rui.Zhang
	 * @class 工具类
	 * @description 提供一些辅助代码封装
	 */
	utils : {
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
		}

	}
};


String.prototype.isChinese = Mtils.validate.isChinese;
String.prototype.isContainsSpecialChar = Mtils.validate.isContainsSpecialChar;
String.prototype.isEmail = Mtils.validate.isEmail;

Number.prototype.isNumber = String.prototype.isNumber = Mtils.validate.isNumber;
Number.prototype.isDecimal = String.prototype.isDecimal = Mtils.validate.isDecimal;
Number.prototype.isInteger = String.prototype.isInteger = Mtils.validate.isInteger;

String.prototype.isMobile = Mtils.validate.isMobile;
String.prototype.isQQ = Mtils.validate.isQQ;
String.prototype.isTelephone = Mtils.validate.isTelephone;
String.prototype.isUrl = Mtils.validate.isUrl;
String.prototype.isEnglish = Mtils.validate.isEnglish;
String.prototype.isIdCard = Mtils.validate.isIdCard;
String.prototype.isBankCard = Mtils.validate.isBankCard;

String.prototype.getByteLength = Mtils.utils.getByteLength;

Object.prototype.isArray = Mtils.validate.isArray;
Object.prototype.isObject = Mtils.validate.isObject;

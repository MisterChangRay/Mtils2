# Mtils2
Mtils是一套前端代码集合，提供常用的数据校验、数据加密、扩展函数、便捷函数。  <br />
Mtils2 is Mtils Upgraded version



##### 这是什么
这是一个js的工具集合，封装了常见的表单校验，加密算法，原生函数扩展和一些其他的便捷方法。
详情[参阅API文档](https://misterchangray.github.io/Mtils2/)。


##### 如何下载
- github 上直接下载 released 版本[点击前往](https://github.com/MisterChangRay/Mtils2/releases)
- npm 命令直接安装;`npm install mtils --save-dev`


##### 简介
1. 提供身份证、银行卡、社会信用代码、邮箱、手机、座机、QQ、URL、IP等常见的数据格式校验
2. 提供年龄计算、进制转换、cookie操作、金额格式化、时间格式化、数据类型判断、数组去重、获取拼音等常见便捷方法
3. 提供base64、md5、sha1、sha256、随机数等常见数据安全算法
4. 封装精度更高的计算函数,链式函数调用(类promise),数组对象获取,对象属性设置、对象数组查找


##### 使用示例
1. 引入Mtils.js

```html
<!DOCTYPE html>
<html>
<head>
   <title>Mtils use test</title>
</head>
<body>
</body>
   <script type="text/javascript" src="Mtils.js"></script>
   <script type="text/javascript">
      //在这里调用你想用的方法吧
      ...
   </script>
</html>
```

2. 在Js域内使用Mtils调用你想使用的函数，具体可以[参阅API文档](https://misterchangray.github.io/Mtils2/)。
```js
<script type="text/javascript">
  //校验身份证
  if(Mtils.validation.isIdCard('510182199109217504')) {
    alert('此身份证有效');  
  } else {
    alert('此身份证无效');
  }
  
  
  //校验身份证是否为男性身份证
  if(Mtils.validation.isIdCard('510182199109217504', Mtils.constant.MAN)) {
    alert('此身份证为男性身份证');  
  } else {
    alert('此身份证无效');
  }
  
  
  //MD5加密密码
  var pw = Mtils.security.hex_md5('password');
  console.log(pw); // pw = "5f4dcc3b5aa765d61d8327deb882cf99"
  

  //生成UUID
  var uuid = Mtils.security.uuid();
  console.log(uuid); // uuid = "A0CBA9E7-EF50-41A8-B762-49C43C85121A"
  
  
  //生成介于1-99的随机数
  var randomNum = Mtils.security.randomBetween(1, 99)
  console.log(randomNum); // randomNum = 22
  
  
  //取汉字拼音
  var py = Mtils.utils.makePy('Mtils 真是个好工具');
  console.log(py);   // py = "Mtils ZhenShiGeHaoGongJu"
  
  
  //只取汉字首字母拼音
  var py = Mtils.utils.makePy('Mtils 真是个好工具', true);
  console.log(py);   // py = "Mtils ZSGHGJ"
  
  
  //将10进制的4转为2进制
  var result = Mtils.utils.decimalConversion(4, 10, 2);
  console.log(result);   // result = 100
  
  
  //数组去除重复元素
  var result = Mtils.extention.uniqueArray([1,2,3,4,4,3]);
  console.log(result);   // result = [1,2,3,4]
  
  
  //对象属性克隆, 从右到左;
  var a = {a:1}, b = {b:2}, c ={c:3}, d= {a:4};
  var result = Mtils.extention.extend(a,b,c,d); //将d,c,b这三个对象的属性复制到a对象中
  console.log(result);   // result = {a: 4, b: 2, c: 3}
  
  
  //格式化时间
  var result = Mtils.extention.formatDate(Mtils.now(), "yyyy-MM-dd");
  console.log(result);   // result = "2018-04-08"
  
  
  //便捷JS对象设置值
  var obj = {}; 
  Mtils.utils.setObjectPropertyVal(obj, 'a.b.c', 123, true);
  console.log(obj.a.b.c);   // obj.a.b.c = 123
  
  
  //便捷获取JS对象值,也可以用下面的方法获取值。原生obj.a.b.c，如果a为空,则可能报错，而获取方法不会报错且可以设置默认值
  var objVal = Mtils.utils.getObjectPropertyVal(obj, 'a.b.c');
  console.log(objVal);   // objVal = 123
  
  
  //根据对象属性来过滤数组, 这里从儿童列表中提取出所有姓张的
  var childrens = [{id:1, name:'张三'}, {id:2, name:'李四'}, {id:3, name:'张国立'}, {id:4, name:'赵武'}];
  var result = Mtils.utils.findInArray({"name":"张"}, childrens, true);
  console.log(result); // result = [{id:1, name:'张三'}, {id:3, name:'张国立'}]


  //也扩展了数组根据Key快速获取对象的方法
  var childrens = [{id:1, name:'张三'}, {id:2, name:'李四'}, {id:3, name:'张国立'}, {id:4, name:'赵武'}];
  var result = childrens.getById(1);
  console.log(result); // result = {id:1, name:'张三'}
  
  
  //链式调用，解决回调的坑(这个演示的是伪代码)
  //该函数已经扩展到window对象，即也可以直接使用ChainCallManager()。示例中的三个ajax将会依次执行。
  Mtils.utils.ChainCallManager().then(function() {
    var self = this;
    ...
    $.ajax(url, function() {
      self.next();//当前函数执行完毕后调用下一个函数执行
    });
    ...
  }).then(function() {
    ...
    var self = this;
    $.ajax(url, function() {
      self.next();
    });
    ...
  }).then(function() {
    ...
    var self = this;
    $.ajax(url, function() {
      self.next();
    });
    ...
  }).start(); 
  
  
 
  //更多方法及语法，请结合API文档使用...
</script>

```


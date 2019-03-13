// 作者：王鑫广
// 名称：Promise封装Ajax
// 时间：2019.1.21
const ajax = function(type, url){
    return new Promise((resolve, reject) => {
        // 1 创建XMLHttpRequest对象
        let xhr;
        if(window.XMLHttpRequest){
            xhr = new XMLHttpRequest();
        }else{
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }
        // 2 发送请求
        if(type == 'GET'){
            xhr.open('GET', url, true);
            xhr.send();
        }else if(type == 'POST'){
            xhr.open('POST', url, true);
            xhr.setRequsetHeader('Content-type', 'application/www-xxx-form-urlencoded');
            xhr.send();
        } 
        // 3 服务器响应
        // readyState
        // 0 (未初始化) or (请求还未初始化)
        // 1 (正在加载) or (已建立服务器链接)
        // 2 (加载成功) or (请求已接受)
        // 3 (交互) or (正在处理请求)
        // 4 (完成) or (请求已完成并且响应已准备好)
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    console.log('成功');
                    resolve(this.responseText);
                }else{
                    reject(new Error(this.statusText));
                }
            }
        }
    })
}
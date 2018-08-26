const express = require('express');
const app = express();

//当客户端以get方式请求/的时候
app.get('/', (req, res) => {
    res.send('hello blog');
})
app.listen(3000, err => {
    if (err == null) {
        console.log('服务器启动成功');
    }
})
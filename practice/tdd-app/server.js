const express = require('express'); // Express 모듈 불러오기

// Constants
const PORT = 5000; // Express 서버를 위한 포트 설정
// const HOST = '0.0.0.0'; // 호스트 지정

// App
const app = express(); // 새로운 Express 어플 생성
const productRoutes = require('./routes');

const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://cjh951114:qwer1234@cluster0.g1y6vym.mongodb.net/hello?retryWrites=true&w=majority', 
{
    useNewUrlParser: true,
}).then(()=> console.log('MongoDb Connected ...'))
.catch(err => console.log(err));


app.use(express.json()); // bodyParser를 대체할 express의 미들웨어 함수
app.use("/api/products", productRoutes);
app.get('/', (req, res) => { // '/'로 요청이 오면 Hello World를 전달
    res.send('Hello World');
})

// app.listen(PORT, HOST); // 해당 포트와 호스트에서 HTTP서버를 시작
app.listen(PORT);
// console.log(`Running on http://${HOST}:${PORT}`);



// Error Handler
app.use((error, req, res, next)=>{
    res.status(500).json({message: error.message});
})


module.exports = app;
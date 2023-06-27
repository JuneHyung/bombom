const express = require('express');
const path  = require('path');
const morgan = require('morgan');

const {sequelize} = require('./models');
const cors = require('cors');
const app = express();

const shopRoutes = require('./routes/shops');
const noticesRoutes = require('./routes/notices');
const menusRoutes = require('./routes/menus');
app.set('port', process.env.PORT || 3001);


// force를 true로하면 서버 실행마다 테이블을 재생성함.
sequelize.sync({force: false})
  .then(()=>{console.log('DB 연결 SUCCESS');})
  .catch((e)=>{console.error(err)})

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// cors
app.use(cors({origin: '*'}))

app.use("/api/shops", shopRoutes);
app.use("/api/notices", noticesRoutes);
app.use("/api/menus", menusRoutes);



app.use((req, res, next)=>{
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`)
  error.status = 404;
  next(error)
})

app.use((err, req, res, next)=> {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  // res.render('error');
});

app.listen(app.get('port'), () =>{
  console.log(app.get('port'), '번 포트에서 대기 중');
})




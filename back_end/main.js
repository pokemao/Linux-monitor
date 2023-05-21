// 导入第三方库mysql2，用于连接数据库
const mysql = require("mysql2");

const connections = mysql.createPool({
  host: "10.0.0.155",
  port: "3306",
  database: "software_test",
  user: "root",
  password: "12345678",
});

// 判断数据库是否连接成功
connections.getConnection((err, connection) => {
  if (err) {
    console.log(err);
  } else {
    connection.connect((err) => {
      if (err) {
        console.log("连接失败", err);
      } else {
        console.log("连接成功");
      }
    });
  }
});

const db = connections.promise();

/** -------------------------------------------------------------------- */

// 引入koa库
const Koa = require("koa");
// 引用第三方库——koa-bodyparser，用于解析json数据
const bodyParser = require("koa-bodyparser");
// 创建koa实例
const app = new Koa();
// 通过bodyparser实现解析json格式数据
app.use(bodyParser());
// 引入koa-router这个库
const Router = require("koa-router");
const mainRouter = new Router({ prefix: "/main" });
mainRouter.get("/tcpconnlat", async (ctx, next) => {
  let { start, end } = ctx.query;
  start = new Date(start);
  end = new Date(end);
  const statement = `SELECT * FROM tcpconnlat WHERE createAt BETWEEN ? AND ?;`;
  const [result] = await db.execute(statement, [start, end]);
  ctx.body = {
    result,
  };
});
mainRouter.get("/tcpretrans", async (ctx, next) => {
  let { start, end } = ctx.query;
  start = new Date(start);
  end = new Date(end);
  const statement = `SELECT * FROM tcpretrans WHERE createAt BETWEEN ? AND ?;`;
  const [result] = await db.execute(statement, [start, end]);
  ctx.body = {
    result,
  };
});
mainRouter.get("/tcprtt", async (ctx, next) => {
  // 获取params
  let { start, end } = ctx.query;
  // start = new Date(start).toLocaleString("en-GB");
  // end = new Date(end).toLocaleString("en-GB");
  start = new Date(start);
  end = new Date(end);
  const statement = `SELECT * FROM tcprtt WHERE createAt BETWEEN ? AND ?;`;
  const [result] = await db.execute(statement, [start, end]);
  ctx.body = {
    result,
  };
});
mainRouter.get("/biolatency", async (ctx, next) => {
  let { start, end } = ctx.query;
  start = new Date(start);
  end = new Date(end);
  const statement = `SELECT * FROM biolatency WHERE createAt BETWEEN ? AND ? ORDER BY latency ASC;`;
  const [result] = await db.execute(statement, [start, end]);
  ctx.body = {
    result,
  };
});
app.use(mainRouter.routes());
// 启动服务器
// 将后端端口号写在配置文件中
app.listen(3333, () => {
  console.log(`服务器在3333启动成功~`);
});

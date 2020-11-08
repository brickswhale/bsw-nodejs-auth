const express = require('express');

const app = express();

const HOST = "127.0.0.1";
const PORT = "3000";

app.get('/test',function(req,res,next){
  return res.send("hahahahah")
})
app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://${HOST}:${PORT}`)
)
const express = require('express');
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 5000;


const app = express();

app.use(cors());

const user = {
  name: "amenchrist",
  class: "developer",
  level: 1
}

app.get('/',(req, res) => res.send("Server connected Digital Evangelism"));
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

/*
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
*/
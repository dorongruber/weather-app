const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist','weather-app')));


app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'dist','weather-app','index.html'));
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('listening at port ' + PORT));

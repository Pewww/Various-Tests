router.route('/').get((req,res)=>{
  res.render('index',{fs : fs, youtube : youtube, path : __dirname});
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
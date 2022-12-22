const express = require('express') ;
const bodyParser = require('body-parser') ;


const app = express();

app.use(bodyParser.urlencoded({extended : true}))

app.get('/' , (req , res)=>{
    res.sendFile(__dirname + '/index.html')
} )

app.post('/' , (req , res)=>{
   var n1 = Number(req.body.n1) ;
   var n2 = Number(req.body.n2)   ;
   var result = n1 + n2 ; 
   res.send("The Result of your Calculations are : " + result ) ;
} )


app.listen(8080 , ()=>{
    console.log('Server is listening on PORT 8080');
})
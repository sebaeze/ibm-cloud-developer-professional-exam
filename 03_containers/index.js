/*
*
*/
const express         = require("express")  ;
const bodyParser      = require("body-parser") ;
const cors            = require("cors") ;
const path            = require("path") ;
//
const port = process.env.PORT || 3000 ;
const app  = express() ;
//
app.use( bodyParser.json() ) ;
app.use( cors() ) ;
//
const opciones = {
    dotfiles: 'ignore',etag: false,extensions: [],index: false, maxAge: '1d' ,redirect: false,
    setHeaders: function (res, path, stat) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', '*');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
        res.header("Access-Control-Allow-Credentials", true);
        res.header("credentials","same-origin") ;
        res.set('Connection', 'Keep-Alive') ;
      }
} ;
//
app.use("*",(req,res)=>{
     res.json({msg:"hello world"}) ;
}) ;
//
const server = app.listen( port , ()=>{
    const infoServer = server.address() ;
    console.log("...infoServer: ",infoServer,";") ;
    console.log(`...server ejecutandose en http://localhost:${port}`)
}) ;
//
import express from "express"
import {crud_estudiantes} from "./controlador/crud_estudiantes.js"
const app_e = express()
app_e.use(express.urlencoded({extended:false}))
app_e.use(express.json())
app_e.use(express.static('./vista'))
app_e.use(express.static('./controlador'))
app_e.use(express.static('./modelo'))
//motor de vistas
app_e.set('views','./vista')
app_e.set('views engine','ejs')
app_e.listen('5050',function(){
    console.log('Aplicacion Iniciada : http://localhost:5050/')
})
app_e.get('/',crud_estudiantes.leer)
app_e.post('/crud_c',crud_estudiantes.cud)
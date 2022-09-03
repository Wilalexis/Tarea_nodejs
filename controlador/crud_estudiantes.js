import express from "express"
import { conectar } from "../modelo/db_conectar.js"
var crud_estudiantes=({})
crud_estudiantes.leer = (req,res) => {
    conectar.query('SELECT id_estudiante,carne,nombres, apellidos,direccion,telefono,correo_electronico,id_tipo_sangre, date_format(fecha_nacimiento, "%d/%m/%Y") as fecha_nacimiento FROM estudiantes;',(error,results)=>{
        if(error){
            throw error
        }else{
            res.render('estudiantes/index.ejs',{resultado:results})
        }
    })
}
crud_estudiantes.cud = (req,res) =>{
    const btn_crear = req.body.btn_crear
    const btn_modificar = req.body.btn_modificar
    const btn_eliminar = req.body.btn_eliminar
    const id_estudiante = req.body.id_estudiante
    const carne = req.body.carne
    const nombres = req.body.nombres
    const apellidos = req.body.apellidos
    const direccion = req.body.direccion
    const telefono = req.body.telefono
    const correo_electronico = req.body.correo_electronico
    const id_tipo_sangre = req.body.id_tipo_sangre
    const fecha_nacimiento = req.body.fecha_nacimiento
    if (btn_crear){
        conectar.query('INSERT INTO estudiantes set ?',{carne:carne,nombres:nombres,apellidos:apellidos,direccion:direccion,telefono:telefono,correo_electronico:correo_electronico,id_tipo_sangre:id_tipo_sangre,fecha_nacimiento:fecha_nacimiento},(error,results)=>{
            if(error){
                console.log(error)
            }else{
                res.redirect('/')
            }
        })
    }
    if(btn_modificar){
        conectar.query('update estudiantes set ? where id_estudiante = ?',[{carne:carne,nombres:nombres,apellidos:apellidos,direccion:direccion,telefono:telefono,correo_electronico:correo_electronico,id_tipo_sangre:id_tipo_sangre,fecha_nacimiento:fecha_nacimiento},id_estudiante],(error,results)=>{
            if(error){
                console.log(error)
            }else{
                res.redirect('/')
            }
        })
    }
    if (btn_eliminar){
        conectar.query('delete from estudiantes where id_estudiante = ?',[id_estudiante],(error,results)=>{
            if(error){
                console.log(error)
            }else{
                res.redirect('/')
            }
        })
    }
}
export{crud_estudiantes}

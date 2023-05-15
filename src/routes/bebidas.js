// const { Router } = require('express');
// const axios = require ('axios')
// const {Producto}= require ('../db')
// const router = Router();
// const getDataBase = async()=>{
//     return await Producto.findAll() 
// }
// router.get('/Api', async (req, res, next) => {
    
//     try { 
//      const bebidasInfo = await axios.get(`https://bebidas-efc61-default-rtdb.firebaseio.com/results.json`)   
//      const allBebidas = await bebidasInfo.data.map(e => { return e })
//      const allBebidasDb = await allBebidas.map(e => {Producto.create(e)})
   
//       res.json(allBebidas)
//     } catch (error) {
//        next(error)
//     } 
//   });



//   router.get('/', async (req, res, next) => {
//      try {
         
//       const {nombre} = req.query
//     const dataInfo = await getDataBase()
//     if(nombre){
//         const dataName = await dataInfo.filter(e=> e.nombre.toLowerCase().includes(nombre.toLowerCase()))
//         if(!dataName.length){
//             return res.status(400).send('No se encontro ese producto')
//         }
//         res.json(dataName)
//     }else{
//         res.json(dataInfo)
//     }

//       } catch (error) {
//          next(error)
//      }
//   })
//   module.exports = router

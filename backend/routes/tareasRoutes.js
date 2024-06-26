const express =require('express')
const router =  express.Router()
const {getTareas, createTareas, updateTareas, deleteTareas } = require( '../controllers/tareasController')


router.get('/',getTareas)

router.post('/', createTareas)
    

router.put('/:id',updateTareas)
    

router.delete('/:id',deleteTareas)
    

module.exports =router
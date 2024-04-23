const uuid = require('uuid')
const path = require('path')
const {Book} = require('../models/models')
const ApiError = require('../error/apiError')
class BookController {
    async create(req,res, next){
        try {
            const {name, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const book = await Book.create({name, brandId, typeId, info, img: fileName}) // info добавил
            return res.json(book)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }

    }
    async getAll(req,res){

    }
    async getOne(req,res){

    }

}

module.exports = new BookController()
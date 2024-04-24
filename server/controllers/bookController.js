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
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page* limit - limit
        let books;
        if (!brandId && !typeId){
            books = await Book.findAll({limit, offset})
        }
        if (brandId && !typeId){
            books = await Book.findAll({where:{brandId},limit, offset})
        }
        if (!brandId && typeId){
            books = await Book.findAll({where:{typeId},limit, offset})
        }
        if (brandId && typeId){
            books = await Book.findAll({where:{brandId, typeId},limit, offset})
        }
        return res.json(books)
    }
    async getOne(req,res){

    }

}

module.exports = new BookController()
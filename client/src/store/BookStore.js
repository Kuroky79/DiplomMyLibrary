import {makeAutoObservable} from "mobx";

export default class BookStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Инженерная литература'},
            {id:2, name: 'Математическая литература'}
        ]
        this._brands = [
            {id: 1, name: 'Инженерия'},
            {id:2, name: 'Высшая математика'}
        ]
        this._books = [
            {id: 1, name: 'Проектирование установок ракетного вооружения', rating: 5, img: 'https://www.mashin.ru/images/cms/thumbs/09ea4b145079ada84852002d3e65badd9b5964a9/978-5-217-03435-2_137_auto_jpg.jpg'},
            {id: 2, name: 'Стали и сплавы энергетического оборудования', rating: 5, img: 'https://www.mashin.ru/images/cms/thumbs/09ea4b145079ada84852002d3e65badd9b5964a9/978-5-217-03446-8_137_auto_jpg.jpg'},
            {id: 3, name: 'Энциклопедия "Машиностроение"', rating: 5, img: 'https://www.mashin.ru/images/cms/thumbs/09ea4b145079ada84852002d3e65badd9b5964a9/1_137_auto_jpg.jpg'},
        ]
        makeAutoObservable(this)
    }
    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setBooks(books){
        this._books = books
    }
    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get books(){
        return this._books
    }
}
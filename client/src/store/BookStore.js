import {makeAutoObservable} from "mobx";

export default class BookStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Диссертации и докторские диссертации'},
            {id:2, name: 'Научные статьи'},
            {id: 3, name: 'Техническая документация'},
            {id:4, name: 'Научно-популярная литература'},
            {id: 5, name: 'Методические пособия и руководства'}
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
        this._selectedType = {}
        this._selectedBrand = {}
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
    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
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
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
}
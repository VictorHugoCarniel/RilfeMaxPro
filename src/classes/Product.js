export class Product{
    constructor(id, name, marca, price, description, imageUrl){
        this.id = id; //cria id Unico para cada elemento e autoincremento
        this.name = name;
        this.marca = marca;
        this.description = description;
        this.price = parseFloat(price.replace(',', '.'));
        //transforma o elemento para texto e replica o que for virgula para .
        this.imageUrl = imageUrl;
    }
}
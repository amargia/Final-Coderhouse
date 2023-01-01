import mongoose from "mongoose";
import "../config/config.js";

// try {
//     const url = config.mongoUrl;
//     mongoose.connect(url)
//     console.log("Conectado a MongoDB");
//     } catch (error) {
//         console.log("Error al conectar a MongoDB");
// }

class ContenedorMongoDB {
    constructor(model) {
        this.model = model;
    }

    async list() {
        try {
            const array = await this.model.find();
            return array;
        } catch (error) {
            throw new Error(`No se pudo leer el archivo. Error: ${error}`);
        }
    }

    async getById(id) {
        try {
            const item = await this.model.findOne({ _id: id });
            return item;
        } catch (error) {
            throw new Error(`No se pudo leer el archivo. Error: ${error}`);
        }
    }

    async getProductById(id) {
        try {
            const item = await this.model.findOne({ _id: id });
            return item;
        } catch (error) {
            throw new Error(`No se pudo leer el producto. Error: ${error}`);
        }
    }

    async save(obj) {
        try { 
            let timestamp = new Date().getTime();  
            obj.timestamp = timestamp    
            const newObj = new this.model(obj);
            const data = await newObj.save();  
            return data;
          } catch (error) {
            console.log(error);
          }
    }

    async deleteById(id) {
        try {
            const item = await this.model.findOneAndDelete({ id: id });
            return `Elemento ${item} eliminado`;
        } catch (error) {
            throw new Error(`No se pudo borrar el archivo. Error: ${error}`);
        }
    }

    async changeById(id, item) {
        try {
            let timestamp = new Date().getTime();
            item.timestamp = timestamp
            const newItem = await this.model.findOneAndUpdate({ _id: id }, item);
            return `Elemento actualizado correctamente: ${newItem}`;
        } catch (error) {
            throw new Error(`No se pudo actualizar el archivo. Error: ${error}`);
        }
    }
}

export default ContenedorMongoDB;
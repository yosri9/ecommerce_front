import axios from "axios";

export default abstract class Service {


    create(model: Model, path: string) : any {
        axios.post(path)
            .then(response => {
                return response.data as Model
            }, error => {
                console.log(error);
            });
    }

    find(path: string) : any {
        axios.get(path)
            .then(response => {
                return response.data as Model[]
            }, error => {
                console.log(error);
            });

    }

    findOne(id: number, path: string): any {

        axios.get(path)
            .then(response => {
                return response.data as  Model[]
            }, error => {
                console.log(error);
            });


    }

    update(model: Model, path: string): any{

        axios.put(path)
            .then(response => {
                return response.data as Model
            }, error => {
                console.log(error);
            });


    }

    delete(id: number, path: string): any {
        axios.delete(path)
            .then(response => {
                return response.data as Model
            }, error => {
                console.log(error);
            });
    }
}


import axios from "axios";
import Model from "./Model";
import {User} from "@/Model/user";

export default abstract class Service {
     token = localStorage.getItem("token");

     config = {
        headers: {Authorization: `Bearer ${this.token}`,

        }
    };

    create(model?: Model , url?: string): any {
        console.log(model)
        console.log(model)


        const token = localStorage.getItem("token");

        const config = {
            headers: {Authorization: `Bearer ${token}`, },
        }
        if (url != null) {
            console.log("enter1")
            console.log(JSON.stringify(model))

            axios.post<Model>(url, model, config,)
                .then(response => {
                    console.log(response.data)
                    return response.data
                }, error => {
                    console.log("enter2")
                    console.log(error);
                });
        }
        console.log("enter3")

    }

    find(url: string): any {
        let data
        let model: Model;



          return axios.get<Model>(url, this.config)
            .then(function(response) {

                    data = response.data
                    return data

                }



            , error => {
                console.log(error);
            });

    }

    findOne(id: number, url: string): any {
        const token = localStorage.getItem("token");

        const config = {
            headers: {Authorization: `Bearer ${token}`}
        };
        axios.get(url, config)
            .then(response => {
                return response.data
            }, error => {
                console.log(error);
            });

    }

    async update(model: Model, url: string): Promise<any> {
        const token = localStorage.getItem("token");

        const config = {
            headers: {Authorization: `Bearer ${token}`}
        };


           await axios.put<Model>(url,model, config, )
                .then(response => {
                    return response.data
                }, error => {
                    console.log(error);
                });


        }

    delete(id: number, url: string): any {
        axios.delete(url)
            .then(response => {
                return response.data as Model
            }, error => {
                console.log(error);
            });
    }
}


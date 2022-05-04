import Service from "@/contracts/Service";
import {User} from "@/Model/user";
import ApiRouter from "@/services/Api/api-router";
import {Order} from "@/Model/order";
import Model from "@/contracts/Model";
import axios from "axios";
import {faEyeDropperEmpty} from "@fortawesome/free-solid-svg-icons";
import {UserApi} from "@/services/Api/user-api";

export class ImageApi  {
    async create(imagefile: File): Promise<any> {

        // #avatar-upload
       const formData = new FormData();


        const token = localStorage.getItem("token");
        console.log(token)

        const config = {
            headers: {Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data'}
        };


        // @ts-ignore
        formData.append("files", imagefile.files[0]);
        const response = await axios.post(ApiRouter.IMAGE_UPLOAD, formData,
            config,
        )


        console.log(response.data)


       return response.data

    }

    delete(id: number, url = ApiRouter.USERS): any {

    }


    async findOne(id: number, url = ApiRouter.IMAGE(id)): Promise<any> {
        const token = localStorage.getItem("token");
        console.log(token)

        const config = {
            headers: {Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data'}
        };


        const response = await axios.get(url,
            config,
        )

        return response.data.url


    }




}

export default abstract class Model {
    id?: number


     toJson= () =>{

    return JSON.stringify(this)
}
    fromJson(json:any): any{
      return   JSON.parse(JSON.stringify(json))

    }




}


import axios from "axios"

export default class ProductService{
     getProducts(){
         return axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
     }

     getByProductName(productName){
        return axios.get("https://jsonplaceholder.typicode.com/comments?postId=1"+ productName)
    }
}
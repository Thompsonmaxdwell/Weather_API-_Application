export class Http{
    static httpRequest(url){

         return new Promise((resolve, reject)=>{

             const http = new XMLHttpRequest();
             http.open('GET', url,true);

            http.onreadystatechange = function(){
                if(http.readyState == XMLHttpRequest.DONE && http.status == 200){

                    const response_txt = JSON.parse(this.responseText)
                    resolve(response_txt)

                }else if(http.readyState == XMLHttpRequest.DONE){
                    reject('Something Went Wrong')
                }
            }

            http.send()
         })
    }
}
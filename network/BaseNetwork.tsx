
export default class BaseNetwork{
    baseUrl: string;
    defaultUrl: string;
    finalUrl: string;
    modifiers:{[k: string]: any} = {};
    page: number;
    apiKey : string  ///this should be in a env file 

    
    constructor(){
        this.baseUrl = "https://newsapi.org/v2/" 
        this.page = 1;
        this.apiKey =  "apiKey=0f7401ca2c194f07866f93c4911370a4";
        this.defaultUrl = this.baseUrl + "top-headlines?country=us&"  + this.apiKey,
        this.modifiers = {} 
    }

    buildFetch = async () => {
        if(Object.keys(this.modifiers).length == 0){
            this.finalUrl = this.defaultUrl + "&page="+ this.page;
            return await this.fetchApi()
        }
        else{
            this.finalUrl = this.baseUrl +  "everything?";
            let flag = 0;
      
            for (let key in this.modifiers){
        
                if(flag != 0){
                    this.finalUrl = this.finalUrl + "&";
                }

                this.finalUrl = this.finalUrl + key + "=" +  this.modifiers[key];
                flag += 1;
            }
            
            this.finalUrl = this.finalUrl + "&" + this.apiKey;

            return await this.fetchApi()

        }
    }
    
    fetchApi = async () => {
       let data = await fetch(this.finalUrl);
       let jsonData = await data.json();
       console.log(jsonData);
       return jsonData
    }
}
export class AppSettings {
    public apiUrl: string; 
    public wcfUrl: string; 
    public modalConfig=  {
        animated: true,
        keyboard: true,
        backdrop: true,
        ignoreBackdropClick: false
      };
    constructor() {
   
        this.apiUrl = "https://cors-anywhere.herokuapp.com/https://github.com/ganesh190589/hibiscus/tree/master/src/assets/jsonfiles/menu.json";
    }
}
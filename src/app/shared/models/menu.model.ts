export class Menu
{
 id:number;
 name:string;
 order:number;
 routePath:string;
 menuItems:MenuItem[];
}

export class MenuItem
{
    id:number;
    name:string;
    order:number;
    routePath:string;
    menuid:number;
}
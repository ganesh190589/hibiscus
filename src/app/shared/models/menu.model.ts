export class Menu
{
 Id:number;
 Name:string;
 Order:number;
 RoutePath:string;
 MenuItems:MenuItem[];
}

export class MenuItem
{
    Id:number;
    Name:string;
    Order:number;
    RoutePath:string;
    MenuId:number;
}
export class Menu
{
 MenuId:number;
 Name:string;
 Order:number;
 RoutePath:string;
 MenuItems:MenuItem[];
}

export class MenuItem
{
    MenuItemId:number;
    Name:string;
    Order:number;
    RoutePath:string;
    MenuId:number;
    Position:number;
}
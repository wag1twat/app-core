declare const orders: {
    readonly ASC: {
        "number:number": (l: number, r: number) => number;
        "string:string": (l: string, r: string) => number;
        "boolean:boolean": (l: boolean, r: boolean) => 1 | -1;
    } & {
        readonly "null:number": (_l: null, _r: number) => number;
        readonly "number:null": (_l: number, _r: null) => number;
        readonly "null:string": (_l: null, _r: string) => number;
        readonly "string:null": (_l: string, _r: null) => number;
        readonly "null:boolean": (_l: null, _r: boolean) => number;
        readonly "boolean:null": (_l: boolean, _r: null) => number;
    };
    readonly DESC: {
        "number:number": (l: number, r: number) => number;
        "string:string": (l: string, r: string) => number;
        "boolean:boolean": (l: boolean, r: boolean) => 1 | -1;
    } & {
        readonly "null:number": (_l: null, _r: number) => number;
        readonly "number:null": (_l: number, _r: null) => number;
        readonly "null:string": (_l: null, _r: string) => number;
        readonly "string:null": (_l: string, _r: null) => number;
        readonly "null:boolean": (_l: null, _r: boolean) => number;
        readonly "boolean:null": (_l: boolean, _r: null) => number;
    };
};
type OrdersKeys = keyof (typeof orders)['ASC'] | keyof (typeof orders)['DESC'];
export type { OrdersKeys };
export default orders;

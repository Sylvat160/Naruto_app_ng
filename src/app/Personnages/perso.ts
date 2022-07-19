export class Perso {


    id: number;
    name: string;
    technique:string;
    cheveux:string;
    clan:string;
    picture:string;
    chakra:Array<string>;
    matricule:number;
    created:Date;
    

    constructor(
        name:string = 'Entrez un nom ',
        technique:string = 'Son combo',
        cheveux:string = 'Couleur',
        clan:string = 'Appartenance',
        picture:string = 'Entrez une URL',
        chakra:Array<string> = ['yoton'],
        matricule:number = 0,
        created:Date = new Date()
    ){
        this.name = name;
        this.technique = technique;
        this.cheveux =cheveux;
        this.clan = clan;
        this.picture = picture;
        this.chakra = chakra;
        this.matricule = matricule;
        this.created = created;
    }





    // id: number;
    // name: string;
    // technique:string;
    // cheveux:string;
    // clan:string;
    // picture:string;
    // chakra:Array<string>;
    // matricule:number;
    // created:Date;
}
import { EstablishmentType } from "./establishment-type";


export interface IEstablishment{
    id: string
    type: EstablishmentType
    name: string
    address: string;
    description: string;
    idSponsor: number; 
    tag: string;
    userId: number;
    createdAt?: string
    updatedAt?: string
}

export class Establishment{
    private props: IEstablishment

    get id(){
        return this.props.id
    }

    get type(){
        return this.props.type
    }

    get name(){
        return this.props.name
    }

    get address(){
        return this.props.address
    }

    get description(){
        return this.props.description
    }





    constructor(props: IEstablishment){
        this.props = props
        this.props.createdAt = new Date().toISOString()
        this.props.updatedAt = new Date().toISOString()
    }
}

export interface IEstablishmentType {
    id: string
    name: string
    createdAt?: string
    updatedAt?: string
}

export class EstablishmentType{

    get id(){
        return this.props.id
    }

    get name(){
        return this.props.name
    }

    private props: IEstablishmentType
    constructor(props: IEstablishmentType){
        this.props = props
        this.props.createdAt = new Date().toISOString()
        this.props.updatedAt = new Date().toISOString()
    }
}
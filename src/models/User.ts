import { EstablishmentImage } from "../_types/core/establishment-image"

export interface IUser{
    id: string
    name: string
    email: string
    images: EstablishmentImage
    globalScore: number
    weekScore: number
    created_at?: string 
    updated_at?: string
}

export class User{
    private props: IUser

    get id(){
        return this.props.id
    }

    get name(){
        return this.props.name
    }

    get email(){
        return this.props.email
    }

    get images(){
        return this.props.images
    }

    get globalScore(){
        return this.props.globalScore
    }

    get weekScore(){
        return this.props.weekScore
    }

    get createdAt(){
        return this.props.created_at
    }

    get updatedAt(){
        return this.props.updated_at
    }

    constructor(props: IUser){
        this.props = props
        this.props.created_at = new Date().toISOString()
        this.props.updated_at = new Date().toISOString()
    }
}
export interface IRating{
    id: string
    stars: number
    review: string
    id_establishment: string
    id_user: string 
    created_at?: string
    updated_at?: string
}

export class Rating{
    private props: IRating
    constructor(props: IRating){
        this.props = props
        this.props.created_at = new Date().toISOString()
        this.props.updated_at = new Date().toISOString()
    }
}
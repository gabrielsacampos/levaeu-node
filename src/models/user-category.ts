export interface IUserCategory {
    id: string  
    checkpoint: number
    name: string
    created_at?: string
    updated_at?: string
}

export class UserCategory{
    private props: IUserCategory
    constructor(props: IUserCategory){
        this.props = props
        this.props.created_at = new Date().toISOString()
        this.props.updated_at = new Date().toISOString()
    }
}


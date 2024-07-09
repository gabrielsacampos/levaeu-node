import { Knex } from 'knex'
import { IEstablishment } from '../models/Establishment'
import { IRating } from '../models/Rating'
import { IUserCategory } from '../models/user-category'

declare module 'knex/types/tables' {
    export interface Tables {
        establishment_types: {
            id: string
            name: string
            created_at: string
            updated_at: string
        }
        establishments: {
            id: string
            name: string
            address: string
            description: string
            id_type: string
            id_sponsor: string
            tag: string
            created_at: string
            updated_at: string
        }
        establishment_images: {
            id: string
            id_establishment: string
            img_description: string
            image_url: string
            cover: boolean
            created_at: string
            updated_at: string
        }
        users: {
            id: string
            name: string
            email: string
            image_url: string
            global_score: number
            week_score: number
            created_at: string
            updated_at: string
        }
        ratings: {
            id: string
            stars: number
            review: string
            id_establishment: string
            id_user: string
            created_at: string
            updated_at: string
        }
        user_categories: {
            id: string
            name: string
            created_at: string
            updated_at: string
        }
    }
}
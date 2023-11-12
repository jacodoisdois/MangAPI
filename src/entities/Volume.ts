import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Manga } from "./Manga"

@Entity()
export class Volume {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    number: number

    @Column()
    language: string

    @Column()
    price_discounted: number
    
    @Column()
    current_price: number

    @Column()
    thereIsDiscount: boolean

    @Column()
    discountPercentual: number

    @ManyToOne(() => Manga, (manga) => manga.volumes)
    manga: Manga
}
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Volume } from "./Volume"

@Entity()
export class Manga {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string
    
    @OneToMany(() => Volume, (volume) => volume.manga, {
        nullable: true
    })
    volumes: Volume[]
}
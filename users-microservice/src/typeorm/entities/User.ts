import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Payment } from "./payment";

@Entity({ name: 'users' })
export class user {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false })
    username: string;

    @Column({ nullable: false })
    email: string;

    @Column({ nullable: false })
    displayName?: string;

    @OneToMany(() => Payment, payment => payment.user)
    @JoinColumn()
    payments: Payment[];

}
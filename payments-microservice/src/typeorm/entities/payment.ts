import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { user } from './User';
@Entity({ name: 'payments' })
export class Payment {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('float', { nullable: false })
    amount: number;

    @ManyToMany(() => user, user => user.payments)
    user: user;
}
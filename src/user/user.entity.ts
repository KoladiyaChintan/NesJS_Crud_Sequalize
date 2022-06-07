import { Column, DataType, Model, Sequelize, Table } from "sequelize-typescript";

@Table
export class User extends Model<User> {

    id: {
        autoIncrement: true,
        primaryKey: true
    }

    @Column({
        type: DataType.STRING
    })
    username: string;

    @Column({
        type: DataType.STRING
    })
    password: string;
}
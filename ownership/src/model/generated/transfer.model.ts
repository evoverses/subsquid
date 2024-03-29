import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Wallet} from "./wallet.model"
import {Token} from "./token.model"

@Entity_()
export class Transfer {
    constructor(props?: Partial<Transfer>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("int4", {nullable: false})
    block!: number

    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Column_("text", {nullable: false})
    txHash!: string

    @Index_()
    @ManyToOne_(() => Wallet, {nullable: true})
    from!: Wallet

    @Index_()
    @ManyToOne_(() => Wallet, {nullable: true})
    to!: Wallet

    @Index_()
    @ManyToOne_(() => Token, {nullable: true})
    token!: Token
}

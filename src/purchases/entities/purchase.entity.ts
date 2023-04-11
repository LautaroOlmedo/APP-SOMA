import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsInt,
  Min,
  Max,
  MinLength,
  MaxLength,
} from 'class-validator';

// ---------- ---------- ---------- ---------- ----------

import { BaseEntity } from '../../config/base.entity';
import { UserEntity } from '../../users/entities/user.entity';
import { PurchaseProductsEntity } from './purchase-product.entity';
import { paymentMethod, transactionStatus } from '../../constants/index';
import { ClientEntity } from '../../clients/entities/client.entity';

@Entity({ name: 'purchases' })
export class PurchaseEntity extends BaseEntity {
  @Column({
    type: 'enum',
    enum: transactionStatus,
    default: transactionStatus.PENDING,
  })
  status!: transactionStatus;

  @Column({ type: 'enum', enum: paymentMethod, default: paymentMethod.CASH })
  payment_method!: paymentMethod;

  // ---------- ---------- RELATIONS ---------- ----------

  @ManyToOne(() => UserEntity, (user) => user.purchases)
  @JoinColumn({ name: 'user_id' })
  user!: UserEntity;

  @ManyToOne(() => ClientEntity, (client) => client.purchases)
  @JoinColumn({ name: 'client_id' })
  client!: ClientEntity;

  @OneToMany(
    () => PurchaseProductsEntity,
    (purchaseProduct) => purchaseProduct.purchase,
  )
  purchaseProduct: PurchaseProductsEntity[];
}
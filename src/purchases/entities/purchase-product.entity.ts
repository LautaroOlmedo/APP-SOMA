import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

// ---------- ---------- ---------- ---------- ----------

import { BaseEntity } from '../../config/base.entity';
import { PurchaseEntity } from './purchase.entity';
import { ProductEntity } from '../../products/entities/product.entity';

@Entity({ name: 'purchase_products' })
export class PurchaseProductsEntity extends BaseEntity {
  @Column({ type: 'integer' })
  quantity_products!: number;

  @Column({ type: 'integer' })
  total_price!: number;

  // ---------- ---------- RELATIONS ---------- ----------

  @ManyToOne(() => PurchaseEntity, (purchase) => purchase.purchaseProduct)
  purchase: PurchaseEntity;

  @ManyToOne(() => ProductEntity, (product) => product.purchaseProduct)
  @JoinColumn({ name: 'product_id' })
  product!: ProductEntity;
}

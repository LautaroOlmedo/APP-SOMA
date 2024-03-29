import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';

// ---------- ---------- ---------- ---------- ----------

import { BaseEntity } from '../../config/base.entity';
import { BrandEntity } from '../../brands/entities/brand.entity';
import { StoreWalletsEntity } from '../../stores/entities/store-wallets.entity';

@Entity({ name: 'wallets' })
export class WalletEntity extends BaseEntity {
  @Column()
  walletName: string;

  @Column({ type: 'float' })
  availableBalance: number;

  // ---------- ---------- RELATIONS ---------- ----------

  @OneToMany(() => StoreWalletsEntity, (storesWallets) => storesWallets.wallet)
  storesIncludes: StoreWalletsEntity[];

  @ManyToOne(() => BrandEntity, (brand) => brand.users)
  @JoinColumn({ name: 'brand_id' })
  brand?: BrandEntity;
}

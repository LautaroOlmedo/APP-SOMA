import { Column, Entity, OneToMany } from 'typeorm';

// ---------- ---------- ---------- ---------- ----------

import { BaseEntity } from '../../config/base.entity';
import { IBrand } from '../../interfaces/brand.interface';
import { UserEntity } from 'src/users/entities/user.entity';
import { StoreEntity } from 'src/stores/entities/store.entity';

@Entity({ name: 'brands' })
export class BrandEntity extends BaseEntity implements IBrand {
  @Column({ unique: true })
  name: string;

  @Column()
  webSite: string;

  @Column()
  image: string;

  // ---------- ---------- RELATIONS ---------- ----------
  @OneToMany(() => UserEntity, (users) => users.brand)
  users?: UserEntity[];

  @OneToMany(() => StoreEntity, (stores) => stores.brand)
  stores?: StoreEntity[];
}

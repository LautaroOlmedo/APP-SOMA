import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

// ---------- ---------- ---------- ---------- ----------

import { BaseEntity } from '../../config/base.entity';
import { IStore } from '../../interfaces/store.interface';
import { StoreUsersEntity } from './store-users.entity';
import { BrandEntity } from '../../brands/entities/brand.entity';

import { StoreEmailsEntity } from '../../emails/entities/store-emails.entity';
import { StoreClientsEntity } from './store-clients.entity';

@Entity({ name: 'stores' })
export class StoreEntity extends BaseEntity implements IStore {
  @Column()
  storeName: string;

  //@Column()
  // Sucursal? Cconsultar con Nara

  // ---------- ---------- RELATIONS ---------- ----------
  @OneToMany(() => StoreUsersEntity, (storesUsers) => storesUsers.store)
  usersIncludes: StoreUsersEntity[];

  @OneToMany(() => StoreClientsEntity, (storesClients) => storesClients.store)
  clientsIncludes: StoreClientsEntity[];

  @OneToMany(() => StoreEmailsEntity, (emails) => emails.store)
  emails?: StoreEmailsEntity[];

  /*@ManyToOne(() => StoreDirectionsEntity, (direction) => direction.stores)
  @JoinColumn({ name: 'direction_id' })
  direction?: StoreDirectionsEntity;*/

  @ManyToOne(() => BrandEntity, (brand) => brand.stores)
  @JoinColumn({ name: 'brand_id' })
  brand!: BrandEntity;
}

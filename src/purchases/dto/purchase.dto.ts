import {
  IsBoolean,
  isEnum,
  IsEnum,
  isNotEmpty,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { Expose } from 'class-transformer';
import { UserEntity } from '../../users/entities/user.entity';
import { PurchaseProductsEntity } from '../entities/purchase-product.entity';
import { ClientEntity } from '../../clients/entities/client.entity';
import { paymentMethod, transactionStatus } from '../../constants';
import { StoreEntity } from 'src/stores/entities/store.entity';

// ---------- ---------- ---------- ---------- ----------

export class PurchaseDTO {
  @IsNotEmpty()
  @IsEnum(transactionStatus)
  status: transactionStatus;

  @IsNotEmpty()
  @IsEnum(paymentMethod)
  paymentMethod: paymentMethod;

  @Expose()
  user: UserEntity;

  @Expose()
  client: ClientEntity;

  @Expose()
  purchaseProduct: PurchaseProductsEntity;

  @Expose()
  store: StoreEntity;
}

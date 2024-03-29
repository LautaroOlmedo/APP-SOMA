import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// ---------- ---------- ---------- ---------- ----------

import { StoreDirectionsController } from './controllers/store-directions.controller';
import { UserDirectionsController } from './controllers/user-directions.controller';
import { UserEntity } from '.././users/entities/user.entity';
import { DepartmentEntity } from '.././departments/entities/department.entity';
import { ClientEntity } from '.././clients/entities/client.entity';
import { DirectionsEntity } from './entities/directions.entity';
import { DirectionsService } from './services/directions.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      DirectionsEntity,
      UserEntity,
      ClientEntity,
      DepartmentEntity,
    ]),
  ],
  controllers: [StoreDirectionsController],
  providers: [DirectionsService],
  exports: [TypeOrmModule, DirectionsService],
})
export class DirectionsModule {}

import { SetMetadata } from '@nestjs/common';

// ---------- ---------- ---------- ---------- ----------

import { ROLES } from 'src/constants';
import { ADMIN_KEY } from 'src/constants/key-decorators';

export const AdminAcces = () => SetMetadata(ADMIN_KEY, ROLES.ADMIN);

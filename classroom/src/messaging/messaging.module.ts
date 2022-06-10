import { Module } from '@nestjs/common';

import { PurchaseController } from './controllers/purchase.controller';

import { DatabaseModule } from '../database/database.module';

import { CoursesService } from '../services/courses.service';
import { EnrollmentsService } from '../services/enrollments.service';
import { StudentsService } from '../services/students.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PurchaseController],
  providers: [StudentsService, CoursesService, EnrollmentsService],
})
export class MessagingModule {}

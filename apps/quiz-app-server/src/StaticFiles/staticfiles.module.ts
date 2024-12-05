import { Module } from "@nestjs/common";
import { StaticFilesService } from "./staticfiles.service";
import { StaticFilesController } from "./staticfiles.controller";
import { StaticFilesResolver } from "./staticfiles.resolver";

@Module({
  controllers: [StaticFilesController],
  providers: [StaticFilesService, StaticFilesResolver],
  exports: [StaticFilesService],
})
export class StaticFilesModule {}

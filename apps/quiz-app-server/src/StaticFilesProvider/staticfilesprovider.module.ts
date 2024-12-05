import { Module } from "@nestjs/common";
import { StaticFilesProviderService } from "./staticfilesprovider.service";
import { StaticFilesProviderController } from "./staticfilesprovider.controller";
import { StaticFilesProviderResolver } from "./staticfilesprovider.resolver";

@Module({
  controllers: [StaticFilesProviderController],
  providers: [StaticFilesProviderService, StaticFilesProviderResolver],
  exports: [StaticFilesProviderService],
})
export class StaticFilesProviderModule {}

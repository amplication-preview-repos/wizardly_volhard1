import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { StaticFilesProviderService } from "./staticfilesprovider.service";

@swagger.ApiTags("staticFilesProviders")
@common.Controller("staticFilesProviders")
export class StaticFilesProviderController {
  constructor(protected readonly service: StaticFilesProviderService) {}
}

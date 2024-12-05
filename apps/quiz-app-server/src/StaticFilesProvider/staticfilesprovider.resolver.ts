import * as graphql from "@nestjs/graphql";
import { StaticFilesProviderService } from "./staticfilesprovider.service";

export class StaticFilesProviderResolver {
  constructor(protected readonly service: StaticFilesProviderService) {}
}

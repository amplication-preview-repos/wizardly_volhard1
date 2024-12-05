import * as graphql from "@nestjs/graphql";
import { StaticFilesService } from "./staticfiles.service";

export class StaticFilesResolver {
  constructor(protected readonly service: StaticFilesService) {}

  @graphql.Mutation(() => String)
  async ServeStaticFiles(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ServeStaticFiles(args);
  }
}

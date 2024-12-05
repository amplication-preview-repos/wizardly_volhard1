import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { StaticFilesService } from "./staticfiles.service";

@swagger.ApiTags("staticFiles")
@common.Controller("staticFiles")
export class StaticFilesController {
  constructor(protected readonly service: StaticFilesService) {}

  @common.Get("/static/*")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ServeStaticFiles(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ServeStaticFiles(body);
      }
}

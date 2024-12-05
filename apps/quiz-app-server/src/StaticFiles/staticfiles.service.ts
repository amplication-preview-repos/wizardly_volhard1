import { Injectable } from "@nestjs/common";

@Injectable()
export class StaticFilesService {
  constructor() {}
  async ServeStaticFiles(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}

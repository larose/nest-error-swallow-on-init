import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    throw new Error("This error can't be caught");
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
  Render,
} from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from "@nestjs/swagger";
import { firstValueFrom, of } from "rxjs";
import { TypeUtil } from "src/utils/type.util";
import { EncriptService } from "./encript.service";
import { SecretModel, SecreteDTO } from "./secret.model";
import { SecretService } from "./secret.service";

@ApiTags("secrets")
@Controller("secrets")
export class SecretController {
  constructor(
    private encriptService: EncriptService,
    private secretService: SecretService
  ) {}

  @Post()
  @ApiCreatedResponse({ description: "Secret Created" })
  @ApiBody({ type: SecreteDTO })
  public async create(@Body() secret: SecretModel): Promise<SecretModel> {
    try {
      if (!TypeUtil.hasText(secret.name)) throw console.error();
      const encriptedData: string = await firstValueFrom(
        this.encriptService.encript(secret.name)
      );
      secret.name = encriptedData;
      return firstValueFrom(this.secretService.create(secret));
    } catch (err) {
      throw new HttpException(
        'O campo "name" é obrigatório',
        HttpStatus.BAD_REQUEST
      );
    }
  }

  @Get("/:id")
  @ApiCreatedResponse({ description: "Secret finded" })
  public async retrieve(@Param("id") id: number): Promise<SecretModel> {
    try {
      const secret: SecretModel = await firstValueFrom(
        this.secretService.retrieve(id)
      );
      if (!TypeUtil.exists(secret)) throw console.error();
      const decriptedData = await firstValueFrom(
        this.encriptService.decrypt(secret.name)
      );
      delete secret.id;
      secret.name = decriptedData;
      return firstValueFrom(of(secret));
    } catch (err) {
      throw new HttpException(
        'O campo "name" é obrigatório',
        HttpStatus.BAD_REQUEST
      );
    }
  }

  @Get()
  @ApiOkResponse({ description: "Get all secrets" })
  public filter(): Promise<SecretModel[]> {
    return firstValueFrom(this.secretService.filter());
  }

  // Method to don't sleep heroku app
  @Cron(CronExpression.EVERY_MINUTE)
  @ApiBody({ type: SecretModel })
  handleCron() {
    return console.debug("time");
  }
}

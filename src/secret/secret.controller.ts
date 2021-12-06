import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from "@nestjs/swagger";
import { firstValueFrom, of } from "rxjs";
import { TypeUtil } from "src/utils/type.util";
import { decrypt, encrypt } from "./encrypt";
import { SecretModel, SecreteDTO } from "./secret.model";
import { SecretService } from "./secret.service";

@ApiTags("secrets")
@Controller("secrets")
export class SecretController {
  constructor(private secretService: SecretService) {}

  @Post()
  @ApiCreatedResponse({ description: "Secret Created" })
  @ApiBody({ type: SecreteDTO })
  public async create(@Body() secret: SecretModel): Promise<SecretModel> {
    try {
      if (!TypeUtil.hasText(secret.name)) throw console.error();
      let encryptedData: string = await firstValueFrom(encrypt(secret.name));
      secret.name = encryptedData;
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
      let decryptedData: string = await firstValueFrom(decrypt(secret.name));
      secret.name = decryptedData;
      delete secret.id;
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
  @Cron(CronExpression.EVERY_10_MINUTES)
  @ApiBody({ type: SecretModel })
  handleCron() {
    this.secretService.filter();
    return console.debug("time");
  }
}

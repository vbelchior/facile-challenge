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
import { firstValueFrom, of } from "rxjs";
import { TypeUtil } from "src/utils/type.util";
import { EncriptService } from "./encript.service";
import { SecretModel } from "./secret.model";
import { SecretService } from "./secret.service";

@Controller("secrets")
export class SecretController {
  constructor(
    private encriptService: EncriptService,
    private secretService: SecretService
  ) {}

  @Post()
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
  public filter(@Query("name") name?: string): Promise<SecretModel[]> {
    return firstValueFrom(this.secretService.filter(name));
  }
}

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { TypeUtil } from "src/utils/type.util";
import { Repository } from "typeorm";
import { SecretModel } from "./secret.model";

@Injectable()
export class SecretService {
  constructor(
    @InjectRepository(SecretModel)
    private secretRepository: Repository<SecretModel>
  ) {}

  public create(entity: SecretModel): Observable<SecretModel> {
    return from(this.secretRepository.save(new SecretModel(entity)));
  }

  public retrieve(id: number): Observable<SecretModel> {
    return from(this.secretRepository.findOne(id));
  }

  public filter(nameLike?: string): Observable<SecretModel[]> {
    const query: object = {};
    if (TypeUtil.exists(nameLike))
      query[SecretModel.NAME] = { $regex: nameLike, $options: "i" };
    return from(this.secretRepository.find({ where: query }));
  }
}

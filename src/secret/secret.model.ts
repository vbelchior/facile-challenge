import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('secrets')
export class SecretModel {
  public static readonly ID: keyof SecretModel = 'id';

  public static readonly NAME: keyof SecretModel = 'name';

  @PrimaryColumn('integer', { generated: 'increment' })
  public id: number;

  @Column('varchar', { length: 300 })
  public name: string;

  constructor(json?: any) {
    if (json != undefined && json != null) {
      const keys: Array<string> = Object.keys(json);
      if (keys.includes('id')) this.id = json.id ? String(json.id) : json.id;
      if (keys.includes('name'))
        this.name = json.name ? String(json.name) : json.name;
    }
  }
}

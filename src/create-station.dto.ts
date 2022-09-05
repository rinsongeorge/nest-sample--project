import { IsNumber, Length } from 'class-validator';

export class CreateStationRequest {
  @Length(1, 3)
  name: string;

  @Length(1, 2)
  qStarter: string;

  @IsNumber()
  maxCartQty: number;
}

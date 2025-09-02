import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class RecordFeeDto {
  @IsMongoId()
  scribbleId!: string;

  @IsString()
  @IsNotEmpty()
  txHash!: string;

  @IsString()
  @IsNotEmpty()
  amount!: string; // wei string

  @IsString()
  @IsNotEmpty()
  payer!: string; // address

  @IsString()
  @IsNotEmpty()
  recipient!: string; // address
}

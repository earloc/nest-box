
import { IsNotEmpty } from 'class-validator';
export class PostPingRequest {
  @IsNotEmpty()
  content: string;
}

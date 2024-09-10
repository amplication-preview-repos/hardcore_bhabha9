import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DerangementServiceBase } from "./base/derangement.service.base";

@Injectable()
export class DerangementService extends DerangementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

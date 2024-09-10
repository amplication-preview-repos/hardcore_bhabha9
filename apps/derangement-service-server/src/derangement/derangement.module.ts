import { Module } from "@nestjs/common";
import { DerangementModuleBase } from "./base/derangement.module.base";
import { DerangementService } from "./derangement.service";
import { DerangementController } from "./derangement.controller";
import { DerangementResolver } from "./derangement.resolver";

@Module({
  imports: [DerangementModuleBase],
  controllers: [DerangementController],
  providers: [DerangementService, DerangementResolver],
  exports: [DerangementService],
})
export class DerangementModule {}

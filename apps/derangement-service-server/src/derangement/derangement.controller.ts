import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DerangementService } from "./derangement.service";
import { DerangementControllerBase } from "./base/derangement.controller.base";

@swagger.ApiTags("derangements")
@common.Controller("derangements")
export class DerangementController extends DerangementControllerBase {
  constructor(protected readonly service: DerangementService) {
    super(service);
  }
}

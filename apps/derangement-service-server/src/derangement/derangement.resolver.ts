import * as graphql from "@nestjs/graphql";
import { DerangementResolverBase } from "./base/derangement.resolver.base";
import { Derangement } from "./base/Derangement";
import { DerangementService } from "./derangement.service";

@graphql.Resolver(() => Derangement)
export class DerangementResolver extends DerangementResolverBase {
  constructor(protected readonly service: DerangementService) {
    super(service);
  }
}

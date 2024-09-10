/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Derangement } from "./Derangement";
import { DerangementCountArgs } from "./DerangementCountArgs";
import { DerangementFindManyArgs } from "./DerangementFindManyArgs";
import { DerangementFindUniqueArgs } from "./DerangementFindUniqueArgs";
import { CreateDerangementArgs } from "./CreateDerangementArgs";
import { UpdateDerangementArgs } from "./UpdateDerangementArgs";
import { DeleteDerangementArgs } from "./DeleteDerangementArgs";
import { DerangementService } from "../derangement.service";
@graphql.Resolver(() => Derangement)
export class DerangementResolverBase {
  constructor(protected readonly service: DerangementService) {}

  async _derangementsMeta(
    @graphql.Args() args: DerangementCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Derangement])
  async derangements(
    @graphql.Args() args: DerangementFindManyArgs
  ): Promise<Derangement[]> {
    return this.service.derangements(args);
  }

  @graphql.Query(() => Derangement, { nullable: true })
  async derangement(
    @graphql.Args() args: DerangementFindUniqueArgs
  ): Promise<Derangement | null> {
    const result = await this.service.derangement(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Derangement)
  async createDerangement(
    @graphql.Args() args: CreateDerangementArgs
  ): Promise<Derangement> {
    return await this.service.createDerangement({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Derangement)
  async updateDerangement(
    @graphql.Args() args: UpdateDerangementArgs
  ): Promise<Derangement | null> {
    try {
      return await this.service.updateDerangement({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Derangement)
  async deleteDerangement(
    @graphql.Args() args: DeleteDerangementArgs
  ): Promise<Derangement | null> {
    try {
      return await this.service.deleteDerangement(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
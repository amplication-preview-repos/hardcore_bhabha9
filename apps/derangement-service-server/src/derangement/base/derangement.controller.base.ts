/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { DerangementService } from "../derangement.service";
import { DerangementCreateInput } from "./DerangementCreateInput";
import { Derangement } from "./Derangement";
import { DerangementFindManyArgs } from "./DerangementFindManyArgs";
import { DerangementWhereUniqueInput } from "./DerangementWhereUniqueInput";
import { DerangementUpdateInput } from "./DerangementUpdateInput";

export class DerangementControllerBase {
  constructor(protected readonly service: DerangementService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Derangement })
  async createDerangement(
    @common.Body() data: DerangementCreateInput
  ): Promise<Derangement> {
    return await this.service.createDerangement({
      data: data,
      select: {
        createdAt: true,
        executionTimeNs: true,
        id: true,
        method: true,
        result: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Derangement] })
  @ApiNestedQuery(DerangementFindManyArgs)
  async derangements(@common.Req() request: Request): Promise<Derangement[]> {
    const args = plainToClass(DerangementFindManyArgs, request.query);
    return this.service.derangements({
      ...args,
      select: {
        createdAt: true,
        executionTimeNs: true,
        id: true,
        method: true,
        result: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Derangement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async derangement(
    @common.Param() params: DerangementWhereUniqueInput
  ): Promise<Derangement | null> {
    const result = await this.service.derangement({
      where: params,
      select: {
        createdAt: true,
        executionTimeNs: true,
        id: true,
        method: true,
        result: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Derangement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDerangement(
    @common.Param() params: DerangementWhereUniqueInput,
    @common.Body() data: DerangementUpdateInput
  ): Promise<Derangement | null> {
    try {
      return await this.service.updateDerangement({
        where: params,
        data: data,
        select: {
          createdAt: true,
          executionTimeNs: true,
          id: true,
          method: true,
          result: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Derangement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDerangement(
    @common.Param() params: DerangementWhereUniqueInput
  ): Promise<Derangement | null> {
    try {
      return await this.service.deleteDerangement({
        where: params,
        select: {
          createdAt: true,
          executionTimeNs: true,
          id: true,
          method: true,
          result: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}

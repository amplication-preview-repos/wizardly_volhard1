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
import { QuizService } from "../quiz.service";
import { QuizCreateInput } from "./QuizCreateInput";
import { Quiz } from "./Quiz";
import { QuizFindManyArgs } from "./QuizFindManyArgs";
import { QuizWhereUniqueInput } from "./QuizWhereUniqueInput";
import { QuizUpdateInput } from "./QuizUpdateInput";
import { QuestionFindManyArgs } from "../../question/base/QuestionFindManyArgs";
import { Question } from "../../question/base/Question";
import { QuestionWhereUniqueInput } from "../../question/base/QuestionWhereUniqueInput";

export class QuizControllerBase {
  constructor(protected readonly service: QuizService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Quiz })
  async createQuiz(@common.Body() data: QuizCreateInput): Promise<Quiz> {
    return await this.service.createQuiz({
      data: data,
      select: {
        createdAt: true,
        createdBy: true,
        description: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Quiz] })
  @ApiNestedQuery(QuizFindManyArgs)
  async quizzes(@common.Req() request: Request): Promise<Quiz[]> {
    const args = plainToClass(QuizFindManyArgs, request.query);
    return this.service.quizzes({
      ...args,
      select: {
        createdAt: true,
        createdBy: true,
        description: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Quiz })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async quiz(
    @common.Param() params: QuizWhereUniqueInput
  ): Promise<Quiz | null> {
    const result = await this.service.quiz({
      where: params,
      select: {
        createdAt: true,
        createdBy: true,
        description: true,
        id: true,
        title: true,
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
  @swagger.ApiOkResponse({ type: Quiz })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateQuiz(
    @common.Param() params: QuizWhereUniqueInput,
    @common.Body() data: QuizUpdateInput
  ): Promise<Quiz | null> {
    try {
      return await this.service.updateQuiz({
        where: params,
        data: data,
        select: {
          createdAt: true,
          createdBy: true,
          description: true,
          id: true,
          title: true,
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
  @swagger.ApiOkResponse({ type: Quiz })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteQuiz(
    @common.Param() params: QuizWhereUniqueInput
  ): Promise<Quiz | null> {
    try {
      return await this.service.deleteQuiz({
        where: params,
        select: {
          createdAt: true,
          createdBy: true,
          description: true,
          id: true,
          title: true,
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

  @common.Get("/:id/questions")
  @ApiNestedQuery(QuestionFindManyArgs)
  async findQuestions(
    @common.Req() request: Request,
    @common.Param() params: QuizWhereUniqueInput
  ): Promise<Question[]> {
    const query = plainToClass(QuestionFindManyArgs, request.query);
    const results = await this.service.findQuestions(params.id, {
      ...query,
      select: {
        content: true,
        createdAt: true,
        id: true,

        quiz: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/questions")
  async connectQuestions(
    @common.Param() params: QuizWhereUniqueInput,
    @common.Body() body: QuestionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questions: {
        connect: body,
      },
    };
    await this.service.updateQuiz({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/questions")
  async updateQuestions(
    @common.Param() params: QuizWhereUniqueInput,
    @common.Body() body: QuestionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questions: {
        set: body,
      },
    };
    await this.service.updateQuiz({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/questions")
  async disconnectQuestions(
    @common.Param() params: QuizWhereUniqueInput,
    @common.Body() body: QuestionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questions: {
        disconnect: body,
      },
    };
    await this.service.updateQuiz({
      where: params,
      data,
      select: { id: true },
    });
  }
}

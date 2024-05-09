import { Get, Post, Put, Delete, Controller } from "@nestjs/common";


@Controller("/projects")
export class ProjectController{
  @Get()
  getAllProject(){
      return "get all project"
  }

  @Post()
  addProject(){
      return "add project"
  }

  @Get("/:id")
  getSingleProject(){
      return "get single Project"
  }

  @Put("/:id")
  updateSingleProject(){
      return "sign up"
  }






}
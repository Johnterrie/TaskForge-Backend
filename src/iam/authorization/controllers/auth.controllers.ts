import { Get, Post, Put, Delete, Controller } from "@nestjs/common";


@Controller("/auth")
export class AuthController {
  @Post("/signup")
  signup(){
      return "sign up"
  }

  @Post("/login")
  login(){
      return "login"
  }

  @Post("/logout")
  logout(){
      return "logout"
  }

  @Post("/refresh-token")
  refreshToken(){
      return "refresh token"
  }

  @Post("/reset-password")
  resetPassword(){
      return "reset-password"
  }

  @Get("/user-profile")
  userProfile(){
      return "user Profile"
  }

  @Put("/update-profile")
  updateProfile(){
      return "update profile"
  }

  @Delete("/delete-account")
  deleteAccount(){
      return "delete account"
  }










}
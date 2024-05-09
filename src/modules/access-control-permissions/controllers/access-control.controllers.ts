import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('/access-control')
export class AccessControlControllers {
  @Get('roles')
  getAllRoles() {
    return 'working';
  }

  @Post('roles')
  addRoles() {
    return 'working';
  }

  @Get('/roles/:roleId')
  getSingleRole() {
    return 'working';
  }

  @Put('/roles/:roleId')
  updateSingleRole() {
    return 'working';
  }

  @Delete('/roles/:roleId')
  deleteSingleRole() {
    return 'working';
  }

  @Get('/permissions')
  getAllPermission() {
    return 'working';
  }

  @Post('/permissions')
  postNewPermission() {
    return 'working';
  }

  @Get('/permissions/:permissionId')
  getSinglePermission() {
    return 'working';
  }

  @Put('/permissions/:permissionId')
  updateSinglePermission() {
    return 'working';
  }

  @Delete('/permissions/:permissionId')
  deleteSinglePermission() {
    return 'working';
  }

  @Get('user/:userId/roles')
  getSingleUserRole() {
    return 'working';
  }

  @Post('/user/:userId/roles')
  PostSingleUserRole() {
    return 'working';
  }

  @Delete('/user/:userId/roles/:roleId')
  deleteSingleUserRole() {
    return 'working';
  }
}

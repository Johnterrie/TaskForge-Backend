import { Controller, Post } from '@nestjs/common';

@Controller('/integrations')
export class IntegrationController {
  @Post('/version-control/github/webhook')
  github() {
    return 'working';
  }

  @Post('/version-control/gitlab/webhook')
  gitlab() {
    return 'working';
  }

  @Post('/issue-tracking/jira/webhook')
  jira() {
    return 'working';
  }

  @Post('/issue-tracking/trello/webhook')
  trello() {
    return 'working';
  }

  @Post('/communication/slack/webhook')
  slack() {
    return 'working';
  }

  @Post('/communication/microsoft-teams/webhook')
  microsoftTeams() {
    return 'working';
  }
}

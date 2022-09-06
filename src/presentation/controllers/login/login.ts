import { MissingParamError } from '../../errors'
import { badRequest } from '../../helpers/http-helper'
import { Controller, HttpRequest } from '../../protocols'

export class LoginController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<any> {
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }
  }
}

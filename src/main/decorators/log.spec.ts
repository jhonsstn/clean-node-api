import {
  Controller,
  HttpRequest,
  HttpResponse
} from '../../presentation/protocols'
import { LogControllerDecorator } from './log'

describe('LogController Decorator ', () => {
  test('should call controller handle', async () => {
    class ControllerStub implements Controller {
      async handle (_httpRequest: HttpRequest): Promise<HttpResponse> {
        const httpResponse: HttpResponse = { statusCode: 200, body: {} }
        return await Promise.resolve(httpResponse)
      }
    }
    const controllerStub = new ControllerStub()
    const handleSpy = jest.spyOn(controllerStub, 'handle')
    const sut = new LogControllerDecorator(controllerStub)
    const httpRequest: HttpRequest = {
      body: {
        name: 'any_name',
        email: 'any_mail@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    await sut.handle(httpRequest)
    expect(handleSpy).toHaveBeenCalledWith(httpRequest)
  })
})

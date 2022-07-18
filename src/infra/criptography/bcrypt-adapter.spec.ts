import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return await Promise.resolve('encrypted_password')
  }
}))

const SALT = 12

const makeSut = (): BcryptAdapter => {
  return new BcryptAdapter(SALT)
}

describe('Bcrypt Adapter', () => {
  test('should call bcrypt with correct values', async () => {
    const sut = makeSut()
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('any_value')
    expect(hashSpy).toHaveBeenCalledWith('any_value', SALT)
  })

  test('should return a encrypted password if success', async () => {
    const sut = makeSut()
    const encryptedPassword = await sut.encrypt('any_value')
    expect(encryptedPassword).toBe('encrypted_password')
  })
})

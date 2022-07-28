import { SignUpController } from '../../presentation/controllers/signup/signup'
import { EmailValidatorAdapter } from '../../utils/email-validator-adapter'
import { DbAddAccount } from '../../data/usecases/add-account/db-add-account'
import { BcryptAdapter } from '../../infra/cryptography/bcrypt-adapter'
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository/account'

export const makeSignUpController = (): SignUpController => {
  const salt = 12
  const emailValidator = new EmailValidatorAdapter()
  const encrypter = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  const addAccount = new DbAddAccount(encrypter, accountMongoRepository)
  return new SignUpController(emailValidator, addAccount)
}

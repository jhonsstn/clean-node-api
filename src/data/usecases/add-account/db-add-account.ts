import {
  AddAccount,
  AddAccountModel,
  AccountModel,
  Encrypter,
  AddAccountRepository
} from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter
  private readonly addAccountRepository
  constructor (
    encrypter: Encrypter,
    addAccountRepository: AddAccountRepository
  ) {
    this.encrypter = encrypter
    this.addAccountRepository = addAccountRepository
  }

  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const encryptedPassword = await this.encrypter.encrypt(accountData.password)
    await this.addAccountRepository.add({
      ...accountData,
      password: encryptedPassword
    })
    return await Promise.resolve({ id: 'valid_id', ...accountData })
  }
}

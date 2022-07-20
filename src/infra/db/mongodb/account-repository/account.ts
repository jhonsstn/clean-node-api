import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { AccountModel } from '../../../../domain/models/account'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const accountWithoutId = Object.assign({}, accountData)
    const { insertedId } = await accountCollection.insertOne(accountData)
    const account = { ...accountWithoutId, id: insertedId.toString() }
    return account
  }
}

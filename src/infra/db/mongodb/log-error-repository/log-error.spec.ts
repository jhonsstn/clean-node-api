import { Collection } from 'mongodb'
import { MongoHelper } from '../helpers/mongo-helper'
import { LogMongoRepository } from './log-error'

const makeSut = (): LogMongoRepository => {
  return new LogMongoRepository()
}

describe('Log Mongo Repository', () => {
  let errorCollection: Collection
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL as string)
  })

  beforeEach(async () => {
    errorCollection = MongoHelper.getCollection('errors')
    await errorCollection.deleteMany({})
  }
  )

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  test('should create an error log on success', async () => {
    const sut = makeSut()
    await sut.logError('any_error')
    const count = await errorCollection.countDocuments()
    expect(count).toBe(1)
  })
})

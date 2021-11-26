import { injectable } from 'tsyringe';
import User, { UserModel } from '../../../schemas/User'

interface ICreateDTO {
  name: string;
  username: string;
}


@injectable()
class CreateUserService {
  async execute({ name, username }: ICreateDTO): Promise<UserModel> {
    const userAlreadyExists = await User.findOne({
      username,
    });

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    const user = await User.create({
      name,
      username,
    });

    return user;
  }
}


export default CreateUserService
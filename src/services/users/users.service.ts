import { Delete, Get, Injectable, Param, Post, Put } from '@nestjs/common';
import  { Model } from 'mongoose';
import{ InjectModel} from "@nestjs/mongoose"
import { User, UserDocument } from 'src/shemas/user';




@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
        console.log('userService run')
    }
 
 
    async getAllUsers(): Promise<User[]> {
        return this.userModel.find();
    }
 
    async getUserById(id): Promise<User> {
        return this.userModel.findById(id);
    }
 
    async sendUser(data): Promise<User> {
        const userData = new this.userModel(data);
        return userData.save();
    }
 
    async updateUsers(id: string, body): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, body);
    }
 
    async deleteUsers(): Promise<any> {
        return this.userModel.deleteMany()
    } 
 
    async  deleteUserById(id: string): Promise<User> {
        return this.userModel.findByIdAndRemove(id);
    }
 
    async checkRegUser(tel: string): Promise<User[]> {
        return this.userModel.find({tel: tel});
    }
 
   
 
}



/* @Injectable()
export class UsersService {
    constructor (@InjectModel(User.name) private userModel:Model<UserDocument>){}

    async getAllUsers(): Promise<User[]> {
        return this.userModel.find();
    }
 
    async getUserById(id): Promise<User> {
        return this.userModel.findById(id);
    }
 
    async sendUser(data): Promise<User> {
        const userData = new this.userModel(data);
        return userData.save();
    }
 
    async updateUsers(id: string, body): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, body);
    }
 
    async deleteUsers(): Promise<any> {
        return this.userModel.deleteMany()
    } 
 
    async  deleteUserById(id: string): Promise<User> {
        return this.userModel.findByIdAndRemove(id);
    }
} */
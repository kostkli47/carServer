import { Controller, Delete, Get, Param, Post, Put, Query, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UserDto } from 'src/dto/user-dto';
import { UsersService } from 'src/services/users/users.service';
import { User } from 'src/shemas/user';

/*  */


@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}
 
 
    @Get()
    getAllUsers(): Promise<User[]> {
        return this.userService.getAllUsers();
    }
 
 
    @Get(":id")
    getUserById(@Param('id') id): Promise<User> {
        return this.userService.getUserById(id);
    }
 
    @Post()
    sendUser(@Body() data: UserDto): Promise<User> {
 
        return this.userService.checkRegUser(data.tel).then((queryRes) => {
            console.log('data reg', queryRes)
            if (queryRes.length === 0) {
                return this.userService.sendUser(data);
            } else {
                console.log('err - user is exists')
                throw new HttpException ({
                  status:HttpStatus.CONFLICT,
                  errorText: 'По данному номеру уже сформирована заявка!'
                }, HttpStatus.CONFLICT)
            }
        });
    }
 
/*    @Post(":login")
    authUser(@Body() data: UserDto, @Param('login') login): Promise<User | boolean>  {
        return this.userService.checkAuthUser(data.login, data.psw).then((queryRes) => {
            if (queryRes.length !== 0) {
                return Promise.resolve(true);
            } else {
                console.log('err - user is exists')
                return Promise.reject();
            }
        }); 
 
    } */
 
    @Put(":id")
    updateUsers(@Param('id') id, @Body() data) : Promise<User> {
        return this.userService.updateUsers(id, data);
    }
 
    @Delete()
    deleteUsers(): Promise<User> {
        return this.userService.deleteUsers();
    }
 
 
    @Delete(":id")
    deleteUserById(@Param('id') id): Promise<User> {
        return this.userService.deleteUserById(id);
    }
 
}




/* @Controller('users')
export class UsersController {
constructor (private userService:UsersService){}

@Get()
getAllUsers():Promise<User[]>{
    return this.userService.getAllUsers();
}

@Get(":id")
getUserById(@Param(":id") id):Promise<User>{
    return this.userService.getUserById(id)
}

@Post()
sendUser(@Body() data):Promise<User>{
   return this.userService.sendUser(data);
}

@Put(":id")
updateUsers(@Param('id') id, @Body() data) : Promise<User> {
    return this.userService.updateUsers(id, data);
}

@Delete() 
deleteUsers(): Promise<User> {
    return this.userService.deleteUsers();
} 


@Delete(":id")
deleteUserById(@Param('id') id): Promise<User> {
    return this.userService.deleteUserById(id);
}

} */
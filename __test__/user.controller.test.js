// import bcrypt from "bcryptjs";
// import { findUserByEmail,createUser } from "../models/user.model";

// jest.mock('bcrypt')

// jest.mock('../models/user.model', () => ({
//     findUserByEmail: jest.fn(),
//     createUser: jest.fn()
// }));

// describe('Register User',()=>{
//    let req, res;
//    beforeEach(() => {
//         req = {
//             body: {
//                 name: 'sindhu',
//                 email: 'test@mail.com',
//                 password: 'password123',
//                 gender:'female'
//             }
//         };
//         res = {
//             status: jest.fn().mockReturnThis(),
//             json: jest.fn()
//         };
//     });


//     afterEach(() => {
//         jest.clearAllMocks();
//     });

//     it('should register a new user successfully', async () => {
//         userModel.findUserByEmail.mockResolvedValue(null);
//         bcrypt.hash.mockResolvedValue('hashedPassword');
//         userModel.createUser.mockResolvedValue(1);
//         await registerUser(req, res);
//         expect(bcrypt.hash).toHaveBeenCalledWith('password123', 10);
//         expect(userModel.findUserByEmail).toHaveBeenCalledWith(
//             'Sindhu',
//             'test@gmail.com',
//             'hashedPassword',
//             'female'
//         );

//         expect(res.status).toHaveBeenCalledWith(201);
//         expect(res.json).toHaveBeenCalledWith({
//             message: 'User registered successfully',
//             userId: 1
//         });
//     });


//     it('should return an error if user already exists', async () => {
//         userModel.findUserByEmail.mockResolvedValue({ id: 1 });
//         await registerUser(req, res);
//         expect(res.status).toHaveBeenCalledWith(400);
//         expect(res.json).toHaveBeenCalledWith({ message: 'User already exists' });
//     });

//     it('should handle errors',async () => {
//         const errorMessage = 'Database error';
//         userModel.findUserByEmail.mockRejectedValue(new Error(errorMessage));
//         await registerUser(req, res);
//         expect(res.status).toHaveBeenCalledWith(500);
//         expect(res.json).toHaveBeenCalledWith({ message: 'Error registering user', error: expect.any(Error) });
//     });
// })

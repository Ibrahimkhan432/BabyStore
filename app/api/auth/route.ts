
import User from '@/app/models/auth/userSchema';
import { connectDB } from '@/lib/db';
import { response } from '@/lib/helpers/response';
import bcrypt from 'bcrypt';
export async function POST(request: Request) {
    try {
        const body = await request.json()
        await connectDB();
        const { name, email, password } = body
        if (!name || !email || !password) {
            return response(false, 'Missing required fields', 400)
        }
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return Response.json(
                response(false, 'Email already exists'),
                { status: 409 }
            )
        }
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })
        return new Response(JSON.stringify(user), {
            status: 201,
            statusText: 'Created',
        })
    } catch (error) {
        console.log(error)
    }

}
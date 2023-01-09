import { validateRoute } from '../../lib/auth'
import prisma from '../../lib/prisma'

export default validateRoute(async (req: any, res: any, user: any) => {
    console.log(user)
    res.json({ ...user })
})
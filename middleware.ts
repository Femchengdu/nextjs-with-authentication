import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
const signedinPages = ['/', '/playlist', '/library']

export default function middleware(req: NextRequest) {
    if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
        const token = req.cookies.get("TRAX_ACCESS_TOKEN")

        if (!token) {
            return NextResponse.redirect(`${req.url}signin`)
        }
    }
}
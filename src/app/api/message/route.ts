'use client'
import { Client } from '@notionhq/client'
import { NextResponse } from 'next/server'

const notion = new Client({ auth: process.env.NOTION_API_KEY })

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  try {
    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID || '',
        type: 'database_id',
      },
      properties: {
        name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        email: {
          email,
        },
        message: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
      },
    })

    return NextResponse.json(
      { ok: true },
      {
        status: 201,
      },
    )
  } catch {
    return NextResponse.json(
      { ok: false },
      {
        status: 400,
      },
    )
  }
}

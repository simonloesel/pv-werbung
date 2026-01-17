import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../lib/db'

export async function GET(request: NextRequest) {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 100, // Limit to 100 most recent
    })

    return NextResponse.json({
      ok: true,
      leads,
      count: leads.length,
    })
  } catch (error) {
    console.error('Error fetching leads:', error)
    return NextResponse.json(
      {
        ok: false,
        error: 'server_error',
        message: 'Fehler beim Laden der Leads',
        ...(process.env.NODE_ENV === 'development' && error instanceof Error && {
          details: error.message,
        }),
      },
      { status: 500 }
    )
  }
}

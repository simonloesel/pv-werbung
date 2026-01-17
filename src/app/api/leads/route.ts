import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../lib/db'
import { projectWizardSchema } from '../../../components/forms/schema'

export async function POST(request: NextRequest) {
  // #region agent log
  fetch('http://127.0.0.1:7243/ingest/e2d0a3a1-d1e6-4360-ae8a-411ac58c3655',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:5',message:'API POST /api/leads called',data:{hasDbUrl:!!process.env.DATABASE_URL,dbUrlPrefix:process.env.DATABASE_URL?.substring(0,20)||'missing'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
  // #endregion
  let data: any = null
  try {
    // Check if DATABASE_URL is set
    if (!process.env.DATABASE_URL) {
      // #region agent log
      fetch('http://127.0.0.1:7243/ingest/e2d0a3a1-d1e6-4360-ae8a-411ac58c3655',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:8',message:'DATABASE_URL missing',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
      // #endregion
      console.error('DATABASE_URL is not set in environment variables')
      return NextResponse.json(
        {
          ok: false,
          error: 'configuration_error',
          message: 'Database configuration missing',
        },
        { status: 500 }
      )
    }

    const body = await request.json()
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/e2d0a3a1-d1e6-4360-ae8a-411ac58c3655',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:22',message:'Body parsed',data:{hasCompanyName:!!body.companyName,hasEmail:!!body.email,keys:Object.keys(body).slice(0,5)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
    // #endregion

    // Validate with Zod
    const validationResult = projectWizardSchema.safeParse(body)

    if (!validationResult.success) {
      return NextResponse.json(
        {
          ok: false,
          error: 'validation_error',
          fields: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      )
    }

    data = validationResult.data

    // Transform primaryGoal array to string
    const primaryGoalString = data.primaryGoal ? data.primaryGoal.join(', ') : null

    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/e2d0a3a1-d1e6-4360-ae8a-411ac58c3655',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:27',message:'Before prisma.lead.create',data:{companyName:data.companyName,availableAreaM2:data.availableAreaM2,annualConsumptionKwh:data.annualConsumptionKwh,primaryGoalString},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion

    // Save to database
    console.log('[API] Attempting to create lead in database...')
    console.log('[API] Database URL prefix:', process.env.DATABASE_URL?.substring(0, 60))
    
    let lead
    try {
      lead = await prisma.lead.create({
      data: {
        companyName: data.companyName,
        contactName: data.contactName,
        email: data.email,
        phone: data.phone || null,
        address: data.address,
        industry: data.industry || null,
        role: data.role || null,

        siteType: data.siteType,
        availableAreaM2: data.availableAreaM2,
        roofType: data.roofType || null,
        roofCovering: data.roofCovering || null,
        yearBuilt: data.yearBuilt || null,
        staticsKnown: data.staticsKnown || null,
        ownershipClear: data.ownershipClear || null,

        annualConsumptionKwh: data.annualConsumptionKwh,
        peakLoadKw: data.peakLoadKw || null,
        loadProfile: data.loadProfile || null,
        metering: data.metering || null,
        currentTariffInfo: data.currentTariffInfo || null,

        gridConnectionPowerKw: data.gridConnectionPowerKw || null,
        transformerOnSite: data.transformerOnSite || null,
        connectionPointDistanceM: data.connectionPointDistanceM || null,
        parkingEV: data.parkingEV || null,
        batteryInterest: data.batteryInterest || null,
        evChargingInterest: data.evChargingInterest || null,

        primaryGoal: primaryGoalString,
        timeline: data.timeline || null,
        notes: data.notes || null,
        consentPrivacy: data.consentPrivacy,
      },
    })
      console.log('[API] Lead created successfully:', lead.id)
    } catch (createError: any) {
      console.error('[API] ERROR in prisma.lead.create:', createError)
      console.error('[API] Error message:', createError.message)
      console.error('[API] Error code:', createError.code)
      console.error('[API] Error meta:', createError.meta)
      throw createError // Re-throw to be caught by outer catch block
    }
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/e2d0a3a1-d1e6-4360-ae8a-411ac58c3655',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:66',message:'prisma.lead.create succeeded',data:{leadId:lead.id},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion

    return NextResponse.json(
      {
        ok: true,
        leadId: lead.id,
      },
      { status: 201 }
    )
  } catch (error) {
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/e2d0a3a1-d1e6-4360-ae8a-411ac58c3655',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:75',message:'Error caught in catch block',data:{errorType:error?.constructor?.name,errorMessage:error instanceof Error ? error.message : String(error),errorCode:(error as any)?.code},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion
    console.error('Error creating lead:', error)
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      data: data,
    })
    
    // Return more detailed error in development
    const errorMessage = process.env.NODE_ENV === 'development' && error instanceof Error
      ? error.message
      : 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.'
    
    return NextResponse.json(
      {
        ok: false,
        error: 'server_error',
        message: errorMessage,
        ...(process.env.NODE_ENV === 'development' && error instanceof Error && {
          details: error.stack,
        }),
      },
      { status: 500 }
    )
  }
}

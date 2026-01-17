import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../lib/db'
import { projectWizardSchema } from '../../../components/forms/schema'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

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

    const data = validationResult.data

    // Transform primaryGoal array to string
    const primaryGoalString = data.primaryGoal ? data.primaryGoal.join(', ') : null

    // Save to database
    const lead = await prisma.lead.create({
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

    return NextResponse.json(
      {
        ok: true,
        leadId: lead.id,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating lead:', error)
    return NextResponse.json(
      {
        ok: false,
        error: 'server_error',
        message: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
      },
      { status: 500 }
    )
  }
}

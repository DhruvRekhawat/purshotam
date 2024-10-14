import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Get query parameters from the URL
    const searchParams = request.nextUrl.searchParams;
    const dateFilter = searchParams.get('dateFilter') || '';
    const categoryFilter = searchParams.get('categoryFilter') || '';

    // Fetch inward data
    const inwardResponse = await fetch(
      `https://puroshottam-backend-inward-outward.vercel.app/api/erp-inward?filter=${dateFilter}&category=${categoryFilter}`
    );

    // Fetch outward data
    const outwardResponse = await fetch(
      `https://puroshottam-backend-inward-outward.vercel.app/api/erp-outward?filter=${dateFilter}&category=${categoryFilter}`
    );

    // Check if both requests were successful
    if (!inwardResponse.ok || !outwardResponse.ok) {
      throw new Error('Failed to fetch data');
    }

    // Parse JSON responses
    const inwardData = await inwardResponse.json();
    const outwardData = await outwardResponse.json();

    // Return both inward and outward data
    return NextResponse.json({ inwardData, outwardData,"totalInwardQuantity":inwardData.length,"totalOutwardQuantity":outwardData.length,"dateFilter":dateFilter,"categoryFilter":categoryFilter });

  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
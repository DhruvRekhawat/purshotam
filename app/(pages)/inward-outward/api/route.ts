import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const startDate = body.startDate
    const endDate = body.endDate

    const options = {
      method: "GET",
      headers:{
        "Access-Control-Allow-Origin":"*",
      }
    }

    // Determine the URL based on the presence of startDate and endDate
    const inwardUrl = startDate && endDate 
      ? `http://13.233.157.58:3000/api/erp-inward/filter?startDate=${startDate}&endDate=${endDate}`
      : `http://13.233.157.58:3000/api/erp-inward`;

    const outwardUrl = startDate && endDate 
      ? `http://13.233.157.58:3000/api/erp-outward/filter?startDate=${startDate}&endDate=${endDate}`
      : `http://13.233.157.58:3000/api/erp-outward`;

    // Fetch inward data
    const inwardResponse = await fetch(inwardUrl, options);

    // Fetch outward data
    const outwardResponse = await fetch(outwardUrl, options);

    // Check if both requests were successful
    if (!inwardResponse.ok || !outwardResponse.ok) {
      throw new Error('Failed to fetch data');
    }

    // Parse JSON responses
    const inwardData = await inwardResponse.json();
    const outwardData = await outwardResponse.json();

    // Return both inward and outward data
    return NextResponse.json({ inwardData, outwardData,"totalInwardQuantity":inwardData.length,"totalOutwardQuantity":outwardData.length});

  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

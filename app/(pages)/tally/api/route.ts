import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const plantName = body.plantName
    const tableName = body.tableName
    const startDate = body.startDate
    const endDate = body.endDate

    const options = {
      method: "GET",
      headers:{
        "Access-Control-Allow-Origin":"*",
      }
    }

    // Determine the URL based on the presence of startDate and endDate

    const url = startDate && endDate 
      ? `http://13.233.157.58:3000/api/${plantName}/filter?startDate=${startDate}&endDate=${endDate}`
      : `http://13.233.157.58:3000/api/${plantName}`;

    // Fetch inward data
    const response = await fetch(url, options);

    // Fetch outward data

    // Check if both requests were successful
    if (!response.ok ) {
      throw new Error('Failed to fetch data');
    }

    // Parse JSON responses
    const data = await response.json();

    // Return both inward and outward data
    return NextResponse.json({data});

  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

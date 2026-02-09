import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';

export async function GET() {
  try {
    const db = await getDatabase();
    const collection = db.collection('team');
    const teamMembers = await collection.find({}).toArray();
    
    // Convert MongoDB _id to string id
    const formattedMembers = teamMembers.map((member) => ({
      id: member._id.toString(),
      name: member.name,
      role: member.role,
      bio: member.bio,
      image: member.image,
    }));
    
    return NextResponse.json(formattedMembers);
  } catch (error) {
    console.error('MongoDB GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const db = await getDatabase();
    const collection = db.collection('team');
    
    const newEntry = {
      name: body.name,
      role: body.role,
      bio: body.bio,
      image: body.image,
      createdAt: new Date(),
    };
    
    const result = await collection.insertOne(newEntry);
    
    return NextResponse.json({
      id: result.insertedId.toString(),
      ...newEntry,
    });
  } catch (error) {
    console.error('MongoDB POST error:', error);
    return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    
    const db = await getDatabase();
    const collection = db.collection('team');
    const { ObjectId } = await import('mongodb');
    
    await collection.deleteOne({ _id: new ObjectId(id) });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('MongoDB DELETE error:', error);
    return NextResponse.json({ error: 'Failed to delete data' }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import slugify from 'slugify';

export async function POST(request: Request) {
  try {
    const { content, language, videoId } = await request.json();
    
    const slug = slugify(`blog-${language}-${videoId}`, { lower: true });

    const post = await prisma.post.create({
      data: {
        title: `Summary in ${language}`,
        content,
        language,
        videoId,
        slug,
      },
    });

    return NextResponse.json({ post });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to publish post' },
      { status: 500 }
    );
  }
}
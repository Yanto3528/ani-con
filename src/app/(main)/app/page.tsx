import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { PlusIcon } from 'lucide-react';
import Image from 'next/image';

import { HtmlRenderer } from '@/components/common/HtmlRenderer';
import { PageHeader } from '@/components/common/PageHeader';
import { Avatar } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

dayjs.extend(relativeTime);

const posts = [
  {
    id: '1',
    title: 'How to create social media app with Next.js',
    content:
      '<p>In this post, I will show you how to create a social media app with Next.js, TailwindCSS</p>',
    coverImage:
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: {
      name: 'John Doe',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    createdAt: new Date(),
  },
  {
    id: '2',
    title: 'How to create social media app with Next.js',
    content:
      '<p>In this post, I will show you how to create a social media app with Next.js, TailwindCSS</p>',
    coverImage:
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: {
      name: 'John Doe',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    createdAt: new Date(),
  },
  {
    id: '3',
    title: 'How to create social media app with Next.js',
    content:
      '<p>In this post, I will show you how to create a social media app with Next.js, TailwindCSS</p>',
    coverImage:
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: {
      name: 'John Doe',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    createdAt: new Date(),
  },
  {
    id: '4',
    title: 'How to create social media app with Next.js',
    content:
      '<p>In this post, I will show you how to create a social media app with Next.js, TailwindCSS</p>',
    coverImage:
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: {
      name: 'John Doe',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    createdAt: new Date(),
  },
  {
    id: '5',
    title: 'How to create social media app with Next.js',
    content:
      '<p>In this post, I will show you how to create a social media app with Next.js, TailwindCSS</p>',
    coverImage:
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: {
      name: 'John Doe',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    createdAt: new Date(),
  },
];

export default function AppPage() {
  return (
    <div>
      <PageHeader>
        <h1>Posts</h1>
        <Button>
          <PlusIcon className="w-5 h-5" /> Create Post
        </Button>
      </PageHeader>
      <div className="pt-3 pb-10 px-6">
        <div className="grid grid-cols-main-post gap-4">
          {posts.map((post) => (
            <Card key={post.id}>
              <div className="relative w-full aspect-[9/5]">
                <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
              </div>
              <div className="px-4 py-3">
                <div className="flex items-center gap-3 mb-2">
                  <Avatar src={post.author.image} alt={post.author.name} />
                  <div className="flex flex-col">
                    <p className="font-semibold text-sm">{post.author.name}</p>
                    <span className="text-xs text-gray-500">{dayjs(post.createdAt).fromNow()}</span>
                  </div>
                </div>
                <h2>{post.title}</h2>
                <HtmlRenderer>{post.content}</HtmlRenderer>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

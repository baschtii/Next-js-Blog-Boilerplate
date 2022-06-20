import React from 'react';

import { format } from 'date-fns';
import Link from 'next/link';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <div className='relative max-w-lg mx-auto divide-y-2 bg-white divide-gray-200 lg:max-w-7xl"'>
    <ul>
      {props.posts.map((elt) => (
        <li key={elt.slug} className="mb-3 flex justify-between">
          <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
            <a>
              <h2>{elt.title}</h2>
            </a>
          </Link>

          <div className="text-right">
            {format(new Date(elt.date), 'LLL d, yyyy')}
          </div>
        </li>
      ))}
    </ul>
    {/* <div className="mt-12  mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {props.posts.map((post) => (
        <div
          key={post.title}
          className="flex flex-col rounded-lg shadow-lg overflow-hidden"
        >
          <div className="flex-shrink-0">
            <img
              className="h-48 w-full object-cover"
              src={post.imageUrl}
              alt=""
            />
          </div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-indigo-600">
                <a href={''} className="hover:underline">
                  nAME
                </a>
              </p>
              <a href={post.href} className="block mt-2">
                <p className="text-xl font-semibold text-gray-900">
                  {post.title}
                </p>
                <p className="mt-3 text-base text-gray-500">
                  {post.description}
                </p>
              </a>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <a href={post.author.href}>
                  <span className="sr-only">{post.author.name}</span>
                  <img
                    className="h-10 w-10 rounded-full"
                    src={post.author.imageUrl}
                    alt=""
                  />
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  <a href={post.author.href} className="hover:underline">
                    {post.author.name}
                  </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime={post.datetime}>{post.date}</time>
                  <span aria-hidden="true">&middot;</span>
                  <span>{post.readingTime} read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div> */}

    <Pagination
      previous={props.pagination.previous}
      next={props.pagination.next}
    />
  </div>
);

export { BlogGallery };

import React from 'react';

import { format } from 'date-fns';
import Link from 'next/link';

import { IPaginationProps, Pagination } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

const BlogGallery = (props: IBlogGalleryProps) => {
  console.log('props', props);
  return (
    <div className="relative  divide-y-2 divide-gray-200">
      {props.posts.map((elt) => (
        <li key={elt.slug} className="mb-3 flex justify-between">
          <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
            <h2 className="text-2xl text-gray-100">{elt.title}</h2>
          </Link>

          <div className="text-right">
            {format(new Date(elt.date), 'LLL d, yyyy')}
          </div>
        </li>
      ))}
      <Pagination
        previous={props.pagination.previous}
        next={props.pagination.next}
      />
    </div>
  );
};

export { BlogGallery };

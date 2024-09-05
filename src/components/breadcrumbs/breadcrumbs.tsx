import Link from 'next/link';
import { Fragment } from 'react';

interface BreadcrumbsProps {
  links: { link: string; label: string }[];
}

export const Breadcrumbs = ({ links }: BreadcrumbsProps) => {
  return (
    <div className='font-normal mb-4'>
      {links.map((link, index) => {
        const isLast = index === links.length - 1;
        return (
          <Fragment key={link.link}>
            <Link
              href={link.link}
              className={isLast ? 'text-gray-500' : ''}
            >
              {link.label}
            </Link>{' '}
            {isLast ? '' : '/ '}
          </Fragment>
        );
      })}
    </div>
  );
};

import Link from 'next/link';
import { categories } from '@/utils/categories';

import { ScrollBar, ScrollArea } from '../ui/scroll-area';

function CategoriesList({ category, search }: { category?: string; search?: string }) {
  const searchTerm = search ? `&search=${search}` : '';
  return (
    <section className="w-full py-8">
      <ScrollArea className="w-full">
        <div className="flex space-x-4 px-4">
          {categories.map((item) => {
            const isActive = item.label === category;
            return (
              <Link
                key={item.label}
                href={`/?category=${item.label}${searchTerm}`}
                className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
              >
                <article
                  className={`p-3 flex flex-col items-center cursor-pointer duration-300 hover:text-primary w-[100px] ${
                    isActive ? 'text-primary' : ''
                  }`}
                >
                  <item.icon className="w-8 h-8" />
                  <p className="text-sm font-medium capitalize text-center">{item.label}</p>
                </article>
              </Link>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
export default CategoriesList;

"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import Link from "next/link";

// Define the type for the component props
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  queryKey?: string; // Optional queryKey with a default value
}

export default function Pagination({
  currentPage,
  totalPages,
  queryKey = "page",
}: PaginationProps) {
  const createLink = (page: number) => `?${queryKey}=${page}`;

  // Helper function to render page buttons
  const renderPageButtons = () => {
    const buttons = [];

    // Add first two pages
    for (let i = 1; i <= Math.min(2, totalPages); i++) {
      buttons.push(
        <li key={i}>
          <Link href={createLink(i)} passHref scroll={false}>
            <Button
              aria-current={currentPage === i ? "page" : undefined}
              className={cn(
                "h-7 w-7 bg-default-100 text-default-600 p-0 hover:bg-opacity-70 hover:text-primary-foreground",
                {
                  "bg-primary text-primary-foreground": currentPage === i,
                }
              )}
            >
              {i}
            </Button>
          </Link>
        </li>
      );
    }

    // Add ellipsis if needed
    if (currentPage > 3 && totalPages > 4) {
      buttons.push(
        <li key="ellipsis-start">
          <span className="h-7 w-7 flex items-center justify-center">...</span>
        </li>
      );
    }

    // Add middle pages
    const startPage = Math.max(3, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);
    for (let i = startPage; i <= endPage; i++) {
      if (i > 2 && i < totalPages - 1) {
        buttons.push(
          <li key={i}>
            <Link href={createLink(i)} passHref scroll={false}>
              {" "}
              {/* Set scroll to false */}
              <Button
                aria-current={currentPage === i ? "page" : undefined}
                className={cn(
                  "h-7 w-7 bg-default-100 text-default-600 p-0 hover:bg-opacity-70 hover:text-primary-foreground",
                  {
                    "bg-primary text-primary-foreground": currentPage === i,
                  }
                )}
              >
                {i}
              </Button>
            </Link>
          </li>
        );
      }
    }

    // Add ellipsis if needed
    if (currentPage < totalPages - 2 && totalPages > 4) {
      buttons.push(
        <li key="ellipsis-end">
          <span className="h-7 w-7 flex items-center justify-center">...</span>
        </li>
      );
    }

    // Add last two pages
    for (let i = Math.max(totalPages - 1, 3); i <= totalPages; i++) {
      buttons.push(
        <li key={i}>
          <Link href={createLink(i)} passHref scroll={false}>
            {" "}
            {/* Set scroll to false */}
            <Button
              aria-current={currentPage === i ? "page" : undefined}
              className={cn(
                "h-7 w-7 bg-default-100 text-default-600 p-0 hover:bg-opacity-70 hover:text-primary-foreground",
                {
                  "bg-primary text-primary-foreground": currentPage === i,
                }
              )}
            >
              {i}
            </Button>
          </Link>
        </li>
      );
    }

    return buttons;
  };

  return (
    <div className="flex flex-wrap  justify-center mt-4">
      {/* Previous Button */}
      {currentPage > 1 && (
        <Link href={createLink(currentPage - 1)} passHref scroll={false}>
          {" "}
          {/* Set scroll to false */}
          <Button
            size="icon"
            className="h-7 w-7 mr-2 bg-default-100 text-default-600 hover:text-primary-foreground"
          >
            <Icon icon="heroicons:chevron-left" className="w-3.5 h-3.5" />
          </Button>
        </Link>
      )}

      {/* Page Buttons */}
      <ul className="flex space-x-3 rtl:space-x-reverse items-center">
        {renderPageButtons()}
      </ul>

      {/* Next Button */}
      {currentPage < totalPages && (
        <Link href={createLink(currentPage + 1)} passHref scroll={false}>
          {" "}
          {/* Set scroll to false */}
          <Button
            size="icon"
            className="h-7 w-7 ml-2 bg-default-100 text-default-600 hover:text-primary-foreground"
          >
            <Icon icon="heroicons:chevron-right" className="w-3.5 h-3.5" />
          </Button>
        </Link>
      )}
    </div>
  );
}

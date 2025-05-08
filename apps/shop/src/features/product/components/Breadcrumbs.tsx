import { Fragment } from "react";
import Link from "next/link";

interface BreadcrumbsProps {
    items: {
        label: string;
        href?: string;
        isCurrent?: boolean;
    }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav className="py-10" aria-label="breadcrumbs">
            <ol className="flex items-center">
                {items.map((item, index) => (
                    <Fragment key={`${item.label}-${index}`}>
                        {index > 0 && (
                            <li className="mx-2">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M9 6L15 12L9 18"
                                        stroke="#37383c"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        opacity="0.6"
                                    />
                                </svg>
                            </li>
                        )}
                        <li>
                            {item.href && !item.isCurrent ? (
                                <Link
                                    href={item.href}
                                    className="text-base text-[#37383c] opacity-60 hover:opacity-100 transition-opacity"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span
                                    className={`text-base ${
                                        item.isCurrent
                                            ? "text-black font-semibold"
                                            : "text-[#37383c] opacity-60"
                                    }`}
                                    aria-current={
                                        item.isCurrent ? "page" : undefined
                                    }
                                >
                                    {item.label}
                                </span>
                            )}
                        </li>
                    </Fragment>
                ))}
            </ol>
        </nav>
    );
}

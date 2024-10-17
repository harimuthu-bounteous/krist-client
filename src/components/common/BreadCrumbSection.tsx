import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import React, { FC, Fragment } from "react";

interface BreadcrumbLinkItem {
  label: string;
  href?: string;
}

interface BreadCrumbSectionProps {
  links: BreadcrumbLinkItem[];
}

const BreadCrumbSection: FC<BreadCrumbSectionProps> = ({ links }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList className="text-lg font-medium">
        {links.map((link, index) => (
          <Fragment key={link + (index + "")}>
            <BreadcrumbItem key={index}>
              {link.href ? (
                <BreadcrumbLink href={link.href}>{link.label}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{link.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < links.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
        {links.length > 3 && <BreadcrumbEllipsis />}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbSection;

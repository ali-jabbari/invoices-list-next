import Typography from "@/components/ui/typography/typography";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full p-4 bg-white border-b border-border h-[80px] fixed inset-x-0 top-0 z-20">
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image
            src="/images/logo/raman-logo.png"
            alt="logo"
            width={38}
            height={38}
            className="max-sm:w-[24px] max-sm:h-[24px]"
          />
        </Link>
        <div className="flex flex-col">
          <Link href="/">
            <Typography variants="title-lg-bold" color="title" className="max-sm:title-lg1-bold">
              رامان
            </Typography>
          </Link>
          <Typography variants="title-sm-medium" color="label" weight="semibold" className="max-sm:label-md-medium">
            پنل تامین کننده
          </Typography>
        </div>
      </div>
    </header>
  );
};

export default Header;

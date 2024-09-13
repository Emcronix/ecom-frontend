import HomePage from "@/components/home/HomePage";
import dynamic from "next/dynamic";
import Splashscreen from "@/components/Splashscreen/Splashscreen";
import SaveDeviceIdLocalstorage from "@/utils/SaveDeviceIdLocalstorage ";

import { Suspense } from "react";
const ChatPrompt = dynamic(() =>
  import("../../components/ChatPromptWidget/chatprompt")
);
import SaveUserCoordinatesOnscroll from "@/utils/SaveUserCoordinatesOnScroll";
import { OrganizationJsonLd, SiteLinksSearchBoxJsonLd } from "next-seo";
import SiteNavigationElement from "@/components/JsonLd/SiteNavigationElement";

export default async function Home() {
  return (
    <>
      <SiteNavigationElement />
      <OrganizationJsonLd
        useAppDir={true}
        type={"Organization"}
        url="https://www.emcronix.com"
        name="emcronix"
        hasMerchantReturnPolicy={{
          "@type": "MerchantReturnPolicy",
          applicableCountry: ["IN"],
          returnPolicyCountry: "IN",
          returnPolicyCategory:
            "https://schema.org/MerchantReturnFiniteReturnWindow",
          merchantReturnDays: 30,
          returnMethod: "https://schema.org/ReturnByMail",
          returnFees: "https://schema.org/FreeReturn",
          refundType: "https://schema.org/FullRefund",
        }}
        contactPoint={[
          {
            telephone: "(+91) 9007404292",
            areaServed: "IN",
            email: "info.emcronix@gmail.com",
            contactType: "Customer Service",
          },
        ]}
        sameAs={[
          "https://www.facebook.com/emcronix.india/",
          "https://twitter.com/emcronix_india/",
          "https://www.instagram.com/emcronix_india/",
          "https://in.pinterest.com/emcronix_india/",
          "https://www.youtube.com/emcronix/",
        ]}
        address={{
          type: "PostalAddress",
          streetAddress: "25C, Elliot Road",
          addressLocality: "Kolkata",
          postalCode: "700016",
          contactType: "Customer Service",
        }}
        logo="https://emcronix.com/api/og"
      />
      <SiteLinksSearchBoxJsonLd
        useAppDir={true}
        url="https://www.emcronix.com"
        potentialActions={[
          {
            target: "https://www.emcronix.com/?search={search_term_string}",
            queryInput: "required name=search_term_string",
          },
        ]}
      />
      <SaveDeviceIdLocalstorage />
      <SaveUserCoordinatesOnscroll threshold={50} />
      <Suspense fallback={<Splashscreen />}>
        <HomePage />
        <ChatPrompt />
      </Suspense>
    </>
  );
}

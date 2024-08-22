"use client";
import {TItleList,ScreenContainer} from "@/app/components/shared";
const TermsAndConditionsContainer = ({
  data,
  locale,
}: any) => {
  const listData = [
    {
      id: 1,
      title: "Use",
      desc: "The Website and its materials are delivered on an “as-is” and “as-available” basis. You expressly agree that you assume total responsibility for your Use of this Website. Your sole remedy against NTO for dissatisfaction with the Website or any of its content and materials is to immediately stop using the Website or any such content and/or materials. This limitation of relief is part of the bargain between you and NTO.",
    },
    {
      id: 2,
      title: "Disclaimer of Liability",
      desc: "NTO makes no representations or guarantees, including that the Website, any content or materials, service, or feature, is available, error-free or uninterrupted, or that any defects will be corrected, or that your Use of the Website will provide specific results, or that material you download will be free of viruses or contamination or destructive features. NTO disclaims all warranties of any kind, express or implied, as to the operation of this Website or the information, content, materials, services, or products included on this Website, including but not limited to, any warranties of accuracy, consistency, non-infringement, and fitness for a particular purpose. NTO disclaims any and all liability for the acts, omissions, and conduct of third parties in connection with or related to your Use of the Website or any third party websites, pages, services that any hyperlinking from the Website may enable, services.",
    },
    {
      id: 3,
      title: "Indemnity",
      desc: "You agree to indemnify, defend, and hold NTO, its affiliates and their respective directors, officers, employees and agents from and against all claims and expenses, including attorneys’ fees, arising out of the Use of the Website by you. OMRAN Group reserves the right to take over the exclusive defense of any claim for which we are entitled to indemnification under this paragraph.",
    },
    {
      id: 4,
      title: "Intellectual Property Rights",
      desc: "The Website is owned and operated by NTO. The Website may include third-party material, who remain the exclusive owners of any content or material that they have provided (“NTO Partners”). You may not republish, reproduce, upload, post, transmit or distribute in any way any material from the Website without NTO’s, or NTO’s Partners’ prior written approval, as applicable. The Website may not separate or distinguish NTO intellectual property from that of the NTO Partners. Material on the Website is protected by copyright and may not be reproduced or appropriated in any manner without the written permission of OMRAN Group or the relevant NTO Partners of the copyrighted material (as the case may be). Modification, adaptation or the creation of derivative works of or from any materials or Use of the materials for any other purpose will be a violation of NTO’s copyright and other intellectual property rights and those of third parties (as the case may be). You may not redistribute, sell, recompile, reverse-engineer, disassemble or otherwise deal with any part of the Website.",
    },
    {
      id: 5,
      title: "Collection of Information",
      desc: "By proceeding with any Use of the Website, you acknowledge that the NTO or third parties may monitor and collect information about you as a user, and your Use of the Website may subject to additional terms, policies and practices detailed in the Website’s Privacy Policy , which may be updated from time to time. NTO will use this information to facilitate bookings between you and the NTO Partner.",
    },
    {
      id: 6,
      title: "Cross border transfer",
      desc: "The Website may contain links to other Websites not maintained by the NTO. Similarly, other sites may contain links to the Website. NTO is not responsible for the contents of those sites and will not be liable for any loss, damage or injury arising from the contents of those sites. Any links to other sites are provided as is for convenience, and do not imply NTO’s endorsements of the link sites or association with their operators. NTO disclaims any and all responsibility and liability for the Use of linked sites, which you access and they shall be accessed at your own risk.",
    },
    {
      id: 7,
      title: "Entire Agreement",
      desc: "These Terms and Privacy Policy others that may be found on the Website constitute the sole and entire agreement between you and NTO with respect to the Website, and supersede all prior understandings, agreements and representations between you and NTO. Any bookings or transaction occurring where the end product is to be provided by a third party NTO Provider, shall be governed exclusively by the terms agreed between you and the NTO Partner, without liability to NTO.",
    },
    {
      id: 8,
      title: "Governing Law",
      desc: "Any dispute or claim arising of or in connection with your access to, and Use of the Website and or the provision of content, services and/or technology on the Website shall be governed by and construed exclusively in accordance with the laws of the Sultanate of Oman under the jurisdiction of the courts of Muscat, Oman.",
    }
  ];
  const titleSplitPara = {
    title: "Cookie Statement",
    subTitle: "",
    desc: "By using our Website you agree and consent that National Travel Operator SPC and third parties can store and access cookies and other tracking technologies to ensure functionality of the Website, collect data about Website usage. You have the option to disable cookies as set out below.",
  };
  const para = "Detailed guidance on how to control and delete cookies is also available from <a href='https://www.aboutcookies.org/' target='_blank'>www.aboutcookies.org</a>."
  return (
    <div className="privacy-policies-container mb-[80px]">
      <ScreenContainer>
        <div className="privacy-policies-wrapper flex flex-col">
          <div className="">
          <TItleList data={listData} locale={locale} />
          </div>
        </div>
      </ScreenContainer>
    </div>
  );
};

export default TermsAndConditionsContainer;

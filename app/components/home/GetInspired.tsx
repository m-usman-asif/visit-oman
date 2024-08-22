"use client";
import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import {SimpleHeadingandText,ScreenContainer} from "@/app/components/shared";
interface InstaItem {
  id: string;
  media_url: string;
  thumbnail_url: string;
  permalink: string;
}

interface InstaResponse {
  data: InstaItem[];
  paging: {
    cursors: {
      before: string;
      after: string;
    };
  };
}
interface InstaFeedItemProps {
  item: {
    media_url: string;
    permalink: string;
    thumbnail_url?: string;
    id: string;
  };
  index: number;
  colIndex: number;
  locale?: string;
}
const isVideo = (media_url: string): boolean => {
  return (
    media_url.endsWith(".mp4") ||
    media_url.includes(".mp4")
  );
};
const InstaFeedItem: React.FC<InstaFeedItemProps> = ({
  item,
  index,
  colIndex,
  locale,
}) => {
  const isVideoMedia = isVideo(item.media_url);
  const mediaHeight =
    colIndex % 2 === 0
      ? index === 0
        ? "500px"
        : "350px"
      : index === 0
        ? "350px"
        : "500px";

  return (
    <a
      key={index}
      href={item?.permalink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="gradient relative flex flex-col gap-[30px] overflow-hidden border bg-primary ">
        <div
          className={`absolute bottom-[30px] ${locale === "en" ? "left-[20px]" : "right-[20px]"} z-[9999] flex  gap-[14px]`}
        >
          <div className="  flex items-center justify-center gap-[10px] ">
            <img
              src="/assets/images/insta-feed-logo.svg"
              width={60}
              height={60}
              alt="insta-feed-logo"
            />
            <div>
              <p className="vo-content !text-white">
                visitoman_om
              </p>
              <p className="vo-content !text-white">
                Instagram
              </p>
            </div>
          </div>
        </div>
        {isVideoMedia ? (
          <video
            style={{
              width: "100%",
              height: mediaHeight,
              objectFit: "cover",
            }}
            poster={item.thumbnail_url}
          >
            <source src={item.media_url} type="video/mp4" />
          </video>
        ) : (
          <img
            style={{
              width: "100%",
              height: mediaHeight,
              objectFit: "cover",
            }}
            src={item.media_url}
            alt={`Image ${item.id}`}
          />
        )}
      </div>
    </a>
  );
};
const GetInspired: React.FC<any> = ({ locale }) => {
  const swiperRef = useRef<any | null>(null);

  const [instaItems, setInstaItems] = useState<InstaItem[]>(
    [],
  );
  const user_id = process.env.NEXT_PUBLIC_INSTAGRAM_USER_ID;
  const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;
  const instaUrl = `https://graph.instagram.com/${user_id}/media?fields=id,media_url,permalink&access_token=${accessToken}`;

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const res = await fetch(instaUrl);
        const data: InstaResponse = await res.json();
        setInstaItems(data.data);
      } catch (error) {
        console.error(
          "Error fetching Instagram media:",
          error,
        );
      }
    };

    fetchMedia();
  }, [instaUrl]);
  const handleVideoClick = (
    event: React.MouseEvent<HTMLVideoElement, MouseEvent>,
  ) => {
    const videoElement = event.currentTarget;
    videoElement.controls = true;
    videoElement.play();
  };

  function chunkArray<T>(array: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }

  return (
    <section className="mb-[80px] lg:mb-[60px] md:mb-[50px] ">
      <ScreenContainer>
        <SimpleHeadingandText
          data={{
            title: "Get inspired",
          }}
        />
        {/* desktop view */}
        <div className="mt-[50px] flex justify-between md:hidden">
          {chunkArray(instaItems.slice(0, 6), 2).map(
            (chunk, colIndex) => (
              <div
                key={colIndex}
                className="flex w-[32.5%] flex-col gap-[20px]"
              >
                {chunk.map((item, index) => (
                  <InstaFeedItem
                    key={item.id}
                    item={item}
                    index={index}
                    colIndex={colIndex}
                    locale={locale}
                  />
                ))}
              </div>
            ),
          )}
        </div>
        {/* mobile and tablet */}
        <div className="flex hidden  justify-between md:mt-[40px] md:block sm:mt-[30px]">
          <Swiper
            spaceBetween={20}
            slidesPerView={"auto"}
            onSlideChange={() =>{}
            }
            onSwiper={(swiper) =>
              (swiperRef.current = swiper)
            }
            navigation={false}
          >
            {instaItems.map((item: any, index: number) => (
              <SwiperSlide
                key={index}
                className=" md:!h-[314px] md:!w-[314px] sm:!h-[240px] sm:!w-[250px]"
              >
                 <a
      key={index}
      href={item?.permalink}
      target="_blank"
      rel="noopener noreferrer"
    >
                <div
                  className="relative flex flex-col gap-[30px] gradient"
                >
                  <div
                    className={`absolute bottom-[30px] ${locale === "en" ? "left-[20px]" : "right-[20px]"}  flex gap-[14px] z-[9999]`}
                  >
                    <img
                      src="/assets/images/insta-feed-logo.svg"
                      width={40}
                      height={40}
                      alt="insta-feed-logo"
                    />
                    <div className="flex flex-col justify-center">
                      <p className="vo-content !text-white ">
                        visitoman_om
                      </p>
                      <p className="vo-content !text-white ">
                        Instagram
                      </p>
                    </div>
                  </div>
                  {isVideo(item.media_url) ? (
                    <a
                      href={item?.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <video
                        style={{
                          // width: "314px",
                          // height:"314px",
                          objectFit: "cover",
                          // borderRadius: "8px",
                        }}
                        className="md:h-[314px] md:w-[314px] sm:h-[240px] sm:w-[250px]"
                        poster={item.thumbnail_url}

                        // onClick={handleVideoClick}
                      >
                        <source
                          src={item.media_url}
                          type="video/mp4"
                        />
                      </video>
                    </a>
                  ) : (
                    <a
                      href={item?.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        style={{
                          // width: "314px",
                          // height:"314px",
                          objectFit: "cover",
                          // borderRadius: "8px",
                        }}
                        className="md:h-[314px] md:w-[314px] sm:h-[240px] sm:w-[250px]"
                        src={item.media_url}
                        alt={`Image ${item.id}`}
                      />
                    </a>
                  )}
                </div></a>
                {/* <VisitOmanCard data={item} key={index} /> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ScreenContainer>
    </section>
  );
};

export default GetInspired;

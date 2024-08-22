"use client";
const HomeBanner = () => {
  return (
    <section className="relative mb-[80px] flex h-[820px] w-full items-end justify-center bg-footerBg lg:mb-[60px] lg:h-[450px] md:mb-[50px] md:h-[600px] ">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 h-full w-full object-cover"
      >
        <source
          src="https://visitoman.s3.me-south-1.amazonaws.com/home_banner_video_1_7bccb213db.mp4"
          type="video/mp4"
        />
      </video>
      <button className="vo-primary-btn mb-[60px]">
        <span>
          Book Now
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 36.1 25.8"
            enable-background="new 0 0 36.1 25.8"
            xmlSpace="preserve"
          >
            <g>
              <line
                fill="none"
                stroke="#FFFFFF"
                stroke-width="3"
                stroke-miterlimit="10"
                x1="0"
                y1="12.9"
                x2="34"
                y2="12.9"
              ></line>
              <polyline
                fill="none"
                stroke="#FFFFFF"
                stroke-width="3"
                stroke-miterlimit="10"
                points="22.2,1.1 34,12.9 22.2,24.7   "
              ></polyline>
            </g>
          </svg>
        </span>
      </button>
    </section>
  );
};
export default HomeBanner;

import React from "react";
import { ourStoryData } from "../data/ourStoryData";
import { storyquotes } from "../data/ourStoryData";
import { cerealData } from "../data/ourStoryData";
import OurStoryComp from "../components/OurStoryComp";
import { Link } from "react-router-dom";
import HomeInsta from "../components/HomeInsta";

const OurStory = () => {
  return (
    <div className="relative w-full overflow-visible">
      <div id="our-story" className="relative w-full overflow-visible">
        <main role="main" className="relative">
          <section
            className="relative bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(//eleatcereal.com/cdn/shop/files/DSC00853-min-min.jpg?v=1716023830)",
            }}
          >
            <div className="flex flex-col justify-center items-center relative bg-gray-900 opacity-40">
              <div className="absolute left-0 w-full h-full"></div>
              <div className="container mx-auto grid grid-cols-12 gap-x-4 py-17 desktop:py-21 z-10">
                <div className="col-span-12 desktop:col-span-8 desktop:col-start-3 flex flex-col justify-start items-start desktop:items-center">
                  <p className="text-white text-3xl desktop:text-4xl text-center w-full">
                    OUR STORY
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {ourStoryData.map((story, index) => (
        <div
          key={story.id}
          className={`story-section md:py-4 md:px-20 md:flex px-10 ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          {/* Image */}

          <div className="md:px-20 md:w-1/2">
            <img
              src={story.image}
              alt={story.title}
              className=" md:w-full object-cover rounded-lg"
            />
          </div>

          {/* Content (Title & Description) */}
          <div className="w-full md:w-1/2  md:px-20 md:py-4   md:flex md:flex-col justify-center mt-6 md:mt-0">
            <h2 className="text-2xl font-semibold mb-4">{story.title}</h2>
            <p className="text-lg">{story.description}</p>
          </div>
        </div>
      ))}

      {/*  Reviews Section */}
      <section className="homepage-bundle ">
        <div className="relative bg-[#6be3ed] overflow-hidden ">
          <div className="homepage-bundle__contents md:py-13 md:flex flex  md:flex-row justify-center items-center relative">
            <div className="absolute -top-40 desktop:top-0 -left-40 desktop:left-0 -right-40 desktop:right-0 -bottom-40 desktop:bottom-0 flex items-center">
              <img
                src="https://cdn.shopify.com/s/files/1/0612/0852/7092/files/ChocCaramel-Line_c8b283d9-1297-4ebc-afa1-f15a9042929f.png?v=1710947141"
                className="object-center object-fill"
                alt="ChocCaramel Line"
              />
            </div>

            <div className="container mx-auto flex flex-col md:flex-row justify-start md:justify-center items-center md:space-x-6 z-10">
              <p className=" font-bold  text-4xl text-center mt-4 md:text-left  md:mb-0">
                Ready to fuel with ELEAT?
              </p>

              <Link to="/products/5-variety-pack">
                <button className="relative group p-4">
                  <div className="font-medium relative z-10  bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800">
                    SHOP NOW
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div style={{ backgroundColor: "rgb(242, 240, 237)" }}>
        <div className="md:flex md:justify-center md:items-center md:py-20 md:px-20">
          {storyquotes.map((story, index) => (
            <OurStoryComp
              key={index}
              image={story.image}
              name={story.name}
              position={story.position}
              quote={story.quote}
            />
          ))}
        </div>
        <div className="text-center py-10 text-4xl text-bold">
          <h1>Read more...</h1>
        </div>
        <div className=" md:grid  sm:grid-cols-2 md:p-20 p-8 md:grid-cols-3 md:lg:grid-cols-4 gap-8 ">
          {cerealData.map((story, index) => (
            <div key={index} className="col-span-1">
              <Link to={story.linkUrl}>
                <div className="overflow-hidden rounded-lg ">
                  {/* Image Section */}
                  <img
                    data-src={story.imageUrl}
                    className="w-full h-52 object-cover lazyloaded"
                    src={story.imageUrl}
                    alt={story.altText}
                  />

                  {/* Text Section */}
                  <div className=" md:p-10 bg-white hover:bg-black hover:text-white text-bold text-black p-13">
                    <h6 className="mb-4 font-bold  text-complete group-hover:text-black">
                      {story.title}
                    </h6>
                    <p className="text-small-button text-complete group-hover:text-white uppercase py-2 border-b-2 border-blue-300 inline-block font-bold transition-width duration-1000 group-hover:w-28">
                      {story.buttonText}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div
        className="bg-black flex flex-col items-center justify-center h-80 mb-20 
      text-center"
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40.3332 15.034C39.5665 12.7339 38.0331 9.66704 35.9246 7.73468C33.2569 5.10616 29.9027 3.28231 26.2462 2.47209C22.5898 1.66187 18.7791 1.89806 15.2507 3.15359C11.7224 4.40912 8.61903 6.63321 6.29631 9.57104C3.97359 12.5089 2.52544 16.0416 2.11779 19.7644C1.71013 23.4873 2.35945 27.2497 3.99136 30.6205C5.62327 33.9914 8.17175 36.8344 11.3448 38.8237C14.5179 40.8131 18.1872 41.8683 21.9323 41.8686V48.0022C23.2476 47.7872 24.5338 47.4219 25.7658 46.9135"
            stroke="#6BE3ED"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.4661 31.9626C23.4661 29.5363 24.1856 27.1646 25.5335 25.1473C26.8815 23.1299 28.7974 21.5576 31.0389 20.6291C33.2805 19.7006 35.747 19.4577 38.1266 19.931C40.5062 20.4044 42.692 21.5727 44.4076 23.2883C46.1233 25.0039 47.2916 27.1897 47.7649 29.5694C48.2383 31.949 47.9953 34.4155 47.0669 36.6571C46.1384 38.8986 44.566 40.8145 42.5487 42.1624C40.5314 43.5104 38.1596 44.2298 35.7334 44.2298V48.002C35.7334 48.002 29.5998 47.174 28.741 42.0371C27.1139 40.9083 25.7843 39.4024 24.8657 37.648C23.9471 35.8936 23.4669 33.9429 23.4661 31.9626V31.9626Z"
            stroke="#6BE3ED"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <h3 className="display-3 desktop:display-3 text-white font-medium">
          Questions?
        </h3>
        <h6 className="block text-white text-center font-medium">
          We've got the answers
        </h6>

        <a
          className="bg-sky-300 px-5 py-2 text-complete uppercase font-medium w-max mt-4"
          href="/pages/faqs"
        >
          FAQs
        </a>
      </div>

      <HomeInsta />
    </div>
  );
};

export default OurStory;

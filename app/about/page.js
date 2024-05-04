import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-center font-bold mb-4">About Us</h1>
      <p className="text-lg mb-10">
        Welcome to Get Me a Chai! We&apos;re a platform where creators, artists,
        and developers can receive support from their communities in the form of
        virtual cups of chai (or coffee!). Whether you&apos;re an illustrator
        creating stunning artwork, a musician sharing your latest tracks, or a
        developer building useful tools, Get Me a Chai is here to help you
        receive support for your work.
      </p>
      <p className="text-lg mb-4">
        Our mission is to empower creators by providing them with a simple and
        enjoyable way to receive support from their fans and followers. We
        believe in the power of community and collaboration, and we&apos;re excited
        to help creators thrive.
      </p>
      <p className="text-lg mb-4">
        If you enjoy the content or creations you find on Get Me a Chai, consider
        buying the creator a cup of chai as a token of appreciation. Every
        purchase directly supports the creator and encourages them to continue
        doing what they love.
      </p>
      <p className="text-lg">
        Thank you for being a part of the Get Me a Chai community!
      </p>
    </div>
  );
};

export default About;
export const metadata = { 
  title: "About - Get Me A Chai",
};

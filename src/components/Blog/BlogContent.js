import React from "react";
import BlogCard from "./BlogCard";
import blogImage1 from "../../assets/img/blog-1.jpg";
import blogImage2 from "../../assets/img/blog-2.jpg";

export default function BlogContent(props) {
  return (
    <>
      <BlogCard
        mode={props.mode}
        heading="Facebook Gives Advertisers Control Over Placement of Instant Article"
        author="John Doe"
        addedOn="July 12, 2021"
        image={blogImage1}
        description="
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book…"
      />
      <BlogCard
        heading="Google Correlate: The Best SEO Research Tool You Aren’t Using"
        mode={props.mode}
        author="John Doe"
        addedOn="July 12, 2021"
        image={blogImage2}
        description="
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book…"
      />
      <BlogCard
        heading="Instagram Adds Personalized Emoji Shortcuts for Quick Comments"
        mode={props.mode}
        author="John Doe"
        addedOn="July 12, 2021"
        image={blogImage1}
        description="
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book…"
      />
      <BlogCard
        heading="Search Console vs. Google Analytics | Easy Guide for Beginners"
        mode={props.mode}
        author="John Doe"
        addedOn="July 12, 2021"
        image={blogImage2}
        description="
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book…"
      />
      <BlogCard
        heading="Every Digital Assistant You Need to Know & Understand Their Core"
        mode={props.mode}
        author="John Doe"
        addedOn="July 12, 2021"
        image={blogImage1}
        description="
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book…"
      />
      <BlogCard
        heading="Google Search Console Made a Change to Data Calculations as of August 19"
        mode={props.mode}
        author="John Doe"
        addedOn="July 12, 2021"
        image={blogImage2}
        description="
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book…"
      />
    </>
  );
}

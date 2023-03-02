import React from "react";
import Card from "./Card";
import SocialLink from "./SocialLink";
import blogImage1 from "../../assets/img/blog-popular-1.jpg";
import blogImage2 from "../../assets/img/blog-popular-2.jpg";
import PopularPost from "./PopularPost";
import Category from "./Category";

export default function SideContent(props) {
  return (
    <>
      <Card mode={props.mode} heading="PoPular Posts">
        <PopularPost
          image={blogImage1}
          heading="Facebook Gives Advertisers Control Over Placement of Instant Article"
          addedOn="July 12, 2021"
        />
        <PopularPost
          image={blogImage2}
          heading="Instagram Adds Personalized Emoji Shortcuts for Quick Comments"
          addedOn="July 12, 2021"
        />
        <PopularPost
          image={blogImage2}
          heading="Instagram Adds Personalized Emoji Shortcuts for Quick Comments"
          addedOn="July 12, 2021"
        />
      </Card>
      <Card mode={props.mode} heading="Follow Us">
        <ul className="social-icons">
          <SocialLink type="twitter" title="Twitter" />
          <SocialLink type="facebook" title="Facebook" />
          <SocialLink type="instagram" title="Instagram" />
          <SocialLink type="youtube" title="Youtube" />
        </ul>
      </Card>
      <Card mode={props.mode} heading="Categories">
        <ul className="list-group">
          <Category mode={props.mode} name="Editor's Picks" count="6" />
          <Category mode={props.mode} name="Mobile Search" count="7" />
          <Category mode={props.mode} name="SEO News" count="6" />
          <Category mode={props.mode} name="Social Media" count="6" />
        </ul>
      </Card>
    </>
  );
}

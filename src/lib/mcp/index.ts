import { defineMcp } from "@lovable.dev/mcp-js";
import listBlogPosts from "./tools/list-blog-posts";
import listDestinations from "./tools/list-destinations";
import getContactInfo from "./tools/get-contact-info";
import requestTripQuote from "./tools/request-trip-quote";

export default defineMcp({
  name: "sju-luxe-travel-mcp",
  title: "SJU Luxe Travel",
  version: "0.1.0",
  instructions:
    "Tools for SJU Luxe Travel, a bilingual (EN/ES) luxury travel agency based in San Juan, Puerto Rico. Use `list_blog_posts` and `list_destinations` for content, `get_contact_info` for advisor details, and `request_trip_quote` to draft a personalized trip inquiry the traveler can send to the advisor.",
  tools: [listBlogPosts, listDestinations, getContactInfo, requestTripQuote],
});

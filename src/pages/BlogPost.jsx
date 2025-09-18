import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "./Blog";

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundPost = blogPosts.find((p) => p.id === parseInt(id));
      setPost(foundPost);

      if (foundPost) {
        const related = blogPosts
          .filter(
            (p) =>
              p.id !== foundPost.id &&
              (p.category === foundPost.category || !foundPost.category)
          )
          .slice(0, 2);
        setSuggestions(related);
      }
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [id]);

  const parseContent = (content) => {
    if (!content) return null;

    const paragraphs = content.split("\n");
    const elements = [];
    let listItems = [];

    paragraphs.forEach((para, i) => {
      if (!para.trim()) return;

      if (para.startsWith("### ")) {
        elements.push(
          <h2
            key={i}
            className="text-2xl font-bold mt-8 mb-4 text-indigo-800"
          >
            {para.replace("###", "").trim()}
          </h2>
        );
      } else if (para.startsWith("## ")) {
        elements.push(
          <h3
            key={i}
            className="text-xl font-semibold mt-6 mb-3 text-indigo-700"
          >
            {para.replace("##", "").trim()}
          </h3>
        );
      } else if (para.startsWith("# ")) {
        elements.push(
          <h1
            key={i}
            className="text-3xl font-bold mt-10 mb-5 text-indigo-900"
          >
            {para.replace("#", "").trim()}
          </h1>
        );
      } else if (para.startsWith("- ")) {
        listItems.push(
          <li key={i} className="mb-1 text-gray-700">
            {para.replace("-", "").trim()}
          </li>
        );

        if (i === paragraphs.length - 1 || !paragraphs[i + 1].startsWith("- ")) {
          elements.push(
            <ul key={`ul-${i}`} className="list-disc list-inside my-4 pl-5">
              {listItems}
            </ul>
          );
          listItems = [];
        }
      } else if (
        para.trim().startsWith("http") &&
        (para.trim().endsWith(".jpg") ||
          para.trim().endsWith(".png") ||
          para.trim().endsWith(".webp"))
      ) {
        elements.push(
          <div key={i} className="my-8 flex justify-center">
            <img
              src={para.trim()}
              alt="Blog illustration"
              className="rounded-xl shadow-lg max-w-full h-auto"
              loading="lazy"
            />
          </div>
        );
      } else if (para.startsWith("> ")) {
        elements.push(
          <blockquote
            key={i}
            className="border-l-4 border-indigo-400 pl-4 italic my-4 text-gray-600"
          >
            {para.replace(">", "").trim()}
          </blockquote>
        );
      } else {
        elements.push(
          <p key={i} className="my-4 text-gray-700 leading-relaxed">
            {para}
          </p>
        );
      }
    });

    return elements;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="w-16 h-16 bg-indigo-200 rounded-full mb-4 mx-auto"></div>
          <p className="text-gray-600">Loading post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-10">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Post Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The blog post you're looking for doesn't exist or may have been
            moved.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <header
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/20"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">
          <div className="max-w-3xl">
            {post.category && post.category !== "Uncategorized" && (
              <div className="inline-block mb-3 bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                {post.category}
              </div>
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-md">
              {post.title}
            </h1>
          </div>
        </div>

        {/* Back button */}
        <Link
          to="/blog"
          className="absolute top-6 left-6 z-20 inline-flex items-center text-white bg-black/30 hover:bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Blog
        </Link>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        <article className="bg-white rounded-2xl shadow-sm p-6 md:p-8 lg:p-10">
          {/* Content parsing with improved formatting */}
          <div className="prose max-w-none">{parseContent(post.content)}</div>

          {/* Additional detailed content that wasn't in the original post */}
          {post.detailedContent && (
            <div className="mt-12 pt-8 border-t border-gray-100">
              {post.detailedContent.map((section, index) => (
                <div key={index} className="mb-10">
                  <h2 className="text-2xl font-bold mb-4 text-indigo-800">
                    {section.title}
                  </h2>
                  {section.paragraphs.map((para, i) => (
                    <p key={i} className="my-4 text-gray-700 leading-relaxed">
                      {para}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="list-disc list-inside my-4 pl-5">
                      {section.list.map((item, i) => (
                        <li key={i} className="mb-1 text-gray-700">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.image && (
                    <div className="my-8 flex justify-center">
                      <img
                        src={section.image}
                        alt={section.imageAlt || "Destination image"}
                        className="rounded-xl shadow-lg max-w-full h-auto"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-100">
              <h3 className="text-sm font-semibold text-gray-500 mb-3">
                Tags:
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Timeline if available */}
          {post.timeline && post.timeline.length > 0 && (
            <section className="mt-12 pt-8 border-t border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-indigo-700 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Historical Timeline
              </h3>
              <div className="space-y-4 border-l-2 border-indigo-500 ml-3 pl-6">
                {post.timeline.map((event, i) => (
                  <div key={i} className="relative">
                    <span className="absolute -left-3.5 top-1.5 w-4 h-4 bg-indigo-500 rounded-full border-4 border-white shadow"></span>
                    <p className="text-gray-800">
                      <span className="font-semibold text-indigo-700">
                        {event.year}:
                      </span>{" "}
                      {event.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Practical Information Section */}
          {post.practicalInfo && (
            <section className="mt-12 pt-8 border-t border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-indigo-700 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Practical Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {post.practicalInfo.map((info, i) => (
                  <div key={i} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg text-indigo-700 mb-2">
                      {info.title}
                    </h4>
                    <p className="text-gray-700">{info.content}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </article>

        {/* Suggested posts */}
        {suggestions.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-gray-800 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              You might also like
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {suggestions.map((suggestion) => (
                <Link
                  to={`/blog/${suggestion.id}`}
                  key={suggestion.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={suggestion.image}
                      alt={suggestion.title}
                      className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    {suggestion.category && suggestion.category !== "Uncategorized" && (
                      <div className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-semibold px-2 py-1 rounded">
                        {suggestion.category}
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h4 className="font-semibold text-lg group-hover:text-indigo-600 transition-colors mb-2 line-clamp-2">
                      {suggestion.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {suggestion.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back link */}
        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-indigo-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to all articles
          </Link>
        </div>
      </main>
    </div>
  );
}
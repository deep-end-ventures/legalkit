import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/content/blog";
import { FileText, ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — LegalKit | Guides on Privacy Policies, Terms of Service & Compliance",
  description:
    "Practical guides on privacy policies, terms of service, GDPR compliance, and legal documents for startups and small businesses.",
  keywords: [
    "privacy policy guide",
    "terms of service guide",
    "GDPR compliance",
    "legal documents blog",
    "startup legal",
  ],
};

export default function BlogPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FileText className="w-4 h-4" />
            Blog & Guides
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Legal Document Guides for{" "}
            <span className="text-indigo-600">Founders</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Practical, no-nonsense guides on privacy policies, terms of service,
            and compliance. Written for startups and small businesses.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white border border-gray-200 rounded-xl p-6 md:p-8 hover:border-indigo-300 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <span className="inline-flex items-center gap-1 text-indigo-600 font-medium text-sm group-hover:gap-2 transition-all">
                  Read article <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Generate Your Legal Documents?
          </h2>
          <p className="text-gray-600 mb-6">
            Privacy policies, terms of service, cookie policies, refund policies &amp; disclaimers — customized
            for your business in minutes.
          </p>
          <Link
            href="/generate"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
          >
            Generate Free Document →
          </Link>
        </div>
      </section>
    </div>
  );
}

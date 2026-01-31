import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost, getAllSlugs } from "@/content/blog";
import { BlogPostJsonLd } from "@/components/JsonLd";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import EmailCapture from "@/components/EmailCapture";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} — LegalKit`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["LegalKit"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <div className="bg-white">
      <BlogPostJsonLd
        title={post.title}
        description={post.description}
        date={post.date}
        slug={slug}
      />
      {/* Back link */}
      <div className="max-w-3xl mx-auto px-4 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-gray-500 hover:text-indigo-600 text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 py-8">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
          <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-xs font-medium">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
          <span>{post.date}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Content — rendered from the markdown-like string */}
        <div
          className="prose prose-lg prose-gray max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-li:text-gray-700
            prose-a:text-indigo-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900
            prose-table:border-collapse
            prose-th:bg-gray-50 prose-th:p-3 prose-th:text-left prose-th:border prose-th:border-gray-200
            prose-td:p-3 prose-td:border prose-td:border-gray-200
            prose-hr:border-gray-200 prose-hr:my-8"
          dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
        />

        {/* Keywords */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-gray-400" />
            {post.keywords.slice(0, 5).map((kw) => (
              <span
                key={kw}
                className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Email Capture */}
      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <EmailCapture
            source={`blog-${slug}`}
            heading="Never Miss a Compliance Update"
            subtext="Get notified when regulations change and new document templates drop."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Generate Your Legal Documents for Free
          </h2>
          <p className="text-gray-600 mb-6">
            Privacy policies, terms of service, cookie policies, refund policies &amp; disclaimers — customized
            for your business in under 5 minutes.
          </p>
          <Link
            href="/generate"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
          >
            Get Started Free →
          </Link>
        </div>
      </section>
    </div>
  );
}

/**
 * Minimal markdown-to-HTML converter for the blog content.
 * Handles: headings, bold, links, lists, tables, hr, paragraphs.
 */
function markdownToHtml(md: string): string {
  const lines = md.trim().split("\n");
  let html = "";
  let inList = false;
  let inTable = false;
  let tableHeaderDone = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip empty lines (close open blocks)
    if (!trimmed) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      if (inTable) {
        html += "</tbody></table>";
        inTable = false;
        tableHeaderDone = false;
      }
      continue;
    }

    // Headings
    if (trimmed.startsWith("### ")) {
      if (inList) { html += "</ul>"; inList = false; }
      html += `<h3>${inline(trimmed.slice(4))}</h3>`;
      continue;
    }
    if (trimmed.startsWith("## ")) {
      if (inList) { html += "</ul>"; inList = false; }
      html += `<h2>${inline(trimmed.slice(3))}</h2>`;
      continue;
    }

    // Horizontal rule
    if (/^---+$/.test(trimmed)) {
      if (inList) { html += "</ul>"; inList = false; }
      html += "<hr />";
      continue;
    }

    // Table row
    if (trimmed.startsWith("|")) {
      // Separator row (|---|---|)
      if (/^\|[\s-:|]+\|$/.test(trimmed)) {
        tableHeaderDone = true;
        continue;
      }
      const cells = trimmed
        .split("|")
        .filter((c) => c.trim() !== "")
        .map((c) => c.trim());
      if (!inTable) {
        html += '<table><thead><tr>';
        cells.forEach((c) => { html += `<th>${inline(c)}</th>`; });
        html += "</tr></thead><tbody>";
        inTable = true;
        continue;
      }
      html += "<tr>";
      cells.forEach((c) => { html += `<td>${inline(c)}</td>`; });
      html += "</tr>";
      continue;
    }

    // List items
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      if (!inList) {
        html += "<ul>";
        inList = true;
      }
      html += `<li>${inline(trimmed.slice(2))}</li>`;
      continue;
    }

    // Numbered list
    if (/^\d+\.\s/.test(trimmed)) {
      if (!inList) {
        html += "<ol>";
        inList = true;
      }
      html += `<li>${inline(trimmed.replace(/^\d+\.\s/, ""))}</li>`;
      continue;
    }

    // Paragraph
    if (inList) { html += "</ul>"; inList = false; }
    html += `<p>${inline(trimmed)}</p>`;
  }

  if (inList) html += "</ul>";
  if (inTable) html += "</tbody></table>";

  return html;
}

/** Inline formatting: bold, links, inline code */
function inline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    .replace(/`(.+?)`/g, "<code>$1</code>");
}

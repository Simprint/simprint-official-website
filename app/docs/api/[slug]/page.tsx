import { notFound } from 'next/navigation';

import { LOCAL_API_DOCS, LOCAL_API_DOCS_BY_SLUG, LOCAL_API_DOC_GROUPS } from '@/lib/local-api-docs';

export default async function ApiDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = LOCAL_API_DOCS_BY_SLUG[slug];

  if (!doc) {
    notFound();
  }

  const curl = `curl -X ${doc.method} http://127.0.0.1:{port}/api/local${doc.path}
  -H "Content-Type: application/json"
  -H "sp-api-key: YOUR_LOCAL_API_KEY"
  -d '${doc.requestExample}'`;

  return (
    <div className="pt-20">
      <div className="docs-container">
        <aside className="sidebar" id="sidebar">
          {LOCAL_API_DOC_GROUPS.map((group) => {
            const items = LOCAL_API_DOCS.filter((item) => item.category === group.key);
            if (!items.length) {
              return null;
            }
            return (
              <div className="nav-category" key={group.key}>
                <div className="nav-category-title">{group.title.en}</div>
                {items.map((item) => (
                  <a
                    key={item.slug}
                    href={`/docs/api/${item.slug}`}
                    className={`nav-item ${item.slug === slug ? 'active' : ''}`}
                  >
                    <span>{item.path}</span>
                  </a>
                ))}
              </div>
            );
          })}
        </aside>

        <main className="main-content">
          <section className="doc-section" id="api-detail">
          <h1 className="doc-title">
            <span>{doc.path}</span>
          </h1>
          <p className="doc-text">{doc.summary.en}</p>

          <h2 className="doc-subtitle">Overview</h2>
          <table className="doc-table">
            <thead>
              <tr>
                <th>Field</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Method</td>
                <td>{doc.method}</td>
              </tr>
              <tr>
                <td>Path</td>
                <td>
                  <code>{doc.path}</code>
                </td>
              </tr>
            </tbody>
          </table>

          <h2 className="doc-subtitle">Request Body</h2>
          <div className="code-block">
            <code>{doc.requestExample}</code>
          </div>

          <h2 className="doc-subtitle">cURL Example</h2>
          <div className="code-block">
            <code>{curl}</code>
          </div>
          </section>
        </main>
      </div>
    </div>
  );
}

<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="utf-8" indent="yes"/>

  <xsl:template match="/">
    <html>
      <head>
        <title><xsl:value-of select="rss/channel/title"/> — RSS Feed</title>
        <style>
          :root {
            --color-bg: #fafafa;
            --color-fg: #222;
            --color-muted: #666;
            --color-accent: #2563eb;
            --color-border: #e5e7eb;
            --color-bg-alt: #f3f4f6;
            --font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
            --font-serif: 'Merriweather', Georgia, serif;
            --radius: 8px;
            --shadow: 0 1px 3px rgba(0,0,0,0.1);
          }
          @media (prefers-color-scheme: dark) {
            :root {
              --color-bg: #111827;
              --color-fg: #f9fafb;
              --color-muted: #9ca3af;
              --color-accent: #60a5fa;
              --color-border: #374151;
              --color-bg-alt: #1f2937;
            }
          }
          * { box-sizing: border-box; }
          body {
            margin: 0;
            padding: 2rem;
            background: var(--color-bg);
            color: var(--color-fg);
            font-family: var(--font-sans);
            line-height: 1.6;
          }
          .container { max-width: 800px; margin: 0 auto; }
          header {
            text-align: center;
            margin-bottom: 3rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid var(--color-border);
          }
          h1 {
            margin: 0 0 0.5rem;
            font-size: 2rem;
            font-weight: 700;
            letter-spacing: -0.02em;
          }
          .description {
            color: var(--color-muted);
            font-size: 1.1rem;
            margin: 0;
          }
          .feed-link {
            display: inline-block;
            margin-top: 1.5rem;
            padding: 0.5rem 1rem;
            background: var(--color-accent);
            color: white;
            text-decoration: none;
            border-radius: var(--radius);
            font-weight: 500;
            font-size: 0.9rem;
          }
          .feed-link:hover {
            opacity: 0.9;
          }
          .item {
            background: var(--color-bg-alt);
            margin: 1.5rem 0;
            padding: 1.5rem;
            border-radius: var(--radius);
            border: 1px solid var(--color-border);
          }
          .item h2 {
            margin: 0 0 0.5rem;
            font-size: 1.5rem;
            font-weight: 600;
          }
          .item h2 a {
            color: var(--color-fg);
            text-decoration: none;
          }
          .item h2 a:hover {
            text-decoration: underline;
          }
          .item .meta {
            color: var(--color-muted);
            font-size: 0.9rem;
            margin: 0.5rem 0;
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
          }
          .item .meta time {
            font-family: var(--font-sans);
          }
          .item .description {
            color: var(--color-fg);
            margin: 1rem 0;
            line-height: 1.7;
          }
          .item .tags {
            margin-top: 1rem;
          }
          .item .tags span {
            display: inline-block;
            background: var(--color-bg);
            color: var(--color-accent);
            border: 1px solid var(--color-accent);
            border-radius: 3px;
            padding: 0.2rem 0.6rem;
            font-size: 0.8rem;
            margin-right: 0.5rem;
            margin-bottom: 0.5rem;
          }
          footer {
            margin-top: 3rem;
            padding-top: 2rem;
            border-top: 1px solid var(--color-border);
            text-align: center;
            color: var(--color-muted);
            font-size: 0.9rem;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <h1><xsl:value-of select="rss/channel/title"/></h1>
            <p class="description"><xsl:value-of select="rss/channel/description"/></p>
            <a href="{rss/channel/link}" class="feed-link">View Website →</a>
          </header>

          <main>
            <xsl:for-each select="rss/channel/item">
              <div class="item">
                <h2><a>
                  <xsl:attribute name="href"><xsl:value-of select="link"/></xsl:attribute>
                  <xsl:value-of select="title"/>
                </a></h2>
                <div class="meta">
                  <span><xsl:value-of select="pubDate"/></span>
                  <xsl:if test="category">
                    <xsl:for-each select="category">
                      <span><xsl:value-of select="."/></span>
                      <xsl:if test="position() != last()"> · </xsl:if>
                    </xsl:for-each>
                  </xsl:if>
                </div>
                <xsl:if test="description">
                  <div class="description"><xsl:value-of select="description" disable-output-escaping="yes"/></div>
                </xsl:if>
                <xsl:if test="category">
                  <div class="tags">
                    <xsl:for-each select="category">
                      <span><xsl:value-of select="."/></span>
                    </xsl:for-each>
                  </div>
                </xsl:if>
              </div>
            </xsl:for-each>
          </main>

          <footer>
            <p>Feed generated with <a href="https://astro.build">Astro</a>. Subscribe to this feed by copying the URL below:</p>
            <code><xsl:value-of select="rss/channel/link"/></code>
          </footer>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
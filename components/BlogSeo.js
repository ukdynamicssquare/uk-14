import Head from "next/head";
import { BACKEND_URL } from "../helpers/blogClient";

const BlogSeo = ({
  meta_title,
  meta_description,
  meta_image,
  meta_keyword,
  canonicalUrl,
  robots,
  additional_script,
  additional_multiscript,
  // Extra head tags (e.g. font preloads) so the post keeps a single <Head>.
  children,
}) => {

  const absoluteImage = meta_image 
    ? (meta_image.startsWith("http") ? meta_image : `${BACKEND_URL}${meta_image}`)
    : null;
  
  return (
    <Head>
      <title>{meta_title}</title>
      <meta name="description" content={meta_description} />
      {meta_keyword && <meta name="keywords" content={meta_keyword} />}
      
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {robots && <meta name="robots" content={robots} />}
       
      <meta property="og:title" content={meta_title} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:description" content={meta_description} />
      <meta property="og:type" content="article" />
      {absoluteImage && <meta property="og:image" content={absoluteImage} />}
      
      
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={meta_title} />
      <meta property="twitter:description" content={meta_description} />
      {absoluteImage && <meta property="twitter:image" content={absoluteImage} />}

      
      {additional_script && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: typeof additional_script === "string" ? additional_script : JSON.stringify(additional_script),
          }}
        />
      )}

      {additional_multiscript &&
        Array.isArray(additional_multiscript) &&
        additional_multiscript.map((scriptContent, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: typeof scriptContent === "string" ? scriptContent : JSON.stringify(scriptContent),
            }}
          />
        ))}

      {children}
    </Head>
  );
};

export default BlogSeo;

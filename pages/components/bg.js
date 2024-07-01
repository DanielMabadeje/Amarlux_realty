import React from "react";

export default function bg({ entries }) {
  return (
    <div>
      <div className="frame_div">
        <p
          className="  blog_head
 mb-10 mt-20"
        >
          BLOG POST
        </p>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {entries.map((entry) => {
              const { title, thumbnail } = entry.fields;
              const entryId = entry.sys.id; // Get the entry ID
              return (
                <div key={entryId} className="">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      duration: 0.6,
                      delay: 0.2,
                    }}
                    className=""
                  >
                    {" "}
                    <Link href={`/blog/${entryId}`}>
                      <div>
                        {" "}
                        {/* Use a div wrapper instead of <a> */}
                        {thumbnail && (
                          <img
                            src={thumbnail.fields.file.url}
                            alt={title}
                            className="blog_thumbnail"
                          />
                        )}
                        <h3 className="blog_title text-xl font-bold">
                          {title}
                        </h3>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const entries = await fetchEntries();
  return {
    props: {
      entries,
    },
  };
}

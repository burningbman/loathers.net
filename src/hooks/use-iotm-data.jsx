import { graphql, useStaticQuery } from "gatsby";

// This is using an "allMdx" instead of an "allFiles" -- if you instead
// wanted to grab all of your filenames or something, that is available 
// to you as an option (albeit an unnecessary one). 

// Remember to name all queries so you can use the auto-generated type.

export const useIOTMData = () => {
    const data = useStaticQuery(graphql`
        query AnalysisData {
            allMdx(filter: {frontmatter:{section:{eq:"analysis"}}}, sort:{frontmatter:{date: DESC}}) {
                nodes {
                    frontmatter {
                        date(formatString: "MMMM D, YYYY")
                        title
                        slug
                    }
                    id
                    excerpt
                }
            }
        }
    `
    )

    return data
}
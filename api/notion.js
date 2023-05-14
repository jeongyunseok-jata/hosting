export async function getServerSideProps() {

    const NOTION_API_KEY = "secret_t0hTpRpMpo7zye8pG85bnmR6bVjvzBZu7CH2C1kwWp";
    const NOTION_DATABASE_ID = "23aacae7d6ab4a63bb5d510219784123";
    
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Notion-Version': '2022-06-28',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${NOTION_API_KEY}`
        },
        body: JSON.stringify({
            sorts: [
                {
                    "property": "name",
                    "direction": "ascending"
                }
            ],
        })
      };

    const res = await fetch(`https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`, options)

    const projects = await res.json()
    return {
      props: {projects},
    }
}

export default getServerSideProps
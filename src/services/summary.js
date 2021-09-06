const SUMMARY_BY_ID = (id) => ({
  query: `
      query MyQuery ($id : Int!){
        wealthSummary_by_pk(id: $id){
          id
          cdi
          gain
          hasHistory
          profitability
          total
        }
      }
    `,
  variables: { id },
})

const { REACT_APP_API_URL, REACT_APP_SECRET } = process.env

export const fetchSummary = (clientId) =>
  fetch(REACT_APP_API_URL, {
    method: "POST",
    headers: {
      "x-hasura-admin-secret": REACT_APP_SECRET,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(SUMMARY_BY_ID(clientId.toString())),
  }).then((response) => response.json())

const ALL_USERS_SUMMARY = {
  query: `
    query WealthSummary {
      wealthSummary {
        id
      }
    }
  `,
}

const { REACT_APP_API_URL, REACT_APP_SECRET } = process.env

export const fetchAllUsersSummary = () =>
  fetch(REACT_APP_API_URL, {
    method: "POST",
    headers: {
      "x-hasura-admin-secret": REACT_APP_SECRET,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ALL_USERS_SUMMARY),
  }).then((response) => response.json())

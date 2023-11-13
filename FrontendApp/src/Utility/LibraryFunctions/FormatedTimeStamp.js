import moment from "moment";

// Helper function to format timestamp


function formatTimestamp(dateTime) {
     // Format the local dateTime as needed using Moment.js
  return moment(dateTime).format("YYYY-MM-DD HH:mm:ss");
  }

export { formatTimestamp };

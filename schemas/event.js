export default {
  name: "event",
  title: "WoW Connect Events",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Event Title",
      type: "string",
    },
    {
      name: "date",
      title: "Date",
      type: "string",
    },
    {
      name: "time",
      title: "Time",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "body",
      title: "Event Description",
      type: "blockContent",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: false,
    },
  ],

  orderings: [
    {
      title: "Manual order",
      name: "manualOrder",
      by: [{ field: "order", direction: "asc" }],
    },
  ],

  preview: {
    select: {
      title: "title",
      date: "date",
    },
  },
};

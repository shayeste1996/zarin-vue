import instance from "@/axiosInstance";

export default {
  data() {
    return {
      fields: ["شناسه", "عنوان", "age"],

      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" },
      ],
    };
  },
  methods: {
    getTicketLists() {
      return instance
        .post("/api/v4/graphql", {
          query:
            "     query getTickets($id:ID,$offset:Int,$limit:Int) {       resource: Tickets(id:$id, offset:$offset, limit:$limit, pagination:true ) {         id         status         title         updated_at         feedback_type       }       pagination:Pagination{         name         limit         last_page       }      }",
          variables: { offset: 0, limit: 24 },
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
  created() {
    this.getTicketLists();
  },
};

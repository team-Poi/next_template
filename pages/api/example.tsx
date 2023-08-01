import API from "@/utils/api";

export default API({
  GET: (req, res) => {
    res.send({
      type: "SUCCESS",
      data: "You requested with GET method",
    });
  },
});

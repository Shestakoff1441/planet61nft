export const getBlogPostsAPI = async () => {
  try {
    const API = await Prismic.api(
      "https://prismic-app-first.prismic.io/api/v2"
    );
    const response = await API.query(Prismic.Predicates.at("data", "rarity"), {
      orderings: "*"
    });
    return response;
  } catch (error) {
    return error;
  }
};

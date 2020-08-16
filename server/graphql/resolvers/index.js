// Mutations in GraphQL are the way we modify data in the server.
// All our mutations will be inside our resolvers folder
import { mergeResolvers } from "merge-graphql-schemas";
import User from "./User/";

const resolvers = [User];

export default mergeResolvers(resolvers);
